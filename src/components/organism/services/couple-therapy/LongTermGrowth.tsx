"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

export function LongTermGrowth() {
  const [isCalLoaded, setIsCalLoaded] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "consult" });
        cal("ui", { hideEventTypeDetails: true, layout: "month_view" });
        setIsCalLoaded(true);
      } catch (error) {
        console.error("Failed to load Cal.com API:", error);
      }
    })();
  }, []);
  return (
    <article className="flex flex-col gap-4 lg:items-center lg:justify-center lg:min-h-[589px] h-full max-lg:mt-5 ">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Local Couples Therapy in Vaughan & Thornhill
        </h2>
        <p className="leading-6">
          At Young Sprouts Therapy, we are proud to serve couples in Vaughan,
          Thornhill, Richmond Hill, and surrounding areas. Our local focus
          allows us to provide personalized support that is rooted in your
          community. Whether you&apos;re looking for in-person sessions or
          virtual counselling, we are here to help you and your partner
          strengthen your relationship and find the support you need.
        </p>
      </div>

      <div className="flex-col flex lg:flex-row gap-6 items-center w-full mt-6">
        {isCalLoaded && (
          <Button
            variant={"default"}
            className="max-w-[270px] w-full"
            aria-label="Schedule a consultation"
            data-cal-namespace="consult"
            data-cal-link="youngsproutstherapy/consult"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a Free Consult
          </Button>
        )}

        <Button
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
          asChild
          variant={"outline"}
          className="max-w-[270px] w-full"
        >
          <Link href={`tel:(289) 579-4769`}>Call Now - (289) 579-4769</Link>
        </Button>
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
    </article>
  );
}
