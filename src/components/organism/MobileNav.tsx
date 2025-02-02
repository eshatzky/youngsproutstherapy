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
        className="w-full bg-secondary overflow-y-scroll max-h-fit pb-[52px] !no-scrollbar"
      >
        <SheetHeader className="bg-secondary">
          <SheetDescription className="text-white mt-20 z-10 text-base">
            <Accordion type="single" collapsible className="z-20">
              <AccordionItem
                value="item-1"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none text-base"
              >
                <AccordionTrigger className="text-base cursor-pointer">
                  Type of Therapy
                </AccordionTrigger>
                <AccordionContent className="flex text-base flex-col gap-5 text-start items-start [&[data-state=close]]:p-2 bg-[#34abbf] py-2 px-2.5">
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/parenting-counselling">Parenting</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/child-therapy">Child Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/teen-therapy">Teen Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/couples-counselling">Couples Counselling</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/group-therapy">Group Therapy</Link>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              >
                <AccordionTrigger className="text-base cursor-pointer">
                  Conditions we supports
                </AccordionTrigger>
                <AccordionContent className="flex text-base flex-col gap-5 text-start items-start [&[data-state=close]]:p-2  bg-[#34abbf] py-2 px-2.5">
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/adhd-therapy">ADHD Coaching & Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/anxiety-therapy">Anxiety Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/burnout-therapy">Burnout Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/behavioral-therapy">Behavioral Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/depression-therapy">Depression Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/grief-therapy">Grief Counselling</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/trauma-therapy">Trauma Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/autism-therapy">Autism Spectrum</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/clinical-supervision">
                      Clinical Supervision
                    </Link>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              >
                <AccordionTrigger className="text-base cursor-pointer">
                  Therapy modalities
                </AccordionTrigger>
                <AccordionContent className="flex text-base flex-col gap-5 text-start items-start [&[data-state=close]]:p-2  bg-[#34abbf] py-2 px-2.5">
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/art-therapy">Art Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/Acceptance-commitment-therapy">
                      Acceptance and Commitment Therapy (ACT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/cognitive-behavioral-therapy">
                      Cognitive Behavioral Therapy (CBT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/dialectical-behavioral-therapy">
                      Dialectical Behavioral Therapy (DBT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/emotion-focused-therapy">
                      Emotion Focused Therapy (EFT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/narrative-therapy">Narrative Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/play-therapy">Play Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/parent-child-therapy">
                      Parent-Child Interaction Therapy (PCIT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/solution-focused-therapy">
                      Solution-Focused Therapy (SFT)
                    </Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/music-therapy">Music Therapy</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/approach-and-specialties">
                      Approach & Specialties
                    </Link>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              >
                <AccordionTrigger className="text-base cursor-pointer">
                  About
                </AccordionTrigger>
                <AccordionContent className="flex text-base flex-col gap-5 text-start items-start [&[data-state=close]]:p-2  bg-[#34abbf] py-2 px-2.5">
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/team">Team</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/fees">Fees</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/faq">FAQ</Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link href="/locations">Locations</Link>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              ></AccordionItem>
              <div className="text-base text-left p-2.5">
                <SheetClose asChild className="cursor-pointer">
                  <Link href="/contact-us">Contact</Link>
                </SheetClose>
              </div>
              <div className="text-base text-left p-2.5">
                <SheetClose asChild className="cursor-pointer">
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
