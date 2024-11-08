
import PostTitle from "./post-title";

const LoadingState: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <PostTitle>
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Loading...
        </span>
      </PostTitle>
    </div>
  );
};

export default LoadingState;
