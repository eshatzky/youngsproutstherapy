import { Team } from "@/components/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { urlForImage } from "@/lib/image";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: Team;
};

export function TeamCard({ item }: Props) {
  const imageProps =
    item && item?.mainImage ? urlForImage(item.mainImage) : null;
  return (
    <Card className="grid grid-cols-1 @[864px]/team:grid-cols-2 gap-7 ">
      <div className="max-lg:flex items-center justify-center">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={item.name}
            width={600}
            height={600}
            placeholder="blur"
            blurDataURL={item.mainImage.blurDataURL}
            decoding="async"
            loading="lazy"
            className="w-[218px] object-cover object-center aspect-auto"
          />
        )}
      </div>
      <div className="flex flex-col justify-between gap-4 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold leading-7 text-[#19191B]">
              {item.name}
            </h2>
            <p className="text-sm font-medium leading-6 text-primary">
              {item.position}
            </p>
          </div>
          <p className="leading-6 text-sm text-gray-600 line-clamp-3">
            {item.description}
          </p>
          <Link
            className="text-primary text-sm leading-6 hover:font-medium"
            href={`/team/${item.slug}`}
          >
            Learn more
          </Link>
        </div>
        <Button asChild className="w-full text-sm leading-6 rounded-lg">
          <Link
            href={"https://calendly.com/youngsproutstherapy/15-minute-consult"}
            target="_blank"
          >
            Book Free Consultating
          </Link>
        </Button>
      </div>
    </Card>
  );
}
