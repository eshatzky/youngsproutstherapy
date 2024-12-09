"use client";
import { PsychotherapyData } from "@/components/types";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  item: PsychotherapyData;
  index: number;
}
export function HowPsychotherapyCanHelpCard({ item, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`${item.href}`} className="group">
        <Card className="flex flex-col gap-5 h-full px-4 py-6 bg-[#FAFAFA] group-hover:bg-primary group-hover:text-white  group-hover:scale-[1.02] group-hover:shadow transition-colors duration-500 ease-in-out">
          <h3 className="text-[32px] font-medium text-primary group-hover:text-white">
            {item.title}
          </h3>
          <p className="text-sm leading-5">{item.desc}</p>
          <div className=" items-center gap-2.5 text-sm leading-5 group-hover:text-white text-primary opacity-0 flex group-hover:opacity-100 cursor-pointer">
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
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
