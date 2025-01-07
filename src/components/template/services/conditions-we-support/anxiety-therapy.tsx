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

import anxietyherosection from "/public/services/anxietyherosection.webp";
import anxietytherapymobile from "/public/services/anxietytherapymobile.png";
import anxietyherosectionimage from "../../../../../public/services/anxiety/anxiety.jpg";
import anxietybannerimage from "/public/services/anxietybannerimage.webp";

export function AnxietyTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col lg:gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsAnxiety} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16 max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={AnxietyTherapyData} />}
          image={anxietyherosectionimage}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Types of Anxiety We Treat"
        description="At our clinic, we specialize in treating a wide range of anxiety disorders:"
      />
      <div className="py-16">
        <WhyChooseUs data={WhyChooseUsData} />
      </div>
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1250.5px] mx-auto w-full ~px-4/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            Who Benefits from Anxiety Therapy?
          </h2>
          <p className="text-center leading-6 max-w-[846px] mx-auto">
            Through anxiety therapy at Young Sprouts Therapy, clients can expect
            the following benefits:
          </p>
        </div>
        <TimeLine props={TimeLineSectionData} />
      </div>
      <div className="~pt-12/24 max-w-[1440px] ~px-4/10 w-full mx-auto">
        <Banner data={BannerData} />
      </div>
      <div className=" max-w-[1440px] w-full mx-auto ~px-4/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: anxietyherosection,
  title: "Anxiety Therapy & Support in Vaughan & Thornhill",
  description:
    "Therapy to support and equip children, teens and adults with strategies for dealing with anxiety",
};
const HeroSectionDataMobile = {
  image: anxietytherapymobile,
  title: "Anxiety Therapy & Support in Vaughan & Thornhill",
  description:
    "Therapy to support and equip children, teens and adults with strategies for dealing with anxiety",
};

const WhatIsAnxiety = {
  title: "What Is Anxiety Therapy?",
  description:
    "Anxiety therapy is a therapeutic process designed to help individuals manage and overcome anxiety symptoms that interfere with their daily lives. Anxiety can manifest as worry, panic, or uncontrollable thoughts, and therapy helps reduce these feelings by addressing their root causes. Through various evidence-based approaches, such as Cognitive-Behavioural Therapy (CBT) and Mindfulness, anxiety therapy focuses on helping clients regain control of their mental well-being. At Young Sprouts Therapy, we provide tailored anxiety therapy for both children and adults, offering in-person sessions in Vaughan and Thornhill as well as virtual therapy options.",
};

const AnxietyTherapyData = {
  title: "Anxiety Therapy for Kids and Teens",
  description:
    "Children and teens can experience anxiety in ways that differ from adults, often showing signs of social anxiety, school-related stress, or separation anxiety. At Young Sprouts Therapy, we offer specialized anxiety therapy tailored for younger clients, helping them manage the unique pressures they face during these developmental years.",
  list: [
    {
      title: "School and Social Anxiety:",
      description:
        "Kids and teens often feel overwhelmed by school demands or peer pressure. Our therapists work with them to develop coping strategies that improve their confidence and ease their anxieties in social situations.",
    },
    {
      title: "Family Involvement:",
      description:
        "Anxiety therapy for children and teens often involves family sessions to ensure the home environment supports the child’s progress. Parents learn how to best support their child’s emotional health.",
    },
    {
      title: "Building Emotional Resilience:",
      description:
        "Through play-based therapy and cognitive-behavioural techniques, children and teens learn to recognize their anxious feelings and develop practical ways to manage them in daily life.",
    },
  ],
  subTitle:
    "By combining ADHD therapy with behavioral interventions, we help children and teens manage hyperactivity and impulsivity, fostering better behavior at home and in school.",
};

const timelineData = [
  {
    title:
      "GeneraGeneralized Anxiety Disorder (GAD):lized Anxiety Disorder (GAD):",
    description: "Chronic worry and fear that disrupt daily life.",
  },
  {
    title: "Social Anxiety Disorder:",
    description: "Fear and avoidance of social situations.",
  },
  {
    title: "Phobias",
    description:
      "Intense fear of specific objects or situations, like heights or animals.",
  },
  {
    title: "Health Anxiety (Hypochondria):",
    description: "Persistent worry about one's health.",
  },
];

const TimeLineSectionData = [
  {
    title: "Reduced Symptoms:",
    description:
      "Therapy helps decrease the intensity of anxious thoughts and feelings, giving clients more control over their emotional responses.",
  },
  {
    title: "Improved Coping Strategies:",
    description:
      "Clients learn effective techniques to handle stressful situations without falling into the cycle of anxiety.",
  },
  {
    title: "Increased Emotional Regulation:",
    description:
      "Therapy provides tools to better manage emotional reactions to anxiety-inducing situations.",
  },
];

const BannerData = {
  title: "Who Benefits from Anxiety Therapy?",
  description:
    "Anxiety therapy is suitable for anyone who struggles with persistent worry, panic attacks, or phobias. It’s particularly helpful for individuals whose anxiety impacts their work, school, or social lives. At Young Sprouts Therapy, we work with both children and adults to develop personalized therapy plans that target the specific nature of their anxiety.",
  image: anxietybannerimage,
};

const WhyChooseUsData = {
  title: "Our Approach to Anxiety Therapy",
  description:
    "Our anxiety therapy programs focus on proven approaches like Cognitive-Behavioural Therapy (CBT), which is considered the most effective method for treating anxiety. We combine CBT with mindfulness techniques to help clients become more aware of their thoughts and manage their anxiety through present-moment awareness.",
  list: [
    {
      title: "Cognitive-Behavioural Therapy (CBT):",
      description:
        "CBT helps individuals recognize negative thinking patterns and reframe them into more realistic, balanced thoughts. This approach is effective for treating panic disorder, social anxiety, and generalized anxiety.",
    },
    {
      title: "Mindfulness :",
      description:
        "IMindfulness techniques encourage clients to focus on the present and manage their anxiety in a calm, non-judgmental way. This approach can be especially beneficial for health anxiety and phobias.",
    },
  ],
};

const FaqData = {
  description:
    "Book an Anxiety Therapy Session in Vaughan & Thornhill Are you or a loved one struggling with anxiety? Our tailored anxiety therapy programs are designed to help you manage your symptoms and regain control of your life. Contact us today to book an anxiety therapy session at our Vaughan or Thornhill office. We offer both in-person and virtual therapy. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
      title: "How long dose anxiety therapy take ?",
      description:
        "The duration of therapy varies, but most clients see improvement within 8 to 12 sessions. Therapy for anxiety is typically a short-to-medium-term process, depending on the severity of the symptoms and personal goals.",
    },
    {
      title: "Can anxiety therapy be combined with medication ? ",
      description:
        "Yes, anxiety therapy can be combined with medication. Many clients benefit from a combined approach, with therapy addressing cognitive and behavioral patterns, and medication providing relief from more severe symptoms.",
    },
    {
      title: "Is virtual anxiety therapy effectives ? ",
      description:
        "Absolutely. At Young Sprouts Therapy, our virtual anxiety therapy sessions are just as effective as in-person sessions, offering flexibility for clients who prefer remote care.",
    },
  ],
};
