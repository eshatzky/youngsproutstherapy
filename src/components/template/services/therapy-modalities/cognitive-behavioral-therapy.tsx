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

import cognitiveheroimage from "/public/services/cognitiveheroimage.png";
import cognitivemobile from "/public/services/cognitivemobile.png";
import groupCBTImage from "/public/services/groupCBTImage.png";
import cbtbannerimage from "/public/services/cbtbannerimage.png";

export function CognitiveTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsCognitiveTherapy} />
      </div>
      <div className="flex flex-col gap-8  ~pb-10/16 overflow-hidden max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            How Does CBT Work?
          </h2>
        </div>
        <TimeLine props={TimeLineSectionData} />
        <p className="text-center leading-6">
          CBT is goal-oriented and solution-focused, making it an excellent
          option for individuals who want practical tools to improve their
          mental health.
        </p>
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Who Can Benefit from CBT?"
        description=""
      />
      <div className="pt-10">
        <WhyChooseUs data={WhyChooseUsData} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={GroupCBTData} />}
          image={groupCBTImage}
        />
      </div>
      <WhyChooseUs data={benefitsofCBT} row={3} />
      <div className="~pt-12/16 max-w-[1440px] mx-auto w-full ~px-4/10">
        <Banner data={BannerData} />
      </div>

      <div className=" max-w-[1440px] w-full mx-auto ~px-4/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: cognitiveheroimage,
  title: "Cognitive Behavioural Therapy (CBT) in Vaughan & Thornhill",
  description:
    "CBT is a type of psychotherapy that helps individuals change negative thought patterns and behaviors.",
};
const HeroSectionDataMobile = {
  image: cognitivemobile,
  title: "Cognitive Behavioural Therapy (CBT) in Vaughan & Thornhill",
  description:
    "CBT is a type of psychotherapy that helps individuals change negative thought patterns and behaviors.",
};

const WhatIsCognitiveTherapy = {
  title: "What Is Cognitive Behavioural Therapy (CBT)?",
  description:
    "Cognitive Behavioural Therapy (CBT) is a highly effective, evidence-based therapeutic approach designed to help individuals identify and change unhelpful thought patterns and behaviours. By focusing on the connection between thoughts, emotions, and actions, CBT equips individuals with the tools needed to manage mental health challenges like anxiety, depression, trauma, and OCD. At Young Sprouts Therapy, we offer specialized CBT programs for children, teens, and adults. Our goal is to help you or your child overcome emotional challenges, build healthier habits, and improve overall well-being. Our therapy sessions are available both in-person in Vaughan and Thornhill, and virtually for clients across Ontario, providing flexibility to meet your needs.",
};

const timelineData = [
  {
    title: "Anxiety and Depression",
    description:
      "CBT helps individuals manage anxiety and depression by teaching them how to identify and challenge negative thinking patterns. Through CBT, clients develop healthier ways to cope with stress and emotions, ultimately reducing symptoms of anxiety and depression.",
  },
  {
    title: "Trauma and PTSD",
    description:
      "For individuals who have experienced trauma, CBT offers tools to process traumatic memories while reducing the impact of intrusive thoughts, flashbacks, and nightmares.",
  },
  {
    title: "Obsessive-Compulsive Disorder (OCD)",
    description:
      "CBT, particularly when combined with Exposure and Response Prevention (ERP), is highly effective for treating OCD. This approach helps individuals confront their obsessions while reducing compulsive behaviours.",
  },
  {
    title: "Behavioural Issues in Children and Teens",
    description:
      "For younger clients, CBT helps address behavioural challenges such as impulsivity, defiance, and difficulty managing emotions. Our therapists work closely with families to ensure that the strategies learned in therapy are supported at home.",
  },
];

