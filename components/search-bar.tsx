import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Search, X } from "lucide-react";
import debounce from "lodash/debounce";
import axios from "axios";
import { PostType } from "../interfaces/post";

interface SearchBarProps {
  id?: string;
  onChange: (filteredPosts: PostType[], searchTerm: string) => void;
  onClear: () => void;
}

export interface SearchBarHandle {
  focus: () => void;
  blur: () => void;
  clear: () => void;
}

const SearchBar = forwardRef<SearchBarHandle, SearchBarProps>(
  ({ id, onChange, onClear }, ref) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => {
        setSearchTerm("");
      },
    }));

    const debouncedSearch = useCallback(
      debounce(async (term: string) => {
        if (term.trim() === "") {
          onChange([], term);
          setIsSearching(false);
          return;
        }
        setIsSearching(true);
        try {
          const response = await axios.get("/api/search", {
            params: { q: term },
          });
          onChange(response.data, term);
        } catch (error) {
          console.error("Error searching posts:", error);
          onChange([], term);
        } finally {
          setIsSearching(false);
        }
      }, 300),
      [onChange]
    );

    const handleSearch = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        debouncedSearch(term);
      },
      [debouncedSearch]
    );

    const handleClear = useCallback(() => {
      setSearchTerm("");
      onClear();
    }, [onClear]);

    return (
      <div>
        <div className="relative">
          <input
            id={id}
            ref={inputRef}
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          {searchTerm && (
            <button
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>
        {isSearching && (
          <div className="text-center py-4 text-gray-500">Searching...</div>
        )}
      </div>
    );
  }
);

export default SearchBar;
