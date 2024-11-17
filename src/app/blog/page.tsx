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
  title: "Young Sprouts | Child, Teen & Family Therapy Blog in Vaugha",
  description:
    "Explore our blog for resources on child and teen therapy, family counselling, and parenting strategies. Find tips on topics like anxiety and behaviour in kids.",

  openGraph: {
    type: "website",
    url: "https://www.youngsproutstherapy.com/blog",
    title: "Young Sprouts Therapy | Child, Teen & Family Therapy | Vaughan",
    description:
      "Psychotherapy and counseling for kids & teens in Vaughan. Find support for kids & teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    images: "/images/logo.png",
  },

  alternates: {
    canonical: "https://www.youngsproutstherapy.com/blog",
    types: {
      "application/rss+xml": "/blog/rss.xml",
    },
  },
};
