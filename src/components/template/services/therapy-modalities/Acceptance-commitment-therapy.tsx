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

import acceptance from "/public/services/acceptance.png";
import BenefitFromActImage from "/public/services/BenefitFromActImage.png";
import actfortraumarecovery from "/public/services/actfortraumarecovery.png";
import actbannerimage from "/public/services/actbannerimage.png";

export function AcceptanceTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <HeroSection props={HeroSectionData} />
        <WhatIsSection data={WhatIsAcceptanceTherapy} />
      </div>

      <OurApproach
        data={timelineData}
        showBg={true}
        title="How Does ACT Work?"
        description="ACT is centered around six key processes that promote psychological flexibility:"
      />
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={BenefitFromAct} />}
          image={BenefitFromActImage}
        />
      </div>
      <WhyChooseUs data={WhyChooseUsData} showBg={true} />
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={ActFroTraumaRecovery} />
          )}
          image={actfortraumarecovery}
          rtl={true}
        />
      </div>

      <div className="~pt-12/16 max-w-[1440px] mx-auto w-full ~px-4/10">
        <Banner data={BannerData} />
      </div>
      <WhatIsSection data={FamilyInvolvementInAct} />
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            Benefits of Acceptance and Commitment Therapy (ACT)
          </h2>
          <p className="text-center leading-6 max-w-[846px] mx-auto">
            ACT offers a wide range of benefits, including:
          </p>
        </div>
        <div className="">
          <TimeLine props={TimeLineSectionData} />
        </div>
      </div>
      <div className=" max-w-[1440px] w-full mx-auto ~px-4/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: acceptance,
  title:
    "Acceptance and Commitment Therapy (ACT) in Vaughan & Thornhill: Live Meaningfully While Embracing Life’s Challenges",
};

const WhatIsAcceptanceTherapy = {
  title: "What Is Acceptance and Commitment Therapy (ACT)?",
  description:
    "Acceptance and Commitment Therapy (ACT) is a mindfulness-based therapeutic approach that helps individuals accept difficult emotions and thoughts, and commit to living a life aligned with their values. Instead of fighting or avoiding painful experiences, ACT encourages individuals to embrace those experiences while focusing on actions that bring meaning and purpose to their lives. At Young Sprouts Therapy, our ACT services help children, teens, and adults manage a variety of emotional and behavioural challenges, including anxiety, depression, trauma, and life transitions. Our ACT programs are available both in-person in Vaughan and Thornhill, and virtually across Ontario, giving you flexible options for receiving support.",
};

const FamilyInvolvementInAct = {
  title: "Family Involvement in ACT for Kids and Teens",
  description:
    "When working with children and teens, we encourage family involvement to ensure long-term success. ACT can help parents and caregivers learn how to support their child’s emotional well-being by promoting values-based actions and mindful living. Family participation enhances the effectiveness of ACT by creating a supportive environment at home.",
};

const timelineData = [
  {
    title: "Acceptance:",
    description:
      "Learning to accept difficult thoughts and feelings rather than avoiding or fighting them.",
  },
  {
    title: "Cognitive Defusion:",
    description:
      "Reducing the impact of negative thoughts by seeing them as separate from oneself.",
  },
  {
    title: "Being Present:",
    description:
      "Practicing mindfulness to stay grounded in the present moment.",
  },
  {
    title: "Self-as-Context:",
    description:
      "Viewing oneself from a broader perspective, beyond current emotions or thoughts.",
  },
  {
    title: "Values:",
    description: "Identifying core values that give life meaning.",
  },
  {
    title: "Committed Action:",
    description:
      "Taking concrete steps that align with one’s values, even in the face of challenges.",
  },
];

