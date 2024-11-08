import { useRouter } from "next/router";
import Head from "next/head";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import MoreStories from "../../components/more-stories";
import SectionSeparator from "../../components/section-separator";
import PostNavigation from "../../components/post-navigation";
import LoadingState from "../../components/loading-state";
import ErrorState from "../../components/error-state";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";
import { getPostShareUrl } from "../../lib/urlUtils";
import type PostType from "../../interfaces/post";

type Props = {
  post: PostType;
  previousPost: PostType | null;
  nextPost: PostType | null;
  preview?: boolean;
};

export default function Post({ post, previousPost, nextPost, preview }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorState />;
  }

  const adjacentPosts = [previousPost, nextPost].filter(Boolean) as PostType[];

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <LoadingState />
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

                <SectionSeparator className="my-8 border-gray-200" />

                <PostBody content={post.content} />
              </div>
            </article>

            <PostNavigation previousPost={previousPost} nextPost={nextPost} />

            {adjacentPosts.length > 0 && (
              <MoreStories
                posts={adjacentPosts}
                className="md:grid-cols-2 gap-x-16"
                title="Read More"
              />
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

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]).sort((post1, post2) => (post1.date > post2.date ? -1 : 1)); // Newest first

  const currentPostIndex = allPosts.findIndex((p) => p.slug === params.slug);

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
