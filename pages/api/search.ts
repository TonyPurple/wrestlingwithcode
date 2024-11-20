import { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts } from "../../lib/api";
import { markdownToPlainText } from "../../lib/markdownToHtml";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query;
  const rawPosts = getAllPosts();

  const allPosts = await Promise.all(
    rawPosts.map(async (post: any) => {
      const plainTextContent = await markdownToPlainText(String(post.content));
      return { ...post, plainTextContent };
    })
  );

  const filteredPosts = allPosts.filter((post) => {
    const searchContent = (
      post.title +
      post.excerpt +
      post.plainTextContent
    ).toLowerCase();
    return searchContent.includes(String(q).toLowerCase());
  });

  res.status(200).json(filteredPosts);
};