const GroupCBTData = {
  title: "Group CBT for Youth and Adults",
  description:
    "In addition to individual therapy, we offer group CBT sessions for youth and adults. Group therapy provides a supportive environment where participants can learn from each other’s experiences and practice new skills in a collaborative setting. Our group sessions are particularly helpful for individuals dealing with:",
  list: [
    {
      title: "Social Anxiety and Peer Relationships:",
      description:
        "Group CBT helps children, teens, and adults improve their social skills, build confidence, and reduce anxiety in social situations.",
    },
    {
      title: "Stress Management and Emotional Regulation:",
      description:
        "Group sessions focused on stress management teach participants how to cope with life’s challenges in a healthy way, enhancing their emotional resilience.",
    },
  ],
};

const benefitsofCBT = {
  title: "Benefits of CBT",

  list: [
    {
      title: "Reduced Symptoms of Anxiety and Depression:",
      description:
        "By learning to challenge negative thoughts and develop healthier behaviours, clients can experience significant reductions in anxiety and depressive symptoms.",
    },
    {
      title: "Improved Emotional Regulation:",
      description:
        "CBT provides individuals with tools to manage their emotions more effectively, reducing the frequency and intensity of emotional outbursts or episodes.",
    },
    {
      title: "Enhanced Problem-Solving Skills:",
      description:
        "CBT teaches clients to approach problems in a structured, solution-focused way, improving their ability to handle stress and make positive decisions.",
    },
  ],
};
const WhyChooseUsData = {
  title: "Combining CBT with Other Therapies",
  description:
    "At Young Sprouts Therapy, we often combine CBT with other therapeutic modalities to provide a comprehensive approach tailored to each client’s needs. By integrating therapies like Mindfulness, Dialectical Behaviour Therapy (DBT), and Emotion-Focused Therapy (EFT), we can help clients manage their emotions and behaviours more effectively.",
  list: [
    {
      title: "Mindfulness-Based CBT:",
      description:
        "Integrating mindfulness with CBT allows clients to stay present, recognize unhelpful thoughts, and develop a non-judgmental awareness of their emotions.",
    },
    {
      title: "DBT and Emotional Regulation:",
      description:
        "For clients struggling with emotional regulation, combining DBT with CBT provides practical strategies to manage intense emotions and improve interpersonal relationships.",
    },
  ],
};

const BannerData = {
  title: "Family Involvement in CBT for Kids and Teens",
  description:
    "When working with children and teens, family involvement is key to ensuring the success of CBT. We encourage parents to participate in the therapy process, learning strategies to support their child’s progress and reinforce the tools learned in sessions. Family members play an essential role in maintaining the changes made during therapy, helping to ensure lasting success.",
  image: cbtbannerimage,
};

const TimeLineSectionData = [
  {
    title: "Identify Negative Thinking Patterns:",
    description:
      "Clients learn to recognize the unhelpful thoughts that contribute to their mental health challenges.",
  },
  {
    title: "Challenge Unhelpful Thoughts:",
    description:
      "Through cognitive restructuring, clients challenge and replace negative thoughts with more balanced and constructive ones.",
  },
  {
    title: "Change Behaviour:",
    description:
      "CBT encourages individuals to engage in healthier behaviours that align with their long-term well-being.",
  },
];

const FaqData = {
  description:
    "Book a CBT Session in Vaughan & Thornhill Are you ready to take control of your mental health with Cognitive Behavioural Therapy (CBT)? Contact us today to book a session at our Vaughan or Thornhill office. We offer both in-person and virtual therapy for individuals and families across Ontario. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
      title: "HHow long does CBT therapy take?",
      description:
        "CBT is typically a short-term therapy, lasting anywhere from 8 to 20 sessions, depending on the individual's needs and goals. Some clients may continue therapy for a longer period if they are dealing with more complex issues.",
    },
    {
      title: "Is CBT effective for children and teens ?",
      description:
        "Yes, CBT is highly effective for children and teens, particularly for managing anxiety, behavioural challenges, and emotional regulation. Our therapists tailor CBT techniques to meet the developmental needs of younger clients.",
    },
    {
      title: "Can CBT be combined with other form od therapy ? ",
      description:
        "Absolutely. At Young Sprouts Therapy, we often integrate CBT with mindfulness, DBT, and other therapeutic approaches to create a comprehensive treatment plan that meets each client’s unique needs.",
    },
  ],
};
