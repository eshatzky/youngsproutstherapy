import {
  BlockWithPoints,
  Faq,
  HeroSection,
  OurApproach,
  TimeLine,
  TwoFlexSection,
  WhatIsSection,
} from "@/components/organism/services";

import traumatherapyhomepageimage from "/public/services/traumatherapyhomepageimage.webp";
import traumatherapymobile from "/public/services/traumatherapymobile.png";
import trumatherapyaboutimage from "../../../../../public/services/truma/traumav1.jpg";
import howtraumatherapycanhelp from "../../../../../public/services/truma/traumav2.jpg";

export function TraumaTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col lg:gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsTraumaTherapy} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16 max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={TraumaTherapyData} />}
          image={trumatherapyaboutimage}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Trauma Therapy for Adults"
        description="Trauma can have long-lasting effects on adults, affecting their mental health, relationships, and everyday functioning. Our trauma therapy for adults focuses on:"
      />
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1250.5px] mx-auto w-full ~pt-10/16 ~px-4/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            Types of Trauma We Treat
          </h2>
          <p className="text-center leading-6 max-w-[846px] mx-auto">
            We work with clients experiencing a wide range of trauma, including:
          </p>
        </div>
        <TimeLine props={TimeLineSectionData} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~pt-10/16">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={HowTraumaTherapyCanHelpData} />
          )}
          image={howtraumatherapycanhelp}
        />
      </div>
      <div className=" max-w-[1440px] w-full mx-auto ~px-4/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: traumatherapyhomepageimage,
  title: "Trauma Therapy in Vaughan & Thornhill",
  description:
    "Compassionate support to help you heal from the past and regain a sense of safety. ",
};
const HeroSectionDataMobile = {
  image: traumatherapymobile,
  title: "Trauma Therapy in Vaughan & Thornhill",
  description:
    "Compassionate support to help you heal from the past and regain a sense of safety. ",
};

const WhatIsTraumaTherapy = {
  title: "What Is Trauma Therapy?",
  description:
    "Trauma therapy provides support and healing for individuals who have experienced distressing or life-altering events. Trauma can arise from various experiences such as accidents, abuse, or loss, and often results in emotional and physical symptoms like anxiety, flashbacks, and difficulty functioning in daily life. At Young Sprouts Therapy, we specialize in trauma recovery using creative approaches like play therapy, sandtray therapy, and art therapy, offering personalized care for children, teens, and adults. Our goal is to provide a safe space where clients can process their emotions and develop resilience. We offer in-person sessions in Vaughan and Thornhill as well as virtual options.",
};

const TimeLineSectionData = [
  {
    title: "Childhood Trauma:",
    description:
      "Events such as abuse, neglect, or witnessing domestic violence can have long-term effects on children and teens. Our trauma therapy is tailored to meet the unique needs of younger clients.",
  },
  {
    title: "Accidents and Medical Trauma:",
    description:
      "Individuals who have experienced accidents or medical procedures may struggle with trauma-related anxiety and fear.",
  },
  {
    title: "PTSD:",
    description:
      "We help individuals suffering from Post-Traumatic Stress Disorder (PTSD) process their trauma and reduce distressing symptoms like flashbacks and intrusive thoughts.",
  },
];
const TraumaTherapyData = {
  title: "Trauma Therapy for Children and Teens",

  list: [
    {
      title: "Play Therapy:",
      description:
        "Play is a natural way for children to express emotions they may not have the words for. Play therapy helps children communicate their feelings, process trauma, and develop healthier ways of coping.",
    },
    {
      title: "Sandtray Therapy:",
      description:
        "This powerful, non-verbal approach allows children and teens to use symbolic play to explore their trauma and build emotional understanding. By arranging miniatures in a sandbox, they can express feelings in a safe and controlled environment.",
    },
    {
      title: "Art Therapy:",
      description:
        "Through art, children and teens can explore their emotions and represent their trauma in creative ways. Art therapy is particularly effective for those who may find it difficult to verbalize their experiences.",
    },
  ],
};
const HowTraumaTherapyCanHelpData = {
  title: "How Trauma Therapy Can Help",
  description:
    "Through our trauma therapy programs, clients can expect to see the following benefits:",
  list: [
    {
      title: "Emotional Healing:",
      description:
        "Therapy helps individuals work through overwhelming emotions, reducing the intensity of trauma-related feelings like fear, anger, and sadness.",
    },
    {
      title: "Improved Coping Skills:",
      description:
        "Clients develop strategies to manage stress and anxiety, enabling them to regain control over their lives.",
    },
    {
      title: "Greater Resilience:",
      description:
        "By processing their trauma, clients become more emotionally resilient, better equipped to handle future challenges.",
    },
  ],
};

const timelineData = [
  {
    title: "Cognitive-Behavioural Therapy (CBT):",
    description:
      "CBT helps clients reframe negative thought patterns and reduce symptoms of post-traumatic stress disorder (PTSD), anxiety, and depression that stem from trauma.",
  },
  {
    title: "Emotion-Focused Therapy (EFT):",
    description:
      "EFT enables clients to work through their emotions related to trauma, encouraging emotional healing and understanding.",
  },
  {
    title: "Mindfulness-Based Therapy:",
    description:
      "Mindfulness techniques help adults stay grounded in the present moment, reducing symptoms like flashbacks and hypervigilance.",
  },
];

const FaqData = {
  description:
    "If you or your child is struggling with trauma, our trauma therapy programs can provide the support and healing you need. Contact us today to book an in-person or virtual session. Fill out our online contact form or schedule a free consultation to begin your journey to recovery.",
  accordion: [
    {
    "title": "What is trauma therapy and how can it help my child or teen?",
    "description": "Trauma therapy is a form of mental health treatment designed to help children and adolescents process and recover from distressing experiences. It aims to reduce trauma-related symptoms, improve emotional regulation, and restore a sense of safety and normalcy."
  },
  {
    "title": "What are the signs that my child may need trauma therapy?",
    "description": "Children and teens who have experienced trauma may exhibit symptoms such as anxiety, depression, behavioral changes, sleep disturbances, or withdrawal from activities they once enjoyed. If these symptoms persist, seeking professional help is advisable."
  },
  {
    "title": "What types of trauma therapy are effective for children and adolescents?",
    "description": "Evidence-based therapies for young individuals include Trauma-Focused Cognitive Behavioral Therapy (TF-CBT), Eye Movement Desensitization and Reprocessing (EMDR), and play therapy. These approaches are tailored to the developmental needs of children and teens."
  },
  {
    "title": "How can I support my child during trauma therapy?",
    "description": "Parental involvement is crucial in the healing process. Providing a stable and supportive environment, actively participating in therapy sessions when appropriate, and maintaining open communication with your child can significantly aid their recovery."
  },
  {
    "title": "Is trauma therapy available in Vaughan and surrounding areas?",
    "description": "Yes, we offer trauma therapy services to children and families in Vaughan, Thornhill, North York, Richmond Hill, Markham, and nearby communities. Our clinic is located in Thornhill, making it easily accessible from these areas. We are committed to providing compassionate care to support your child's well-being."
  },
  ],
};
