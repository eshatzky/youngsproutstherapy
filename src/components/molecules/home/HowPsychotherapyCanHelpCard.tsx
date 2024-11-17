import { PsychotherapyData } from "@/components/types";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface Props {
  item: PsychotherapyData;
}
export function HowPsychotherapyCanHelpCard({ item }: Props) {
  return (
    <Card className="flex flex-col gap-5 px-4 py-6 bg-[#FAFAFA] group hover:scale-[1.02] hover:shadow transition-all duration-500 ease-in-out">
      <h3 className="text-[32px] font-medium text-primary">{item.title}</h3>
      <p className="text-sm leading-5">{item.desc}</p>
      <Link
        href={`${item.href}`}
        className=" items-center gap-2.5 text-sm leading-5 text-primary opacity-0 flex group-hover:opacity-100 cursor-pointer"
      >
        Learn more{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M3.33594 10H16.6693M16.6693 10L11.6693 5M16.6693 10L11.6693 15"
            stroke="#0196AF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </Card>
  );
}
