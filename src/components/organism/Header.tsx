"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Text from "../atom/Text";

import { useEffect, useState } from "react";
import { MobileNav } from "./MobileNav";
import { CustomSubmenu } from "../molecules/customsubmenu";
import { getCalApi } from "@calcom/embed-react";

const Items = [
  {
    label: "Type of Therapy",
    items: [
      {
        label: "Parenting",
        href: "/parenting-counselling",
      },
      {
        label: "Child Therapy",
        href: "/child-therapy",
      },
      { label: "Teen Therapy", href: "/teen-therapy" },
      {
        label: "Couples Counselling",
        href: "/couples-counselling",
      },
      {
        label: "Group Therapy",
        href: "/group-therapy",
      },
    ],
  },
  {
    label: "Conditions we support",
    items: [
      {
        label: "ADHD Coaching & Therapy",
        href: "/adhd-therapy",
      },
      {
        label: "Anxiety Therapy",
        href: "/anxiety-therapy",
      },
      {
        label: "Burnout Therapy",
        href: "/burnout-therapy",
      },
      {
        label: "Behavioral Therapy",
        href: "/behavioral-therapy",
      },
      {
        label: "Depression Therapy",
        href: "/depression-therapy",
      },
      {
        label: "Grief Therapy",
        href: "/grief-therapy",
      },
      {
        label: "Trauma Therapy",
        href: "/trauma-therapy",
      },
      {
        label: "Autism Therapy",
        href: "/autism-therapy",
      },
      {
        label: "Clinical Supervision",
        href: "/clinical-supervision",
      },
    ],
  },
  {
    label: "Therapy modalities",
    items: [
      {
        label: "Art Therapy",
        href: "/art-therapy",
      },
      {
        label: "Acceptance and Commitment Therapy (ACT)",
        href: "/acceptance-commitment-therapy",
      },
      {
        label: "Cognitive Behavioral Therapy (CBT)",
        href: "/cognitive-behavioral-therapy",
      },
      {
        label: "Dialectical Behavioral Therapy (DBT)",
        href: "/dialectical-behavioral-therapy",
      },
      {
        label: "Emotion Focused Therapy (EFT)",
        href: "/emotion-focused-therapy",
      },
      {
        label: "Narrative Therapy",
        href: "/narrative-therapy",
      },
      {
        label: "Play Therapy",
        href: "/play-therapy",
      },
      {
        label: "Parent-Child Interaction Therapy (PCIT)",
        href: "/parent-child-therapy",
      },
      {
        label: "Solution-Focused Therapy (SFT)",
        href: "/solution-focused-therapy",
      },
      {
        label: "Music Therapy",
        href: "/music-therapy",
      },
    ],
  },
  {
    label: "Approach & Specialties",
    href: "/approach-and-specialties",
  },
];

const aboutUsItems = [
  { label: "Team", href: "/team" },
  { label: "Fees", href: "/fees" },
  { label: "FAQ", href: "/faq" },
  { label: "Locations", href: "/locations" },
];

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuOpen = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const [isCalLoaded, setIsCalLoaded] = useState(true);
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const cal = await getCalApi({ namespace: "consult" });
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#0196af",
            },
            dark: {
              "cal-brand": "#007acc",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        setIsCalLoaded(true);
      } catch (error) {
        console.error("Failed to load Cal.com API:", error);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="w-full flex items-center justify-between gap-4 sm:py-1.5 max-w-[1440px] mx-auto ~px-4/10 ">
      <div className="flex items-center gap-3.5 max-sm:flex-1 ">
        <Link aria-label={"home"} href={"/"} className="py-2 lg:py-2">
          <img
            src={"/logo.webp"}
            className="w-[195px] block lg:hidden"
            alt="Young Sprouts Therapy Logo"
          />
          <img
            src={"/logo.webp"}
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
          items={Items}
          isOpen={openMenu === ""}
          onOpen={() => handleMenuOpen("")}
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

      {isCalLoaded && (
        <Button
          variant={"default"}
          className="bg-primary text-white max-sm:!px-4 p-2 !py-2.5 ~text-sm/base w-fit rounded-full max-lg:hidden"
          aria-label="Book a Free Consult"
          data-cal-namespace="consult"
          data-cal-link="youngsproutstherapy/consult"
          data-cal-config='{"layout":"month_view"}'
        >
          Book a Free Consult
        </Button>
      )}
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
