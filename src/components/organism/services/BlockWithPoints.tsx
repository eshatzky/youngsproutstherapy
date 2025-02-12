"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

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
  const [isCalLoaded, setIsCalLoaded] = useState(true);
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const cal = await getCalApi({ namespace: "consult" });
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#0196af",
            },
            dark: {
              "cal-brand": "#007acc",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        setIsCalLoaded(true);
      } catch (error) {
        console.error("Failed to load Cal.com API:", error);
      }
    }, 2000); // Delays execution by 2 seconds (2000 ms)

    return () => clearTimeout(timer); // Cleanup function to avoid memory leaks
  }, []);
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
                loading="lazy"
                decoding="async"
                quality={85}
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
        {isCalLoaded && (
          <Button
            variant={"default"}
            className="max-w-[270px] w-full"
            aria-label="Schedule a consultation"
            data-cal-namespace="consult"
            data-cal-link="youngsproutstherapy/consult"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a Free Consult
          </Button>
        )}

        <Button asChild variant={"outline"} className="max-w-[270px] w-full">
          <Link href={`tel:(289) 579-4769`}>Call Now - (289) 579-4769</Link>
        </Button>
      </div>
    </article>
  );
}
