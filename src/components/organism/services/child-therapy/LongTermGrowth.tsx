"use client";

import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

export function LongTermGrowth() {
  const [isCalLoaded, setIsCalLoaded] = useState(true);
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
    <section className="flex flex-col gap-6 max-lg:mt-4 ">
      <h2 className="font-medium ~text-2xl/3xl text-primary">
        Therapy Tailored for Long-term Growth
      </h2>
      <p className="leading-6">
        We understand that every child is unique, which is why we use a
        combination of therapeutic modalities to create a personalized plan.
        Whether your child benefits from traditional talk therapy, play therapy,
        or art therapy, we will tailor our approach to best meet their needs.
        Our therapists also work closely with parents to ensure that progress
        made in therapy is supported at home.
      </p>
      <h2 className="font-medium ~text-2xl/3xl text-primary">
        Book a Child Therapy Session in Vaughan & Thornhill
      </h2>
      <p className="leading-6">
        Are you ready to help your child navigate emotional and behavioural
        challenges? Contact us today to book a session at our Vaughan or
        Thornhill office. We offer both in-person and virtual appointments to
        meet your family’s needs. Fill out our online contact form or schedule a
        free consultation to get started.
      </p>
      <div className="flex flex-col max-lg:items-center lg:flex-row gap-6 mt-4 lg:mt-8 w-full">
        {isCalLoaded && (
          <Button
            className="max-w-[270px] w-full py-3"
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
          className="max-w-[270px] w-full py-3"
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
          <Link href="tel:+(289) 579-4769">Call Now - (289) 579-4769</Link>
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
    </section>
  );
}
