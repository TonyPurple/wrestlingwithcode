interface SearchInfoProps {
  isLoading: boolean;
  hasMorePosts: boolean;
  isSearching: boolean;
}

const SearchInfo = ({
  isLoading,
  hasMorePosts,
  isSearching,
}: SearchInfoProps) => {
  if (isLoading && !isSearching) {
    return <div className="text-center py-8 text-gray-500">Loading...</div>;
  }

  if (!hasMorePosts && !isSearching) {
    return (
      <div className="text-center py-8 text-gray-500">
        You have reached the end of the list.
      </div>
    );
  }

  return null;
};

export default SearchInfo;
