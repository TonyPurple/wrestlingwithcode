interface AvatarProps {
  name: string;
  picture: string;
  className?: string;
}

const Avatar = ({ name, picture, className = "" }: AvatarProps) => {
  return (
    <div className={`flex items-center group ${className}`}>
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-200" />
        <img
          src={picture}
          className="relative w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-800"
          alt={`Avatar of ${name}`}
        />
      </div>
      <div className="ml-4">
        <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity duration-200">
          {name}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Author</div>
      </div>
    </div>
  );
};

export default Avatar;
