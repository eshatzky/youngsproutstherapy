"use client";

import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

export function PracticalParenting() {
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
    <article className="flex flex-col gap-8 lg:gap-12">
      <p className="leading-6 max-lg:hidden">
        We understand that parenting is a day-to-day journey, and we want to
        equip you with tools and strategies that you can use both during and
        after counselling. Our sessions focus on building sustainable parenting
        habits, helping you apply what you’ve learned in real-life situations.
      </p>

      <div className="flex flex-col gap-4 relative">
        <div className="ml-6">
          <h3 className="text-secondary">Real-Life Parenting Tools</h3>
          <p className="leading-6">
            During your sessions, we will explore tailored strategies for
            improving parent-child communication, setting boundaries, and
            fostering emotional growth. Our goal is to provide you with the
            confidence and skills to manage common parenting challenges as they
            arise.
          </p>
        </div>
        <div className="ml-6">
          <h3 className="text-secondary">Continued Growth</h3>
          <p className="leading-6">
            We emphasize the importance of ongoing growth as a parent. By
            attending regular counselling sessions, you’ll continue to develop
            effective parenting skills, work through new challenges, and
            reinforce positive habits. Our therapists are here to support you
            through every phase of your parenting journey.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="144"
          viewBox="0 0 8 144"
          fill="none"
          className="absolute top-2 left-0 max-lg:hidden"
        >
          <line
            x1="4"
            y1="4"
            x2="3.99999"
            y2="142"
            stroke="#B0DEE6"
            strokeWidth="2"
          />
          <circle cx="4" cy="4" r="4" fill="#0196AF" />
          <circle cx="4" cy="140" r="4" fill="#0196AF" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="227"
          viewBox="0 0 9 227"
          fill="none"
          className="absolute top-2 left-0 lg:hidden"
        >
          <line
            x1="4.5"
            y1="4"
            x2="4.49999"
            y2="226"
            stroke="#B0DEE6"
            strokeWidth="2"
          />
          <circle cx="4.5" cy="4" r="4" fill="#0196AF" />
          <circle cx="4.5" cy="223" r="4" fill="#0196AF" />
        </svg>
      </div>
      <p className="leading-6">
        Ready to take the next step towards building a stronger family? Contact
        us today to book a parenting counselling session in Vaughan or
        Thornhill. We offer both in-person and virtual appointments to fit your
        schedule. Fill out our online contact form or schedule a free
        consultation to get started.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
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
    </article>
  );
}