const BenefitFromAct = {
  title: "Who Can Benefit from ACT?",
  description:
    "ACT is effective for individuals facing a range of emotional and mental health challenges. At Young Sprouts Therapy, we use ACT to support:",
  list: [
    {
      title: "Children and Teens with Anxiety and Stress",
      description:
        "ACT helps young people manage anxiety by teaching them how to accept their fears while taking steps toward meaningful actions, like improving social interactions or focusing on academic success.",
    },
    {
      title: "Individuals Experiencing Trauma",
      description:
        "For those recovering from trauma, ACT offers a way to process painful memories without becoming overwhelmed. By accepting difficult emotions and taking committed actions, trauma survivors can rebuild their lives in line with their values.",
    },
    {
      title: "People Struggling with Chronic Pain",
      description:
        "ACT is particularly effective for individuals dealing with chronic pain. By shifting the focus from pain avoidance to living a fulfilling life despite the pain, ACT empowers individuals to regain control over their lives.",
    },
  ],
};
const ActFroTraumaRecovery = {
  title: "ACT for Trauma Recovery and Life Transitions",
  description:
    "Whether you're going through a difficult life transition or recovering from trauma, ACT can help you find emotional balance and psychological flexibility. By working with our therapists, you’ll learn how to embrace uncomfortable feelings and take steps toward a more meaningful life.",
  list: [
    {
      title: "Life Transitions:",
      description:
        "Major life events like career changes, moving to a new city, or relationship shifts can lead to stress and anxiety. ACT provides tools to navigate these transitions while staying aligned with your core values.",
    },
    {
      title: "Trauma Recovery:",
      description:
        "For individuals recovering from trauma, ACT offers a safe and supportive framework for processing difficult emotions and rebuilding a sense of control.",
    },
  ],
};

const WhyChooseUsData = {
  title: "Integrating ACT with Cognitive-Behavioural Therapy (CBT)",
  description:
    "At Young Sprouts Therapy, we often combine Acceptance and Commitment Therapy (ACT) with Cognitive-Behavioural Therapy (CBT) to provide comprehensive support. While ACT helps clients accept their thoughts and feelings, CBT teaches them to challenge unhelpful thinking patterns and replace them with healthier ones. This integrative approach is particularly effective for:",
  list: [
    {
      title: "Anxiety and Stress Management:",
      description:
        "Combining ACT and CBT helps clients manage anxiety by both accepting their fears and learning practical skills to reduce stress.",
    },
    {
      title: "Emotional Regulation:",
      description:
        "For teens and adults struggling with intense emotions, this dual approach provides both acceptance and actionable strategies to manage emotional responses.",
    },
  ],
};

const BannerData = {
  title: "Using Mindfulness in ACT",
  description:
    "Mindfulness is a core component of ACT. By practicing mindfulness, individuals learn how to stay present in the moment and detach from distressing thoughts. This not only helps with emotional regulation, but also supports mental well-being by fostering acceptance and reducing the impact of negative thoughts.",
  image: actbannerimage,
};

const TimeLineSectionData = [
  {
    title: "Emotional Flexibility",
    description:
      "ACT helps individuals become more flexible in how they respond to difficult emotions and thoughts, allowing them to live more freely and authentically.",
  },
  {
    title: "Values-Driven Action",
    description:
      "ACT encourages individuals to focus on what matters most, guiding them to take actions that align with their values, even in the face of difficulties.",
  },
  {
    title: "Improved Mental Health",
    description:
      "By reducing the struggle against negative thoughts and feelings, ACT leads to improvements in mental health and overall well-being.",
  },
];

const FaqData = {
  description:
    "Book an ACT Session in Vaughan & Thornhill Are you ready to embrace life’s challenges while living meaningfully? Contact us today to book an Acceptance and Commitment Therapy (ACT) session at our Vaughan or Thornhill office. We offer both in-person and virtual therapy to meet your needs. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
      title: "How long does ACT therapy take ?",
      description:
        "The length of therapy varies based on individual needs. Some clients may benefit from short-term therapy (8-12 sessions), while others may continue longer to address more complex challenges.",
    },
    {
      title: "Can ACT be combined with other therapies ? ",
      description:
        "Yes, ACT is often combined with therapies like CBT to provide a more comprehensive approach to managing mental health challenges such as anxiety, depression, and trauma.",
    },
    {
      title: "Is ACT suitable for children and teens ?  ",
      description:
        "Absolutely. ACT is highly effective for helping children and teens manage anxiety, stress, and emotional regulation by teaching them to accept their feelings while taking positive actions aligned with their values.",
    },
  ],
};
