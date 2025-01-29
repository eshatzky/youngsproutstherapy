"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Logo } from "@/assets";
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
          href: "/services/therapy-type/parenting-counselling",
        },
        {
          label: "Child Therapy",
          href: "/services/therapy-type/child-therapy",
        },
        { label: "Teen Therapy", href: "/services/therapy-type/teen-therapy" },
        {
          label: "Couples Therapy",
          href: "/services/therapy-type/couples-therapy",
        },
        {
          label: "Group Therapy",
          href: "/services/therapy-type/group-therapy",
        },
      ],
    },
    {
      label: "Conditions we support",
      items: [
        {
          label: "ADHD Coaching & Therapy",
          href: "/services/conditions-we-support/adhd-therapy",
        },
        {
          label: "Anxiety Therapy",
          href: "/services/conditions-we-support/anxiety-therapy",
        },
        {
          label: "Burnout Therapy",
          href: "/services/conditions-we-support/burnout-therapy",
        },
        {
          label: "Behavioral Therapy",
          href: "/services/conditions-we-support/behavioral-therapy",
        },
        {
          label: "Depression Therapy",
          href: "/services/conditions-we-support/depression-therapy",
        },
        {
          label: "Grief Therapy",
          href: "/services/conditions-we-support/grief-therapy",
        },
        {
          label: "Trauma Therapy",
          href: "/services/conditions-we-support/trauma-therapy",
        },
        {
          label: "Autism Therapy",
          href: "/services/conditions-we-support/autism-therapy",
        },
        {
          label: "Clinical Supervision",
          href: "/services/conditions-we-support/clinical-supervision",
        },
      ],
    },
    {
      label: "Therapy modalities",
      items: [
        {
          label: "Art Therapy",
          href: "/services/therapy-modalities/art-therapy",
        },
        {
          label: "Acceptance and Commitment Therapy (ACT)",
          href: "/services/therapy-modalities/Acceptance-commitment-therapy",
        },
        {
          label: "Cognitive Behavioral Therapy (CBT)",
          href: "/services/therapy-modalities/cognitive-behavioral-therapy",
        },
        {
          label: "Dialectical Behavioral Therapy (DBT)",
          href: "/services/therapy-modalities/dialectical-behavioral-therapy",
        },
        {
          label: "Emotion Focused Therapy (EFT)",
          href: "/services/therapy-modalities/emotion-focused-therapy",
        },
        {
          label: "Narrative Therapy",
          href: "/services/therapy-modalities/narrative-therapy",
        },
        {
          label: "Play Therapy",
          href: "/services/therapy-modalities/play-therapy",
        },
        {
          label: "Parent-Child Interaction Therapy (PCIT)",
          href: "/services/therapy-modalities/parent-child-therapy",
        },
        {
          label: "Solution-Focused Therapy (SFT)",
          href: "/services/therapy-modalities/solution-focused-therapy",
        },
        {
          label: "Music Therapy",
          href: "/services/therapy-modalities/music-therapy",
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
        <Link aria-label={"home"} href={"/"} className="lg:py-4">
          <Image
            src={Logo}
            className="w-[195px] block lg:hidden"
            width={220}
            height={78}
            alt="Young Sprouts Therapy Logo"
            priority
            quality={75}
            sizes="(max-width: 768px) 145px, 220px"
          />
          <Image
            src={"/logo.png"}
            className="hidden lg:block lg:w-[265px] h-auto"
            width={600}
            height={600}
            alt="Young Sprouts Therapy Logo"
            priority
            quality={75}
            sizes="(max-width: 768px) 145px, 220px"
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="size-7"
          >
            <path
              d="M3 12H15M3 6H21M3 18H21"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
