import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import SearchBar from "../components/search-bar";
import SectionSeparator from "../components/section-separator";
import Post from "../interfaces/post";

export default function Index() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const currentPageRef = useRef(1);
  const isLoadingMoreRef = useRef(false);

  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const loadPosts = useCallback(async () => {
    if (isLoadingMoreRef.current || !hasMorePosts || isSearching) return;

    isLoadingMoreRef.current = true;

    try {
      const response = await axios.get("/api/posts", {
        params: { page: currentPageRef.current },
      });

      const newPosts = response.data.posts;

      setPosts((prevPosts) => {
        const postsSet = new Set(prevPosts.map((post) => post.slug));
        const uniqueNewPosts = newPosts.filter(
          (post) => !postsSet.has(post.slug)
        );
        return [...prevPosts, ...uniqueNewPosts];
      });

      setHasMorePosts(response.data.hasMore);
      currentPageRef.current += 1;
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      isLoadingMoreRef.current = false;
    }
  }, [hasMorePosts, isSearching]);

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Load initial posts on mount

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMorePosts && !isSearching) {
          loadPosts();
        }
      },
      { rootMargin: "100px" }
    );

    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    // Cleanup on unmount
    return () => observer.current?.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMorePosts, isSearching]);

  const handleSearch = (filtered: Post[], term: string) => {
    setSearchResults(filtered);
    setSearchTerm(term);
    setIsSearching(term.trim() !== "");
  };

  const handleClear = () => {
    setSearchTerm("");
    setSearchResults([]);
    setIsSearching(false);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.getElementById("search-posts");
        if (searchInput) {
          searchInput.focus();
        }
      }
      if (e.key !== "Escape") {
        return;
      }
      handleClear();
      const searchInput = document.getElementById(
        "search-posts"
      ) as HTMLInputElement;
      if (searchInput) {
        searchInput.value = "";
        searchInput.blur();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

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
