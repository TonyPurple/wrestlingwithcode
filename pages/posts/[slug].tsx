import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import { getPostShareUrl } from "../../lib/urlUtils";
import type PostType from "../../interfaces/post";
import MoreStories from "../../components/more-stories";

type Props = {
  post: PostType;
  previousPost: PostType | null;
  nextPost: PostType | null;
  preview?: boolean;
};

export default function Post({ post, previousPost, nextPost, preview }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  // Only show MoreStories if we have adjacent posts
  const adjacentPosts = [previousPost, nextPost].filter(Boolean) as PostType[];

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <div className="flex items-center justify-center py-20">
            <PostTitle>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Loading...
              </span>
            </PostTitle>
          </div>
        ) : (
          <>
            <article className="mb-16">
              <Head>
                <title>{`${post.title} | Wrestling with Code`}</title>
                <meta property="og:image" content={post.ogImage.url} />
                <meta
                  property="og:title"
                  content={`${post.title} | Wrestling with Code`}
                />
                <meta property="og:description" content={post.excerpt} />
              </Head>

              <div className="space-y-12 md:space-y-16">
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  shareUrl={getPostShareUrl(post.slug)}
                />

                <div className="border-t border-blue-600/10" />

                <PostBody content={post.content} />
              </div>
            </article>

            {adjacentPosts.length > 0 && (
              <nav
                className="border-t border-blue-600/10 pt-16"
                aria-label="Post navigation"
              >
                <div className="flex justify-between items-center mb-8">
                  {previousPost ? (
                    <a
                      href={`/posts/${previousPost.slug}`}
                      className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                      ← Previous Post
                    </a>
                  ) : (
                    <span />
                  )}
                  {nextPost ? (
                    <a
                      href={`/posts/${nextPost.slug}`}
                      className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                      Next Post →
                    </a>
                  ) : (
                    <span />
                  )}
                </div>
                <MoreStories
                  posts={adjacentPosts}
                  className="md:grid-cols-2 gap-x-16"
                  title="Read More"
                />
              </nav>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "excerpt",
  ]);
  const content = await markdownToHtml(
    typeof post.content === "string" ? post.content : ""
  );

  // Get all posts sorted by date
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]).sort((post1, post2) => (post1.date > post2.date ? -1 : 1)); // Newest first

  // Find the index of the current post
  const currentPostIndex = allPosts.findIndex((p) => p.slug === params.slug);

  // Get adjacent posts
  const previousPost =
    currentPostIndex < allPosts.length - 1
      ? allPosts[currentPostIndex + 1]
      : null;
  const nextPost = currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null;

  return {
    props: {
      post: {
        ...post,
        content,
      },
      previousPost,
      nextPost,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
