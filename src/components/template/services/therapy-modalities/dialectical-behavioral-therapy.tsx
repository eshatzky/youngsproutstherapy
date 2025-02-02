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

import dialecticalheroimage from "/public/services/dialecticalheroimage.png";
import dialecticalmobile from "/public/services/dialecticalmobile.png";
import benefitfromdbt from "../../../../../public/services/dbt/dbt.jpg";
import dbtbannerimage from "/public/services/dbtbannerimage.png";

export function DialecticalTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col lg:gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsDialecticalTherapy} />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Core Principles of DBT"
        description="These modules equip clients with tools to navigate life’s challenges while maintaining emotional stability."
      />
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={BenefitFromDbt} />}
          image={benefitfromdbt}
        />
      </div>
      <div className="">
        <WhyChooseUs data={WhyChooseUsData} />
      </div>
      <div className="w-full bg-[#E6F5F7] z-40 ">
        <div className="~py-12/16 max-w-[1440px] mx-auto w-full ~px-4/10 ">
          <Banner data={BannerData} />
        </div>
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={GroupDbtSessionData} />}
          image={benefitfromdbt}
        />
      </div>
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            Benefits of DBT
          </h2>
          <p className="text-center leading-6">
            Dialectical Behaviour Therapy offers numerous long-term benefits for
            emotional well-being and mental health:
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
  image: dialecticalheroimage,
  title: "Dialectical Behaviour Therapy (DBT) in Vaughan & Thornhill",
  description:
    "DBT is a type of cognitive-behavioral therapy that helps people manage their emotions and develop healthy coping mechanisms.",
};
const HeroSectionDataMobile = {
  image: dialecticalmobile,
  title: "Dialectical Behaviour Therapy (DBT) in Vaughan & Thornhill",
  description:
    "DBT is a type of cognitive-behavioral therapy that helps people manage their emotions and develop healthy coping mechanisms.",
};

const WhatIsDialecticalTherapy = {
  title: "What Is Dialectical Behaviour Therapy (DBT)?",
  description:
    "Dialectical Behaviour Therapy (DBT) is a highly structured, evidence-based therapy designed to help individuals manage intense emotions, reduce impulsive behaviours, and improve relationships. Originally developed to treat borderline personality disorder (BPD), DBT has since been proven effective for a wide range of mental health conditions, including self-harm, anxiety, addiction, and eating disorders. At Young Sprouts Therapy, we offer specialized DBT programs for teens and adults who struggle with emotional regulation, impulsivity, and distress tolerance. Our services are available in-person in Vaughan and Thornhill, as well as through virtual sessions, allowing you or your loved ones to access support conveniently.",
};

const timelineData = [
  {
    title: "Mindfulness:",
    description:
      "Teaches clients to stay present and grounded, reducing emotional overwhelm.",
  },
  {
    title: "Distress Tolerance:",
    description:
      "Provides practical skills for managing crises and tolerating emotional distress without resorting to harmful behaviours.",
  },
  {
    title: "Emotion Regulation",
    description:
      "Helps individuals identify and regulate intense emotions, preventing emotional outbursts.",
  },
  {
    title: "Interpersonal Effectiveness:",
    description:
      "Builds communication and relationship skills to manage conflicts and improve relationships.",
  },
];

const BenefitFromDbt = {
  title: "Who Can Benefit from DBT?",

  list: [
    {
      title:
        "Borderline Personality Disorder (BPD) and Emotional Dysregulation",
      description:
        "DBT helps individuals with BPD manage mood swings, improve emotional regulation, and reduce impulsive behaviours such as self-harm and suicidal ideation.",
    },
    {
      title: "Self-Harm and Suicidal Ideation",
      description:
        "For those engaging in self-harming behaviours or experiencing suicidal thoughts, DBT provides crisis management tools to prevent harm and cope with overwhelming emotions.",
    },
    {
      title: "Trauma and PTSD",
      description:
        "DBT’s structured approach helps individuals process trauma and regulate intense emotions, providing them with the skills needed to move forward in their recovery.",
    },
    {
      title: "Addiction and Eating Disorders",
      description:
        "DBT is particularly effective for individuals struggling with addiction or disordered eating. It teaches clients to manage urges, tolerate distress, and make healthier choices.",
    },
    {
      title: "Anxiety and Impulsivity in Teens",
      description:
        "DBT offers teens struggling with anxiety, stress, and impulsivity the tools to manage their emotions and improve their decision-making.",
    },
  ],
};
const GroupDbtSessionData = {
  title: "Group DBT Sessions for Emotional Support",
  description:
    "We also offer group DBT sessions for teens and adults, providing a supportive environment where individuals can practice their new skills with others who face similar challenges. Group therapy helps participants:",
  list: [
    {
      title: "Build Emotional Resilience:",
      description:
        "Group DBT encourages members to support each other, helping them apply distress tolerance and emotion regulation strategies in real-world situations.",
    },
    {
      title: "Develop Interpersonal Skills:",
      description:
        "Participants practice relationship-building and communication techniques, improving their ability to manage interpersonal conflicts.",
    },
  ],
};

