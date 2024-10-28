import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";

interface Props {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  className?: string;
}

const PostHeader: React.FC<Props> = ({
  title,
  coverImage,
  date,
  author,
  className = "",
}) => {
  return (
    <header className={`mb-16 ${className}`} role="banner">
      <PostTitle>{title}</PostTitle>

      <div className="hidden md:block md:mb-12 transition-all duration-200">
        <Avatar name={author.name} picture={author.picture} />
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0 transition-all duration-200">
        <CoverImage title={title} src={coverImage} />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6 transition-all duration-200">
          <Avatar name={author.name} picture={author.picture} />
        </div>

        <div className="mb-6 text-lg font-body transition-all duration-200">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
