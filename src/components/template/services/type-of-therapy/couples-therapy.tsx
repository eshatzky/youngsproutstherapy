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
import coupletherapyheroImageMobile from "/public/services/coupletherapymobile.png";
import coupletherapyaboutimage from "/public/services/coupletherapyaboutimage.webp";
import issueswehelp from "/public/services/issueswehelp.webp";
import couplebannerimage from "/public/services/couplebannerimage.webp";
import benefitofCoupletherapyImage from "../../../../../public/services/couple/couple.jpeg";
import localcouplestherapy from "/public/services/localcouplestherapy.webp";

export function CouplesTherapy() {
  return (
    <section className=" pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto ~px-4/10 flex flex-col gap-6">
        <h2 className="font-medium ~text-lg/3xl text-primary lg:hidden">
          Helping Couples Reconnect and Build Stronger Relationships
        </h2>
        <p className="leading-6 lg:hidden">
          Relationships are rewarding, but they can also be challenging. Many
          couples experience periods of emotional disconnection, conflict, or
          even infidelity. At Young Sprouts Therapy, we specialize in helping
          couples rebuild trust, improve communication, and restore intimacy.
        </p>
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
            image={benefitofCoupletherapyImage}
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
const HeroSectionDataMobile = {
  image: coupletherapyheroImageMobile,
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
      "title": "How can couples therapy improve our relationship?",
      "description": "Couples therapy provides a safe space to address communication issues, rebuild trust, and strengthen emotional connections. By working with a trained therapist, partners can develop effective strategies to navigate conflicts and deepen their bond."
    },
    {
      "title": "What should we expect during a couples counselling session?",
      "description": "In a typical session, both partners discuss their perspectives and concerns with the guidance of a therapist. The therapist facilitates open dialogue, helping identify underlying issues and fostering mutual understanding. Sessions are tailored to address specific relationship challenges and goals."
    },
    {
      "title": "How many couples therapy sessions are usually needed?",
      "description": "The number of sessions varies based on the unique needs of each couple. Some may find resolution in a few sessions, while others benefit from a longer commitment to address deeper issues. Your therapist will work with you to develop a personalized plan."
    },
    {
      "title": "Is couples counselling effective for non-married partners?",
      "description": "Absolutely. Couples therapy is beneficial for partners at any stage of their relationship, whether dating, engaged, or in a long-term partnership. It aids in improving communication, resolving conflicts, and building a stronger connection."
    },
    {
      "title": "How do we choose the right couples therapist in Vaughan or Thornhill?",
      "description": "When selecting a therapist, consider their experience, approach to therapy, and areas of specialization. It's important to find someone both partners feel comfortable with. Many therapists offer initial consultations to help you determine if they're the right fit for your needs."
    },
  ],
};
