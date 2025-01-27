import { Post } from "@/components/types";
import { urlForImage } from "@/lib/image";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";

type Props = {
  post: Post;
};

export function BlogCard({ post }: Props) {
  const imageProps =
    post && post?.mainImage ? urlForImage(post.mainImage) : null;

  return (
    <div className="flex flex-col ~gap-4/8 group ">
      <Link
        aria-label={post.slug.current}
        className={cn("relative block overflow-hidden ")}
        href={`/blog/${post.slug.current}`}
      >
        {imageProps ? (
          <Image
            src={imageProps.src}
            {...(post.mainImage.blurDataURL && {
              placeholder: "blur",
              blurDataURL: post.mainImage.blurDataURL,
            })}
            alt={post.mainImage.alt || "Thumbnail"}
            priority={false}
            className="object-cover h-[255px] @[468px]/blog:h-[318px] transition-all w-full aspect-auto group-hover:scale-[1.02]  group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out"
            width={800}
            height={600}
            sizes="(max-width: 768px) 30vw, 33vw"
          />
        ) : (
          <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </span>
        )}
      </Link>

      <Link
        aria-label={post.slug.current}
        href={`/blog/${post.slug.current}`}
        className="flex flex-col gap-4"
      >
        <p className="flex items-center gap-2 text-sm leading-5 font-medium">
          By{" "}
          <span className="text-[#592EA9] font-medium">
            {post.author.name || ""}
          </span>{" "}
          |{" "}
          <time
            className="truncate text-sm font-medium"
            dateTime={post?.publishedAt || post._createdAt}
          >
            {format(
              parseISO(post?.publishedAt || post._createdAt),
              "MMMM dd, yyyy"
            )}
          </time>
        </p>
        <div className="flex flex-col gap-4">
          <h3 className="line-clamp-2 text-[#232536] leading-6 text-lg font-medium  ">
            {post.title}
          </h3>
          <p className="text-[#232536] text-opacity-70 font-normal leading-6 line-clamp-3">
            {post?.excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
}
