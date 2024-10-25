import Link from "next/link";

const Header = () => {
  return (
    <header className="py-6 mb-12">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link
          href="/"
          className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
        >
          Wrestling with Code
        </Link>
      </h2>
    </header>
  );
};

export default Header;
