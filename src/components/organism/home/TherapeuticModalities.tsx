"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function TherapeuticModalities() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full h-full lg:h-[878px] z-0"
    >
      <Image
        src={"/images/TherapeuticModalities.webp"}
        alt="therapeutic modalities"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-10"
      />

      <div className="max-w-[1440px] mx-auto ~px-5/10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-4 z-40 h-full">
        <div className="flex flex-col justify-center h-full gap-4">
          <h2 className="max-w-[721px] ~text-xl/5xl lg:text-6xl font-medium leading-[129.3%] text-white">
            Therapeutic Modalities Used in Counselling
          </h2>
          <p className="text-base font-normal leading-6 text-white">
            Therapeutic modalities in counseling are methods like Cognitive
            Behavioral Therapy (CBT), Person-Centered Therapy, and Psychodynamic
            Therapy, each tailored to help clients address emotional and
            psychological issues for healing and growth.
          </p>
          <Link href={"/services/approach-and-specialties"}>
            <Button
              variant={"outline"}
              className="border border-white text-white sm:max-w-[260px] w-full lg:mt-[43px]"
            >
              Learn More +
            </Button>
          </Link>
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {modalities.map((item, index) => (
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: item.isDummy ? 0 : 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className={`bg-[#E6F5F7] rounded-xl shadow flex items-center justify-center flex-col gap-2.5 p-4 ${
                item.isDummy ? "opacity-0 max-lg:hidden " : ""
              }`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <p className="text-base leading-6 text-center text-black">
                {item.title}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

const modalities = [
  {
    icon: "/svg/Cognitive Behavioural Therapy (CBT).svg",
    title: "Cognitive Behavioural Therapy (CBT)",
  },
  {
    icon: "/svg/Narrative Therapy.svg",
    title: "Narrative Therapy",
  },
  {
    icon: "/svg/Solution-Focused Therapy.svg",
    title: "Solution-Focused Therapy",
  },
  {
    icon: "/svg/Dialectical Behaviour Therapy (DBT).svg",
    title: "Dialectical Behaviour Therapy (DBT)",
  },
  {
    icon: "/svg/Art Therapy.svg",
    title: "Art Therapy",
  },
  {
    icon: "/svg/Play Therapy.svg",
    title: "Play Therapy",
  },
  {
    icon: "/svg/Acceptance and Commitment.svg",
    title: "Acceptance and Commitment Therapy (ACT)",
  },
  {
    icon: "/svg/Emotion-Focused.svg",
    title: "Emotion-Focused Therapy (EFT)",
  },
  {
    icon: "/svg/Parent-Child Interaction Therapy (PCIT) .svg",
    title: "Parent-Child Interaction Therapy (PCIT) ",
  },
  { icon: "", title: "", isDummy: true },
  {
    icon: "/svg/Music Therapy.svg",
    title: "Music Therapy",
  },
  // Dummy items for centering
  { icon: "", title: "", isDummy: true },
];
