import Head from "next/head";
import Post from "../interfaces/post";

type PostMetaProps = {
  post: Post;
};

const PostMeta = ({ post }: PostMetaProps) => {
  return (
    <Head>
      <title>{`${post.title} | Wrestling with Code`}</title>
      <meta property="og:image" content={post.ogImage.url} />
      <meta
        property="og:title"
        content={`${post.title} | Wrestling with Code`}
      />
      <meta property="og:description" content={post.excerpt} />
    </Head>
  );
}

export default PostMeta;
