import Image from "next/image";
import blogheroImage from "/public/blogs/blogheroImage.png";
export function HeroSection() {
  return (
    <div>
      <section className="w-full relative rounded-lg lg:rounded-3xl p-4 overflow-hidden h-full min-h-[216px] lg:min-h-[400px] lg:h-full flex items-center justify-center ">
        <Image
          src={blogheroImage}
          alt="Parenting Counselling in Vaughan & Thornhill"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          className="w-full aspect-auto -z-10"
        />
        <div className="flex flex-col h-full items-center justify-center gap-6 lg:gap-12">
          <header className="flex flex-col gap-2.5 lg:gap-4">
            <h3 className="text-center ~text-sm/2xl font-medium text-white">
              Young Sprouts
            </h3>
            <h1 className="text-center w-full max-w-[820px] mx-auto text-white ~text-2xl/5xl font-bold">
              Blog
            </h1>
          </header>
        </div>
      </section>
    </div>
  );
}
