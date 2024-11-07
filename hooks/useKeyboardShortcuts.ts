import { useEffect } from "react";
import { SearchBarHandle } from "../components/search-bar";

export function useKeyboardShortcuts(
  handleClear: () => void,
  searchInputRef: React.RefObject<SearchBarHandle>
) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === "Escape") {
        handleClear();
        searchInputRef.current?.blur();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleClear, searchInputRef]);
}
