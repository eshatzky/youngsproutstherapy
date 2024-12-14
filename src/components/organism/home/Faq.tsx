"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "item-1",
    number: "01",
    question: "Alright, but what exactly do you do?",
    answer:
      "Timperlist gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
  },
  {
    id: "item-2",
    number: "02",
    question:
      "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?",
    answer:
      "Yes, we can definitely work together on executing your campaign. We offer flexible services that can be tailored to your specific needs.",
  },
  {
    id: "item-3",
    number: "03",
    question: "Are your rates competitive?",
    answer:
      "Our rates are competitive and reflect the quality and value of our services. We offer transparent pricing and flexible packages.",
  },
  {
    id: "item-4",
    number: "04",
    question: "Why do you have a monthly project cap?",
    answer:
      "We maintain a monthly project cap to ensure we can deliver the highest quality work and give each client the attention they deserve.",
  },
];

export const FAQItem = ({
  item,
  isOpen,
  toggleItem,
}: {
  item: FAQItem;
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
        <div className="flex flex-col lg:flex-row gap-2.5 lg:gap-4">
          <span className="text-secondary text-[32px] lg:text-4xl font-medium">
            {item.number}
          </span>
          <span className="text-secondary font-medium text-[22px] lg:text-2xl">
            {item.question}
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
            <div className="font-medium text-[#3C3C43D9] leading-relaxed lg:pl-14">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function HomepageFaq() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-6">
      <h2 className="text-primary ~text-2xl/3xl font-medium text-center">
        FAQs
      </h2>
      <ul className="py-10 lg:py-16 p-4 lg:px-8 bg-[#F3F5F6] lg:rounded-[28px]">
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openItem === item.id}
            toggleItem={() => toggleItem(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}
