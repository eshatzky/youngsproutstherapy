import { BlogDetailsPage } from "@/components/pages/blog-details";
import { getPostBySlug } from "@/lib/client";
import { urlForImage } from "@/lib/image";
import { Suspense } from "react";

interface BlogPageType {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPageType) {
  const post = await getPostBySlug(params.slug);
  const url = `https://www.youngsproutstherapy.com/blog/${post?.slug?.current}`;
  const { title, excerpt, mainImage } = post;

  const ogImage = mainImage ? urlForImage(mainImage) : "/images/logo.png";

  if (!ogImage) {
  }

  return {
    metadataBase: new URL(
      process.env.BASE_URL || "https://www.youngsproutstherapy.com/"
    ),
    title: title.includes("Young Sprouts Therapy")
      ? title
      : `Young Sprouts Therapy | ${title}`,
    description: excerpt,

    openGraph: {
      type: "website",
      url,
      title: title.includes("Young Sprouts Therapy")
        ? title
        : `Young Sprouts Therapy | ${title}`,
      description: excerpt,
      images: typeof ogImage === "string" ? ogImage : null,
    },

    alternates: {
      canonical: `https://www.youngsproutstherapy.com/blog/${post?.slug?.current}`,
      types: {
        "application/rss+xml": `/blog/${post?.slug?.current}/rss.xml`,
      },
    },
  };
}

export default async function page({ params }: BlogPageType) {
  const post = await getPostBySlug(params.slug);
  return (
    <Suspense>
      <BlogDetailsPage post={post} />
    </Suspense>
  );
}
