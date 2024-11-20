import { useRouter } from "next/router";
import { PostType } from "../interfaces/post";

export function usePost(post: PostType | null, preview?: boolean) {
  const router = useRouter();

  const isLoading = router.isFallback;
  const isError = !router.isFallback && !post?.slug;

  return {
    isLoading,
    isError,
  };
}
