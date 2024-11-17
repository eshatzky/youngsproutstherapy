import {
  BlockWithPoints,
  Faq,
  HeroSection,
  OurApproach,
  TwoFlexSection,
  WhatIsSection,
  WhyChooseUs,
} from "@/components/organism/services";

import depressinotherapyheroimage from "/public/services/depressinotherapyheroimage.webp";
import depressiontherapyaboutimage from "/public/services/depressiontherapyaboutimage.webp";
import howdepressiontherapycanhelp from "/public/services/howdepressiontherapycanhelp.webp";

export function DepressionTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-5/10">
        <HeroSection props={HeroSectionData} />
        <WhatIsSection data={WhatIsDepressionTherapy} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-5/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={BurnOutTherapyData} />}
          image={depressiontherapyaboutimage}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Our Approach to Depression Therapy"
        description="Our therapists use a range of therapies to address depression:"
      />
      <div className="py-16">
        <WhyChooseUs data={WhyChooseUsData} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-5/10 ~pt-10/16">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={HowDepressionTherapyCanHelpData} />
          )}
          image={howdepressiontherapycanhelp}
        />
      </div>
      <div className=" max-w-[1440px] w-full mx-auto ~px-5/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: depressinotherapyheroimage,
  title: "Depression Therapy in Vaughan & Thornhill",
  description:
    "Providing a safe space to help you overcome depression and build a more fulfilling and resilient life. ",
};

const WhatIsDepressionTherapy = {
  title: "What Is Depression Therapy?",
  description:
    "Depression therapy is designed to help individuals struggling with persistent sadness, low energy, and a sense of hopelessness. Whether you're experiencing mild or severe symptoms, therapy offers a way to address the root causes of depression and develop strategies to manage and alleviate these feelings. At Young Sprouts Therapy, we use evidence-based approaches like Cognitive-Behavioural Therapy (CBT), Mindfulness-Based Therapy, and Emotion-Focused Therapy to help you regain control of your mental well-being. We offer in-person sessions in Vaughan and Thornhill as well as virtual therapy for added convenience.",
};

const WhyChooseUsData = {
  title: "Depression Therapy for Teens and Adults",
  description:
    "Depression affects individuals differently at various stages of life. At Young Sprouts Therapy, we offer specialized therapy for both teens and adults to address their unique challenges:",
  list: [
    {
      title: "Depression in Teens:",
      description:
        "Many teens struggle with depression due to academic pressures, social anxiety, or identity-related issues. Our therapists work with teens to help them navigate their emotions and develop healthier coping strategies.",
    },
    {
      title: "Depression in Adults:",
      description:
        "For adults, depression may stem from life transitions, work stress, or relationship difficulties. We provide a safe, supportive environment where adults can process their feelings and develop new ways to manage stress and depression.",
    },
  ],
};
const BurnOutTherapyData = {
  title: "Common Signs of Depression",

  list: [
    {
      title: "Persistent sadness that doesn’t seem to go away",
    },
    {
      title: "Fatigue and low energy",
    },
    {
      title: "Difficulty concentrating or making decisions",
    },
    {
      title: "Sleep disturbances (either sleeping too much or too little)",
    },
    {
      title: "Feelings of hopelessness or worthlessness",
    },
    {
      title: "Loss of interest in activities you once enjoyed",
    },
  ],
};
const HowDepressionTherapyCanHelpData = {
  title: "How Depression Therapy Can Help",
  description:
    "Through depression therapy at Young Sprouts Therapy, clients can expect to see the following benefits:",
  list: [
    {
      title: "Improved Mood:",
      description:
        "Therapy helps reduce feelings of sadness and hopelessness, replacing them with healthier, more balanced emotions.",
    },
    {
      title: "Better Emotional Regulation:",
      description:
        "Clients learn how to manage overwhelming emotions and reduce the intensity of depressive episodes.",
    },
    {
      title: "Greater Self-Esteem:",
      description:
        "Therapy helps clients rebuild their confidence and feel better equipped to handle daily challenges.",
    },
    {
      title: "Enhanced Relationships:",
      description:
        "By addressing the emotional and psychological factors contributing to depression, therapy can improve personal and professional relationships.",
    },
  ],
};

const timelineData = [
  {
    title: "Cognitive Behavioural Therapy (CBT):",
    description:
      "A proven method for helping clients reframe negative thought patterns that contribute to feelings of depression. By challenging these thoughts, CBT helps reduce the intensity of depressive symptoms.",
  },
  {
    title: "Mindfulness-Based Therapy:",
    description:
      "This approach teaches clients to stay present and focus on the here and now. By reducing rumination on negative thoughts, mindfulness helps improve emotional regulation.",
  },
  {
    title: "Emotion-Focused Therapy (EFT):",
    description:
      "EFT helps clients identify, understand, and process difficult emotions. This therapeutic approach works by promoting emotional awareness and healing, allowing individuals to make sense of their feelings in a constructive way.",
  },
];

const FaqData = {
  description:
    "Book a Depression Therapy Session in Vaughan & Thornhill If you or a loved one is struggling with depression, our depression therapy programs are here to help. Contact us today to schedule an in-person or virtual session. Fill out our online contact form or schedule a free consultation to start your journey toward emotional well-being.",
  accordion: [
    {
      title: "How long dose depression therapy typically take ?",
      description:
        "Every client’s journey is different. While some clients experience improvement within 8 to 12 sessions, others may need longer-term support to fully recover. Our therapists work with you to create a treatment plan that fits your unique needs.",
    },
    {
      title: "Can therapy for depression be combined with medication ?",
      description:
        "Yes. For many clients, a combined approach of therapy and medication is the most effective way to manage depression. We work closely with medical professionals to ensure a coordinated approach to treatment.",
    },
    {
      title: "Is virtual depression therapy effective ?",
      description:
        "Absolutely. Our virtual therapy sessions provide the same level of care as in-person sessions, allowing clients to receive support from the comfort of their home",
    },
  ],
};
