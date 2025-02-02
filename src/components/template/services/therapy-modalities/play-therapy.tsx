import {
  BlockWithPoints,
  Faq,
  HeroSection,
  TimeLine,
  TwoFlexSection,
  WhatIsSection,
  WhyChooseUs,
} from "@/components/organism/services";

import playtherapyheroimage from "/public/services/playtherapyheroimage.png";
import playtherapymobile from "/public/services/playtherapymobile.png";
import playtherapyforchildren from "/public/services/playtherapyforchildren.png";
import familycentredplayimage from "/public/services/familycentredplayimage.png";
import whatistheraplay from "/public/services/whatistheraplay.png";
import parentchildplaytherapyimage from "/public/services/parentchildplaytherapyimage.png";

export function PlayTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col lg:gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsPlayTherapy} />
      </div>
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            How Play Therapy Works
          </h2>
          <p className="text-center leading-6">
            In play therapy, children use toys, games, and creative activities
            to express their thoughts and feelings. Through these activities,
            therapists help children:
          </p>
        </div>
        <TimeLine props={TimeLineSectionData} />

        <p className="text-center leading-6 mt-6">
          Play therapy allows children to externalize their struggles, creating
          a non-threatening environment where they feel safe and understood.
        </p>
      </div>
      <div className="pt-10 ~pb-6/8">
        <WhyChooseUs data={WhyChooseUsData} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 py-10">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={PlaytherapyForChildren} />
          )}
          image={playtherapyforchildren}
          rtl={true}
        />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 py-10 max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={FamilyCenteredPlayData} />
          )}
          image={familycentredplayimage}
        />
      </div>
      <div className="~pt-10/16 max-lg:pt-0">
        <WhyChooseUs
          subDescription={
            "This flexible approach ensures that each child receives the therapeutic support that best suits their unique needs."
          }
          data={TheBenefitsofNarrativeTherapy}
          showBg={true}
        />
      </div>

      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 py-10">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={WhatisTheraplayData} />}
          image={whatistheraplay}
          rtl={true}
        />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 py-10 max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={ParentChildPlayTherapyData} />
          )}
          image={parentchildplaytherapyimage}
        />
      </div>
      <div className="~pt-10/16 max-lg:pt-0">
        <WhyChooseUs data={BenefitsofPlayTherapy} showBg={true} row={3} />
      </div>

      <div className=" max-w-[1440px] w-full mx-auto ~px-4/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: playtherapyheroimage,
  title: "Play Therapy for Children in Vaughan & Thornhill",
  description:
    "Play Therapy uses play to help children communicate their feelings and deal with emotional issues.",
};
const HeroSectionDataMobile = {
  image: playtherapymobile,
  title: "Play Therapy for Children in Vaughan & Thornhill",
  description:
    "Play Therapy uses play to help children communicate their feelings and deal with emotional issues.",
};

const WhatIsPlayTherapy = {
  title: "What Is Play Therapy?",
  description:
    "Play Therapy is a therapeutic approach that helps children explore their emotions, develop problem-solving skills, and express themselves in a safe, creative environment. By using play as a form of communication, therapists guide children in processing difficult emotions and building resilience. Play therapy is particularly effective for addressing anxiety, behavioural issues, trauma, and developmental challenges. At Young Sprouts Therapy, our licensed therapists specialize in play therapy for children aged 3 to 12. We offer both directive and non-directive play therapy, tailoring our approach to each child's unique needs. Our sessions are available in-person in Vaughan and Thornhill, with virtual options for family consultations and parent coaching.",
};

const PlaytherapyForChildren = {
  title: "Play Therapy for Children with Autism and Behavioural Challenges",
  description:
    "Play therapy is particularly effective for children with autism spectrum disorder (ASD) and related behavioural challenges. Our therapists use autism-focused play therapy techniques to support children in:",
  subTitle:
    "By creating a supportive environment, we help children with ASD express themselves and develop key life skills.",
  list: [
    {
      title: "Social Skills Development:",
      description:
        "Play therapy encourages children with autism to engage in activities that promote social interaction, helping them improve their communication skills.",
    },
    {
      title: "Emotional Regulation:",
      description:
        "Therapists work with children to build emotional awareness and regulate their responses to frustration or overstimulation.",
    },
  ],
};

const WhyChooseUsData = {
  title: "Play Therapy for Trauma and Anxiety",
  list: [
    {
      title: "Trauma Recovery:",
      description:
        "Through play, children can safely explore traumatic experiences and begin the healing process, supported by the guidance of a compassionate therapist.",
    },
    {
      title: "Managing Anxiety:",
      description:
        "Play therapy helps children externalize their anxious thoughts, allowing them to develop coping skills and reduce their anxiety.",
    },
  ],
};
const TheBenefitsofNarrativeTherapy = {
  title: "Directive and Non-Directive Play Therapy",
  description:
    "We offer both directive and non-directive play therapy, depending on your child's needs:",
  list: [
    {
      title: "Directive Play Therapy:",
      description:
        "In directive play therapy, the therapist takes a more structured approach, guiding the child through specific activities to address targeted emotional or behavioural challenges.",
    },
    {
      title: "Non-Directive Play Therapy:",
      description:
        "In non-directive play therapy, the child leads the session, allowing the therapist to observe and support the child’s natural emotional expression.",
    },
  ],
};

