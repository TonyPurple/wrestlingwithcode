import Head from "next/head";
import { useEffect } from "react";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import PostList from "../components/post-list";
import SearchBar from "../components/search-bar";
import SearchInfo from "../components/search-info";
import SectionSeparator from "../components/section-separator";
import { usePostLoader } from "../hooks/usePostLoader";
import { useInfiniteScrollObserver } from "../hooks/useInfiniteScrollObserver";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { useSearch } from "../hooks/useSearch";

export default function Index() {
  const { posts, loadPosts, hasMorePosts, isLoadingMoreRef } = usePostLoader();
  const {
    searchResults,
    isSearching,
    searchTerm,
    handleSearch,
    handleClear,
    searchInputRef,
  } = useSearch();

  const sentinelRef = useInfiniteScrollObserver(
    loadPosts,
    !isSearching && hasMorePosts
  );

  useKeyboardShortcuts(handleClear, searchInputRef);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const displayPosts = isSearching ? searchResults : posts;

  return (
    <Layout>
      <Head>
        <title>Wrestling with Code</title>
      </Head>
      <Container>
        <div className="relative w-full max-w-xl mx-auto mb-8 mt-4">
          <SearchBar
            id="search-posts"
            onChange={handleSearch}
            onClear={handleClear}
            ref={searchInputRef}
          />
          <div className="hidden md:block text-sm text-gray-500 mt-2 text-center">
            Press <kbd className="px-2 py-1 bg-gray-100 rounded">Ctrl K</kbd> to
            search, <kbd className="px-2 py-1 bg-gray-100 rounded">Esc</kbd> to
            clear
          </div>
        </div>

        <SectionSeparator className="my-8 border-gray-300" />
        <Intro />

        <PostList
          posts={displayPosts}
          isSearching={isSearching}
          searchTerm={searchTerm}
        />

        <SearchInfo
          isLoading={isLoadingMoreRef.current}
          hasMorePosts={hasMorePosts}
          isSearching={isSearching}
        />

        {!isSearching && <div ref={sentinelRef} />}
      </Container>
    </Layout>
  );
}
