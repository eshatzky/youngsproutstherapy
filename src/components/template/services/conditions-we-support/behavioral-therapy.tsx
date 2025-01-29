import {
  Banner,
  BlockWithPoints,
  Faq,
  HeroSection,
  OurApproach,
  TimeLine,
  TwoFlexSection,
  WhatIsSection,
  WhyChooseUs,
} from "@/components/organism/services";

import behaviouraltherapyheroimage from "/public/services/behaviouraltherapyheroimage.webp";
import behaviouralmobile from "/public/services/behaviouralmobile.png";
import behavioralTherapyaboutimage from "../../../../../public/services/behavioural/behavioral.jpg";
import behavioraltherapybannerimage from "/public/services/behavioraltherapybannerimage.webp";

export function BehavioralTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col lg:gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsBehavioraltherapy} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16 max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={BehavioralTherapyData} />
          )}
          image={behavioralTherapyaboutimage}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Our Approach to Behavioural Therapy"
        description="At Young Sprouts Therapy, we use a variety of therapeutic techniques to help children and teens overcome behavioural challenges:"
      />
      <div className="pt-16">
        <WhyChooseUs data={WhyChooseUsData} />
      </div>
      <div className="~py-12/24 max-w-[1440px] ~px-4/10 w-full mx-auto">
        <Banner data={BannerData} />
      </div>
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1250.5px] mx-auto w-full ~px-4/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            Behavioural Therapy for Teens
          </h2>
          <p className="text-center leading-6 max-w-[846px] mx-auto">
            Teens often face unique challenges that contribute to behavioural
            issues, such as peer pressure, academic stress, and identity
            struggles. Our therapy for teens includes:
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
  image: behaviouraltherapyheroimage,
  title: "Behavioural Therapy for Kids & Teens in Vaughan & Thornhill",
  description:
    "We can help you manage stress, become resilient and develop healthy relationships.",
};
const HeroSectionDataMobile = {
  image: behaviouralmobile,
  title: "Behavioural Therapy for Kids & Teens in Vaughan & Thornhill",
  description:
    "We can help you manage stress, become resilient and develop healthy relationships.",
};

const WhatIsBehavioraltherapy = {
  title: "What Is Behavioural Therapy?",
  description:
    "Behavioural therapy helps children and teens manage and overcome disruptive or harmful behaviours by teaching them healthier responses and emotional regulation techniques. Through a combination of Cognitive Behavioural Therapy (CBT), play therapy, and behaviour modification, kids can replace negative behaviours with more positive ones, improving their ability to succeed in both social and academic environments. At Young Sprouts Therapy, our licensed therapists specialize in treating behavioural issues such as aggression, defiance, and impulsivity. We provide personalized therapy plans tailored to each child’s needs. Our services are available in-person at our Vaughan and Thornhill clinics or through virtual therapy for families across Ontario.",
};

const BehavioralTherapyData = {
  title: "Common Behavioural Issues We Address",

  list: [
    {
      title: "Oppositional Defiant Disorder (ODD):",
      description:
        "We work with children who display persistent patterns of defiant, hostile, or uncooperative behaviour.",
    },
    {
      title: "Attention Deficit Hyperactivity Disorder (ADHD):",
      description:
        "Therapy helps manage impulsivity, hyperactivity, and inattention to improve focus and academic performance.",
    },
    {
      title: "Social and School-Related Issues:",
      description:
        "We assist children struggling with behavioural problems that impact their school performance and peer relationships.",
    },
    {
      title: "Anxiety-Related Behaviours:",
      description:
        "For children with anxiety-driven behaviours, therapy focuses on reducing avoidance and managing emotional outbursts.",
    },
  ],
};

const timelineData = [
  {
    title: "Cognitive Behavioural Therapy (CBT):",
    description:
      "CBT is effective for helping children recognize and change negative thought patterns that drive unwanted behaviours. By reframing these thoughts, children learn to make more positive choices.",
  },
  {
    title: "Play Therapy:",
    description:
      "For younger children, play therapy offers a safe and engaging way to express emotions and process complex feelings. This method helps children understand their emotions and develop better ways to cope with stress and frustration.",
  },
  {
    title: "Behaviour Modification:",
    description:
      "We use evidence-based behaviour modification techniques to reinforce positive behaviour and reduce negative responses in everyday situations.",
  },
];

const TimeLineSectionData = [
  {
    title: "Emotional Regulation:",
    description:
      "Teens learn to manage emotions like anger, frustration, and sadness in a healthy way, reducing impulsive behaviours.",
  },
  {
    title: "Conflict Resolution:",
    description:
      "Therapy helps teens develop communication and problem-solving skills to resolve conflicts at school or at home.",
  },
  {
    title: "Building Self-Esteem:",
    description:
      "We address the underlying causes of low self-esteem and help teens develop confidence and healthier relationships.",
  },
];

const BannerData = {
  title: "School Collaboration for Consistent Support",
  description:
    "We work closely with schools to ensure that children receive the necessary support in their academic environment. Our therapists can collaborate with teachers to implement behaviour plans that improve classroom performance and peer relationships.",
  image: behavioraltherapybannerimage,
};

const WhyChooseUsData = {
  title: "Family-Centred Approach and Parental Support",
  description:
    "Behavioural therapy at Young Sprouts Therapy involves not just the child but also their family. We offer:",
  list: [
    {
      title: "Parental Coaching:",
      description:
        "We provide parents with strategies to reinforce positive behaviours at home, ensuring a consistent approach to therapy. Parents play a critical role in supporting their child’s progress and maintaining gains made in therapy.",
    },
    {
      title: "Family Therapy:",
      description:
        "For children whose behaviour is affecting family dynamics, we offer family therapy sessions to improve communication and strengthen family relationships. This approach helps create a supportive environment for the child’s development.",
    },
  ],
};

const FaqData = {
  description:
    "Book a Behavioural Therapy Session in Vaughan & Thornhill If your child or teen is struggling with behavioural issues, our behavioural therapists can provide the support and tools needed for lasting change. Contact us today to schedule an in-person or virtual session. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
      title: "How long dose behavioural therapy typically take?",
      description:
        "Every child is different, but many clients start to see improvements within 8 to 12 sessions. However, the total duration depends on the complexity of the behavioural issues and the child’s progress.",
    },
    {
      title: "Can parents be involved in therapy? ",
      description:
        "Yes. Parental involvement is key to reinforcing positive changes at home. We offer parent coaching and often involve families in sessions to create a unified approach.",
    },
    {
      title: "Is virtual behavioural therapy effective for children? ",
      description:
        "Absolutely. Our virtual therapy sessions are designed to provide the same level of care as in-person sessions, with flexible scheduling to meet your family’s needs.",
    },
  ],
};
