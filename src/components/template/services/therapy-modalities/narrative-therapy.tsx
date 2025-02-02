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

import narrativetherapyheroimage from "/public/services/narrativetherapyheroimage.png";
import narrativetherapymobile from "/public/services/narrativetherapymobile.png";
import narrativetherapyforcouplesImage from "../../../../../public/services/narrative/narrativev1.jpg";

export function NarrativeTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col lg:gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsNarrativeTherapy} />
      </div>
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            How Narrative Therapy Works
          </h2>
          <p className="text-center leading-6">
            In narrative therapy, the client and therapist work together to:
          </p>
        </div>
        <TimeLine props={TimeLineSectionData} />
      </div>
      <div className="~pt-10/16 ~pb-6/8">
        <WhyChooseUs data={WhyChooseUsData} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16 max-lg:pt-8">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={NarrativeTherapyForCouplesData} />
          )}
          image={narrativetherapyforcouplesImage}
          rtl={true}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Narrative Therapy for Kids and Tee"
        description="Narrative Therapy is particularly well-suited for kids and teens, as it allows them to engage in storytelling to better understand and express their emotions. Young people often face challenges such as bullying, academic stress, and family conflict, and narrative therapy provides a safe space for them to:"
        subDescription={
          "Narrative therapy is a creative and supportive approach that helps kids and teens take control of their own stories, leading to improved emotional health and greater confidence in navigating life's challenges."
        }
      />

      <div className="~pt-10/16">
        <WhyChooseUs data={TheBenefitsofNarrativeTherapy} row={3} />
      </div>

      <div className=" max-w-[1440px] w-full mx-auto ~px-4/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: narrativetherapyheroimage,
  title: "Narrative Therapy in Vaughan & Thornhill: Rewrite Your Story",
  description:
    "Narrative Therapy seeks to help patients identify their values and the skills associated with them.      ",
};
const HeroSectionDataMobile = {
  image: narrativetherapymobile,
  title: "Narrative Therapy in Vaughan & Thornhill: Rewrite Your Story",
  description:
    "Narrative Therapy seeks to help patients identify their values and the skills associated with them.      ",
};

const WhatIsNarrativeTherapy = {
  title: "What Is Narrative Therapy?",
  description:
    "Narrative Therapy is a collaborative approach to psychotherapy that empowers individuals to reframe the stories they tell about their lives. In narrative therapy, clients are seen as the experts of their own lives. Rather than being defined by problems or challenges, narrative therapy helps individuals distance themselves from issues and recognize their strengths, allowing them to rewrite their life stories in ways that promote healing and personal growth. At Young Sprouts Therapy, our therapists specialize in helping individuals, children, teens, couples, and families explore their personal narratives and reshape their identities in ways that support resilience and well-being. Our services are available both in-person in Vaughan and Thornhill, and through virtual therapy sessions for clients across Ontario.",
};

const timelineData = [
  {
    title: "Explore Their Own Narratives:",
    description:
      "By telling their personal stories, kids and teens can make sense of their feelings and experiences in a way that feels empowering.",
  },
  {
    title: "Build Resilience:",
    description:
      "Narrative therapy helps young people reframe difficult experiences, like bullying or anxiety, and develop strength-based narratives that foster resilience.",
  },
  {
    title: "Strengthen Family Relationships:",
    description:
      "When families are involved in the therapeutic process, narrative therapy helps create a shared understanding of each family member’s experiences, improving communication and strengthening family bonds.",
  },
];

const NarrativeTherapyForCouplesData = {
  title: "Narrative Therapy for Couples and Families",
  description:
    "Narrative Therapy is also highly effective for couples and families struggling with communication issues, conflict, or emotional distance. In family or couples therapy, the therapist helps each member explore their personal narratives and the stories they have about their relationships. By identifying and reshaping these narratives, couples and families can:",
  list: [
    {
      title: "Improve Communication:",
      description:
        "Family members learn how to communicate more openly and authentically, reducing misunderstandings and conflict.",
    },
    {
      title: "Strengthen Relationships:",
      description:
        "By focusing on shared values and positive experiences, families and couples can rebuild trust and create a more supportive, connected environment.",
    },
  ],
};

