import {
  AboutSection,
  HeroSection,
  TimeLine,
} from "@/components/organism/services";
import { ServiceAccordion, TwoGridSection } from "@/components/organism";
import {
  PracticalParenting,
  SpecificChallenges,
} from "@/components/organism/services/parent-counselling";

import HeroImage from "/public/services/Parenting Counselling.webp";
import AboutImage from "/public/services/parenting-about.webp";
import PracticalParentingImage from "/public/services/parent-session.webp";

export function ParentingCounselling() {
  return (
    <section className="max-w-[1440px] w-full mx-auto ~px-4/16  pt-6 lg:pt-2.5">
      <HeroSection props={HeroSectionData} />
      <div className="~py-5/28 flex flex-col gap-6">
        <h2 className="font-medium ~text-lg/3xl text-primary lg:hidden">
          Parenting Counselling in Vaughan & Thornhill
        </h2>
        <TwoGridSection
          renderComponent={() => <AboutSection props={AboutSectionData} />}
          image={AboutImage}
        />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-primary ~text-xl/3xl font-medium max-lg:text-center">
          Our Approach to Parenting Counselling
        </h2>
        <ServiceAccordion props={AccordionSectionData} />
      </div>
      <div className="space-y-8 ~py-10/16 overflow-hidden">
        <div className="flex flex-col gap-[22px] ">
          <h2 className="text-center font-medium ~text-2xl/3xl text-primary">
            The Benefits of Parenting Counselling
          </h2>
          <p className="text-center leading-6 max-w-[846px] mx-auto">
            Parenting counselling offers a range of benefits that extend beyond
            problem-solving. Our sessions are designed to help you strengthen
            your relationship with your children and grow personally as a
            parent.
          </p>
        </div>
        <TimeLine props={TimeLineSectionData} />
      </div>
      <SpecificChallenges />
      <div className="~py-5/16 flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Practical Parenting Support Through Our Sessions
        </h2>

        <TwoGridSection
          renderComponent={() => <PracticalParenting />}
          image={PracticalParentingImage}
          row={5}
          roundedRight
        />
      </div>
    </section>
  );
}

const HeroSectionData = {
  image: HeroImage,
  title: "Parenting Counselling in Vaughan & Thornhill",
};

const AboutSectionData = {
  title: "Parenting Counselling in Vaughan & Thornhill",
  subtitle: "Understanding the Challenges of Modern Parenting",
  description:
    "Parenting is rewarding, but it can also be overwhelming. At Young Sprouts Therapy, we provide expert parenting counselling to help you navigate challenges, improve family dynamics, and strengthen your bond with your children. Whether you're dealing with behavioural issues, emotional stress, or general parenting struggles, our compassionate team is here to support you every step of the way.",
  subDescription:
    "Parenting in today's fast-paced world can be incredibly challenging. From managing work-life balance to addressing your child’s emotional and behavioural needs, it’s easy to feel overwhelmed. Many parents experience stress, frustration, and guilt, but it’s important to know that you’re not alone. Parenting counselling provides a safe, supportive space for you to explore your concerns and find practical solutions to create a healthier family environment.",
};

const AccordionSectionData = [
  {
    title: "Cognitive-Behavioral Therapy (CBT)",
    description:
      "CBT helps parents identify and reframe negative thought patterns, leading to more positive behavioural responses. This method is particularly helpful for parents struggling with anxiety, stress, or self-doubt. Our therapists guide you through exercises that challenge unhelpful thoughts, allowing you to foster healthier interactions with your children.",
  },
  {
    title: "Solution-Focused Therapy(SFBT)",
    description:
      "CBT helps parents identify and reframe negative thought patterns, leading to more positive behavioural responses. This method is particularly helpful for parents struggling with anxiety, stress, or self-doubt. Our therapists guide you through exercises that challenge unhelpful thoughts, allowing you to foster healthier interactions with your children.",
  },
  {
    title: "Adlerian Approach",
    description:
      "CBT helps parents identify and reframe negative thought patterns, leading to more positive behavioural responses. This method is particularly helpful for parents struggling with anxiety, stress, or self-doubt. Our therapists guide you through exercises that challenge unhelpful thoughts, allowing you to foster healthier interactions with your children.",
  },
];

const TimeLineSectionData = [
  {
    title: "Improved Communication",
    description:
      "Effective communication is the foundation of a strong family. Through counselling, we help you develop clearer, more positive ways to communicate with your children, reducing misunderstandings and fostering a more open and supportive relationship.",
  },
  {
    title: "Conflict Resolution",
    description:
      "Learn how to manage and resolve conflicts without resorting to punishment or power struggles. Our therapists teach practical conflict resolution strategies that promote understanding and collaboration within your family.",
  },
  {
    title: "Personal Growth",
    description:
      "Parenting is not just about guiding your children; it’s also about personal growth. As you work through challenges with our therapists, you’ll gain a deeper understanding of your emotional needs, allowing you to become a more mindful and effective parent.",
  },
];
