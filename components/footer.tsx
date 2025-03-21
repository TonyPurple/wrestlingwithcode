import { memo } from "react";
import { SiLinkedin } from "@icons-pack/react-simple-icons";
import Container from "./container";
import Link from "next/link";

interface SocialLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/anthony-vanoni/",
    label: "Connect on LinkedIn",
    icon: <SiLinkedin className="w-6 h-6" />,
  },
];

const SITE_NAME = "Wrestling with Code";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      itemScope
      itemType="http://schema.org/WPFooter"
      className="border-t border-blue-600/10 bg-gradient-to-b from-white to-blue-50/20 dark:from-gray-900 dark:to-gray-900"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between py-16 md:py-20">
          <div className="mb-8 lg:mb-0">
            <Link href="/">
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                {SITE_NAME}
              </h3>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} {SITE_NAME}. All rights reserved.
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center gap-4"
            aria-label="Social links"
          >
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
                <span className="text-sm md:text-base">{label}</span>
              </a>
            ))}
            <a
              href="https://campaigns.eccouncil.org/cyber-career-starter-scholarship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-blue-300"
              aria-label="EC-Council Badge"
            >
              <img
                src="/images/CCT-Badge.png"
                alt="Scholarship Badge"
                className="h-24 md:h-48 w-24 md:w-48 mx-auto"
              />
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default memo(Footer);
