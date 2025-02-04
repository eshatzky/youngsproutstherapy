"use client";

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

import HeroImage from "/public/services/Parenting Counselling.webp";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

type props = {
  image: StaticImageData | string;
  title: string;
  description?: string;
};

type PropType = {
  props: props;
};

export function HeroSection({ props }: PropType) {
  const [isCalLoaded, setIsCalLoaded] = useState(false);
  useEffect(() => {
    (async function () {
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
    })();
  }, []);
  return (
    <section className="w-full relative rounded-lg lg:rounded-3xl p-4 overflow-hidden h-full min-h-[228px] lg:min-h-[400px] lg:h-full flex items-center justify-center ">
      <Image
        src={props?.image ? props.image : HeroImage}
        alt="Parenting Counselling in Vaughan & Thornhill"
        layout="fill"
        placeholder="blur"
        className="w-full aspect-auto -z-10  object-cover object-top lg:object-center"
      />
      <div className="flex flex-col h-full items-center justify-center gap-6 lg:gap-12">
        <header className="flex flex-col gap-2.5 lg:gap-4">
          <h3 className="text-center ~text-sm/2xl font-medium text-white">
            Young Sprouts
          </h3>
          <h1 className="text-center max-w-[1164px] w-full mx-auto text-white ~text-2xl/4xl font-bold">
            {props?.title}
          </h1>
          {props?.description ? (
            <p className="text-base leading-6 text-center text-white max-w-[807px] mx-auto">
              {props.description}
            </p>
          ) : null}
        </header>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
          {isCalLoaded && (
            <Button
              variant={"default"}
              className="bg-white text-secondary hover:bg-primary hover:text-white border-white hover:border-primary "
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
            variant={"outline"}
            className="border border-white hover:border-primary text-white "
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "conversion", {
                  send_to: "AW-10834730946/BnbgCPymmaUDEMK_s64o",
                  event_category: "Phone Call",
                  event_label: "Click to Call",
                  value: 1,
                });
              }
            }}
          >
            <Link href={`tel:(289) 579-4769`} id="phone-number">
              Call Now - (289) 579-4769
            </Link>
          </Button>
        </div>
      </div>
      {/* Google Ads Call Tracking Script */}
      <Script
        id="google-call-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('config', 'AW-10834730946/BnbgCPymmaUDEMK_s64o', {
              'phone_conversion_number': '(289) 579-4769'
            });
          `,
        }}
      />
    </section>
  );
}
