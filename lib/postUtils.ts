import { PostType } from "../interfaces/post";

interface AdjacentPosts {
  previousPost: Partial<PostType> | null;
  nextPost: Partial<PostType> | null;
}

export function getAdjacentPosts(
  posts: Partial<PostType>[],
  currentSlug: string
): AdjacentPosts {
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);

  return {
    previousPost:
      currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
    nextPost: currentIndex > 0 ? posts[currentIndex - 1] : null,
  };
}
