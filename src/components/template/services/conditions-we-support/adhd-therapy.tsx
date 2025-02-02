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

import adhdheroImage from "/public/services/adhdheroImage.webp";
import adhdmobile from "/public/services/adhdmobile.png";
import adhdcoaching from "../../../../../public/services/adhd/adhd.jpg";

export function AdhdTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col lg:gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsAdHd} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16 max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={AdhdTherapyData} />}
          image={adhdcoaching}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="ADHD Coaching for Adults"
        description="Many adults with ADHD face ongoing difficulties with time management, organization, and emotional regulation. Our ADHD clinic offers specialized ADHD coaching for adults, focusing on executive functioning and building the skills necessary for success in work and personal life. Our ADHD coaching for adults includes:"
      />
      <div className="py-16">
        <WhyChooseUs data={WhyChooseUsData} />
      </div>
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1250.5px] mx-auto w-full ~px-4/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            Benefits of ADHD Coaching and Therapy
          </h2>
          <p className="text-center leading-6 max-w-[846px] mx-auto">
            At Young Sprouts Therapy, our ADHD coaching and ADHD therapy
            programs offer long-term benefits for both children and adults.
            Clients can expect to see improvements in:
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
  image: adhdheroImage,
  title: "ADHD Coaching & Therapy in Vaughan & Thornhill",
  description:
    "Treatment and support to help individuals of all ages navigate the challenges of Attention Deficit Hyperactivity Disorder (ADHD) & Attention Deficit Disorder (ADD).",
};
const HeroSectionDataMobile = {
  image: adhdmobile,
  title: "ADHD Coaching & Therapy in Vaughan & Thornhill",
  description:
    "Treatment and support to help individuals of all ages navigate the challenges of Attention Deficit Hyperactivity Disorder (ADHD) & Attention Deficit Disorder (ADD).",
};

const WhatIsAdHd = {
  title: "What Is ADHD Coaching?",
  description:
    "ADHD Coaching focuses on helping individuals with Attention Deficit Hyperactivity Disorder (ADHD) develop practical skills to manage the daily challenges associated with ADHD. Whether it’s improving focus, enhancing time management, or controlling impulsivity, ADHD coaching is goal-oriented and provides clients with concrete strategies to improve their productivity and quality of life. At Young Sprouts Therapy, we provide ADHD coaching as part of our comprehensive services at our ADHD clinic. Our team works with children, teens, and adults to create personalized coaching plans that help clients succeed at school, work, and home. We offer both in-person ADHD therapy sessions in Vaughan and Thornhill, as well as virtual coaching for your convenience.",
};

const AdhdTherapyData = {
  title: "ADHD Therapy & Coaching for Children and Teens",
  description:
    "ADHD therapy and coaching for children and teens at our ADHD clinic focuses on managing behavioral challenges and improving academic performance. We provide structured support for families, ensuring that children receive guidance both in therapy and at school. Our ADHD coaching programs for young clients include:",
  list: [
    {
      title: "School Collaboration:",
      description:
        "We partner with schools to ensure students with ADHD receive appropriate support and accommodations. Our ADHD coaches work with teachers to implement strategies that help improve focus and behavior in the classroom.",
    },
    {
      title: "Social Skills Coaching:",
      description:
        "Children and teens with ADHD often face challenges in social interactions. Through ADHD coaching, we help young clients build stronger relationships by improving their communication and social skills.",
    },
    {
      title: "Behavioral Therapy:",
      description:
        "By combining ADHD therapy with behavioral interventions, we help children and teens manage hyperactivity and impulsivity, fostering better behavior at home and in school.",
    },
  ],
};

