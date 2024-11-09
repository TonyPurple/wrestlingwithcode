import { useState, useCallback, useRef } from "react";
import Post from "../interfaces/post";
import { SearchBarHandle } from "../components/search-bar";

export const useSearch = () => {
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef<SearchBarHandle>(null);

  const handleSearch = useCallback((filtered: Post[], term: string) => {
    setSearchResults(filtered);
    setSearchTerm(term);
    setIsSearching(term.trim() !== "");
  }, []);

  const handleClear = useCallback(() => {
    searchInputRef.current?.clear();
    setSearchTerm("");
    setSearchResults([]);
    setIsSearching(false);
  }, []);

  return {
    searchResults,
    isSearching,
    searchTerm,
    handleSearch,
    handleClear,
    searchInputRef,
  };
};
