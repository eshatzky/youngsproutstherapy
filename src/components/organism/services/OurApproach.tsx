import { cn } from "@/lib/utils";
import { VerticalTimeLine } from "./VerticalTimeLine";

type DataType = {
  title: string;
  description: string;
};

type Props = {
  data: DataType[];
  showBg: boolean;
  title: string;
  description: string;
  subDescription?: string;
};

export function OurApproach({
  data,
  showBg = false,
  title,
  description,
  subDescription,
}: Props) {
  return (
    <div className={cn("w-full py-16 ~px-4/10", showBg ? "bg-[#F4FDFF]" : "")}>
      <div className="flex flex-col gap-6 mx-auto max-w-screen-xl">
        <h2 className="text-center font-medium ~text-2xl/3xl text-primary">
          {title}
        </h2>
        <p className="text-center leading-6 max-w-[846px] mx-auto">
          {description}
        </p>
      </div>
      <div className="max-w-[690px] w-full mx-auto mt-6">
        <VerticalTimeLine data={data} />
      </div>
      {subDescription && (
        <p className="text-center leading-6 max-w-[846px] mx-auto mt-8">
          {subDescription}
        </p>
      )}
    </div>
  );
}