const timelineData = [
  {
    title: "Time Management and Organization:",
    description:
      "We help clients develop personalized systems for managing their schedules, reducing procrastination, and completing tasks on time",
  },
  {
    title: "Emotional Regulation Coaching:",
    description:
      "Adults with ADHD may struggle with frustration and impulsive decision-making. Our coaches provide tools to improve emotional control and stress management in everyday situations.",
  },
  {
    title: "Career and Workplace Coaching:",
    description:
      "Our ADHD coaching also focuses on professional success, offering strategies for improving focus, managing distractions, and increasing productivity at work.",
  },
  {
    title: "Comprehensive ADHD Services at Our Clinic",
    description:
      "Our ADHD clinic in Vaughan and Thornhill offers a wide range of ADHD-related services to support clients of all ages. From ADHD coaching to behavioral therapy, we create individualized plans that address each client's unique needs.",
  },
  {
    title: "Executive Functioning Coaching:",
    description:
      "Clients learn essential skills like planning, goal-setting, and task management to improve their executive functioning, a critical area often impacted by ADHD.",
  },
  {
    title: "Family Coaching and Support:",
    description:
      "We work closely with families to provide guidance on how to support a loved one with ADHD. Family involvement ensures consistency in the strategies learned during coaching or therapy sessions.",
  },
];

const TimeLineSectionData = [
  {
    title: "Focus and Productivity:",
    description:
      "ADHD coaching helps clients develop strategies for staying on task, reducing distractions, and increasing productivity.",
  },
  {
    title: "Emotional Regulation:",
    description:
      "Through ADHD therapy, clients learn how to manage their emotions more effectively, reducing frustration and impulsive reactions.",
  },
  {
    title: "Academic and Career Success:",
    description:
      "Both students and professionals benefit from the skills learned in ADHD coaching, which directly impacts their performance at school or work.",
  },
];

const WhyChooseUsData = {
  title: "ADHD Therapy for Emotional and Behavioral Challenges",
  description:
    "While ADHD coaching focuses on skill-building and practical strategies, our ADHD therapy programs target emotional and behavioral challenges associated with ADHD. For clients dealing with anxiety, depression, or impulsivity, our therapists provide tailored ADHD therapy that focuses on:",
  list: [
    {
      title: "Cognitive-Behavioural Therapy (CBT):",
      description:
        "CBT helps clients challenge negative thought patterns and develop healthier emotional responses, reducing symptoms of frustration and stress associated with ADHD.",
    },
    {
      title: "Mindfulness Techniques:",
      description:
        "Incorporating mindfulness helps clients with ADHD stay focused, manage stress, and reduce impulsivity by improving self-awareness.",
    },
  ],
};

const FaqData = {
  description:
    "Book a Group Therapy Session for Kids and Teens in Vaughan & Thornhill Are you ready to help your child or teen build social skills and emotional resilience? Contact us today to book a group therapy session at our Vaughan or Thornhill office. We offer both in-person and virtual sessions to meet your family’s needs. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
  {
    "title": "What is the difference between ADHD coaching and ADHD therapy?",
    "description": "ADHD coaching focuses on practical strategies like time management, organization, and goal-setting to help clients manage their ADHD in daily life. ADHD therapy, on the other hand, addresses the emotional and behavioral challenges associated with ADHD, such as impulsivity, anxiety, and depression."
  },
  {
    "title": "How does ADHD coaching help kids and teens?",
    "description": "ADHD coaching helps children and teens build executive functioning skills, develop better study habits, and improve social interactions. It provides personalized strategies to help them succeed in school and daily life."
  },
  {
    "title": "How do I know if my child needs ADHD coaching or therapy?",
    "description": "If your child struggles with attention, organization, impulsivity, or emotional regulation that impacts their daily life and academic performance, they may benefit from ADHD coaching or therapy. Consulting with a professional can provide clarity and guidance."
  },
  {
    "title": "Can ADHD coaching or therapy be done virtually?",
    "description": "Yes, we offer virtual ADHD coaching and therapy sessions, providing flexibility for children and teens to receive support from the comfort of home."
  },
  {
    "title": "How long does my child need ADHD coaching or therapy?",
    "description": "The duration varies based on the child's needs and progress. Some children benefit from short-term interventions, while others may require ongoing support to achieve their goals."
  },
  {
    "title": "Does insurance cover ADHD coaching and therapy?",
    "description": "Coverage depends on your insurance provider and plan. At Young Sprouts Therapy, our ADHD therapy services are provided by Registered Psychotherapists and Registered Social Workers, which are covered under many extended health benefit plans. We recommend checking with your provider to confirm your coverage."
  },
  {
    "title": "Can parents be involved in their child’s ADHD coaching or therapy?",
    "description": "Yes, involving parents is encouraged. Parent training can help families better understand ADHD and support their child's development effectively."
  },
  ],
};
