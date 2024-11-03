import { useState, useEffect, useCallback } from "react";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import SearchBar from "../components/search-bar";
import debounce from "lodash/debounce";

const POSTS_PER_PAGE = 6; // Number of posts to load each time

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  // State for filtered posts and loading state
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Calculate whether there are more posts to load
  const hasMorePosts = filteredPosts.length > displayedPosts.length;

  // Update displayed posts when filtered posts change
  useEffect(() => {
    const initialPosts = filteredPosts.slice(0, POSTS_PER_PAGE);
    setDisplayedPosts(initialPosts);
    setCurrentPage(1);
  }, [filteredPosts]);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setIsSearching(true);

      const filtered =
        term.trim() === ""
          ? allPosts
          : allPosts.filter(
              (post) =>
                post.title.toLowerCase().includes(term.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(term.toLowerCase()) ||
                (post.author?.name?.toLowerCase() || "").includes(
                  term.toLowerCase()
                )
            );

      setFilteredPosts(filtered);
      setIsSearching(false);
    }, 300),
    [allPosts]
  );

  // Handle search updates
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    debouncedSearch(term);
  };

  // Load more posts
  const loadMorePosts = async () => {
    setIsLoadingMore(true);

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * POSTS_PER_PAGE;

    setDisplayedPosts(filteredPosts.slice(startIndex, endIndex));
    setCurrentPage(nextPage);
    setIsLoadingMore(false);
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.getElementById("search-posts");
        if (searchInput) {
          searchInput.focus();
        }
      }
      if (e.key === "Escape") {
        setSearchTerm("");
        setFilteredPosts(allPosts);
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
  }, [allPosts]);

  if (!allPosts || allPosts.length === 0) {
    return (
      <Layout>
        <Head>
          <title>Wrestling with Code</title>
        </Head>
        <Container>
          <Intro />
          <p>No posts available.</p>
        </Container>
      </Layout>
    );
  }

  const heroPost = displayedPosts[0];
  const morePosts = displayedPosts.slice(1);

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
            isSearching={isSearching}
            onClear={() => {
              setSearchTerm("");
              setFilteredPosts(allPosts);
            }}
          />
          <div className="hidden md:block text-sm text-gray-500 mt-2 text-center">
            Press <kbd className="px-2 py-1 bg-gray-100 rounded">Ctrl K</kbd> to
            search, <kbd className="px-2 py-1 bg-gray-100 rounded">Esc</kbd> to
            clear
          </div>
        </div>
        <Intro />

        {/* No results message */}
        {filteredPosts.length === 0 && searchTerm && !isSearching && (
          <div className="text-center py-8 text-gray-500">
            No posts found for "{searchTerm}"
          </div>
        )}

        {/* Loading state */}
        {isSearching && (
          <div className="text-center py-4 text-gray-500">Searching...</div>
        )}

        {/* Results */}
        {!isSearching && heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}

        {!isSearching && morePosts.length > 0 && (
          <MoreStories posts={morePosts} />
        )}

        {/* Load More Button */}
        {hasMorePosts && !isSearching && (
          <div className="text-center py-8">
            <button
              onClick={loadMorePosts}
              disabled={isLoadingMore}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50"
            >
              {isLoadingMore ? (
                <span>Loading...</span>
              ) : (
                <span>Load More Posts</span>
              )}
            </button>
          </div>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
