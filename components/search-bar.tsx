import React, { useState, useCallback } from "react";
import { Search, X } from "lucide-react";
import debounce from "lodash/debounce";
import Post from "../interfaces/post";

interface SearchBarProps {
  id?: string;
  value: string;
  allPosts: Post[];
  onChange: (filteredPosts: Post[]) => void;
  isSearching?: boolean;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  id,
  value,
  allPosts,
  onChange,
  isSearching,
  onClear,
}) => {
  const [searchTerm, setSearchTerm] = useState(value);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      const filtered =
        term.trim() === ""
          ? []
          : allPosts.filter(
              (post) =>
                post.title.toLowerCase().includes(term.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(term.toLowerCase()) ||
                post.plainTextContent.toLowerCase().includes(term.toLowerCase())
            );
      onChange(filtered);
    }, 300),
    [allPosts, onChange]
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const handleClear = () => {
    setSearchTerm("");
    onClear();
  };

  return (
    <div className="relative">
      <input
        id={id}
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
      {isSearching && (
        <div className="text-center py-4 text-gray-500">Searching...</div>
      )}
    </div>
  );
};

export default SearchBar;
