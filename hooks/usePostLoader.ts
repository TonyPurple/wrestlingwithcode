import { useCallback, useRef, useState } from "react";
import axios from "axios";
import type Post from "../interfaces/post";

export function usePostLoader() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const isLoadingMoreRef = useRef(false);
  const currentPageRef = useRef(1);

  const loadPosts = useCallback(async () => {
    if (isLoadingMoreRef.current || !hasMorePosts) return;

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
  }, [hasMorePosts]);

  return { posts, loadPosts, hasMorePosts, isLoadingMoreRef };
}
