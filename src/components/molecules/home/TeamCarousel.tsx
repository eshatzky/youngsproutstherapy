"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Team } from "@/components/types";
import { urlForImage } from "@/lib/image";
import Image from "next/image";
import Link from "next/link";

type Props = {
  teams: Team[];
};

export function TeamCarousel({ teams }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-7xl w-full mx-auto px-4  overflow-hidden">
      <div className="flex items-center justify-end gap-4 mb-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full !p-0"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full !p-0"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {teams?.map((member, index) => {
            const imageProps =
              member && member?.mainImage
                ? urlForImage(member.mainImage)
                : null;
            return (
              <Link
                href={`/team/${member.slug}`}
                key={index}
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <Card className="h-full relative">
                  <div className=" h-[454px] relative  ">
                    {imageProps && (
                      <Image
                        src={imageProps.src}
                        {...(member.mainImage.blurDataURL && {
                          placeholder: "blur",
                          blurDataURL: member.mainImage.blurDataURL,
                        })}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="top"
                        className="object-cover w-full h-full transition-transform duration-300 "
                      />
                    )}
                  </div>

                  <CardContent className="p-7 rounded-t-xl flex flex-col gap-1  w-full mx-auto absolute bottom-0 left-0 right-0 bg-white">
                    <h3 className="text-lg font-medium text-[#293B46]">
                      {member.name}
                    </h3>
                    <p className="text-[#8A969E]  text-sm leading-6">
                      {member.position}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === selectedIndex ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
