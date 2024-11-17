import {
  BlockWithPoints,
  Faq,
  HeroSection,
  OurApproach,
  TimeLine,
  TwoFlexSection,
  WhatIsSection,
  WhyChooseUs,
} from "@/components/organism/services";

import emotionfocusedheroimage from "/public/services/emotionfocusedheroimage.png";
import eftforcouples from "/public/services/eftforcouples.png";
import familyinvolvementimage from "/public/services/familyinvolvementimage.png";
import integratingEftImage from "/public/services/integratingEftImage.png";

export function EmotionFocusedTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-5/10">
        <HeroSection props={HeroSectionData} />
        <WhatIsSection data={WhatIsEmotionFocusedTherapy} />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="How EFT Works: Understanding and Regulating Emotions"
        description="EFT helps individuals and couples create meaningful change by:"
        subDescription={
          "Through this process, EFT helps clients create secure emotional connections with themselves and their loved ones, leading to stronger relationships and better mental health."
        }
      />
      <div className="max-w-[1440px] w-full mx-auto ~px-5/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={EftForCouples} />}
          image={eftforcouples}
        />
      </div>
      <div className="py-6">
        <WhyChooseUs data={WhyChooseUsData} row={3} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-5/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={FamilyinvolvementData} />
          )}
          image={familyinvolvementimage}
          rtl={true}
        />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-5/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={IntegratingEftData} />}
          image={integratingEftImage}
        />
      </div>
      <div className="flex flex-col gap-8 pt-6  overflow-hidden max-w-[1440px] w-full mx-auto ~px-5/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            Benefits of Emotion Focused Therapy (EFT)
          </h2>
          <p className="text-center leading-6">
            Emotion Focused Therapy provides lasting benefits for emotional
            well-being and relationship health:
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
  image: emotionfocusedheroimage,
  title:
    "Emotion Focused Therapy (EFT) in Vaughan & Thornhill: Rebuilding Emotional Connections",
};

const WhatIsEmotionFocusedTherapy = {
  title: "What Is Emotion Focused Therapy (EFT)?",
  description:
    "Emotion Focused Therapy (EFT) is a proven, evidence-based approach that helps individuals, couples, and families explore and process their emotions. EFT places emotions at the center of therapeutic work, encouraging clients to understand, regulate, and transform their emotional experiences to foster stronger relationships and emotional resilience. This therapy is particularly effective for relationship issues, anxiety, trauma, and emotional dysregulation. At Young Sprouts Therapy, our licensed therapists specialize in EFT for couples, families, and individuals. Whether you’re struggling with emotional distance in your relationship or seeking healing from trauma, EFT offers a structured, supportive framework for emotional recovery. We provide in-person sessions in Vaughan and Thornhill, as well as virtual therapy options across Ontario.",
};

const timelineData = [
  {
    title: "Identifying Core Emotions:",
    description:
      "In EFT, clients learn to identify their underlying emotions, which are often hidden beneath surface-level reactions like anger or withdrawal.",
  },
  {
    title: "Processing Emotions in Real-Time:",
    description:
      "Clients are encouraged to safely express and process their emotions during therapy sessions, helping them gain deeper insights into their emotional responses.",
  },
  {
    title: "Building Emotional Regulation Skills:",
    description:
      "Helps individuals identify and regulate intense emotions, preventing emotional outbursts.",
  },
];

