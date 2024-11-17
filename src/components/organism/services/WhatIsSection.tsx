import { cn } from "@/lib/utils";

type DataType = {
  title: string;
  description: string;
};

type Props = {
  data: DataType;
  className?: string;
};

export function WhatIsSection({ data, className }: Props) {
  return (
    <section
      className={cn(
        "max-w-[1020px] mx-auto w-full ~py-11/14 flex flex-col gap-6",
        className
      )}
    >
      <h2 className="text-primary ~text-2xl/3xl font-medium text-center">
        {data.title}
      </h2>
      <p className="text-[#333] text-center leading-6 ">{data.description}</p>
    </section>
  );
}
