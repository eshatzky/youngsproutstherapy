"use client";
import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type data = {
  image: StaticImageData | string;
  title: string;
  description: string;
};

type Props = {
  data: data;
};

export function Banner({ data }: Props) {
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
    <section className="relative lg:min-h-[404px] h-auto rounded-3xl overflow-hidden ">
      <Image
        src={data.image}
        alt={data.title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="w-full -z-20"
        placeholder="blur"
      />
      <div className="flex flex-col gap-9 items-center justify-center ~py-7/12 px-5 z-30">
        <h2 className="text-3xl font-medium text-center text-white">
          {data.title}
        </h2>
        <p className="max-w-[1016px] mx-auto text-center leading-7 text-lg text-white">
          {data.description}
        </p>
        <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-6 z-30">
          {isCalLoaded && (
            <Button
              className="max-w-[270px] w-full bg-white  text-primary hover:text-white font-semibold"
              aria-label="Schedule a consultation"
              data-cal-namespace="consult"
              data-cal-link="youngsproutstherapy/consult"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Free Consult
            </Button>
          )}
          <Button
            asChild
            className="max-w-[270px] w-full  text-white border border-white hover:border-none font-semibold"
            variant={"outline"}
          >
            <Link href="tel:+(289)579-4769">Call Now - (289) 579-4769</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
