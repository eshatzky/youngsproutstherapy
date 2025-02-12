"use client";
import Text from "@/components/atom/Text";
import Title from "@/components/atom/Title";
import { ContactDialog } from "@/components/molecules/home/contact-dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import Image from "next/image";

export function HeroSection() {
  const [isCalLoaded, setIsCalLoaded] = useState(true);
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const cal = await getCalApi({ namespace: "consult" });
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#0196af",
            },
            dark: {
              "cal-brand": "#007acc",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        setIsCalLoaded(true);
      } catch (error) {
        console.error("Failed to load Cal.com API:", error);
      }
    }, 2000); // Delays execution by 2 seconds (2000 ms)

    return () => clearTimeout(timer); // Cleanup function to avoid memory leaks
  }, []);
  return (
    <section className="">
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
      </picture>
      <div className=" max-h-[100vh] max-sm:!max-h-[60vh] bg-no-repeat bg-cover md:bg-center relative h-[52vh] md:h-[80vh] ~px-4/10 z-40 w-full flex flex-col justify-center lg:gap-16">
        <div className="absolute inset-0 z-0 max-sm:max-h-[100svh]">
          <Image
            src="/images/homebg.webp"
            alt="Young Sprouts Therapy - Child and Family Therapy in Vaughan "
            fill
            title="Young Sprouts Therapy - Child and Family Therapy in Vaughan "
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw"
            className="object-cover -z-10  max-md:object-[calc(100%+240px)_0px] max-sm:hidden"
            style={{
              backgroundPosition: "center",
              maxHeight: "100vh",
            }}
          />
          <Image
            src="/images/homebg.webp"
            alt="Young Sprouts Therapy - Child and Family Therapy in Vaughan"
            width={1024}
            height={600}
            title="Young Sprouts Therapy - Child and Family Therapy in Vaughan"
            priority
            fetchPriority="high"
            placeholder="blur"
            blurDataURL="/images/homebg.webp"
            quality={85}
            sizes="(max-width: 768px) 60vw, (min-width: 769px) 100vw"
            className="object-cover -z-10 max-md:object-[calc(100%+290px)_0px] !max-h-[60vh] sm:hidden absolute inset-0 w-full h-full"
            style={{
              backgroundPosition: "center",
              maxHeight: "100vh",
            }}
          />
        </div>
        <div className="container mx-auto space-y-8  max-w-[1440px] z-20 ">
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
              className="~text-base/xl font-medium text-white lg:text-[#91818A]"
            >
              Supporting Growth Through Psychotherapy and Counselling
            </Text>
            <Text
              size="medium"
              className="~text-sm/base font-normal max-lg:text-white max-w-[650px]"
            >
              Supporting Families in Thornhill with Personalized, Evidence-Based
              Therapy
            </Text>
          </div>

          <div className="flex flex-col  sm:flex-row max-lg:items-center gap-4 lg:gap-5 w-full z-20">
            <ContactDialog />
            <div className="max-sm:w-full flex max-sm:items-center max-lg:justify-center">
              {isCalLoaded && (
                <Button
                  variant="outlineV2"
                  className="max-w-[260px] w-full cursor-pointer"
                  aria-label="Schedule a consultation"
                  data-cal-namespace="consult"
                  data-cal-link="youngsproutstherapy/consult"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Schedule a Free Consult
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
