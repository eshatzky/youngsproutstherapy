"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 12H15M3 6H21M3 18H21"
            stroke="#333333"
            stroke-width="2"
            strokeLinecapp="round"
            strokeLinejoin="round"
          />
        </svg>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-full bg-primary overflow-y-scroll"
      >
        <SheetHeader>
          <SheetDescription className="text-white mt-20 z-10">
            <Accordion type="single" collapsible className="z-20">
              <AccordionItem
                value="item-1"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              >
                <AccordionTrigger>Type of Therapy</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-7 text-start items-start [&[data-state=close]]:p-2 pl-2">
                  <SheetClose asChild>
                    <Link href="/services/therapy-type/parenting-counselling">
                      Parenting
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-type/child-therapy">
                      Child Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-type/teen-therapy">
                      Teen Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-type/couples-therapy">
                      Couples Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-type/group-therapy">
                      Group Therapy
                    </Link>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              >
                <AccordionTrigger>Conditions we supports</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-7 text-start items-start [&[data-state=close]]:p-2 pl-2">
                  <SheetClose asChild>
                    <Link href="/services/conditions-we-support/adhd-therapy">
                      ADHD Coaching & Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/conditions-we-support/anxiety-therapy">
                      Anxiety Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/conditions-we-support/burnout-therapy">
                      Burnout Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/conditions-we-support/behavioral-therapy">
                      Behavioral Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/conditions-we-support/depression-therapy">
                      Depression Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/conditions-we-support/grief-therapy">
                      Grief Counselling
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/conditions-we-support/trauma-therapy">
                      Trauma Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/conditions-we-support/autism-therapy">
                      Autism Spectrum
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/conditions-we-support/clinical-supervision">
                      Clinical Supervision
                    </Link>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              >
                <AccordionTrigger>Therapy modalities</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-7 text-start items-start [&[data-state=close]]:p-2 pl-2">
                  <SheetClose asChild>
                    <Link href="/services/therapy-modalities/art-therapy">
                      Art Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-modalities/acceptance-commitment-therapy">
                      Acceptance and Commitment Therapy (ACT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-modalities/cognitive-behavioral-therapy">
                      Cognitive Behavioral Therapy (CBT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-modalities/dialectical-behavioral-therapy">
                      Dialectical Behavioral Therapy (DBT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-modalities/emotion-focused-therapy">
                      Emotion Focused Therapy (EFT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-modalities/narrative-therapy">
                      Narrative Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-modalities/play-therapy">
                      Play Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-modalities/parent-child-therapy">
                      Parent-Child Interaction Therapy (PCIT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-modalities/solution-focused-therapy">
                      Solution-Focused Therapy (SFT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/approach-and-specialties">
                      Approach & Specialties
                    </Link>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
