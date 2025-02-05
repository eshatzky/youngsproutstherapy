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

      <div className="max-w-[1440px] mx-auto ~px-4/10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-4 z-40 h-full">
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
          <Link
            href={"/services/approach-and-specialties"}
            className="hidden lg:block"
            aria-label={"Learn More +"}
          >
            <Button
              aria-label={"Learn More +"}
              variant={"outline"}
              className="border border-white text-white sm:max-w-[260px] w-full lg:mt-[43px]"
            >
              Learn More +
            </Button>
          </Link>
        </div>
        <ul className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-5">
          {modalities.map((item, index) => (
            <li key={index} className="h-full group w-full group">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: item.isDummy ? 0 : 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#E6F5F7]  rounded-xl h-full group-hover:shadow-2xl shadow flex items-center justify-center flex-col gap-2.5 p-4 ${
                  item.isDummy ? "opacity-0 max-lg:hidden h-0 w-0 " : ""
                }`}
                viewport={{ once: true }}
              >
                <Link
                  aria-label={item.link || "services"}
                  href={`${item.link}`}
                  className="flex items-center justify-center flex-col gap-2.5 "
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title + index}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  )}
                  <p className="text-base leading-6 text-center text-black">
                    {item.title}
                  </p>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
        <ul className="grid lg:hidden grid-cols-1 lg:grid-cols-3 gap-5">
          {modalitiesMobile.map((item, index) => (
            <li key={index} className="h-full group w-full group">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#E6F5F7]  rounded-xl h-full group-hover:shadow-2xl shadow flex items-center justify-center flex-col gap-2.5 p-4`}
                viewport={{ once: true }}
              >
                <Link
                  aria-label={item.link || "services"}
                  href={`${item.link}`}
                  className="flex items-center justify-center flex-col gap-2.5 "
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  )}
                  <p className="text-base leading-6 text-center text-black">
                    {item.title}
                  </p>
                </Link>
              </motion.div>
            </li>
          ))}
          <Link
            href={"/approach-and-specialties"}
            className="block lg:hidden"
            aria-label={"Learn More +"}
          >
            <Button
              variant={"outline"}
              aria-label={"Learn More +"}
              className="border border-white text-white sm:max-w-[260px] w-full"
            >
              Learn More +
            </Button>
          </Link>
        </ul>
      </div>
    </motion.section>
  );
}

const modalities = [
  {
    icon: "/svg/Cognitive Behavioural Therapy (CBT).svg",
    title: "Cognitive Behavioural Therapy (CBT)",
    link: "/cognitive-behavioral-therapy",
  },
  {
    icon: "/svg/Narrative Therapy.svg",
    title: "Narrative Therapy",
    link: "/narrative-therapy",
  },
  {
    icon: "/svg/Solution-Focused Therapy.svg",
    title: "Solution-Focused Therapy",
    link: "/solution-focused-therapy",
  },
  {
    icon: "/svg/Dialectical Behaviour Therapy (DBT).svg",
    title: "Dialectical Behaviour Therapy (DBT)",
    link: "/dialectical-behavioral-therapy",
  },
  {
    icon: "/svg/Art Therapy.svg",
    title: "Art Therapy",
    link: "/art-therapy",
  },
  {
    icon: "/svg/Play Therapy.svg",
    title: "Play Therapy",
    link: "/play-therapy",
  },
  {
    icon: "/svg/Acceptance and Commitment.svg",
    title: "Acceptance and Commitment Therapy (ACT)",
    link: "/Acceptance-commitment-therapy",
  },
  {
    icon: "/svg/Emotion-Focused.svg",
    title: "Emotion-Focused Therapy (EFT)",
    link: "/emotion-focused-therapy",
  },
  {
    icon: "/svg/Parent-Child Interaction Therapy (PCIT).svg",
    title: "Parent-Child Interaction Therapy (PCIT) ",
    link: "/parent-child-therapy",
  },
  { icon: "", title: "", isDummy: true },
  {
    icon: "/svg/Music Therapy.svg",
    title: "Music Therapy",
    link: "/music-therapy",
  },
  // Dummy items for centering
  { icon: "", title: "", isDummy: true },
];

const modalitiesMobile = [
  {
    icon: "/svg/Cognitive Behavioural Therapy (CBT).svg",
    title: "Cognitive Behavioural Therapy (CBT)",
    link: "/cognitive-behavioral-therapy",
  },
  {
    icon: "/svg/Narrative Therapy.svg",
    title: "Narrative Therapy",
    link: "/narrative-therapy",
  },
  {
    icon: "/svg/Solution-Focused Therapy.svg",
    title: "Solution-Focused Therapy",
    link: "/solution-focused-therapy",
  },
  {
    icon: "/svg/Dialectical Behaviour Therapy (DBT).svg",
    title: "Dialectical Behaviour Therapy (DBT)",
    link: "/dialectical-behavioral-therapy",
  },
  {
    icon: "/svg/Art Therapy.svg",
    title: "Art Therapy",
    link: "/art-therapy",
  },
  {
    icon: "/svg/Play Therapy.svg",
    title: "Play Therapy",
    link: "/play-therapy",
  },
  {
    icon: "/svg/Acceptance and Commitment.svg",
    title: "Acceptance and Commitment Therapy (ACT)",
    link: "/acceptance-commitment-therapy",
  },
  {
    icon: "/svg/Emotion-Focused.svg",
    title: "Emotion-Focused Therapy (EFT)",
    link: "/emotion-focused-therapy",
  },
  {
    icon: "/svg/Parent-Child Interaction Therapy (PCIT).svg",
    title: "Parent-Child Interaction Therapy (PCIT) ",
    link: "/parent-child-therapy",
  },

  {
    icon: "/svg/Music Therapy.svg",
    title: "Music Therapy",
    link: "/music-therapy",
  },
];
