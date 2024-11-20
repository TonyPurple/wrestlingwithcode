import type Author from "./author";

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage?: {
    url: string;
  };
  content: string;
  plainTextContent?: string | null;
};

export type PostPreview = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage?: {
    url: string;
  };
};

export type FullPost = PostPreview & {
  content: string;
  plainTextContent?: string | null;
};
