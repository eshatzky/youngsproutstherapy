"use client";

import { Button } from "@/components/ui/button";

export function LongTermGrowth() {
  return (
    <article className="flex flex-col gap-4 lg:items-center lg:justify-center lg:min-h-[589px] h-full">
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
        <Button className="lg:max-w-[270px] w-full">Book a Free Consult</Button>
        <Button variant={"outline"} className="lg:max-w-[270px] w-full">
          Call Now -(647)370-7622
        </Button>
      </div>
    </article>
  );
}
