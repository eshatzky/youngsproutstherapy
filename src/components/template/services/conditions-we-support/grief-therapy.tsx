import {
  BlockWithPoints,
  Faq,
  HeroSection,
  OurApproach,
  TimeLine,
  TwoFlexSection,
  WhatIsSection,
} from "@/components/organism/services";

import griftherapyhomeimage from "/public/services/griftherapyhomeimage.webp";
import grieftherapymobile from "/public/services/grieftherapymobile.png";
import griftherapyaboutimage from "/public/services/griftherapyaboutimage.webp";
import howgriefcounsellingcanhelp from "/public/services/howgriefcounsellingcanhelp.webp";

export function GriefTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col lg:gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsGriefTherapy} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16 max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={GriefTherapyData} />}
          image={griftherapyaboutimage}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Our Approach to Grief Counselling"
        description="At Young Sprouts Therapy, we use a range of therapeutic techniques to support your grieving process, including:"
      />
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1250.5px] mx-auto w-full ~pt-10/16 ~px-4/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            Grief Counselling for Children and Teens
          </h2>
          <p className="text-center leading-6 max-w-[846px] mx-auto">
            Children and teens often experience grief differently than adults.
            They may not always have the words to express their feelings or may
            act out as a way to cope. Our grief counselling for younger clients
            focuses on:
          </p>
        </div>
        <TimeLine props={TimeLineSectionData} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~pt-10/16">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={HowGriefTherapyCanHelpData} />
          )}
          image={howgriefcounsellingcanhelp}
        />
      </div>
      <div className=" max-w-[1440px] w-full mx-auto ~px-4/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: griftherapyhomeimage,
  title:
    "Individual Grief Counselling in Vaughan & Thornhill: Support for Loss and Healing",
  description:
    "A safe space to find a path through bereavement to healing and hope. ",
};
const HeroSectionDataMobile = {
  image: grieftherapymobile,
  title:
    "Individual Grief Counselling in Vaughan & Thornhill: Support for Loss and Healing",
  description:
    "A safe space to find a path through bereavement to healing and hope. ",
};

const WhatIsGriefTherapy = {
  title: "What Is Grief Counselling?",
  description:
    "Grief counselling is a compassionate therapeutic process that helps individuals navigate their emotional response to loss. Whether it’s the loss of a loved one, pet, job, or a significant life change, grief can manifest in many ways, including sadness, anger, guilt, or numbness. Individual grief counselling provides a safe space to process these emotions and develop coping strategies to move forward. At Young Sprouts Therapy, we offer personalized grief counselling for children, teens, and adults, focusing on your unique grief journey. Our in-person sessions are available in Vaughan and Thornhill, as well as virtual therapy options for clients across Ontario.",
};

const TimeLineSectionData = [
  {
    title: "Age-Appropriate Therapy:",
    description:
      "We use play therapy and creative techniques to help children process their emotions in a safe, supportive environment.",
  },
  {
    title: "Social and School Support:",
    description:
      "Grief can affect a child’s behaviour at school or with peers. We work closely with families to provide strategies that support children in both school and social settings.",
  },
  {
    title: "Teen Grief Counselling:",
    description:
      "Teens may experience grief through the lens of identity struggles, peer pressure, or social isolation. Our therapy for teens offers a safe space to discuss their feelings and develop healthier coping mechanisms.",
  },
];
const GriefTherapyData = {
  title: "Common Experiences in Grief",
  description:
    "Each person’s experience with grief is different, but common feelings include:",
  list: [
    {
      title: "Persistent sadness or emptiness that doesn’t seem to subside",
    },
    {
      title: "Anger or guilt over the loss",
    },
    {
      title: "Difficulty sleeping or concentrating",
    },
    {
      title: "Loss of interest in activities you once enjoyed",
    },
    {
      title: "Numbness or feeling disconnected from others",
    },
  ],
};
const HowGriefTherapyCanHelpData = {
  title: "How Grief Counselling Can Help",
  description: "Through grief counselling, clients can expect:",
  list: [
    {
      title: "Emotional Processing:",
      description:
        "Therapy provides the tools to process overwhelming feelings like sadness, guilt, or anger in a safe environment.",
    },
    {
      title: "Acceptance and Healing:",
      description:
        "Our goal is to help clients move from a place of intense pain to one of acceptance, while keeping the memory of their loved one or loss alive.",
    },
    {
      title: "Coping Skills:",
      description:
        "We provide coping strategies that help clients deal with future grief triggers, allowing them to navigate life more easily.",
    },
  ],
};

const timelineData = [
  {
    title: "Cognitive-Behavioural Therapy (CBT):",
    description:
      "CBT helps individuals reframe negative thought patterns that may exacerbate their grief. By addressing these thoughts, clients can move forward while honouring their loss.",
  },
  {
    title: "Emotion-Focused Therapy (EFT):",
    description:
      "EFT helps individuals identify and process difficult emotions tied to their grief. This approach promotes emotional healing and acceptance.",
  },
  {
    title: "Mindfulness and Self-Compassion:",
    description:
      "We incorporate mindfulness techniques to help clients stay present and manage overwhelming emotions with kindness and self-compassion.",
  },
];

const FaqData = {
  description:
    "Book a Grief Counselling Session in Vaughan & Thornhill If you or a loved one is struggling with grief, our grief counselling services provide the support and understanding you need. Contact us today to book an in-person or virtual session. Fill out our online contact form or schedule a free consultation to begin the healing process.",
  accordion: [
    {
        "title": "What is grief therapy for children and teens?",
        "description": "Grief therapy for children and adolescents involves specialized counseling to help young individuals process the loss of a loved one. Therapists utilize age-appropriate techniques, such as play therapy and art therapy, to assist them in expressing emotions and developing healthy coping mechanisms."
    },
    {
        "title": "How can I tell if my child needs grief counseling?",
        "description": "Signs that a child may benefit from grief counseling include prolonged sadness, withdrawal from friends and activities, changes in eating or sleeping patterns, academic decline, and expressions of guilt or hopelessness. If these behaviors persist, consulting a grief therapist can be beneficial."
    },
    {
        "title": "What should we expect during grief therapy sessions?",
        "description": "During grief therapy sessions, children engage in activities that encourage expression, such as drawing, storytelling, or role-playing. Therapists create a safe environment where children can share their feelings, ask questions about loss, and learn strategies to manage their emotions effectively."
    },
    {
        "title": "How long does grief counseling typically last for children and teens?",
        "description": "The duration of grief counseling varies based on the individual needs of the child or teen. Some may benefit from short-term therapy over a few months, while others might require longer support to navigate their grief journey. Therapists work collaboratively with families to determine the appropriate length of treatment."
    },
    {
        "title": "Are there local resources in Vaughan and Thornhill for grief therapy?",
        "description": "Yes, Young Sprouts Therapy offers specialized grief counseling for children and teens in Vaughan and Thornhill. Our experienced therapists provide compassionate support to help young individuals navigate their grief and develop resilience. Contact us to learn more about our services."
    },
  ],
};
