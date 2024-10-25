import Container from "./container";

const Footer = () => {
  return (
    <footer className="border-t border-blue-600/10 bg-gradient-to-b from-white to-blue-50/20 dark:from-gray-900 dark:to-gray-900">
      <Container>
        <div className="py-16 md:py-20 flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-8 lg:mb-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Wrestling with Code
          </h3>

          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/anthony-vanoni/"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
