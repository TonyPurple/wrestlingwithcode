import ErrorPage from "next/error";

type Props = {
  statusCode?: number;
};

const ErrorState: React.FC<Props> = ({ statusCode = 404 }) => {
  return <ErrorPage statusCode={statusCode} />;
};

export default ErrorState;
