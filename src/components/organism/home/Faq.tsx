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
    question: "What is child and family therapy, and how can it help my family?",
    answer:
      "Child and family therapy supports children, teens, and their families in navigating emotional, behavioural, and relational challenges. At Young Sprouts Therapy in Vaughan, our experienced therapists use proven approaches like CBT, play therapy, and parent-child interaction therapy to foster understanding, improve communication, and strengthen family bonds.",
  },
  {
    id: "item-2",
    number: "02",
    question: "Do you offer virtual therapy sessions?",
    answer:
      "Yes, we provide both in-person and virtual therapy options for children, teens, and families. Whether you're located in Vaughan, Thornhill, or nearby areas, you can access flexible therapy services that fit your schedule.",
  },
  {
    id: "item-3",
    number: "03",
    question: "Do you offer therapy for teenagers?",
    answer:
      "Yes! Our therapists specialize in working with teens facing anxiety, depression, self-esteem issues, trauma, and more. We use approaches like CBT, emotion-focused therapy, and art therapy to help teenagers build resilience and thrive.",
  },
  {
    id: "item-4",
    number: "04",
    question: "Are your therapy services covered by insurance?",
    answer:
      "Yes, most of our therapy services are covered by common workplace benefits and extended health insurance plans. We recommend checking with your provider to confirm coverage for registered social workers or psychotherapists in Vaughan and Thornhill.",
  },
  {
    id: "item-5",
    number: "05",
    question: "Where are you located, and what areas do you serve?",
    answer:
      "Young Sprouts Therapy is located at 1137 Centre Street, Suite #204, Thornhill, ON. We serve families across Vaughan, Thornhill, Richmond Hill, Markham, North York, and surrounding areas.",
  },
{
    id: "item-6",
    number: "06",
    question: "How do I book a consultation?",
    answer: "Booking a consultation is simple! You have several options. You can schedule a free consultation through our calendar booking system to discuss your needs and find the right fit for your family. You can also contact us by filling out the contact form or calling us directly at (289) 579-4769, and we’ll be happy to assist you. If you're ready to set up an appointment with a therapist right away, visit our Jane page at https://youngsproutstherapy.janeapp.com/ to book online instantly.",
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
    <li
      onClick={toggleItem}
      className="border cursor-pointer rounded-lg px-4 lg:px-[60px] py-8 lg:py-[52px] w-full flex flex-col gap-4 lg:gap-6 bg-white"
    >
      <button
        className="w-full text-left flex items-center justify-between gap-4"
        aria-expanded={isOpen}
        aria-label={item.question}
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
    </li>
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
        {faqData.map((item, key) => (
          <FAQItem
            key={key}
            item={item}
            isOpen={openItem === item.id}
            toggleItem={() => toggleItem(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}
