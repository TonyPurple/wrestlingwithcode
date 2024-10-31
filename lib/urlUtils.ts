export function getPostShareUrl(slug: string): string {
  // Use environment variable if set, otherwise fall back to production domain
  return process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${slug}`
    : `https://wrestlingwithcode.com/posts/${slug}`;
}
