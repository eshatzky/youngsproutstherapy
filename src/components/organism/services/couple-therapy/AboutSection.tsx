"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutSection() {
  return (
    <article className="flex flex-col gap-4 lg:items-center lg:justify-center lg:min-h-[589px] h-full">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Child TheHelping Couples Reconnect and Build Stronger
          Relationshipsrapy
        </h2>
        <p className="leading-6">
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
      </div>

      <div className="flex-col flex lg:flex-row gap-6 w-full mt-6">
        <Button asChild variant={"default"} className="sm:max-w-[270px] w-full">
          <Link
            href={"https://calendly.com/youngsproutstherapy/15-minute-consult"}
            target="_blank"
          >
            Book a Free Consult
          </Link>
        </Button>
      </div>
    </article>
  );
}
