"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LongTermGrowth() {
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
        <Button asChild variant={"default"} className="max-w-[270px] w-full">
          <Link
            href={"https://calendly.com/youngsproutstherapy/15-minute-consult"}
            target="_blank"
          >
            Book a Free Consult
          </Link>
        </Button>

        <Button asChild variant={"outline"} className="max-w-[270px] w-full">
          <Link href={`tel:(647)370-7622`}>Call Now -(647)370-7622</Link>
        </Button>
      </div>
    </article>
  );
}
