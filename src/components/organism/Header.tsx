"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Logo } from "@/assets";
import Text from "../atom/Text";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between gap-4 py-1.5 max-w-[1440px] mx-auto ~px-4/10 ">
      <div className="flex items-center gap-3.5">
        <div className="lg:hidden mt-2">
          <span
            onClick={() => setMobileNavOpen(true)}
            className="cursor-pointer"
          >
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
        <Link href={"/"}>
          <Image
            src={Logo}
            className="w-[145px] lg:w-[173px] "
            width={140}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <nav className=" hidden lg:flex items-center gap-8">
        <Link href={"/"}>
          <Text type="p" size="medium" className="hover:text-primary">
            Home
          </Text>
        </Link>
        <div>
          <ul>
            <DropdownMenu
              open={isOpen}
              onOpenChange={(open) => setIsOpen(open)}
            >
              <DropdownMenuTrigger
                onMouseEnter={() => setIsOpen(true)}
                className="outlino-none border-none focus:outline-none"
              >
                <Text
                  type="p"
                  size="medium"
                  className="flex items-center gap-1.5"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M5 5.5L0.669873 0.25L9.33013 0.250001L5 5.5Z"
                      fill="#A79AA1"
                    />
                  </svg>
                </Text>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" absolute left-0 -ml-8">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Type of Therapy</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={"/services/therapy-type/parenting-counselling"}
                        >
                          Parenting
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link href={"/services/therapy-type/child-therapy"}>
                          Child Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link href={"/services/therapy-type/teen-therapy"}>
                          Teen Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link href={"/services/therapy-type/couples-therapy"}>
                          Couples Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link href={"/services/therapy-type/group-therapy"}>
                          Group Therapy
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Conditions we supports</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={"/services/conditions-we-support/adhd-therapy"}
                        >
                          ADHD Coaching & Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/conditions-we-support/anxiety-therapy"
                          }
                        >
                          Anxiety Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/conditions-we-support/burnout-therapy"
                          }
                        >
                          Burnout Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/conditions-we-support/behavioral-therapy"
                          }
                        >
                          Behavioral Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/conditions-we-support/depression-therapy"
                          }
                        >
                          Depression Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={"/services/conditions-we-support/grief-therapy"}
                        >
                          Grief Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/conditions-we-support/trauma-therapy"
                          }
                        >
                          Trauma Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/conditions-we-support/autism-therapy"
                          }
                        >
                          Autism Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/conditions-we-support/clinical-supervision"
                          }
                        >
                          Clinical Supervision
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Therapy modalities</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link href={"/services/therapy-modalities/art-therapy"}>
                          Art Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/therapy-modalities/Acceptance-commitment-therapy"
                          }
                        >
                          Acceptance and Commitment Therapy (ACT)
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/therapy-modalities/cognitive-behavioral-therapy"
                          }
                        >
                          Cognitive Behavioral Therapy (CBT)
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/therapy-modalities/dialectical-behavioral-therapy"
                          }
                        >
                          Dialectical Behavioral Therapy (DBT)
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/therapy-modalities/emotion-focused-therapy"
                          }
                        >
                          Emotion Focused Therapy (EFT)
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/therapy-modalities/narrative-therapy"
                          }
                        >
                          Narrative Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={"/services/therapy-modalities/play-therapy"}
                        >
                          Play Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/therapy-modalities/parent-child-therapy"
                          }
                        >
                          Parent-Child Interaction Therapy (PCIT)
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href={
                            "/services/therapy-modalities/solution-focused-therapy"
                          }
                        >
                          Solution-Focused Therapy (SFT)
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href={"/services/approach-and-specialties"}>
                    Approach & Specialties
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
        </div>
        <div>
          <ul>
            <DropdownMenu
              open={isOpenAbout}
              onOpenChange={(open) => setIsOpenAbout(open)}
            >
              <DropdownMenuTrigger
                onMouseEnter={() => setIsOpenAbout(true)}
                className="outlino-none border-none focus:outline-none"
              >
                <Text
                  type="p"
                  size="medium"
                  className="flex items-center gap-1.5"
                >
                  About us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M5 5.5L0.669873 0.25L9.33013 0.250001L5 5.5Z"
                      fill="#A79AA1"
                    />
                  </svg>
                </Text>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" absolute left-0 -ml-8">
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href={"/team"}>Team</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href={"/fees"}>Fees</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href={"/faq"}>Faq</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
        </div>
        <Link href={"/contact-us"} className="hover:text-primary">
          <Text type="p" size="medium" className="">
            Contact Us
          </Text>
        </Link>
        <Link href={"/blog"}>
          <Text type="p" size="medium" className="hover:text-primary">
            Blog
          </Text>
        </Link>
      </nav>

      <Link href={"/#book-consultation"}>
        <Button className="bg-primary text-white rounded-md p-2 !py-2.5 ~text-sm/base w-fit">
          Book a Free Consult
        </Button>
      </Link>
    </header>
  );
}
