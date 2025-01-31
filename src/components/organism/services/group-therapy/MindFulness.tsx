"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MindFulness() {
  return (
    <article className="flex flex-col gap-4 max-lg:mt-5">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Mindfulness and Relaxation Techniques in Group Therapy
        </h2>
        <p className="leading-6">
          Mindfulness practices are integrated into many of our group therapy
          sessions to help kids and teens develop coping mechanisms for stress
          and anxiety. Through breathing exercises, body scans, and guided
          imagery, participants learn how to calm their minds, stay present, and
          manage overwhelming emotions.
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
            Building Emotional Resilience through Mindfulness
          </p>
        </div>
        <p className="leading-6">
          Mindfulness helps kids and teens become more aware of their emotions
          and physical sensations, allowing them to respond to stressful
          situations with greater calm and clarity. Group mindfulness exercises
          encourage participants to practice these skills regularly, fostering
          emotional resilience and self-regulation.
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
