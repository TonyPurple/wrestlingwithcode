import PostPreview from "./post-preview";
import type { PostPreview as PostPreviewType } from '../interfaces/post';

interface Props {
  posts: PostPreviewType[];
  title?: string;
  className?: string;
}

const MoreStories: React.FC<Props> = ({
  posts,
  title = "More Stories",
  className = "",
}) => {
  if (!posts.length) {
    return null;
  }

  return (
    <section
      className={`my-16 ${className}`}
      aria-labelledby="more-stories-title"
    >
      <h2
        id="more-stories-title"
        className="mb-8 text-4xl md:text-5xl lg:text-7xl font-header font-bold tracking-tighter leading-tight transition-all duration-200"
      >
        {title}
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 md:gap-x-16 mb-32"
        role="list"
      >
        {posts.map((post, index) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            priority={index <= 1}
          />
        ))}
      </div>

      {posts.length > 4 && (
        <div className="flex justify-center">
          <button
            className="px-6 py-3 font-body text-lg bg-accent-1 hover:bg-accent-2 transition-colors duration-200 rounded-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top
          </button>
        </div>
      )}
    </section>
  );
};

export default MoreStories;
