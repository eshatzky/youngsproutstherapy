import { HeroSection, BlogSection } from "@/components/organism/blogs";

export function BlogsPage() {
  return (
    <section className="max-w-[1440px] mx-auto w-full ~px-5/10 ~py-8/11 flex flex-col gap-[22px] lg:gap-[79px] ">
      <HeroSection />
      <BlogSection />
    </section>
  );
}
