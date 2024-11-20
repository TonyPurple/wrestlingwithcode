import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import type { FullPost, PostType } from "../interfaces/post";
import type Author from "../interfaces/author";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): FullPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const fullPost: FullPost = {
    slug: realSlug,
    title: data.title,
    date: data.date,
    coverImage: data.coverImage,
    author: data.author as Author,
    excerpt: data.excerpt,
    ogImage: data.ogImage,
    content: content,
    plainTextContent: data.plainTextContent ?? null,
  };

  return fullPost;
}

export function getAllPosts(): Partial<PostType>[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => {
      try {
        return getPostBySlug(slug);
      } catch (error) {
        console.error(`Error processing slug ${slug}:`, error);
        return null;
      }
    })
    .filter(
      (post): post is FullPost => post !== null && post !== undefined
    )
    .sort((post1, post2) => {
      if (!post1.date || !post2.date) return 0;
      const date1 = new Date(post1.date as string);
      const date2 = new Date(post2.date as string);
      return date2.getTime() - date1.getTime();
    });
  return posts;
}
