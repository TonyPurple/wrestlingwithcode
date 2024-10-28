import markdownStyles from "./markdown-styles.module.css";

interface Props {
  content: string;
  className?: string;
}

const PostBody: React.FC<Props> = ({ content, className = "" }) => {
  return (
    <article className={`max-w-2xl mx-auto my-16 ${className}`} role="article">
      <div
        className={`${markdownStyles["markdown"]} font-body transition-all duration-200`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};

export default PostBody;
