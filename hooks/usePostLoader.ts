import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { PostPreview } from "../interfaces/post";

export function usePostLoader() {
  const [posts, setPosts] = useState<PostPreview[]>([]);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const isLoadingMoreRef = useRef(false);
  const hasMorePostsRef = useRef(hasMorePosts);
  const currentPageRef = useRef(1);

  useEffect(() => {
    hasMorePostsRef.current = hasMorePosts;
  }, [hasMorePosts]);

  const loadPosts = useCallback(async () => {
    if (isLoadingMoreRef.current || !hasMorePostsRef.current) return;

    isLoadingMoreRef.current = true;

    try {
      const response = await axios.get("/api/posts", {
        params: { page: currentPageRef.current },
      });

      setPosts((prevPosts) => {
        const existingSlugs = new Set(prevPosts.map((post) => post.slug));
        const uniqueNewPosts = response.data.posts.filter(
          (newPost) => !existingSlugs.has(newPost.slug)
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
  }, []);

  return { posts, loadPosts, hasMorePosts, isLoadingMoreRef };
}
