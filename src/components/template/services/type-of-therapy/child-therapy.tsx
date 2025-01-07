import {
  AboutSection,
  HeroSection,
  OurApproach,
  TimeLine,
  TwoRowGridWithSvg,
} from "@/components/organism/services";

import { TwoGridSection } from "@/components/organism";
import {
  EmphasisSection,
  LongTermGrowth,
} from "@/components/organism/services/child-therapy";

import ChildTherapyHeroImage from "/public/services/childtherapyheroimage.webp";
import childtherapymobile from "/public/services/childtherapymobile.png";
import childtherapyAboutImage from "/public/services/childtherapyAboutImage.webp";
import childtherapyemphasis from "/public/services/childtherapyemphasis.webp";
import childtherapylongtermgrowth from "/public/services/childtherapylongtermgrowth.webp";

export function ChildTherapy() {
  return (
    <section className="">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
      </div>
      <div className="~py-5/28 max-w-[1440px] w-full mx-auto ~px-4/10 flex flex-col gap-6">
        <h2 className="font-medium ~text-lg/3xl text-primary lg:hidden">
          Child Therapy
        </h2>
        <p className="leading-6 lg:hidden">
          Parenting is rewarding but can also be challenging, especially when
          your child is struggling emotionally or behaviourally. At Young
          Sprouts Therapy, we offer specialized child therapy services designed
          to support your child in overcoming their unique challenges. Whether
          it&apos;s anxiety, behavioural issues, or low self-esteem, our
          dedicated team is here to help your child thrive.
        </p>
        <TwoGridSection
          renderComponent={() => <AboutSection props={AboutSectionData} />}
          image={childtherapyAboutImage}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Our Child Therapy Approach"
        description="Our therapy approach is personalized for each child, integrating a range of modalities based on their individual needs. We use a blend of traditional and creative therapeutic approaches to engage children in a way that resonates with them."
      />
      <div className="max-w-[1440px] mx-auto w-full ~px-4/10 ~py-8/28">
        <TwoRowGridWithSvg
          renderComponent={() => (
            <EmphasisSection props={EmphasisSectionData} />
          )}
          image={childtherapyemphasis}
        />
      </div>
      <div className="space-y-8 ~py-8/16 lg:overflow-hidden max-w-[1310px] mx-auto ~px-4/10">
        <div className="flex flex-col gap-[22px] ">
          <h2 className="text-center font-medium ~text-2xl/3xl text-primary">
            How We Help with Specific Challenges
          </h2>
          <p className="text-center leading-6 max-w-[846px] mx-auto">
            Our therapists specialize in addressing a wide variety of emotional
            and behavioural challenges that children face, including
          </p>
        </div>
        <TimeLine props={TimeLineSectionData} />
      </div>
      <div className="max-w-[1360px] mx-auto ~px-4/10 ~py-8/16">
        <TwoGridSection
          renderComponent={() => <LongTermGrowth />}
          image={childtherapylongtermgrowth}
          row={5}
          roundedRight
        />
      </div>
    </section>
  );
}

const HeroSectionData = {
  image: ChildTherapyHeroImage,
  title: "Child Therapy",
};

const HeroSectionDataMobile = {
  image: childtherapymobile,
  title: "Child Therapy",
};

const AboutSectionData = {
  title: "Child Therapy",
  subtitle: "Helping Children Overcome Emotional and Behavioural Challenges",
  description:
    "Parenting is rewarding but can also be challenging, especially when your child is struggling emotionally or behaviourally. At Young Sprouts Therapy, we offer specialized child therapy services designed to support your child in overcoming their unique challenges. Whether it's anxiety, behavioural issues, or low self-esteem, our dedicated team is here to help your child thrive.",
  subDescription:
    "Childhood is full of transitions and changes, some of which can be difficult for children to navigate. At Young Sprouts Therapy, we tailor our therapy services to meet the unique needs of each child, helping them process their emotions, cope with behavioural issues, and build resilience. We offer a variety of evidence-based therapeutic approaches designed to support children through their toughest challenges.",
};

const timelineData = [
  {
    title: "Cognitive-Behavioural Therapy (CBT)",
    description:
      "CBT helps children identify negative thought patterns and learn healthier ways of thinking and behaving. This is particularly helpful for anxiety, mood disorders, and low self-esteem.",
  },
  {
    title: "Play Therapy",
    description:
      "Play Therapy allows children to express emotions and thoughts through play, helping younger children who may find it difficult to talk about their feelings.",
  },
  {
    title: "Art Therapy",
    description:
      "Art Therapy offers children a non-verbal way to communicate their feelings and process complex emotions through creative expression. It is an effective tool for children who have experienced trauma, anxiety, or struggle with self-expression.",
  },
  {
    title: "Dialectical Behaviour Therapy (DBT) for Emotional Regulation",
    description:
      "DBT is a great approach for children dealing with intense emotions and behavioural issues like defiance. It focuses on teaching emotional regulation and mindfulness skills.",
  },
];

const EmphasisSectionData = {
  title: "Emphasis on Parent Involvement for Maximum Benefit",
  description:
    "We believe that a child’s therapeutic progress is most effective when parents are closely involved. At Young Sprouts Therapy, we work collaboratively with parents to ensure that the tools and strategies learned in therapy are reinforced at home. This partnership creates a supportive environment for the child, leading to long-term success. Parent sessions are often incorporated to ensure a holistic approach to your child's well-being.",
  subTitle: "The Benefits of Child Therapy",
  subDescription:
    "Our child therapy services provide not just immediate relief, but equip children with the tools they need for ongoing emotional growth. Here are some of the key benefits:",
  list: [
    {
      title: "Enhanced Emotional Expression",
      description:
        "Therapy provides a safe space for children to express difficult emotions, helping them manage stress and reduce emotional outbursts.",
    },
    {
      title: "Coping Skills for Life",
      description:
        "Through therapy, children develop practical coping skills to handle anxiety, frustration, and sadness, preparing them for future challenges.",
    },
    {
      title: "Stronger Family Relationships",
      description:
        "By working together with parents, our therapists help create healthier family dynamics, improving communication and reducing conflict at home.",
    },
  ],
};

const TimeLineSectionData = [
  {
    title: "Anxiety and Social Fears",
    description:
      "Our therapists use CBT and mindfulness techniques to help children overcome fears and anxiety, teaching them practical skills to feel more in control of their emotions.",
  },
  {
    title: "Behavioural Issues",
    description:
      "For children struggling with impulsivity, defiance, or aggression, we employ DBT and other behavioural therapies to help them better manage their emotions and actions.",
  },
  {
    title: "Trauma and Grief",
    description:
      "Art therapy and other creative modalities are often used to help children process trauma or loss in a safe, non-verbal way.",
  },
];
