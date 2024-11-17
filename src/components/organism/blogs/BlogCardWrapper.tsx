import { BlogCard } from "@/components/molecules/blog";

export function BlogCardWrapper() {
  return (
    <section className=" w-full">
      <div className="grid grid-cols-1 @[468px]/blog:grid-cols-2 @[864px]/blog:grid-cols-3 gap-x-8 gap-y-6">
        {Array.from({ length: 9 }).map((_, key) => (
          <BlogCard key={key} />
        ))}
      </div>
    </section>
  );
}
