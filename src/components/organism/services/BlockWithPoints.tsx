"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ListType = {
  title: string;
  description?: string;
};

type DataType = {
  title: string;
  description?: string;
  list: ListType[];
  subTitle?: string;
};

type Props = {
  data: DataType;
};

export function BlockWithPoints({ data }: Props) {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">{data.title}</h2>
        <p className="leading-6">{data?.description}</p>
      </div>
      <ul className="flex flex-col gap-4">
        {data.list.map((item, index) => (
          <li key={index} className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Image
                src={"/svg/magicicon.svg"}
                alt="icon"
                width={48}
                height={45}
                className="w-3 h-3 aspect-auto"
              />
              <p className="text-secondary font-medium">{item.title}</p>
            </div>
            {item.description && (
              <p className="leading-6">{item?.description}</p>
            )}
          </li>
        ))}
      </ul>
      {data?.subTitle && <p className="leading-6">{data?.subTitle}</p>}

      <div className="flex-col flex lg:flex-row lg:flex-wrap gap-6 items-center w-full mt-6">
        <Button asChild variant={"default"} className="max-w-[270px] w-full">
          <Link
            href={"https://calendly.com/youngsproutstherapy/15-minute-consult"}
            target="_blank"
          >
            Book a Free Consult
          </Link>
        </Button>

        <Button asChild variant={"outline"} className="max-w-[270px] w-full">
          <Link href={`tel:(289) 579-4769`}>Call Now -(289) 579-4769</Link>
        </Button>
      </div>
    </article>
  );
}
