import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import type { PostPreview } from "../interfaces/post";
import type Author from "../interfaces/author";

const postsDirectory = join(process.cwd(), "_posts");

let postCache: PostPreview[] | null = null;

export function initializePostCache(): PostPreview[] {
  if (postCache) {
    return postCache;
  }

  const slugs = fs.readdirSync(postsDirectory);
  postCache = slugs
    .map((slug) => {
      const realSlug = slug.replace(/\.md$/, "");
      const fullPath = join(postsDirectory, `${realSlug}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      const postPreview: PostPreview = {
        slug: realSlug,
        title: data.title,
        date: data.date,
        coverImage: data.coverImage,
        author: data.author as Author,
        excerpt: data.excerpt,
        ogImage: data.ogImage,
      };

      return postPreview;
    })
    .sort((post1, post2) => {
      const date1 = new Date(post1.date);
      const date2 = new Date(post2.date);
      return date2.getTime() - date1.getTime();
    });

  return postCache;
}