const WhyChooseUsData = {
  title: "Integrating DBT with Other Therapies",
  description:
    "At Young Sprouts Therapy, we often combine DBT with other therapeutic approaches, such as Cognitive-Behavioural Therapy (CBT) and mindfulness, to create a well-rounded treatment plan. By integrating DBT with CBT, clients learn how to both accept their emotions and actively change unhelpful thought patterns.",
  list: [
    {
      title: "Mindfulness and Emotional Resilience",
      description:
        "Integrating mindfulness into DBT sessions helps clients stay present, regulate emotions, and approach life with greater clarity.",
    },
    {
      title: "Cognitive-Behavioural Therapy (CBT)",
      description:
        "Combining CBT with DBT offers clients the best of both worlds—learning to accept their emotions while also actively changing negative thought patterns.",
    },
  ],
};

const BannerData = {
  title: "DBT for Teens and Family Involvement",
  description:
    "Family involvement is a crucial aspect of DBT for teens. At Young Sprouts Therapy, we encourage families to participate in the therapy process by learning DBT skills to support their child’s progress at home. This ensures that teens have the tools and environment they need to apply DBT strategies to reduce impulsivity, manage social stress, and improve family relationships.",
  image: dbtbannerimage,
};

const TimeLineSectionData = [
  {
    title: "Improved Emotion Regulation",
    description:
      "DBT helps individuals learn how to manage intense emotions, reducing emotional outbursts and impulsive behaviour.",
  },
  {
    title: "Reduced Self-Harm and Suicidal Thoughts",
    description:
      "By providing practical crisis management skills, DBT helps individuals reduce self-harming behaviours and suicidal ideation.",
  },
  {
    title: "Enhanced Relationships",
    description:
      "Clients learn how to communicate more effectively, reduce conflict, and build stronger relationships with loved ones.",
  },
];

const FaqData = {
  description:
    "Book a DBT Session in Vaughan & Thornhill Are you or a loved one struggling with emotional regulation or self-harm? Contact us today to book a Dialectical Behaviour Therapy (DBT) session at our Vaughan or Thornhill office. We offer both in-person and virtual therapy to provide flexible support. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
    "title": "What is Dialectical Behavior Therapy (DBT) and how can it help my child or teen?",
    "description": "DBT is an evidence-based psychotherapy that combines cognitive-behavioral techniques with concepts of mindfulness and acceptance. It is effective in helping children and adolescents manage intense emotions, reduce self-destructive behaviors, and improve relationships."
  },
  {
    "title": "What issues can DBT address in children and adolescents?",
    "description": "DBT is particularly effective for young individuals dealing with emotional dysregulation, self-harm, suicidal ideation, depression, anxiety, and behavioral issues. It equips them with skills to handle distress and navigate interpersonal relationships."
  },
  {
    "title": "What does a typical DBT program for adolescents involve?",
    "description": "A comprehensive DBT program for adolescents typically includes individual therapy sessions, group skills training, and family involvement. The therapy focuses on teaching skills in mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness."
  },
  {
    "title": "How long does DBT treatment usually last for teens?",
    "description": "The duration of DBT treatment varies based on individual needs, but a standard program often runs for about 16 to 24 weeks. Progress depends on the commitment to practicing skills and active participation in sessions."
  },
  {
    "title": "Is parental involvement necessary in my child's DBT treatment?",
    "description": "Yes, parental involvement is a crucial component of DBT for adolescents. Parents are often included in skills training to support their child's progress and to learn strategies to reinforce the skills at home."
  },
  {
    "title": "Is DBT available in Vaughan and surrounding areas?",
    "description": "Yes, we offer DBT services to children and families in Vaughan, Thornhill, North York, Richmond Hill, Markham, and nearby communities. Our clinic is located in Thornhill, making it easily accessible from these areas. We are committed to providing compassionate care to support your child's mental health."
  },
  ],
};
