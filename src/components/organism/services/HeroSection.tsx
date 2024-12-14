import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

import HeroImage from "/public/services/Parenting Counselling.webp";
import Link from "next/link";

type props = {
  image: StaticImageData | string;
  title: string;
  description?: string;
};

type PropType = {
  props: props;
};

export function HeroSection({ props }: PropType) {
  return (
    <section className="w-full relative rounded-lg lg:rounded-3xl p-4 overflow-hidden h-full min-h-[216px] lg:min-h-[400px] lg:h-full flex items-center justify-center ">
      <Image
        src={props?.image ? props.image : HeroImage}
        alt="Parenting Counselling in Vaughan & Thornhill"
        layout="fill"
        placeholder="blur"
        className="w-full aspect-auto -z-10  object-cover object-center"
      />
      <div className="flex flex-col h-full items-center justify-center gap-6 lg:gap-12">
        <header className="flex flex-col gap-2.5 lg:gap-4">
          <h3 className="text-center ~text-sm/2xl font-medium text-white">
            Young Sprouts
          </h3>
          <h1 className="text-center max-w-[1164px] w-full mx-auto text-white ~text-2xl/4xl font-bold">
            {props?.title}
          </h1>
          {props?.description ? (
            <p className="text-base leading-6 text-center text-white max-w-[807px] mx-auto">
              {props.description}
            </p>
          ) : null}
        </header>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
          <Button
            asChild
            variant={"default"}
            className="bg-white text-secondary hover:bg-primary hover:text-white border-white hover:border-primary "
          >
            <Link
              href={
                "https://calendly.com/youngsproutstherapy/15-minute-consult"
              }
              target="_blank"
            >
              Book a Free Consult
            </Link>
          </Button>

          <Button
            asChild
            variant={"outline"}
            className="border border-white hover:border-primary text-white "
          >
            <Link href={`tel:(647)370-7622`}>Call Now -(647)370-7622</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