const BenefitsofPlayTherapy = {
  title: "Benefits of Play Therapy",

  list: [
    {
      title: "Improved Emotional Regulation:",
      description:
        "Children learn how to manage their emotions more effectively, reducing tantrums, anxiety, and aggressive behaviours.",
    },
    {
      title: "Enhanced Problem-Solving Skills:",
      description:
        "Through play, children explore different solutions to challenges, boosting their confidence and independence.",
    },
    {
      title: "Stronger Relationships:",
      description:
        "Through play, children explore different solutions to challenges, boosting their confidence and independence.",
    },
  ],
};

const FamilyCenteredPlayData = {
  title: "Family-Centred Play Therapy",
  description:
    "At Young Sprouts Therapy, we believe that family involvement is crucial to the success of play therapy. We offer family consultations and parent coaching to help caregivers support their child's progress. Our family-centered approach includes:",
  subTitle:
    "Family involvement allows us to create a consistent, supportive environment for each child's growth.",
  list: [
    {
      title: "Parent and Caregiver Support:",
      description:
        "Parents learn techniques to reinforce the skills developed in play therapy, ensuring that therapeutic progress continues at home.",
    },
    {
      title: "Strengthening Parent-Child Relationships:",
      description:
        "Family sessions help build emotional bonds between parents and children, improving communication and reducing conflict.",
    },
  ],
};
const WhatisTheraplayData = {
  title: "What Is Theraplay?",
  description:
    "Theraplay is a specialized form of play therapy designed to enhance parent-child relationships by focusing on playful, structured interactions. Theraplay sessions help children develop feelings of safety and trust while fostering emotional connection between caregivers and children. At Young Sprouts Therapy, our Theraplay sessions are designed to:",
  subTitle:
    "Theraplay is particularly effective for children who struggle with attachment issues, anxiety, or emotional dysregulation.",
  list: [
    {
      title: "Build Emotional Security:",
      description:
        "Theraplay encourages physical closeness and interactive play to foster emotional safety and attachment between children and caregivers.",
    },
    {
      title: "Improve Behavioural Regulation:",
      description:
        "Through structured play, children learn to manage their emotions and behaviour, leading to better regulation of impulses and frustration.",
    },
  ],
};
const ParentChildPlayTherapyData = {
  title: "Parent-Child Play Therapy",
  description:
    "Parent-Child Play Therapy is designed to strengthen the bond between parents and their children by encouraging interactive play that builds trust, improves communication, and fosters emotional connection. In these sessions, parents are coached to:",
  subTitle:
    "Family involvement allows us to create a consistent, supportive environment for each child's growth.",
  list: [
    {
      title: "Communicate Through Play:",
      description:
        "Learn how to use play to better understand their child’s emotions and behaviours, opening new pathways for communication.",
    },
    {
      title: "Support Emotional Growth:",
      description:
        "Parents are guided on how to reinforce emotional regulation and problem-solving skills through structured play at home.",
    },
  ],
};

const TimeLineSectionData = [
  {
    title: "Process Emotions:",
    description:
      "Children learn how to express and process emotions like anger, sadness, and fear, especially when they have difficulty verbalizing their feelings.",
  },
  {
    title: "Develop Problem-Solving Skills:",
    description:
      "Play therapy encourages kids to explore solutions to challenges, building self-confidence and resilience.",
  },
  {
    title: "Strengthen Emotional Regulation:",
    description:
      "Therapists guide children in managing difficult emotions, leading to improved behaviour and emotional well-being.",
  },
];

const FaqData = {
  description:
    "Book a Play Therapy Session in Vaughan & Thornhill Ready to rewrite your story and take control of your life? Contact us today to book a Narrative Therapy session at our Vaughan or Thornhill office. We offer both in-person and virtual therapy sessions to meet your needs. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
    "title": "What is play therapy and how does it benefit my child?",
    "description": "Play therapy is a structured, theoretically based approach that leverages the natural communicative and learning processes of children. It helps them express feelings, develop problem-solving skills, and modify behaviour through play. This method is effective for children facing various emotional and behavioural challenges."
  },
  {
    "title": "How do I know if my child needs play therapy?",
    "description": "If your child is experiencing moodiness, engaging in worrisome behaviours, or seems different from their usual self, it might be beneficial to consult with a play therapist. Play therapy has been shown to be effective with minor to severe emotional and behavioural problems."
  },
  {
    "title": "What can we expect during a play therapy session?",
    "description": "Each play therapy session typically lasts about 30 to 50 minutes and is held weekly. The therapist provides a safe environment with developmentally appropriate materials, allowing the child to express themselves freely through play. The number of sessions varies based on individual needs."
  },
  {
    "title": "Are parents involved in the play therapy process?",
    "description": "Absolutely. We believe in a family-centred approach. Our therapists work closely with parents to ensure a strong support system at home, providing guidance on how to support your child's progress outside of sessions."
  },
  {
    "title": "Is play therapy available in Vaughan and surrounding areas?",
    "description": "Yes, we offer play therapy services to children and families in Vaughan, Thornhill, North York, Richmond Hill, Markham, and nearby communities. Our clinic is located in Thornhill, making it easily accessible from these areas. Our goal is to provide accessible and compassionate care to support your child's well-being."
  },
  {
    "title": "What is Theraplay and how can it help my young child?",
    "description": "Theraplay is a child and family therapy that focuses on building and enhancing attachment, self-esteem, trust, and joyful engagement. It is particularly effective for children aged 6 and under, using structured play to strengthen the parent-child relationship and support the child's emotional development."
  },
  ],
};
