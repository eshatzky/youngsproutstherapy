"use client";

import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

export function AboutSection() {
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
    <article className="flex flex-col gap-4 lg:items-center lg:justify-center lg:min-h-[589px] h-full max-lg:mt-5">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary max-lg:hidden">
          Helping Kids and Teens Build Social Skills and Emotional Resilience
        </h2>
        <p className="leading-6 max-lg:hidden">
          Relationships are rewarding, but they can also be challenging. Many
          couples experience periods of emotional disconnection, conflict, or
          even infidelity. At Young Sprouts Therapy, we specialize in helping
          couples rebuild trust, improve communication, and restore intimacy.
          Whether you&apos;re facing conflicts about work-life balance,
          emotional disconnection, or long-term relationship strain, our
          licensed therapists are here to help. Our therapy services are
          available both in-person in Vaughan and Thornhill and through virtual
          sessions across Ontario, making it easy to access support regardless
          of location.
        </p>
        <p className="leading-6 lg:hidden">
          Whether you&apos;re facing conflicts about work-life balance,
          emotional disconnection, or long-term relationship strain, our
          licensed therapists are here to help. Our therapy services are
          available both in-person in Vaughan and Thornhill and through virtual
          sessions across Ontario, making it easy to access support regardless
          of location.
        </p>
      </div>

      <div className="flex-col flex lg:flex-row gap-6 w-full mt-6">
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
      </div>
    </article>
  );
}
