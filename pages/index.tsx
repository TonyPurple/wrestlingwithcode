import { useState, useEffect } from "react";
import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import SearchBar from "../components/search-bar";
import SectionSeparator from "../components/section-separator";
import { getAllPosts } from "../lib/api";
import { markdownToPlainText } from "../lib/markdownToHtml";
import Post from "../interfaces/post";

const POSTS_PER_PAGE = 6;

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const hasMorePosts = filteredPosts.length > displayedPosts.length;

  useEffect(() => {
    const initialPosts = filteredPosts.slice(0, POSTS_PER_PAGE);
    setDisplayedPosts(initialPosts);
    setCurrentPage(1);
  }, [filteredPosts]);

  const handleSearch = (filtered: Post[]) => {
    setFilteredPosts(filtered);
    setIsSearching(false);
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilteredPosts(allPosts);
  };

  const loadMorePosts = async () => {
    setIsLoadingMore(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * POSTS_PER_PAGE;

    setDisplayedPosts(filteredPosts.slice(startIndex, endIndex));
    setCurrentPage(nextPage);
    setIsLoadingMore(false);
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
            allPosts={allPosts}
            onChange={handleSearch}
            isSearching={isSearching}
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

        {filteredPosts.length === 0 && searchTerm && !isSearching && (
          <div className="text-center py-8 text-gray-500">
            No posts found for "{searchTerm}"
          </div>
        )}

        {isSearching && (
          <div className="text-center py-4 text-gray-500">Searching...</div>
        )}

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
          <>
            <SectionSeparator className="my-8 border-gray-300" />
            <MoreStories posts={morePosts} />
          </>
        )}

        {hasMorePosts && !isSearching && (
          <>
            <SectionSeparator className="my-8 border-gray-300" />

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
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const rawPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "content",
  ]);

  // Process posts to add plainTextContent for search indexing
  const allPosts = await Promise.all(
    rawPosts.map(async (post) => {
      const plainTextContent = await markdownToPlainText(String(post.content));
      return { ...post, plainTextContent };
    })
  );

  return {
    props: { allPosts },
  };
};
