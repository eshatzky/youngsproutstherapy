import {
  Banner,
  Faq,
  HeroSection,
  OurApproach,
  TimeLine,
} from "@/components/organism/services";
import {
  BenefitsTeenTherapy,
  GroupTherapyforTeens,
  LongTermGrowth,
  TherapyCanHelp,
} from "@/components/organism/services/teen-therapy";
import { TwoGridSection } from "@/components/organism";

import teentherapyheroImage from "/public/services/teentherapyheroImage.webp";
import teentherapyheroImageMobile from "/public/services/teentherapymobile.png";
import TeenTherapyAboutImage from "/public/services/TeenTherapyAboutImage.webp";
import teentherapymaximumsuccess from "/public/services/teentherapymaximumsuccess.webp";
import benefitofteentherapyImage from "../../../../../public/services/teens/teentherapy1.jpeg";

import teentherapylongtermgrowth from "../../../../../public/services/teens/teentherapylongtimegrowth.jpeg";

export function TeenTherapy() {
  return (
    <section className="  pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
      </div>
      <TherapyCanHelp />

      <OurApproach
        data={timelineData}
        showBg={false}
        title="Our Teen Therapy Approach"
        description="Every teen’s journey is different. At Young Sprouts Therapy, we tailor our therapeutic approach to the individual needs of each teen. Our therapists integrate a variety of evidence-based modalities to help teens navigate emotional challenges, behavioural issues, and peer or academic stress."
      />
      <div className="~py-5/28 max-lg:pt-0 max-w-[1440px] w-full mx-auto ~px-4/10">
        <TwoGridSection
          renderComponent={() => <GroupTherapyforTeens />}
          image={TeenTherapyAboutImage}
        />
        <div className="~py-12/24">
          <Banner data={BannerData} />
        </div>
        <div>
          <TwoGridSection
            renderComponent={() => <BenefitsTeenTherapy />}
            image={benefitofteentherapyImage}
            rtl={true}
            row={5}
          />
        </div>
        <div className="flex flex-col gap-8 ~py-16/24 overflow-hidden">
          <div className="flex flex-col gap-6">
            <h2 className="font-medium ~text-2xl/3xl text-center text-primary">
              How We Help with Specific Teen Challenges
            </h2>
            <p className="text-center leading-6 max-w-[846px] mx-auto">
              Our therapists specialize in addressing a wide range of challenges
              that teens face, including
            </p>
          </div>
          <div className="">
            <TimeLine props={TimeLineSectionData} />
          </div>
        </div>
        <TwoGridSection
          renderComponent={() => <LongTermGrowth />}
          image={teentherapylongtermgrowth}
        />

        <Faq data={FaqData} />
      </div>
    </section>
  );
}

const HeroSectionData = {
  image: teentherapyheroImage,
  title:
    "Teen Therapy in Vaughan & Thornhill: Building Emotional Strength and Confidence",
};
const HeroSectionDataMobile = {
  image: teentherapyheroImageMobile,
  title:
    "Teen Therapy in Vaughan & Thornhill: Building Emotional Strength and Confidence",
};

const timelineData = [
  {
    title: "Cognitive-Behavioural Therapy (CBT)",
    description:
      "CBT helps children identify negative thought patterns and learn healthier ways of thinking and behaving. This is particularly helpful for anxiety, mood disorders, and low self-esteem.",
  },
  {
    title: "Dialectical Behaviour Therapy (DBT) for Emotional Regulation",
    description:
      "DBT helps teens who struggle with emotional regulation, impulsivity, or defiance. By teaching mindfulness, distress tolerance, and healthy coping strategies, DBT supports teens in managing intense emotions and building healthier relationships with family and friends.",
  },
  {
    title: "Art Therapy",
    description:
      "Art Therapy offers a creative outlet for teens to explore and express their emotions, particularly when verbal communication feels challenging. This non-verbal approach is especially useful for teens experiencing anxiety, trauma, or self-esteem issues.",
  },
  {
    title: "Mindfulness and Stress-Reduction Techniques",
    description:
      "For teens facing school-related stress, peer pressure, or life changes, mindfulness techniques provide practical strategies to reduce anxiety and stay grounded. These skills can be applied to a variety of situations, from managing exams to navigating social challenges.",
  },
];

const TimeLineSectionData = [
  {
    title: "Anxiety and Social Fears",
    description:
      "Teens struggling with anxiety or social fears often benefit from CBT and mindfulness techniques, which teach them to manage their worries and build confidence in social situations.",
  },
  {
    title: "Academic Stress and Performance Pressure",
    description:
      "Academic stress is a common issue for teens. We help them develop stress-reduction strategies, time management skills, and coping mechanisms to handle the pressure of schoolwork without feeling overwhelmed.",
  },
  {
    title: "Peer Relationships and Self-Esteem",
    description:
      "For teens dealing with bullying, social isolation, or low self-esteem, our therapy sessions focus on building their self-worth and helping them develop healthy, supportive relationships with peers",
  },
];

const BannerData = {
  title: "Emphasis on Parent Involvement for Maximum Success",
  description:
    "Research shows that therapy is most effective when the entire family is involved. At Young Sprouts Therapy, we work closely with parents to ensure that the progress teens make in therapy is supported at home. Our therapists engage parents in the therapeutic process, providing guidance on how to maintain positive communication and reinforce the coping strategies their teens learn during sessions. We also offer family therapy sessions, which focus on improving communication, resolving conflicts, and creating a more supportive family environment. This collaborative approach is key to helping teens build lasting emotional resilience and confidence.",
  image: teentherapymaximumsuccess,
};

const FaqData = {
  description:
    "Book a Teen Therapy Session in Vaughan & Thornhill Are you ready to help your teen build emotional strength and resilience? Contact us today to book a session at our Vaughan or Thornhill office. We offer both in-person and virtual appointments to meet your family’s needs. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
   {
      "title": "How do I know if my teen needs therapy?",
      "description": "If your teen is experiencing persistent mood swings, withdrawal from family or friends, trouble managing stress, declining grades, or struggles with anxiety or self-esteem, therapy can help. A licensed therapist will assess their needs and provide strategies for coping and emotional growth."
    },
    {
      "title": "How long does teen therapy typically last?",
      "description": "The length of therapy depends on your teen’s unique challenges and goals. Many teens see improvement within 8 to 12 sessions, but longer-term support may be beneficial for deeper concerns like trauma, depression, or ongoing anxiety."
    },
    {
      "title": "Can parents be involved in the therapy process?",
      "description": "Yes! Parental involvement is encouraged. While teens often need a private space to express themselves, therapists may offer parent check-ins, guidance on supporting your teen at home, and strategies to improve communication and relationships."
    },
    {
      "title": "What types of therapy are used for teens?",
      "description": "We use evidence-based approaches like Cognitive Behavioural Therapy (CBT), Emotion-Focused Therapy (EFT), and Solution-Focused Therapy to help teens manage stress, build confidence, and develop emotional resilience."
    },
    {
      "title": "Is teen therapy covered by insurance?",
      "description": "Most workplace benefits and private insurance plans cover psychotherapy services. We recommend checking with your provider to confirm coverage for therapy in Ontario."
    },
    {
      "title": "Do you offer in-person teen therapy near me?",
      "description": "Yes, we offer in-person teen therapy at our Thornhill office, located at 1137 Centre Street. Many families from Vaughan, Richmond Hill, Markham, North York, and surrounding areas visit our clinic. We also provide virtual therapy across Ontario for added convenience."
    };
