"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { useState, useEffect } from "react";

export function BenefitsTeenTherapy() {
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
    <article className="flex flex-col gap-4 max-lg:mt-5">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          The Benefits of Teen Therapy
        </h2>
        <p className="leading-6">
          Teen therapy at Young Sprouts Therapy provides more than just
          immediate relief from stress and anxiety. We equip teens with the
          skills they need to thrive emotionally, academically, and socially,
          fostering long-term personal growth.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p className="text-primary font-medium">
            Improved Emotional Regulation
          </p>
        </div>
        <p className="leading-6">
          Teens learn to manage overwhelming emotions, reducing emotional
          outbursts and building healthier responses to stress.
        </p>
        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p className="text-primary font-medium">
            Increased Confidence and Self-Esteem
          </p>
        </div>
        <p className="leading-6">
          Through therapy, teens develop a stronger sense of self, learning to
          value their unique strengths and building the confidence to face
          challenges with resilience.
        </p>

        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p className="text-primary font-medium">
            Stronger Communication Skills
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
      </div>
    </article>
  );
}
