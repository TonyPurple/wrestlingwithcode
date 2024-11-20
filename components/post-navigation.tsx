import Link from "next/link";
import SectionSeparator from "./section-separator";
import type { PostType } from "../interfaces/post";

interface PostNavigationProps {
  previousPost?: PostType | null;
  nextPost?: PostType | null;
}

const PostNavigation = ({ previousPost, nextPost }: PostNavigationProps) => {
  return (
    <nav className="border-t border-blue-600/10 pt-16" aria-label="Post navigation">
      <div className="flex justify-between items-center mb-8">
        {previousPost ? (
          <Link
            href={`/posts/${previousPost.slug}`}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            ← Previous Post
          </Link>
        ) : (
          <span />
        )}

        <SectionSeparator className="mx-4 h-px flex-grow bg-gray-300" />

        {nextPost ? (
          <Link
            href={`/posts/${nextPost.slug}`}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            Next Post →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
};

export default PostNavigation;

