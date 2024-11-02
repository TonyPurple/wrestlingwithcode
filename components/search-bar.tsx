import { Search, X } from "lucide-react";

interface SearchBarProps {
  id?: string;
  value: string;
  onChange: (term: string) => void;
  isSearching?: boolean;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  id,
  value,
  onChange,
  isSearching,
  onClear,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type="text"
        placeholder="Search posts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={18}
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
