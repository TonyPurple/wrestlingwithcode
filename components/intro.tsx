import { memo } from "react";
import { Bug, Code2, Hammer, Code, Terminal, Layout } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
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

const FEATURES: Feature[] = [
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: "Debugging",
    description: "Tackling complex coding challenges head-on",
  },
  {
    icon: <Terminal className="w-8 h-8 text-purple-500" />,
    title: "Learning",
    description: "Continuous growth and skill development",
  },
  {
    icon: <Layout className="w-8 h-8 text-green-500" />,
    title: "Creating",
    description: "Building innovative solutions",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const Intro = () => {
  return (
    <section className="relative flex flex-col items-center justify-between mt-16 mb-16 md:mb-12">
      <motion.div
        className="w-full flex flex-col items-center"
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
      >
        <div className="w-full flex flex-col items-center">
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-8"
          >
            <div className="text-center">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Code2 className="w-8 h-8 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">
                  Developer Journal
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {SITE_NAME}
                </span>
              </h1>
            </div>

            <div className="hidden md:flex flex-shrink-0 items-center">
              <div className="relative">
                <Bug className="w-24 h-24 text-gray-200 dark:text-gray-800 absolute -top-4 -left-4 rotate-12 max-w-[80px] max-h-[80px]" />
                <Hammer className="w-16 h-16 text-blue-500 absolute bottom-0 right-0" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6 max-w-2xl">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center">
              {SITE_DESCRIPTION}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 pt-4"
          >
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
            <a
              href="https://www.credly.com/badges/770227f5-3f86-40e0-b07b-a0cfac8769cf/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-blue-300"
              aria-label="Credly Badge"
            >
              <img
                src="/images/credly-badge.png"
                alt="Certification Badge"
                className="h-6 w-6"
              />
            </a>
          </motion.div>
        </div>

        <div className="w-full mt-12 grid md:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default memo(Intro);
