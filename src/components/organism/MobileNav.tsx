"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

type MobileNavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

export function MobileNav({ isMenuOpen, setIsMenuOpen }: MobileNavProps) {
  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetContent
        side={"left"}
        className="w-full bg-secondary overflow-y-scroll max-h-fit pb-[52px]  "
      >
        <SheetHeader>
          <SheetDescription className="text-white mt-20 z-10 text-base">
            <Accordion type="single" collapsible className="z-20">
              <AccordionItem
                value="item-1"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none text-base"
              >
                <AccordionTrigger className="text-base">
                  Type of Therapy
                </AccordionTrigger>
                <AccordionContent className="flex text-base flex-col gap-5 text-start items-start [&[data-state=close]]:p-2 bg-[#34abbf] py-2 px-2.5">
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
                <AccordionTrigger className="text-base">
                  Conditions we supports
                </AccordionTrigger>
                <AccordionContent className="flex text-base flex-col gap-5 text-start items-start [&[data-state=close]]:p-2  bg-[#34abbf] py-2 px-2.5">
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
                <AccordionTrigger className="text-base">
                  Therapy modalities
                </AccordionTrigger>
                <AccordionContent className="flex text-base flex-col gap-5 text-start items-start [&[data-state=close]]:p-2  bg-[#34abbf] py-2 px-2.5">
                  <SheetClose asChild>
                    <Link href="/services/therapy-modalities/art-therapy">
                      Art Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/therapy-modalities/Acceptance-commitment-therapy">
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
                    <Link href="/services/therapy-modalities/music-therapy">
                      Music Therapy
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services/approach-and-specialties">
                      Approach & Specialties
                    </Link>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              >
                <AccordionTrigger className="text-base">
                  About us
                </AccordionTrigger>
                <AccordionContent className="flex text-base flex-col gap-5 text-start items-start [&[data-state=close]]:p-2  bg-[#34abbf] py-2 px-2.5">
                  <SheetClose asChild>
                    <Link href="/team">Team</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/fees">Fees</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/faq">Faq</Link>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              ></AccordionItem>
              <div className="text-base text-left p-2.5">
                <SheetClose asChild>
                  <Link href="/contact-us">Contact Us</Link>
                </SheetClose>
              </div>
              <div className="text-base text-left p-2.5">
                <SheetClose asChild>
                  <Link href="/blog">Blog</Link>
                </SheetClose>
              </div>
            </Accordion>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
