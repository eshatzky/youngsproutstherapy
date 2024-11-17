"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function GuidedDiscussions() {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Guided Discussions for Emotional Exploration
        </h2>
        <p className="leading-6">
          Guided discussions are a core component of our group therapy programs,
          providing kids and teens with opportunities to engage in meaningful
          conversations about their experiences, thoughts, and feelings. These
          discussions are facilitated by our therapists and are designed to
          encourage open communication and peer support.
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
          <p className="text-primary font-medium">
            Emotional Processing and Peer Support
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

        <div className="flex-col flex lg:flex-row gap-6 items-center w-full mt-6">
          <Button className="lg:max-w-[270px] w-full">
            Book a Free Consult
          </Button>
          <Button variant={"outline"} className="lg:max-w-[270px] w-full">
            Call Now -(647)370-7622
          </Button>
        </div>
      </div>
    </article>
  );
}
