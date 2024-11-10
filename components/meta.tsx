import Head from "next/head";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const Meta = ({
  title = "Wrestling With Code | Tony Vanoni",
  description = "Personal blog about software development, coding practices, and technology insights.",
  keywords = "software development, coding, programming, tech blog",
  ogImage = "/assets/blog/authors/default.svg",
  canonicalUrl = "https://wrestlingwithcode.com",
}: MetaProps) => {
  return (
    <Head>
      {/* Essential Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Favicon Configuration */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />

      {/* Microsoft Tile Configuration */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

      {/* Theme Configuration */}
      <meta name="theme-color" content="#000" />

      {/* RSS Feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`RSS Feed for ${title}`}
        href="/feed.xml"
      />
    </Head>
  );
};

export default Meta;