const EftForCouples = {
  title: "EFT for Couples Therapy",
  subTitle:
    "Research shows that 70-73% of couples who undergo EFT report full recovery from marital distress, with 90% showing significant improvement​(CSYorkRegion).",
  list: [
    {
      title: "Strengthening Emotional Bonds:",
      description:
        "Couples are guided through exercises that help them recognize each other's emotional needs, reducing negative cycles of interaction.",
    },
    {
      title: "Conflict Resolution:",
      description:
        "By processing their emotions together, couples can address the root causes of conflict and find healthier ways to communicate.",
    },
    {
      title: "Rebuilding Trust:",
      description:
        "EFT helps couples rebuild trust after breaches in the relationship, whether due to infidelity, emotional withdrawal, or unresolved conflicts.",
    },
  ],
};
const IntegratingEftData = {
  title: "Integrating EFT with Other Therapies",
  description:
    "At Young Sprouts Therapy, we often combine Emotion Focused Therapy (EFT) with other therapeutic modalities to provide a more comprehensive approach to emotional healing. Some of the therapies we integrate with EFT include:",
  subTitle:
    "This multimodal approach ensures that clients receive personalized treatment tailored to their unique emotional needs.",
  list: [
    {
      title: "Cognitive-Behavioural Therapy (CBT):",
      description:
        "CBT helps clients manage unhelpful thought patterns, while EFT focuses on addressing the emotional root of those thoughts. This combination is particularly effective for clients struggling with anxiety or relationship issues.",
    },
    {
      title: "Mindfulness Practices:",
      description:
        "By integrating mindfulness with EFT, clients can develop greater emotional awareness and improve their ability to stay present during difficult emotional experiences.",
    },
  ],
};
const FamilyinvolvementData = {
  title: "Family Involvement in EFT",
  description:
    "Family involvement can significantly enhance the effectiveness of Emotion Focused Therapy, particularly for children and teens struggling with emotional challenges. At Young Sprouts Therapy, we encourage families to participate in therapy sessions to:",
  subTitle:
    "By involving the family, EFT creates a supportive environment for lasting emotional change.",
  list: [
    {
      title: "Improve Family Dynamics:",
      description:
        "EFT helps family members communicate more effectively, reducing conflict and fostering emotional understanding.",
    },
    {
      title: "Support Emotional Development:",
      description:
        "Parents and caregivers learn how to support their child’s emotional growth, ensuring that the progress made in therapy is reinforced at home.",
    },
  ],
};

const WhyChooseUsData = {
  title: "EFT for Individuals: Processing Trauma and Anxiety",
  description:
    "For individuals dealing with anxiety, trauma, or emotional dysregulation, EFT offers a compassionate, evidence-based approach to healing. By focusing on the emotional core of these challenges, EFT helps clients:",
  list: [
    {
      title: "Trauma Recovery:",
      description:
        "Clients learn to process and make sense of difficult emotional experiences tied to trauma, reducing the impact of intrusive memories and emotional pain.",
    },
    {
      title: "Managing Anxiety:",
      description:
        "EFT helps clients understand the root causes of their anxiety, allowing them to address their fears and regain emotional control.",
    },
    {
      title: "Building Emotional Resilience:",
      description:
        "Through EFT, clients develop emotional resilience, enabling them to face life’s challenges with greater confidence and emotional stability.",
    },
  ],
};

const TimeLineSectionData = [
  {
    title: "Emotional Regulation:",
    description:
      "EFT helps clients better understand and regulate their emotions, reducing emotional outbursts and improving emotional stability.",
  },
  {
    title: "Strengthened Relationships:",
    description:
      "Couples and families learn to communicate more effectively, deepening emotional bonds and reducing conflict.",
  },
  {
    title: "Trauma Recovery:",
    description:
      "By processing difficult emotions tied to trauma, EFT helps individuals reduce emotional pain and regain a sense of control over their lives.",
  },
];

const FaqData = {
  description:
    "Book an EFT Session in Vaughan & Thornhill Are you ready to explore your emotions and rebuild emotional connections with yourself and your loved ones? Contact us today to book an Emotion Focused Therapy (EFT) session at our Vaughan or Thornhill office. We offer both in-person and virtual therapy options to meet your needs. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
      title: "How long does Emotion Focused therapy take?",
      description:
        "The length of therapy varies depending on the client’s needs. Many clients benefit from 8 to 20 sessions, but longer-term therapy may be recommended for more complex issues.",
    },
    {
      title: "Is EFT effective for individuals, or is it only for couples ?",
      description:
        "EFT is highly effective for both individuals and couples. While it’s commonly used in relationship therapy, it also helps individuals dealing with trauma, anxiety, and emotional dysregulation.",
    },
    {
      title: "Can EFT be combined with other forms of therapy ? ",
      description:
        "Absolutely. EFT can be integrated with therapies like CBT and mindfulness to provide a comprehensive approach that addresses both the emotional and cognitive aspects of mental health challenges.",
    },
  ],
};
