import { memo } from "react";
import { Bug, Code2, Hammer } from "lucide-react";

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SITE_NAME = "Wrestling with Code";
const SITE_DESCRIPTION =
  "Random thoughts, challenges, victories, and occasional submissions in the world of software development.";

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/TonyPurple",
    label: "GitHub",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/anthony-vanoni/",
    label: "LinkedIn",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
];

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

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {SITE_NAME}
          </span>
        </h1>

        <div className="mt-6 flex flex-col gap-3">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {SITE_DESCRIPTION}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 pt-4">
          {SOCIAL_LINKS.map(({ href, label, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-blue-300"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
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

export default memo(Intro);
