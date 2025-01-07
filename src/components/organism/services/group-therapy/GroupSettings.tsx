"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function GroupSettings() {
  return (
    <article className="flex flex-col gap-4 max-lg:mt-5">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Art Therapy in Group Settings
        </h2>
        <p className="leading-6">
          For kids and teens who may struggle to express their emotions
          verbally, art therapy offers a creative and non-verbal outlet. In
          group therapy, participants use various art materials to explore their
          feelings, share their experiences, and gain insights into their
          emotional states. Art therapy is especially useful for children and
          teens dealing with trauma, anxiety, or low self-esteem.
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
          <p className="text-secondary font-medium">Benefits of Art Therapy</p>
        </div>
        <p className="leading-6">
          By participating in art-based group therapy, kids and teens can
          express complex emotions in a way that feels safe and supported. Art
          projects encourage creativity, self-reflection, and connection with
          peers, helping them develop emotional awareness and build confidence.
        </p>

        <div className="flex-col flex lg:flex-row gap-6 items-center w-full mt-6">
          <Button asChild variant={"default"} className="max-w-[270px] w-full">
            <Link
              href={
                "https://calendly.com/youngsproutstherapy/15-minute-consult"
              }
              target="_blank"
            >
              Book a Free Consult
            </Link>
          </Button>

          <Button asChild variant={"outline"} className="max-w-[270px] w-full">
            <Link href={`tel:(647)370-7622`}>Call Now -(647)370-7622</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
