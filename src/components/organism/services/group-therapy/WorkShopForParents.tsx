"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WorkShopForParents() {
  return (
    <article className="flex flex-col gap-4 max-lg:mt-5">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Workshops for Parents
        </h2>
        <p className="leading-6">
          We also offer workshops for parents designed to complement our group
          therapy programs. These workshops provide parents with practical
          strategies for supporting their child’s social-emotional development
          at home. Topics include:
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
          <p className="text-secondary font-medium">
            Effective communication with your child
          </p>
        </div>
        <p className="leading-6">
          In guided group discussions, participants share their thoughts on
          topics such as peer pressure, family dynamics, and stress. This allows
          kids and teens to process their emotions in a supportive environment
          while learning from the experiences of others. Guided discussions also
          help improve communication skills and build stronger social
          connections.
        </p>
        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p className="text-secondary font-medium">
            Supporting emotional regulation
          </p>
        </div>
        <p className="leading-6">
          Navigating peer relationships and social challenges
        </p>
        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p className="text-secondary font-medium">
            Workshops are available both in-person and virtually, making them
            accessible to families across Ontario.
          </p>
        </div>
        <p className="leading-6">
          Workshops are available both in-person and virtually, making them
          accessible to families across Ontario.
        </p>

        <div className="flex-col flex lg:flex-row gap-6 items-center w-full mt-6">
          <Button asChild variant={"default"} className="max-w-[270px] w-full">
            <Link href={"/#book-consultation"} target="_blank">
              Book a Free Consult
            </Link>
          </Button>

          <Button asChild variant={"outline"} className="max-w-[270px] w-full">
            <Link href={`tel:(289) 579-4769`}>Call Now - (289) 579-4769</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
