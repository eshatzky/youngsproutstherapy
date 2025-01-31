"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Text from "../atom/Text";

import { useState } from "react";
import { MobileNav } from "./MobileNav";
import { CustomSubmenu } from "../molecules/customsubmenu";

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuOpen = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const servicesItems = [
    {
      label: "Type of Therapy",
      items: [
        {
          label: "Parenting",
          href: "/services/parenting-counselling",
        },
        {
          label: "Child Therapy",
          href: "/services/child-therapy",
        },
        { label: "Teen Therapy", href: "/services/teen-therapy" },
        {
          label: "Couples Therapy",
          href: "/services/couples-therapy",
        },
        {
          label: "Group Therapy",
          href: "/services/group-therapy",
        },
      ],
    },
    {
      label: "Conditions we support",
      items: [
        {
          label: "ADHD Coaching & Therapy",
          href: "/services/adhd-therapy",
        },
        {
          label: "Anxiety Therapy",
          href: "/services/anxiety-therapy",
        },
        {
          label: "Burnout Therapy",
          href: "/services/burnout-therapy",
        },
        {
          label: "Behavioral Therapy",
          href: "/services/behavioral-therapy",
        },
        {
          label: "Depression Therapy",
          href: "/services/depression-therapy",
        },
        {
          label: "Grief Therapy",
          href: "/services/grief-therapy",
        },
        {
          label: "Trauma Therapy",
          href: "/services/trauma-therapy",
        },
        {
          label: "Autism Therapy",
          href: "/services/autism-therapy",
        },
        {
          label: "Clinical Supervision",
          href: "/services/clinical-supervision",
        },
      ],
    },
    {
      label: "Therapy modalities",
      items: [
        {
          label: "Art Therapy",
          href: "/services/art-therapy",
        },
        {
          label: "Acceptance and Commitment Therapy (ACT)",
          href: "/services/Acceptance-commitment-therapy",
        },
        {
          label: "Cognitive Behavioral Therapy (CBT)",
          href: "/services/cognitive-behavioral-therapy",
        },
        {
          label: "Dialectical Behavioral Therapy (DBT)",
          href: "/services/dialectical-behavioral-therapy",
        },
        {
          label: "Emotion Focused Therapy (EFT)",
          href: "/services/emotion-focused-therapy",
        },
        {
          label: "Narrative Therapy",
          href: "/services/narrative-therapy",
        },
        {
          label: "Play Therapy",
          href: "/services/play-therapy",
        },
        {
          label: "Parent-Child Interaction Therapy (PCIT)",
          href: "/services/parent-child-therapy",
        },
        {
          label: "Solution-Focused Therapy (SFT)",
          href: "/services/solution-focused-therapy",
        },
        {
          label: "Music Therapy",
          href: "/services/music-therapy",
        },
      ],
    },
    {
      label: "Approach & Specialties",
      href: "/services/approach-and-specialties",
    },
  ];

  const aboutUsItems = [
    { label: "Team", href: "/team" },
    { label: "Fees", href: "/fees" },
    { label: "FAQ", href: "/faq" },
    { label: "Locations", href: "/locations" },
  ];

  return (
    <header className="w-full flex items-center justify-between gap-4 sm:py-1.5 max-w-[1440px] mx-auto ~px-4/10 ">
      <div className="flex items-center gap-3.5 max-sm:flex-1 ">
        <Link aria-label={"home"} href={"/"} className="py-1 lg:py-4">
          <img
            src={"/logo.png"}
            className="w-[195px] block lg:hidden"
            alt="Young Sprouts Therapy Logo"
          />
          <img
            src={"/logo.png"}
            className="hidden lg:block lg:w-[265px] h-auto"
            alt="Young Sprouts Therapy Logo"
          />
        </Link>
      </div>
      <nav className="hidden lg:flex items-center gap-8">
        <Link aria-label={"home"} href={"/"} scroll>
          <Text type="p" size="medium" className="hover:text-primary">
            Home
          </Text>
        </Link>
        <CustomSubmenu
          label="Services"
          items={servicesItems}
          isOpen={openMenu === "services"}
          onOpen={() => handleMenuOpen("services")}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setOpenMenu={setOpenMenu}
        />
        <CustomSubmenu
          label="About"
          items={aboutUsItems}
          isOpen={openMenu === "about"}
          onOpen={() => handleMenuOpen("about")}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setOpenMenu={setOpenMenu}
        />
        <Link
          aria-label={"contact-us"}
          href={"/contact-us"}
          className="hover:text-primary"
        >
          <Text type="p" size="medium" className="">
            Contact
          </Text>
        </Link>
        <Link aria-label={"Blog"} href={"/blog"}>
          <Text type="p" size="medium" className="hover:text-primary">
            Blog
          </Text>
        </Link>
      </nav>

      <a
        aria-label={" Book a Free Consult"}
        href={"/#book-consultation"}
        className="max-lg:hidden"
      >
        <Button
          variant="default"
          className="bg-primary text-white max-sm:!px-4 p-2 !py-2.5 ~text-sm/base w-fit rounded-full"
        >
          Book a Free Consult
        </Button>
      </a>
      <div className="lg:hidden">
        <span onClick={() => setMobileNavOpen(true)} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
        <MobileNav
          isMenuOpen={mobileNavOpen}
          setIsMenuOpen={setMobileNavOpen}
        />
      </div>
    </header>
  );
}
