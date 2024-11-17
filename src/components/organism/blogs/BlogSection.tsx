import { SearchBar } from "@/components/molecules/blog";
import { BlogCardWrapper } from "./BlogCardWrapper";
import { getPaginatedPosts } from "@/lib/client";
import { Pagination } from "./pagination";
import { Suspense } from "react";

type Props = {
  searchParams: {
    page: string;
  };
};

export async function BlogSection({ searchParams }: Props) {
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;

  const POSTS_PER_PAGE = 9;

  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  const posts = await getPaginatedPosts(params);
  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;
  return (
    <section className="w-full max-w-[1300px] mx-auto flex flex-col gap-7 lg:gap-[34px] @container/blog">
      <Suspense>
        <SearchBar />
      </Suspense>
      <BlogCardWrapper posts={posts} />
      <Pagination
        pageIndex={pageIndex}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </section>
  );
}
