import { useRouter } from "next/router";
import Post from "../interfaces/post";

export function usePost(post: Post | null, preview?: boolean) {
  const router = useRouter();

  const isLoading = router.isFallback;
  const isError = !router.isFallback && !post?.slug;

  return {
    isLoading,
    isError,
  };
}
