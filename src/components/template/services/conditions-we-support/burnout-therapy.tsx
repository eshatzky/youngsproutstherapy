import {
  BlockWithPoints,
  Faq,
  HeroSection,
  OurApproach,
  TimeLine,
  TwoFlexSection,
  WhatIsSection,
} from "@/components/organism/services";

import burnouttherapyheroimage from "/public/services/burnouttherapyheroimage.webp";
import burnouttherapyaboutiamge from "/public/services/burnouttherapyaboutiamge.webp";

export function BurnOutTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-5/10">
        <HeroSection props={HeroSectionData} />
        <WhatIsSection data={WhatIsBurnOutTherapy} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-5/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={BurnOutTherapyData} />}
          image={burnouttherapyaboutiamge}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Burnout Therapy for Professionals and High Achievers"
        description="Burnout commonly affects professionals who constantly push themselves to meet demanding goals. Over time, this results in emotional fatigue, reduced productivity, and a loss of interest in both personal and professional responsibilities. Our burnout therapy for professionals helps individuals:"
      />

      <div className="flex flex-col gap-8  overflow-hidden max-w-[1250.5px] mx-auto w-full ~pt-10/16 ~px-5/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            How Burnout Therapy Can Help
          </h2>
          <p className="text-center leading-6 max-w-[846px] mx-auto">
            Through burnout therapy, clients can expect to experience:
          </p>
        </div>
        <TimeLine props={TimeLineSectionData} />
      </div>

      <div className=" max-w-[1440px] w-full mx-auto ~px-5/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: burnouttherapyheroimage,
  title: "Burnout Therapy & Stress Management in Vaughan & Thornhill",
  description:
    "Therapy to help you regain control and find renewed energy for life's demands.",
};

const WhatIsBurnOutTherapy = {
  title: "What Is Burnout Therapy?",
  description:
    "Burnout therapy is a specialized form of therapy that focuses on helping individuals recover from emotional exhaustion, often caused by prolonged stress from work or personal responsibilities. Burnout can lead to a loss of motivation, increased irritability, and even physical symptoms such as headaches or fatigue. Therapy for burnout helps individuals regain their sense of balance, re-establish boundaries, and restore emotional resilience. At Young Sprouts Therapy, we offer tailored burnout therapy for high achievers, professionals, and parents who are struggling with chronic stress. Our in-person therapy sessions are available in Vaughan and Thornhill, along with virtual options to support our clients across Ontario.",
};

const BurnOutTherapyData = {
  title: "Stress Therapy to Manage Everyday Challenges",
  description:
    "Stress therapy helps individuals cope with the daily pressures of life, whether related to work, family, or personal issues. Through Cognitive-Behavioural Therapy (CBT) and mindfulness-based stress reduction, stress therapy provides effective tools to reduce anxiety, improve emotional regulation, and promote overall well-being.",
  list: [
    {
      title: "Identifying Stress Triggers:",
      description:
        "Our therapists work with you to identify the underlying causes of your stress and develop strategies to address them.",
    },
    {
      title: "Mindfulness Techniques:",
      description:
        "Mindfulness practices are incorporated to help clients stay present, reduce overwhelm, and build emotional resilience.",
    },
    {
      title: "Lifestyle Adjustments:",
      description:
        "We assist clients in setting healthy boundaries, improving time management, and prioritizing self-care to prevent burnout.",
    },
  ],
};

const timelineData = [
  {
    title: "Rebuild Emotional Resilience:",
    description:
      "Therapy provides the tools needed to manage overwhelming feelings and restore balance in daily life.",
  },
  {
    title: "Establish Boundaries:",
    description:
      "We help clients set healthier boundaries in their work and personal lives to prevent future burnout.",
  },
  {
    title: "Address Perfectionism and People-Pleasing:",
    description:
      "Many high achievers struggle with perfectionism, leading to stress. Our therapists help clients shift their mindset and let go of unattainable standards.",
  },
];

const TimeLineSectionData = [
  {
    title: "Emotional Recovery:",
    description:
      "Therapy helps reduce feelings of exhaustion, emotional numbness, and irritability, restoring a sense of emotional well-being.",
  },
  {
    title: "Improved Work-Life Balance:",
    description:
      "We guide clients in making lifestyle adjustments that promote a healthier balance between work and personal life.",
  },
  {
    title: "Long-Term Coping Strategies:",
    description:
      "Our therapists provide tools for managing stress over the long term, ensuring that clients can handle future challenges with greater resilience.",
  },
];

const FaqData = {
  description:
    "Book a Burnout Therapy Session in Vaughan & Thornhill Are you feeling overwhelmed, exhausted, or stuck in a cycle of burnout? Our burnout and stress therapy programs can help you regain control and live a balanced life. Contact us today to schedule a session at our Vaughan or Thornhill clinic. We offer both in-person and virtual sessions. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
      title: "How long dose burnout therapy take ?",
      description:
        "Burnout therapy varies depending on the severity of symptoms, but most clients see significant improvements within 8 to 12 sessions. For some, longer-term support may be beneficial to ensure lasting recovery.",
    },
    {
      title: "Is stress therapy effective for managing work-related stress ?",
      description:
        "Yes. Stress therapy focuses on helping clients identify and manage the specific stressors in their work environment, providing strategies to handle high-pressure situations effectively.",
    },
    {
      title: "Can burnout therapy be done virtually ?",
      description:
        "Absolutely. Our virtual therapy options allow clients to receive support from the comfort of their homes, ensuring flexibility and convenience.",
    },
  ],
};
