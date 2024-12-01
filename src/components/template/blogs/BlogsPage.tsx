import { HeroSection, BlogSection } from "@/components/organism/blogs";

type Props = {
  searchParams: {
    page: string;
  };
};

export function BlogsPage({ searchParams }: Props) {
  return (
    <section className="max-w-[1440px] mx-auto w-full ~px-4/10 ~py-8/11 flex flex-col gap-[22px] lg:gap-[79px] ">
      <HeroSection />
      <BlogSection searchParams={searchParams} />
    </section>
  );
}
