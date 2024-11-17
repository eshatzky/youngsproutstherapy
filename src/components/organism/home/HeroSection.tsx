import Text from "@/components/atom/Text";
import Title from "@/components/atom/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-[393px] h-full lg:min-h-[740px] flex items-center w-full overflow-hidden py-6">
        <Image
          src={"/images/homebg.webp"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero_bg"
        />

        <section className="max-w-[1440px] mx-auto ~px-5/10 z-40 w-full flex flex-col gap-14 lg:gap-24">
          <div className="flex flex-col gap-[18px]">
            <Title size="big" type="h1" className="flex flex-col ~text-xl/6xl">
              <span className="~text-xl/5xl font-medium">
                Expert{" "}
                <strong className="text-primary">
                  Child, Teen, and Family
                </strong>
              </span>
              Therapy in Vaughan
            </Title>
            <Text
              size="medium"
              className="~text-base/2xl font-normal text-[#91818A]"
            >
              Supporting Growth Through Psychotherapy and Counselling
            </Text>
            <Text size="medium" className="~text-base/lg font-normal ">
              Supporting Families in Vaughan and Thornhill with Personalized,
              Evidence-Based Therapy
            </Text>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 w-full z-20">
            <Button variant={"default"} className="lg:max-w-[260px] w-full">
              Get Started
            </Button>
            <Link href={"/#book-consultation"}>
              <Button variant={"outline"} className="lg:max-w-[260px] w-full">
                Schedule a Free Consult
              </Button>
            </Link>
          </div>
          <Image
            src={"/svg/wave.svg"}
            width={1600}
            height={1200}
            alt="wave"
            className="w-full absolute -bottom-16 lg:-bottom-[72%] left-0 right-0 z-10"
          />
        </section>
      </section>
    </>
  );
}
