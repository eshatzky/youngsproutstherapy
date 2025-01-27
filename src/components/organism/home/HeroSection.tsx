import Text from "@/components/atom/Text";
import Title from "@/components/atom/Title";
import { ContactDialog } from "@/components/molecules/home/contact-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="">
      {/* Desktop and Mobile Background Images */}
      <picture>
        {/* Mobile Image */}
        <source
          media="(max-width: 768px)"
          srcSet="/images/mobilebg.webp"
          type="image/webp"
        />
        {/* Desktop Image */}
        <source
          media="(min-width: 769px)"
          srcSet="/images/homebg.webp"
          type="image/webp"
        />
        {/* Fallback Image */}
        {/* <img
          src='/images/homebg.webp'
          alt='Young Sprouts Therapy - Child and Family Therapy in Vaughan'
          fetchPriority='high'
          className='absolute inset-0 w-full h-full object-cover'
          aria-hidden='true'
          loading='eager'
        /> */}
      </picture>
      <div className='bg-[url("/images/homebg.webp")] bg-no-repeat bg-cover md:bg-center relative h-[52vh] md:h-[80vh] ~px-4/10 z-40 w-full flex flex-col justify-center lg:gap-16 max-md:[background-position:calc(100%+210px)_0px]'>
        <div className="container mx-auto space-y-8  max-w-[1440px] ~px-4/10">
          <div className="homeGradient  max-lg:px-1.5 max-lg:py-3.5 flex flex-col gap-[18px]">
            <Title
              size="big"
              type="h1"
              className="flex flex-col ~text-xl/6xl max-lg:text-white"
            >
              <span className="~text-xl/5xl font-medium max-lg:text-white">
                Expert{" "}
                <strong className="text-white lg:text-secondary">
                  Child, Teen, and Family
                </strong>
              </span>
              Therapy in Vaughan
            </Title>
            <Text
              size="medium"
              className="~text-base/2xl font-normal text-[#482C2C] lg:text-[#91818A]"
            >
              Supporting Growth Through Psychotherapy and Counselling
            </Text>
            <Text
              size="medium"
              className="~text-sm/base font-normal max-lg:text-[#482C2C] max-w-[650px]"
            >
              Supporting Families in Vaughan and Thornhill with Personalized,
              Evidence-Based Therapy
            </Text>
          </div>

          <div className="flex flex-col  sm:flex-row max-lg:items-center gap-4 lg:gap-5 w-full z-20">
            <ContactDialog />
            <Link
              aria-label="schedule consultation"
              href="/#book-consultation"
              className="max-sm:w-full flex max-sm:items-center max-lg:justify-center"
            >
              <Button
                aria-label="schedule a free consultation"
                variant="outlineV2"
                className="max-w-[260px] w-full"
              >
                Schedule a Free Consult
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
