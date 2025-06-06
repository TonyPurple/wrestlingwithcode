import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

interface CoverImageProps {
  title: string;
  src: string;
  slug?: string;
  priority?: boolean;
}

const CoverImage = ({
  title,
  src,
  slug,
  priority = true,
}: CoverImageProps) => {
  const image = (
    <div className="relative">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn("shadow-sm w-full shadow-indigo-500/50", {
          "hover:shadow-lg transition-shadow duration-200": slug,
        })}
        width={2000}
        height={1000}
        priority={priority}
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300",
          { "group-hover:opacity-100": slug }
        )}
      />
    </div>
  );

  return (
    <div className={cn("relative", { group: slug })}>
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
