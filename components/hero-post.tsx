import { memo } from "react";
import Link from "next/link";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import { ArrowRight, Clock } from "lucide-react";
import type Author from "../interfaces/author";

interface HeroPostProps {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  className?: string;
  readingTime?: string;
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  className = "",
  readingTime = "5 min read",
}: HeroPostProps) => {
  const postUrl = `/posts/${slug}`;
  return (
    <article
      className={`group relative ${className}`}
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="author" content={author.name} />
      <div className="relative mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div className="flex flex-col">
          <h3 className="mb-4 text-4xl lg:text-5xl font-bold leading-tight group-hover:text-blue-600 transition-colors duration-200">
            <Link
              as={postUrl}
              href={postUrl}
              className="hover:opacity-80 transition-opacity duration-200"
              itemProp="headline"
            >
              {title}
            </Link>
          </h3>
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={date}>
              <DateFormatter dateString={date} />
            </time>

            {readingTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readingTime}</span>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-4">
          {/* Excerpt */}
          <p
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            itemProp="description"
          >
            {excerpt}
          </p>

          {/* Author & Read More */}
          <div className="flex items-center justify-between pt-4 border-t dark:border-gray-800">
            <Avatar
              name={author.name}
              picture={author.picture}
              className="hover:scale-105 transition-transform duration-200"
            />

            <Link
              href={postUrl}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
            >
              Read More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default memo(HeroPost);
