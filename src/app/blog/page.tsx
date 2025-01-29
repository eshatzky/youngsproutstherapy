import { BlogsPage } from "@/components/pages/blogs";
import React, { Suspense } from "react";

type Props = {
  searchParams: {
    page: string;
  };
};

export default async function page({ searchParams }: Props) {
  return (
    <Suspense key={searchParams.page || "1"}>
      <BlogsPage searchParams={searchParams} />
    </Suspense>
  );
}

export const metadata = {
  title: "Young Sprouts Therapy Blog | Insights on Child, Teen & Family Mental Health",
  description:
    "Explore expert insights on child and teen therapy, parenting strategies, and family counselling. Stay informed with resources on anxiety, behaviour, ADHD, and more.",

  openGraph: {
    type: "website",
    url: "https://www.youngsproutstherapy.com/blog",
    title: "Young Sprouts Therapy Blog | Expert Advice on Child & Teen Mental Health",
    description:
      "Stay up to date with the latest articles on child and teen mental health. Learn about therapy approaches, parenting tips, and ways to support emotional well-being.",
    images: "/images/logo.png",
  },

  alternates: {
    canonical: "https://www.youngsproutstherapy.com/blog",
    types: {
      "application/rss+xml": "/blog/rss.xml",
    },
  },
};