const WhyChooseUsData = {
  title: "Narrative Therapy for Trauma and Anxiety",
  list: [
    {
      title: "Reclaiming Your Identity:",
      description:
        "For those who have experienced trauma, narrative therapy helps them redefine their story in a way that acknowledges their resilience and focuses on recovery.",
    },
    {
      title: "Managing Anxiety:",
      description:
        "Clients learn to separate themselves from anxious thoughts, allowing them to focus on the strengths and resources they already possess to handle life’s challenges.",
    },
  ],
};
const TheBenefitsofNarrativeTherapy = {
  title: "The Benefits of Narrative Therapy",
  description:
    "Narrative Therapy offers numerous long-term benefits for mental health and personal development:",
  list: [
    {
      title: "Emotional Distance from Problems:",
      description:
        "By externalizing problems, clients gain emotional distance, which reduces feelings of guilt or inadequacy.",
    },
    {
      title: "Empowerment:",
      description:
        "Narrative therapy helps clients take control of their life stories, emphasizing personal agency and the ability to change.",
    },
    {
      title: "Increased Resilience:",
      description:
        "Clients develop new, empowering narratives that highlight their strengths and ability to overcome challenges, leading to greater emotional resilience.",
    },
  ],
};

const TimeLineSectionData = [
  {
    title: "Identify Dominant Narratives:",
    description:
      "The therapist helps the client identify the stories or narratives they tell about themselves that may be contributing to feelings of inadequacy, anxiety, or hopelessness.",
  },
  {
    title: "Externalize the Problem:",
    description:
      "By viewing problems as external to the individual (e.g., “The problem is anxiety, not me”), narrative therapy helps reduce self-blame and allows clients to take control of their challenges.",
  },
  {
    title: "Create Alternative Stories:",
    description:
      "Clients are encouraged to explore alternative narratives that reflect their strengths, values, and goals, enabling them to reframe their lives and move forward with confidence.",
  },
];

const FaqData = {
  description:
    "Book a Narrative Therapy Session in Vaughan & Thornhill Ready to rewrite your story and take control of your life? Contact us today to book a Narrative Therapy session at our Vaughan or Thornhill office. We offer both in-person and virtual therapy sessions to meet your needs. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
    "title": "What is Narrative Therapy and how can it benefit my child or teen?",
    "description": "Narrative Therapy is a collaborative counseling approach that separates individuals from their problems, viewing issues as external to the person. This method empowers children and teens to reshape their personal narratives, fostering resilience and personal growth."
  },
  {
    "title": "How does Narrative Therapy work with children and adolescents?",
    "description": "In Narrative Therapy sessions, therapists engage young clients in storytelling to help them articulate their experiences. By externalizing problems, children and teens can view challenges objectively, enabling them to develop effective coping strategies and re-author their life stories."
  },
  {
    "title": "What issues can Narrative Therapy address in young individuals?",
    "description": "Narrative Therapy is effective for a range of concerns, including anxiety, depression, behavioral issues, and trauma. It helps young individuals reframe their experiences, reducing the impact of negative narratives on their self-identity."
  },
  {
    "title": "Is Narrative Therapy suitable for children with autism?",
    "description": "Yes, Narrative Therapy can be beneficial for children with autism. It provides a structured approach to help them express their experiences and develop a coherent self-narrative, which can enhance communication and social skills."
  },
  {
    "title": "How can parents support their child during Narrative Therapy?",
    "description": "Parents can support their child by actively participating in therapy sessions when appropriate, encouraging open communication at home, and reinforcing the positive narratives and coping strategies developed during therapy."
  },
  {
    "title": "Is Narrative Therapy available in Vaughan and surrounding areas?",
    "description": "Yes, we offer Narrative Therapy services to children and families in Vaughan, Thornhill, North York, Richmond Hill, Markham, and nearby communities. Our clinic is located in Thornhill, making it easily accessible from these areas. We are committed to providing compassionate care to support your child's well-being."
  },
  ],
};
