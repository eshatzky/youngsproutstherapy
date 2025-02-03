"use client";
import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";

import { useEffect, useState } from "react";

type About = {
  title: string;
  subtitle: string;
  description: string;
  subDescription: string;
};

type PropsType = {
  props: About;
};

export function AboutSection({ props }: PropsType) {
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
    <section className="flex flex-col gap-6 lg:gap-8">
      <article className="flex flex-col gap-6 ">
        <h2 className="font-medium ~text-lg/3xl text-primary max-lg:hidden">
          {props?.title}
        </h2>
        <p className="leading-6 max-lg:hidden">{props?.description}</p>
      </article>
      <article className="flex flex-col gap-6">
        <h2 className="font-medium ~text-lg/3xl text-primary">
          {props?.subtitle}
        </h2>
        <p className="leading-6 ">{props?.subDescription}</p>
      </article>

      {isCalLoaded && (
        <Button
          className="sm:w-fit text-sm lg:text-base ~px-10/16"
          aria-label="Schedule a consultation"
          data-cal-namespace="consult"
          data-cal-link="youngsproutstherapy/consult"
          data-cal-config='{"layout":"month_view"}'
        >
          Book a Free Consult
        </Button>
      )}
    </section>
  );
}
