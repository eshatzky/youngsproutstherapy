"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type AccordionDataType = {
  title: string;
  description: string;
};

type DataType = {
  description?: string;
  accordion: AccordionDataType[];
};

type Props = {
  data: DataType;
  title?: string;
  showButtons?: boolean;
};

export function Faq({ data, showButtons = true }: Props) {
  return (
    <section className="~pt-16/24 flex flex-col gap-8 lg:gap-9 w-full">
      <HomepageFaq faqData={data.accordion} />
      {data?.description && (
        <p className="text-center leading-6 text-[#000]">{data.description}</p>
      )}

      {showButtons && (
        <div className="flex-col flex lg:flex-row gap-6 items-center w-full justify-center">
          <Button asChild variant={"default"} className="max-w-[270px] w-full">
            <Link
              href={
                "https://calendly.com/youngsproutstherapy/15-minute-consult"
              }
              target="_blank"
            >
              Book a Free Consult
            </Link>
          </Button>

          <Button asChild variant={"outline"} className="max-w-[270px] w-full">
            <Link href={`tel:(289) 579-4769`}>Call Now -(289) 579-4769</Link>
          </Button>
        </div>
      )}
    </section>
  );
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  index: number;
}

export const FAQItem = ({
  index,
  item,
  isOpen,
  toggleItem,
}: {
  index: number;
  item: AccordionDataType;
  isOpen: boolean;
  toggleItem: () => void;
}) => {
  return (
    <div
      onClick={toggleItem}
      className="border cursor-pointer rounded-lg px-4 lg:px-[60px] py-8 lg:py-[52px] w-full flex flex-col gap-4 lg:gap-6 bg-white"
    >
      <button
        className="w-full text-left flex items-center justify-between gap-4"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col lg:flex-row gap-2.5 lg:gap-4 lg:items-center">
          <span className="text-secondary text-[32px] lg:text-4xl font-medium">
            {index + 1}
          </span>
          <span className="text-secondary font-medium text-[22px] lg:text-2xl">
            {item.title}
          </span>
        </div>
        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen ? "#0196AF" : "#F3F5F6",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="rounded-full p-3"
        >
          <Plus
            className={cn(
              "lg:w-5 w-3 h-3 lg:h-5",
              isOpen ? "text-[#F3F5F6]" : "text-[#0196AF]"
            )}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="font-medium text-[#3C3C43D9] leading-relaxed lg:pl-9">
              {item.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function HomepageFaq({ faqData, title = "FAQs" }) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (title: string) => {
    setOpenItem(openItem === title ? null : title);
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-6">
      <h2 className="text-primary ~text-2xl/3xl font-medium text-center">
        {title}
      </h2>
      <ul className="py-10 lg:py-16 p-4 lg:px-8 bg-[#F3F5F6] lg:rounded-[28px]">
        {faqData.map((item, key) => (
          <FAQItem
            key={item.id}
            index={key}
            item={item}
            isOpen={openItem === item.title}
            toggleItem={() => toggleItem(item.title)}
          />
        ))}
      </ul>
    </div>
  );
}
