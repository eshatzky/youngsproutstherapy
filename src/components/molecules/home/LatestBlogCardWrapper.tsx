import { Post } from "@/components/types";
import { BlogCard } from "../blog";

type Props = {
  posts: Post[];
};

export function LatestBlogCardWrapper({ posts }: Props) {
  return (
    <section className="grid grid-cols-1 @[468px]/latestBlogs:grid-cols-2 @[864px]/latestBlogs:grid-cols-3 gap-8">
      {posts?.map((post, key) => (
        <BlogCard post={post} key={key} />
      ))}
    </section>
  );
}
