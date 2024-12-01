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

import sftheroimage from "/public/services/sftheroimage.png";
import techniqueUsedimage from "/public/services/techniqueUsedimage.png";

export function SolutionFocusedTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <HeroSection props={HeroSectionData} />
        <WhatIsSection data={WhatIsDialecticalTherapy} />
      </div>
      <div className=" ~pb-6/8">
        <WhyChooseUs
          subDescription="This goal-oriented approach empowers clients to take control of their own progress, helping them create actionable steps to improve their mental well-being."
          data={howPCITWorks}
          row={3}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Who Can Benefit from Solution-Focused Therapy?"
        description="Solution-Focused Therapy is effective for a wide range of mental health challenges and life situations. At Young Sprouts Therapy, we provide SFT for:"
      />
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 py-10">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={TechniquesForSolutionFocusedTherapy} />
          )}
          image={techniqueUsedimage}
        />
      </div>
      <WhyChooseUs data={IntegratingSFT} showBg={true} />
     
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1440px] w-full mx-auto ~px-4/10 pt-10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
          Benefits of Solution-Focused Therapy
          </h2>
          <p className="text-center leading-6">
          Solution-Focused Therapy offers several unique benefits, including:
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
  image: sftheroimage,
  title: " (SFT) in Vaughan & Thornhill: Find Solutions, Achieve Goals",
  description:
    "Solution-Focused Therapy is future-focused and goal-directed, focusing on solutions rather than problems.",
};

const WhatIsDialecticalTherapy = {
  title: "What Is Solution-Focused Therapy (SFT)?",
  description:
    "Solution-Focused Therapy (SFT) is a brief, goal-oriented therapeutic approach that focuses on solutions rather than problems. SFT helps clients set specific, achievable goals and encourages them to envision their ideal future. Instead of focusing on the root causes of challenges, SFT works on finding practical solutions and leveraging existing strengths to help clients achieve their goals. At Young Sprouts Therapy, our trained therapists specialize in solution-focused therapy for children, teens, and adults. Whether you’re dealing with anxiety, depression, or relationship issues, SFT offers a structured and positive approach to improving your mental health. We offer in-person sessions in Vaughan and Thornhill, as well as virtual therapy options across Ontario.",
};

const timelineData = [
  {
    title: "Anxiety and Stress",
    description:
      "SFT helps individuals reduce anxiety by focusing on solutions rather than dwelling on fears. By setting achievable goals and taking small steps, clients can reduce their stress and improve emotional resilience.",
  },
  {
    title: "Depression",
    description:
      "For individuals struggling with depression, SFT offers a positive, future-focused approach to managing symptoms. By identifying small, achievable actions, clients can experience gradual improvements in mood and outlook.",
  },
  {
    title: "Family and Relationship Issues",
    description:
      "SFT is particularly effective in family therapy and relationship counselling. By focusing on what works well in the relationship and building on those strengths, couples and families can resolve conflicts and improve communication.",
  },
];

const TechniquesForSolutionFocusedTherapy = {
  title: "Techniques Used in Solution-Focused Therapy",
  description:
    "SFT employs several specific techniques that help clients move toward their goals:",
  list: [
    {
      title: "Miracle Question",
      description:
        "The therapist asks the client to imagine a future where their problem no longer exists, helping the client identify specific goals and visualize the changes they want to make.",
    },
    {
      title: "Scaling Questions",
      description:
        "Clients rate their progress or well-being on a scale from 1 to 10, helping both the client and therapist track progress and set future goals.",
    },
    {
      title: "Finding Exceptions",
      description:
        "The therapist helps the client identify moments in their life when their problem was less severe, guiding them to discover solutions that already work.",
    },
  ],
};

const howPCITWorks = {
  title: "How Does Solution-Focused Therapy Work?",
  description:
    "In Solution-Focused Therapy, the therapist works collaboratively with the client to:",
  list: [
    {
      title: "Set Clear, Achievable Goals:",
      description:
        "Children learn how to manage their emotions more effectively, reducing tantrums, anxiety, and aggressive behaviours.",
    },
    {
      title: "Identify Strengths and Resources:",
      description:
        "SFT helps clients recognize their own strengths and existing resources, allowing them to build solutions from within.",
    },
    {
      title: "Find Exceptions to Problems:",
      description:
        "By identifying times when a problem was less intense or not present, clients can discover practical solutions that already exist in their lives.",
    },
  ],
};

const TimeLineSectionData = [
  {
    title: "Quick Results",
    description:
      "SFT is designed to be a brief therapy, often producing noticeable results within a few sessions",
  },
  {
    title: "Positive Focus",
    description:
      "By focusing on strengths and solutions, SFT provides clients with a hopeful and motivating approach to improving their mental health.",
  },
  {
    title: "Practical Problem-Solving",
    description:
      "Clients leave SFT sessions with clear, actionable steps they can take to improve their well-being immediately.",
  },
];

const IntegratingSFT = {
  title: "Integrating SFT with Other Therapies",
  description:
    "At Young Sprouts Therapy, we often combine Solution-Focused Therapy (SFT) with other therapeutic approaches like Cognitive-Behavioural Therapy (CBT) and mindfulness to provide comprehensive mental health support. By integrating SFT with these modalities, clients can benefit from both the problem-solving focus of SFT and the behavioral tools of CBT.",
  list: [
    {
      title: "Mindfulness for Emotional Awareness ",
      description:
        "When paired with mindfulness, SFT helps clients stay present and focused on their goals while managing stress and emotional triggers.",
    },
    {
      title: "CBT for Thought Patterns",
      description:
        "Combining CBT with SFT allows clients to challenge unhelpful thought patterns while developing actionable solutions to achieve their goals.",
    },
  ],
};

const FaqData = {
  description:
    "Book a PCIT Session in Vaughan & Thornhill Are you struggling with managing your child's behavior? Parent-Child Interaction Therapy (PCIT) can provide the tools and support you need. Contact us today to book a PCIT session at our Vaughan or Thornhill office. We offer both in-person and virtual parent coaching options. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
      title: "How many sessions does solution-focused therapy take?",
      description:
        "SFT is typically a short-term therapy, with clients often seeing improvements in 6 to 10 sessions. The exact number of sessions will depend on the client’s individual needs and goals.",
    },
    {
      title: "Can solution-focused therapy be combined with other types of therapy ? ",
      description:
        "Yes! At Young Sprouts Therapy, we often integrate SFT with CBT, mindfulness, and other approaches to provide a well-rounded treatment plan tailored to each client.",
    },
    {
      title: "Is SFT suitable for children teens ?  ",
      description:
        "Absolutely. SFT is highly effective for children and teens, especially those struggling with anxiety, depression, or behavioral challenges. The positive, goal-oriented approach helps young clients build resilience and confidence.",
    },
  ],
};
