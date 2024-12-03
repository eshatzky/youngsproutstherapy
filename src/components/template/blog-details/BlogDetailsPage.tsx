import { Post } from "@/components/types";
import { urlForImage } from "@/lib/image";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PortableText } from "@/lib/portabletext";
import Link from "next/link";
// import { PostComment } from "@/components/organism/blogs/blog-details";

type Props = {
  post: Post;
};

export function BlogDetailsPage({ post }: Props) {
  const slug = post?.slug;

  if (!slug) {
    notFound();
  }
  const imageProps = post?.mainImage ? urlForImage(post?.mainImage) : null;

  const AuthorimageProps = post?.author?.avatar
    ? urlForImage(post.author.avatar)
    : null;

  return (
    <section className="max-w-[1440px] mx-auto w-full ~px-4/10 ~pt-16/28 pb-16 flex flex-col gap-10">
      <article className="">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#232536] font-medium ~text-2xl/4xl ">
            {post.title}
          </h1>

          <div className="flex flex-col gap-5 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                {AuthorimageProps ? (
                  <Image
                    src={AuthorimageProps.src}
                    alt={post?.author?.name}
                    className="rounded-full object-cover"
                    fill
                    sizes="40px"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                )}
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-800 dark:text-gray-400 text-sm font-medium">
                  By{" "}
                  <span className="text-[#592EA9] text-sm font-medium">
                    {post.author.name}
                  </span>
                </p>
                <div className="flex items-center space-x-2 text-sm font-medium">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post?.publishedAt || post._createdAt}
                  >
                    {format(
                      parseISO(post?.publishedAt || post._createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                  <span>· {post.estReadingTime || "5"} min read</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[211px] lg:h-[505px] relative ">
              {imageProps && (
                <Image
                  src={imageProps.src}
                  alt={post.mainImage?.alt || "Thumbnail"}
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL={post.mainImage.blurDataURL}
                  sizes="100vw"
                  className="object-cover w-full"
                />
              )}
            </div>
          </div>
        </div>
      </article>

      <article className="mx-auto max-w-[1181px] w-full ">
        <div className="prose prose-sm lg:prose-lg prose-p:my-0 prose-table:table-fixed prose-thead:text-left prose-thead:!align-top prose-thead:my-0 prose-h1:mb-0 prose-h2:mb-0 prose-h3:mb-0 prose-h4:mb-0 prose-h5:mb-0 prose-h6:mb-0  my-3 dark:prose-invert prose-a:text-[#0196AF] !w-full  max-w-[1181px] ">
          {post.body && <PortableText value={post.body} />}
        </div>
        <div className="mb-7 mt-7 flex justify-center">
          <Link
            href="/blog"
            className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-[#0196AF] dark:text-blue-500 "
          >
            ← View all posts
          </Link>
        </div>
      </article>
      {/* <PostComment post={post} /> */}
    </section>
  );
}
