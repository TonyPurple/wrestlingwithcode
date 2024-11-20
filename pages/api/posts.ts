import { NextApiRequest, NextApiResponse } from "next";
import { initializePostCache } from "../../lib/postCache";
import type { PostPreview } from "../../interfaces/post";

const POSTS_PER_PAGE = 6;

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query;
  const pageNum = parseInt(String(page), 10) || 1;

  const allPosts: PostPreview[] = initializePostCache();

  const startIndex = (pageNum - 1) * POSTS_PER_PAGE;
  const endIndex = pageNum * POSTS_PER_PAGE;

  const paginatedPosts = allPosts.slice(startIndex, endIndex);

  res.status(200).json({
    posts: paginatedPosts,
    hasMore: endIndex < allPosts.length,
  });
};
