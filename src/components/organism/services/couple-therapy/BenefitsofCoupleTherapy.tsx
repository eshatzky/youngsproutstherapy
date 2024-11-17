"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function BenefitsofCoupleTherapy() {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Benefits of Couples Therapy
        </h2>
        <p className="leading-6">
          Couples therapy offers many long-term benefits, helping you and your
          partner build a stronger, healthier relationship. Some of the key
          benefits include:
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
          <p className="text-primary font-medium">Improved Communication</p>
        </div>
        <p className="leading-6">
          Therapy provides tools to help couples communicate more effectively,
          reducing misunderstandings and fostering greater emotional closeness.
        </p>
        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p className="text-primary font-medium">
            Restored Trust and Intimacy
          </p>
        </div>
        <p className="leading-6">
          For couples dealing with trust issues or infidelity, therapy helps
          rebuild trust and intimacy, allowing you to move forward in your
          relationship with a renewed sense of connection.
        </p>

        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p className="text-primary font-medium">Conflict Resolution Skills</p>
        </div>
        <p className="leading-6">
          Therapy teaches couples how to resolve conflicts in a healthy,
          constructive way, reducing the likelihood of ongoing arguments or
          resentments.
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
