import Container from "./container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({}: Props) => {
  return (
    <div className={cn("border-b", "bg-neutral-50 border-indigo-500/50")}>
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            View some of the bootcamp projects that helped get me hired{" "}
            <a
              href={`https://github.com/TonyPurple`}
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              on GitHub.
            </a>
          </>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
