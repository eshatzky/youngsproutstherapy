import { LatestBlogCardWrapper } from "@/components/molecules/home";
import { getLatestThreePosts } from "@/lib/client";

export async function LatestBlogPosts() {
  const posts = await getLatestThreePosts();
  return (
    <section className="max-w-[1440px] mx-auto w-full ~px-4/10 pt-16 ~pb-20/24 border-[#8A969E] flex flex-col ~gap-7/16 @container/latestBlogs ">
      <h2 className="text-3xl font-semibold text-center">
        Latest <span className="text-primary">Blog Posts</span>
      </h2>
      <LatestBlogCardWrapper posts={posts} />
    </section>
  );
}

export const revalidate = 30;
