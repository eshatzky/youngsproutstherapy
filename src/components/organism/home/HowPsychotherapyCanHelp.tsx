import { HowPsychotherapyCanHelpCard } from "@/components/molecules/home";
import { PsychotherapyData } from "@/components/types";

export function HowPsychotherapyCanHelp() {
  return (
    <section className="max-w-[1440px] mx-auto w-full ~px-5/10 ~py-8/16 flex flex-col gap-14 ">
      <h2 className="~text-xl/5xl font-semibold text-center">
        How{" "}
        <span className="text-primary relative before:absolute before:-bottom-8 before:content-[url('/svg/psychotherapy.svg')] max-lg:before:w-[50%] before:w-[213px] before:h-full before:bg-no-repeat before:bg-center before:bg-cover ">
          Psychotherapy
        </span>{" "}
        Can Help
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {items.map((item, index) => (
          <HowPsychotherapyCanHelpCard item={item} key={index} />
        ))}
      </ul>
    </section>
  );
}

const items: PsychotherapyData[] = [
  {
    title: "Anxiety",
    desc: "Empowering children and teens to manage anxiety through personalized strategies, counselling, and resilience-building techniques.",
    href: "/",
  },
  {
    title: "ADHD",
    desc: "Helping children and teens harness their ADHD as a strength, improving focus and self-regulation through tailored strategies.",
    href: "/",
  },
  {
    title: "Parenting",
    desc: "Guiding parents to foster strong, healthy relationships with their children, while navigating the challenges and joys of parenthood.",
    href: "/",
  },
  {
    title: "Self-Esteem",
    desc: "Boosting children's and teens' confidence and self-worth through counselling strategies that promote positive self-perception and resilience.",
    href: "/",
  },
  {
    title: "Behavioural Challenges",
    desc: "Addressing behavioral challenges in children and teens, using evidence-based approaches to promote positive change and improve home and school life.",
    href: "/",
  },
  {
    title: "Emotional Regulation",
    desc: "Enhancing emotional regulation in children and teens, using proven techniques to help them understand and manage their feelings for better mental health and relationships.",
    href: "/",
  },
  {
    title: "Trauma",
    desc: "Providing compassionate support for children and teens dealing with trauma, using therapeutic counselling techniques to foster resilience and promote healing.",
    href: "/",
  },
  {
    title: "Grief",
    desc: "Offering supportive therapy and counselling for children and teens navigating grief, helping them process their feelings and move forward with strength and resilience.",
    href: "/",
  },
  {
    title: "Learining Disabilities",
    desc: "Supporting children and teens with learning disabilities, using tailored strategies to enhance their academic skills, confidence, and overall school experience.",
    href: "/",
  },
  {
    title: "Depression",
    desc: "Helping children and teens overcome depression, using evidence-based therapies to foster resilience, promote positive thinking, and improve overall mental health.",
    href: "/",
  },
  {
    title: "Autism Spectrum Disorder (ASD)",
    desc: "Supporting children and teens with learning disabilities, using tailored strategies to enhance their academic skills, confidence, and overall school experience.",
    href: "/",
  },
  {
    title: "Learn More",
    desc: "Dive deeper into our comprehensive range of services and discover how we tailor our therapeutic approaches to meet the unique needs of every child and family.",
    href: "/",
  },
];
