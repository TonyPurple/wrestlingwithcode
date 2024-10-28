import { Bug, Code2, Hammer } from "lucide-react";

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-16 mb-16 md:mb-12 relative">
      {/* Main Title Group */}
      <div className="flex flex-col w-full md:w-2/3">
        <div className="flex items-center gap-3 mb-4">
          <Code2 className="w-8 h-8 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">
            Developer Journal
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Wrestling with Code
        </h1>

        <div className="mt-6 flex flex-col gap-3">
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            Random thoughts, challenges, victories, and occasional submissions
            in the world of software development.
          </p>
        </div>
      </div>

      {/* Visual Element */}
      <div className="hidden md:flex items-center justify-center w-1/3">
        <div className="relative">
          <Bug className="w-24 h-24 text-gray-200 dark:text-gray-800 absolute -top-4 -left-4 rotate-12" />
          <Hammer className="w-16 h-16 text-blue-500 absolute bottom-0 right-0" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
