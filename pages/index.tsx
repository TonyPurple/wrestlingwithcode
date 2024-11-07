import { useState } from "react";
import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import SearchBar from "../components/search-bar";
import SectionSeparator from "../components/section-separator";
import Post from "../interfaces/post";
import { usePostLoader } from "../hooks/usePostLoader";
import { useInfiniteScrollObserver } from "../hooks/useInfiniteScrollObserver";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";

export default function Index() {
  const { posts, loadPosts, hasMorePosts, isLoadingMoreRef } = usePostLoader();
  const [searchResults, setSearchResults] = useState(posts);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sentinelRef = useInfiniteScrollObserver(
    loadPosts,
    !isSearching && hasMorePosts
  );

  const handleSearch = (filtered: Post[], term: string) => {
    setSearchResults(filtered);
    setSearchTerm(term);
    setIsSearching(term.trim() !== "");
  };

  const handleClear = () => {
    setSearchTerm("");
    setSearchResults(posts);
    setIsSearching(false);
  };

  useKeyboardShortcuts(handleClear);

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
            value={searchTerm}
            onChange={handleSearch}
            onClear={handleClear}
          />
          <div className="hidden md:block text-sm text-gray-500 mt-2 text-center">
            Press <kbd className="px-2 py-1 bg-gray-100 rounded">Ctrl K</kbd> to
            search, <kbd className="px-2 py-1 bg-gray-100 rounded">Esc</kbd> to
            clear
          </div>
        </div>

        <SectionSeparator className="my-8 border-gray-300" />

        <Intro />

        {isSearching && searchTerm && searchResults.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No posts found for "{searchTerm}"
          </div>
        )}

        {!isSearching && displayPosts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No posts available.
          </div>
        )}

        {displayPosts.length > 0 && (
          <>
            <HeroPost
              title={displayPosts[0].title}
              coverImage={displayPosts[0].coverImage}
              date={displayPosts[0].date}
              author={displayPosts[0].author}
              slug={displayPosts[0].slug}
              excerpt={displayPosts[0].excerpt}
            />
            {displayPosts.length > 1 && (
              <>
                <SectionSeparator className="my-8 border-gray-300" />
                <MoreStories posts={displayPosts.slice(1)} />
              </>
            )}
          </>
        )}

        {isLoadingMoreRef.current && !isSearching && (
          <div className="text-center py-8 text-gray-500">Loading...</div>
        )}

        {!isSearching && <div ref={sentinelRef} />}

        {!hasMorePosts && !isSearching && (
          <div className="text-center py-8 text-gray-500">
            You have reached the end of the list.
          </div>
        )}
      </Container>
    </Layout>
  );
}
