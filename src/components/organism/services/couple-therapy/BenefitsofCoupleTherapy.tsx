"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

export function BenefitsofCoupleTherapy() {
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
          Benefits of Couples Therapy
        </h2>
        <p className="leading-6">
          Couples therapy offers many long-term benefits, helping you and your
          partner build a stronger, healthier relationship. Some of the key
          benefits include:
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
          <p className="text-secondary font-medium">Improved Communication</p>
        </div>
        <p className="leading-6">
          Therapy provides tools to help couples communicate more effectively,
          reducing misunderstandings and fostering greater emotional closeness.
        </p>
        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p className="text-secondary font-medium">
            Restored Trust and Intimacy
          </p>
        </div>
        <p className="leading-6">
          For couples dealing with trust issues or infidelity, therapy helps
          rebuild trust and intimacy, allowing you to move forward in your
          relationship with a renewed sense of connection.
        </p>

        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p className="text-secondary font-medium">
            Conflict Resolution Skills
          </p>
        </div>
        <p className="leading-6">
          Therapy teaches couples how to resolve conflicts in a healthy,
          constructive way, reducing the likelihood of ongoing arguments or
          resentments.
        </p>

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

          <Button asChild variant={"outline"} className="max-w-[270px] w-full">
            <Link href={`tel:(289) 579-4769`}>Call Now - (289) 579-4769</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
