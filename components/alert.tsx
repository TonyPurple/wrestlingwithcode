import Container from "./container";
import { SiGithub } from "@icons-pack/react-simple-icons";

type Props = {
  preview?: boolean;
};

const Alert = ({}: Props) => {
  return (
    <div className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 border-b border-blue-600/10">
      <Container>
        <div className="py-3 flex items-center justify-center gap-2">
          <a
            href="https://github.com/TonyPurple"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="w-6 h-6 text-gray-600" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200">
              Meanwhile, on GitHub...
            </span>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
