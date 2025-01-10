"use client";

import { motion } from "framer-motion";
import { HowPsychotherapyCanHelpCard } from "@/components/molecules/home";
import { PsychotherapyData } from "@/components/types";

export function HowPsychotherapyCanHelp() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section className="max-w-[1440px] mx-auto w-full ~px-4/10 ~py-8/16 flex flex-col gap-14 z-10 ">
        <h2 className="~text-xl/5xl font-semibold text-center">
          How{" "}
          <span className="text-primary relative before:absolute before:-bottom-8 before:content-[url('/svg/psychotherapy.svg')] max-lg:before:w-[50%] before:w-[213px] before:h-full before:bg-no-repeat before:bg-center before:bg-cover ">
            Psychotherapy
          </span>{" "}
          Can Help
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {items.map((item, index) => (
            <HowPsychotherapyCanHelpCard
              item={item}
              key={index}
              index={index}
            />
          ))}
        </ul>
      </section>
    </motion.div>
  );
}

const items: PsychotherapyData[] = [
  {
    title: "Anxiety",
    desc: "Empowering children and teens to manage anxiety through personalized strategies, counselling, and resilience-building techniques.",
    href: "/services/conditions-we-support/anxiety-therapy",
  },
  {
    title: "ADHD",
    desc: "Helping children and teens harness their ADHD as a strength, improving focus and self-regulation through tailored strategies.",
    href: "/services/conditions-we-support/adhd-therapy",
  },
  {
    title: "Parenting",
    desc: "Guiding parents to foster strong, healthy relationships with their children, while navigating the challenges and joys of parenthood.",
    href: "/services/therapy-type/parenting-counselling",
  },
  {
    title: "Self-Esteem",
    desc: "Boosting children's and teens' confidence and self-worth through counselling strategies that promote positive self-perception and resilience.",
    href: "#",
  },
  {
    title: "Behavioural Challenges",
    desc: "Addressing behavioral challenges in children and teens, using evidence-based approaches to promote positive change and improve home and school life.",
    href: "/services/conditions-we-support/behavioral-therapy",
  },
  {
    title: "Emotional Regulation",
    desc: "Enhancing emotional regulation in children and teens, using proven techniques to help them understand and manage their feelings for better mental health and relationships.",
    href: "#",
  },
  {
    title: "Trauma",
    desc: "Providing compassionate support for children and teens dealing with trauma, using therapeutic counselling techniques to foster resilience and promote healing.",
    href: "/services/conditions-we-support/trauma-therapy",
  },
  {
    title: "Grief",
    desc: "Offering supportive therapy and counselling for children and teens navigating grief, helping them process their feelings and move forward with strength and resilience.",
    href: "/services/conditions-we-support/grief-therapy",
  },
  {
    title: "Learning Disabilities",
    desc: "Supporting children and teens with learning disabilities, using tailored strategies to enhance their academic skills, confidence, and overall school experience.",
    href: "#",
  },
  {
    title: "Depression",
    desc: "Helping children and teens overcome depression, using evidence-based therapies to foster resilience, promote positive thinking, and improve overall mental health.",
    href: "/services/conditions-we-support/depression-therapy",
  },
  {
    title: "Autism Spectrum Disorder (ASD)",
    desc: "Supporting children and teens with autism, using tailored strategies to enhance their confidence, social skills, and overall development.",
    href: "/services/conditions-we-support/autism-therapy",
  },
  {
    title: "Learn More",
    desc: "Dive deeper into our comprehensive range of services and discover how we tailor our therapeutic approaches to meet the unique needs of every child and family.",
    href: "/services/approach-and-specialties",
  },
];
