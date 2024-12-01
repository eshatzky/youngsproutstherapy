import {
  Banner,
  BlockWithPoints,
  Faq,
  HeroSection,
  TimeLine,
  TwoFlexSection,
  WhatIsSection,
  WhyChooseUs,
} from "@/components/organism/services";

import parentchildinteractionheroimage from "/public/services/parentchildinteractionheroimage.png";
import pcidforbehavioralimage from "/public/services/pcidforbehavioralimage.png";
import strengtheningtheparentimage from "/public/services/strengtheningtheparentimage.png";
import pcitbannerimage from "/public/services/pcitbannerimage.png";

export function ParentChildTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <HeroSection props={HeroSectionData} />
        <WhatIsSection data={WhatIsDialecticalTherapy} />
      </div>
      <div className=" ~pb-6/8">
        <WhyChooseUs
          subDescription="Each phase is delivered through live coaching in which parents wear a small earpiece, allowing the therapist to provide real-time feedback and guidance during interactions with their child."
          data={howPCITWorks}
          showBg={true}
        />
      </div>

      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 py-10">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={PcitForBehavioralData} />
          )}
          image={pcidforbehavioralimage}
          rtl={true}
        />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 py-10">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={StrengtheningTheParentData} />
          )}
          image={strengtheningtheparentimage}
        />
      </div>

      <div className="w-full bg-[#E6F5F7]  z-40 ">
        <div className="~py-12/16 max-w-[1440px] mx-auto w-full ~px-4/10 z-10">
          <Banner data={BannerData} />
        </div>
      </div>
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1440px] w-full mx-auto ~px-4/10 pt-10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            Benefits of Parent-Child Interaction Therapy (PCIT)
          </h2>
          <p className="text-center leading-6">
            PCIT offers long-lasting benefits for both parents and children,
            including:
          </p>
        </div>
        <TimeLine props={TimeLineSectionData} />
      </div>

      <div className=" max-w-[1440px] w-full mx-auto ~px-4/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: parentchildinteractionheroimage,
  title: "Parent-Child Interaction Therapy (PCIT) in Vaughan & Thornhill",
  description:
    "PCIT is a form of therapy that focuses on improving the quality of the parent-child relationship and changing parent-child interaction patterns.",
};

const WhatIsDialecticalTherapy = {
  title: "What Is Parent-Child Interaction Therapy (PCIT)?",
  description:
    "Parent-Child Interaction Therapy (PCIT) is an evidence-based treatment designed to help parents manage challenging behaviors in young children while strengthening the emotional bond between parent and child. Through a series of interactive coaching sessions, parents are guided by a therapist to improve their communication, discipline strategies, and overall relationship with their child. PCIT is particularly effective for children aged 2 to 7 who exhibit behavioral issues such as aggression, defiance, and tantrums. Our Young Sprouts Therapy team specializes in providing PCIT for families looking to resolve these challenges and foster a positive family dynamic. We offer in-person sessions in Vaughan and Thornhill, as well as virtual parent coaching for your convenience.",
};

const StrengtheningTheParentData = {
  title: "Strengthening the Parent-Child Relationship",
  description:
    "PCIT is not only about managing behavior but also about strengthening the emotional bond between parent and child. Through guided sessions, parents learn how to:",
  list: [
    {
      title: "Build Trust and Security",
      description:
        "By using positive reinforcement and non-judgmental communication, parents help their child feel secure and supported. This strengthens the parent-child relationship, leading to increased cooperation and reduced behavioral problems.",
    },
    {
      title: "Increase Emotional Understanding",
      description:
        "PCIT helps parents better understand their child’s emotional needs, leading to greater empathy and more effective responses during times of stress or frustration.",
    },
  ],
};
const PcitForBehavioralData = {
  title: "PCIT for Behavioral Issues",
  description:
    "PCIT is highly effective in addressing common childhood behavioral challenges, including:",
  list: [
    {
      title: "Aggression and Tantrums",
      description:
        "PCIT helps parents manage their child's aggressive behavior, reducing tantrums and other forms of acting out. By focusing on emotional regulation and clear communication, children learn to express their needs in healthier ways.",
    },
    {
      title: "Defiance and Non-Compliance",
      description:
        "Defiance is common in children, but it can disrupt family harmony. PCIT teaches parents how to set firm but compassionate boundaries, ensuring children learn to respect rules without escalating confli",
    },
    {
      title: "Attention-Seeking Behaviors",
      description:
        "Children often seek attention through negative behaviors like whining or disobedience. PCIT shifts the focus to positive reinforcement, reducing attention-seeking behaviors and encouraging pro-social actions like sharing and taking turns.",
    },
  ],
};

const howPCITWorks = {
  title: "How PCIT Works",
  description:
    "PCIT is divided into two phases that address different aspects of parent-child interaction:",
  list: [
    {
      title: "Child-Directed Interaction (CDI)",
      description:
        "In this phase, parents are coached on how to build a positive relationship with their child through praise, active listening, and play-based interactions. CDI helps reduce conflict, increase positive behavior, and build a foundation of trust between parent and child.",
    },
    {
      title: "Parent-Directed Interaction (PDI)",
      description:
        "In PDI, parents learn effective discipline strategies, including setting limits and managing defiant behavior. This phase helps parents remain calm and consistent when enforcing rules, leading to better behavioral outcomes and increased compliance from the child.",
    },
  ],
};

const BannerData = {
  title: "Virtual PCIT and Parent Coaching",
  description:
    "At Young Sprouts Therapy, we offer virtual PCIT sessions for families who prefer the convenience of home-based coaching. Virtual PCIT is just as effective as in-person sessions and allows parents to practice skills in their natural environment. In addition, our parent coaching programs provide extra support between PCIT sessions, helping parents apply the techniques they’ve learned and address any challenges they encounter.",
  image: pcitbannerimage,
};

const TimeLineSectionData = [
  {
    title: "Improved Child Behavior",
    description:
      "Children learn to regulate their emotions, comply with parental requests, and reduce aggressive or disruptive behaviors.",
  },
  {
    title: "Enhanced Parenting Confidence",
    description:
      "Parents gain confidence in their ability to handle difficult situations, set limits, and maintain a calm, consistent approach to discipline.",
  },
  {
    title: "Stronger Emotional Bonds",
    description:
      "PCIT helps build a secure attachment between parents and children, leading to a more positive and harmonious family dynamic.",
  },
];

const FaqData = {
  description:
    "Book a PCIT Session in Vaughan & Thornhill Are you struggling with managing your child's behavior? Parent-Child Interaction Therapy (PCIT) can provide the tools and support you need. Contact us today to book a PCIT session at our Vaughan or Thornhill office. We offer both in-person and virtual parent coaching options. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
      title: "How long does PGIT take?",
      description:
        "PCIT typically involves 12 to 20 sessions, though the exact length depends on the family’s progress. Each session lasts about an hour, and the treatment is considered complete once parents master the necessary skills.",
    },
    {
      title: "Is PCIT only for young children ?",
      description:
        "PCIT is most effective for children aged 2 to 7, though it can be adapted for older children in some cases. The techniques taught in PCIT are beneficial for parents of children with behavioral challenges of any age.",
    },
    {
      title: "Can PCIT be done virtually ?  ",
      description:
        "Yes. We offer virtual PCIT sessions that allow parents to receive coaching from the comfort of their home. Virtual PCIT has been shown to be as effective as in-person sessions.",
    },
  ],
};
