import {
  Banner,
  Faq,
  HeroSection,
  OurApproach,
  TimeLine,
  TwoRowGridWithSvg,
} from "@/components/organism/services";
import { TwoGridSection } from "@/components/organism";
import { AboutSection } from "@/components/organism/services/couple-therapy/AboutSection";
import {
  BenefitsofCoupleTherapy,
  IssuesWeHelpCouples,
  LongTermGrowth,
} from "@/components/organism/services/couple-therapy";

import coupletherapyheroImage from "/public/services/coupletherapyheroImage.webp";
import coupletherapyaboutimage from "/public/services/coupletherapyaboutimage.webp";
import issueswehelp from "/public/services/issueswehelp.webp";
import couplebannerimage from "/public/services/couplebannerimage.webp";
import benefitofteentherapyImage from "/public/services/benefitofteentherapy.webp";
import localcouplestherapy from "/public/services/localcouplestherapy.webp";

export function CouplesTherapy() {
  return (
    <section className=" pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/16">
        <HeroSection props={HeroSectionData} />
      </div>
      <div className="max-w-[1440px] mx-auto ~px-4/10 flex flex-col gap-6">
        <h2 className="font-medium ~text-lg/3xl text-primary lg:hidden">
          Child TheHelping Couples Reconnect and Build Stronger
          Relationshipsrapy
        </h2>
        <TwoGridSection
          renderComponent={() => <AboutSection />}
          image={coupletherapyaboutimage}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Our Couples Therapy Approach"
        description="We understand that every relationship is unique, which is why our approach is tailored to your specific needs. Our therapists use a blend of evidence-based modalities to help you and your partner address your concerns and rebuild a stronger, more resilient relationship."
      />
      <div className="~py-5/28 max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="max-w-[1440px] mx-auto w-full ">
          <TwoRowGridWithSvg
            renderComponent={() => <IssuesWeHelpCouples />}
            image={issueswehelp}
          />
        </div>
        <div className="~py-12/24">
          <Banner data={BannerData} />
        </div>
        <div>
          <TwoGridSection
            renderComponent={() => <BenefitsofCoupleTherapy />}
            image={benefitofteentherapyImage}
            row={5}
          />
        </div>
        <div className="flex flex-col gap-8 ~py-16/24 overflow-hidden">
          <div className="flex flex-col gap-6">
            <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
              Workshops and Group Therapy for Couples
            </h2>
            <p className="text-center leading-6 max-w-[846px] mx-auto">
              In addition to individual couples counselling, we offer workshops
              and group therapy for couples who want to deepen their connection
              and learn new skills for relationship success. These workshops
              cover topics such as:
            </p>
          </div>
          <div className="z-10">
            <TimeLine props={TimeLineSectionData} />
          </div>
          <p className="text-center leading-6 z-30">
            Workshops are available both in-person and online, and are open to
            couples at any stage of their relationship. Contact us for more
            information on upcoming workshops.
          </p>
        </div>
        <TwoGridSection
          renderComponent={() => <LongTermGrowth />}
          image={localcouplestherapy}
        />

        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: coupletherapyheroImage,
  title:
    "Couples Therapy in Vaughan & Thornhill: Strengthen Your Relationship, Rebuild Trust",
};

const timelineData = [
  {
    title: "The Gottman Method for Relationship Repair",
    description:
      "The Gottman Method is a research-based approach that helps couples improve communication, resolve conflict, and rebuild emotional connection. We use proven strategies to help couples identify negative patterns, such as criticism or defensiveness, and replace them with healthier ways of relating.",
  },
  {
    title: "Cognitive-Behavioural Therapy (CBT) for Couples",
    description:
      "CBT helps couples understand how their thoughts and behaviours contribute to conflict. By changing the way you communicate and think about your relationship, CBT can help resolve longstanding issues and improve emotional closeness.",
  },
  {
    title: "Emotionally Focused Therapy (EFT)",
    description:
      "EFT focuses on the emotional bonds between partners. It helps couples identify the emotions driving conflict, fostering a deeper understanding of each other’s needs. This approach is especially helpful for couples dealing with trust issues or emotional distance",
  },
];

const TimeLineSectionData = [
  {
    title: "Effective Communication",
    description:
      "Learn practical strategies for improving how you communicate with your partner.",
  },
  {
    title: "Conflict Resolution:",
    description:
      "Discover techniques for managing conflict without escalating arguments. ",
  },
  {
    title: "Building Emotional Intimacy:",
    description:
      "Explore ways to reconnect emotionally and strengthen your bond.",
  },
];

const BannerData = {
  title: "Pre-Marital Counselling",
  description:
    "Are you considering marriage and want to ensure a strong foundation for your relationship? Pre-marital counselling is a valuable investment in your future. At Young Sprouts Therapy, we help couples explore important topics such as communication, financial management, and family planning. Our goal is to help you and your partner establish healthy relationship patterns that will serve you throughout your marriage.",
  image: couplebannerimage,
};

const FaqData = {
  description:
    "Book a Couples Therapy Session in Vaughan & Thornhill Are you ready to strengthen your relationship and reconnect with your partner? Contact us today to book a couples therapy session in Vaughan, Thornhill, or Richmond Hill. We offer both in-person and virtual sessions to fit your schedule. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
      title: "How long does couples therapy usually list ?",
      description:
        "The duration of therapy de[ends on the unique challenges facing your relationship. some couples benefit from short term therapy to address specific issues. whice others may continue others may continue therapy over several months to work through deeper emotional or relational concerns",
    },
    {
      title: "How long docs teen therapy typically list?",
      description:
        "If your teen is struggling with persistent anxiety, mood swing, low-self-esteem, or difficulty managing school or social pressures, therapy can help. A licensed therapist will work with your teen to identify the root causes of their struggles and develop strategies for managing them.",
    },
    {
      title: "Can parents be involved in the process ? ",
      description:
        "If your teen is struggling with persistent anxiety, mood swing, low-self-esteem, or difficulty managing school or social pressures, therapy can help. A licensed therapist will work with your teen to identify the root causes of their struggles and develop strategies for managing them.",
    },
  ],
};
