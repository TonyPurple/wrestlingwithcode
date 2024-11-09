import Post from "../interfaces/post";
import HeroPost from "./hero-post";
import MoreStories from "./more-stories";
import SectionSeparator from "./section-separator";

interface PostListProps {
  posts: Post[];
  isSearching: boolean;
  searchTerm?: string;
}

const PostList = ({ posts, isSearching, searchTerm }: PostListProps) => {
  if (posts.length === 0) {
    if (isSearching) {
      return (
        <div className="text-center py-8 text-gray-500">
          No posts found for "{searchTerm}"
        </div>
      );
    }
    return (
      <div className="text-center py-8 text-gray-500">No posts available.</div>
    );
  }

  return (
    <>
      <HeroPost
        title={posts[0].title}
        coverImage={posts[0].coverImage}
        date={posts[0].date}
        author={posts[0].author}
        slug={posts[0].slug}
        excerpt={posts[0].excerpt}
      />
      {posts.length > 1 && (
        <>
          <SectionSeparator className="my-8 border-gray-300" />
          <MoreStories posts={posts.slice(1)} />
        </>
      )}
    </>
  );
};

export default PostList;
