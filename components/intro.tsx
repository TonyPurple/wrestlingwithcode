const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-16 mb-16 md:mb-12 relative">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Wrestling with Code
      </h1>
      <div className="mt-6 flex flex-col gap-3">
        <p className="text-gray-600 dark:text-gray-400 max-w-xl">
          Random thoughts, challenges, victories, and occasional submissions in
          the world of software development.
        </p>
      </div>
    </section>
  );
};

export default Intro;
