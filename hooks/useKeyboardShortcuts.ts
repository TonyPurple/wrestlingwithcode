import { useEffect } from "react";

export function useKeyboardShortcuts(handleClear: () => void) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.getElementById("search-posts");
        searchInput?.focus();
      }
      if (e.key === "Escape") {
        handleClear();
        const searchInput = document.getElementById(
          "search-posts"
        ) as HTMLInputElement;
        if (searchInput) {
          searchInput.value = "";
          searchInput.blur();
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleClear]);
}
