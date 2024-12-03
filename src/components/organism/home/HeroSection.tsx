import Text from "@/components/atom/Text";
import Title from "@/components/atom/Title";
import { ContactDialog } from "@/components/molecules/home/contact-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-[393px] h-full lg:min-h-[80vh] flex items-center w-full overflow-hidden py-6">
        <Image
          src={"/images/homebg.webp"}
          layout="fill"
          objectFit="cover"
          priority={true}
          decoding="async"
          quality={85}
          objectPosition="center"
          alt="hero_bg"
          className="max-lg:hidden"
        />
        <Image
          src={"/images/mobilehero.webp"}
          layout="fill"
          objectFit="cover"
          priority={true}
          decoding="async"
          quality={85}
          objectPosition="center"
          alt="hero_bg"
          className="lg:hidden rotate-180"
        />
        <section className="max-w-[1440px] mx-auto ~px-4/10 z-40 w-full flex flex-col gap-8 lg:gap-16">
          <>
            <div className="homeGradient max-sm:px-1.5 max-sm:py-3.5 flex flex-col gap-[18px]">
              <Title
                size="big"
                type="h1"
                className="flex flex-col ~text-xl/6xl max-sm:text-white"
              >
                <span className="~text-xl/5xl font-medium max-sm:text-white">
                  Expert{" "}
                  <strong className="text-white sm:text-secondary">
                    Child, Teen, and Family
                  </strong>
                </span>
                Therapy in Vaughan
              </Title>
              <Text
                size="medium"
                className="~text-base/2xl font-normal text-[#482C2C] sm:text-[#91818A]"
              >
                Supporting Growth Through Psychotherapy and Counselling
              </Text>
              <Text
                size="medium"
                className="~text-sm/base font-normal max-sm:text-[#482C2C] max-w-[650px] "
              >
                Supporting Families in Vaughan and Thornhill with Personalized,
                Evidence-Based Therapy
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row max-sm:items-center gap-4 lg:gap-5 w-full z-20">
              <ContactDialog />
              <Link
                href={"/#book-consultation"}
                className="w-full flex max-sm:items-center max-sm:justify-center"
              >
                <Button
                  variant={"outline"}
                  className="max-w-[260px] w-full max-sm:bg-white max-sm:bg-opacity-75"
                >
                  Schedule a Free Consult
                </Button>
              </Link>
            </div>
            <Image
              src={"/svg/wave.svg"}
              width={1600}
              height={1200}
              alt="wave"
              className="w-full absolute -bottom-16 lg:-bottom-[72%] left-0 right-0 z-10 max-lg:hidden"
            />
          </>
        </section>
      </section>
    </>
  );
}
