"use client";

import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
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
    <article className="flex flex-col gap-4 lg:items-center lg:justify-center lg:min-h-[589px] h-full max-lg:mt-5">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Therapy Tailored for Long-term Growth
        </h2>
        <p className="leading-6">
          We believe in creating lasting change through therapy. Our therapists
          use a combination of talk therapy, creative outlets like art therapy,
          and mindfulness practices to develop a personalized plan for each
          teen. This tailored approach ensures that teens not only see
          improvements during therapy but also continue to grow emotionally long
          after their sessions end. Our therapy is designed to provide teens
          with the tools they need to manage future challenges, improve their
          relationships, and maintain their emotional well-being.
        </p>
      </div>

      <div className="flex-col flex lg:flex-row gap-6 items-center w-full mt-6">
        {isCalLoaded && (
          <Button
            className="max-w-[270px] w-full"
            aria-label="Schedule a consultation"
            data-cal-namespace="consult"
            data-cal-link="youngsproutstherapy/consult"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a Free Consult
          </Button>
        )}

        <Button asChild variant={"outline"} className="max-w-[270px] w-full">
          <Link href={`tel:(289) 579-4769`}>Call Now - (289) 579-4769</Link>
        </Button>
      </div>
    </article>
  );
}
