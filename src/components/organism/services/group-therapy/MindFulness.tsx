"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function MindFulness() {
  return (
    <article className="flex flex-col gap-4">
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
          <p className="text-primary font-medium">
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
