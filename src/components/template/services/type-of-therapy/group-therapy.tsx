import {
  Banner,
  Faq,
  HeroSection,
  OurApproach,
  SubscriptionBanner,
} from "@/components/organism/services";
import { TwoGridSection } from "@/components/organism";

import { AboutSection } from "@/components/organism/services/group-therapy/AboutSection";

import grouptherapyheroimage from "/public/services/grouptherapyheroimage.webp";
import grouptherapymobile from "/public/services/grouptherapymobile.png";
import groupAboutImage from "/public/services/groupAboutImage.webp";
import groupguideddiscussions from "/public/services/groupguideddiscussions.webp";
import groupsettingsarttherapy from "/public/services/groupsettingsarttherapy.webp";
import groupsubscriptionimage from "/public/services/groupsubscriptionimage.webp";
import groupbannerimage from "/public/services/groupbannerimage.webp";
import mindfulnessImage from "/public/services/mindfulness.webp";
import workshopforparents from "/public/services/workshopforparents.webp";

import {
  GroupSettings,
  GuidedDiscussions,
  MindFulness,
  SpecificChallenges,
  WorkShopForParents,
} from "@/components/organism/services/group-therapy";

export function GroupTherapy() {
  return (
    <section className=" pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block w-full">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden w-full">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto  ~px-4/10 flex flex-col gap-6 ">
        <h2 className="font-medium ~text-lg/3xl text-primary lg:hidden">
          Helping Kids and Teens Build Social Skills and Emotional Resilience
        </h2>
        <TwoGridSection
          renderComponent={() => <AboutSection />}
          image={groupAboutImage}
        />
      </div>
      <div className="~py-12/24  max-w-[1440px] w-full mx-auto ~px-4/10">
        <SubscriptionBanner data={SubscriptionData} />
      </div>
      <SpecificChallenges />

      <div className="~py-5/28 max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="max-w-[1440px] mx-auto w-full ">
          <TwoGridSection
            renderComponent={() => <GroupSettings />}
            image={groupsettingsarttherapy}
            row={5}
          />
        </div>
        <div className="max-w-[1440px] mx-auto w-full ~py-16/24 ">
          <TwoGridSection
            renderComponent={() => <GuidedDiscussions />}
            image={groupguideddiscussions}
            row={5}
            rtl={true}
          />
        </div>
        <div className="max-w-[1440px] mx-auto w-full  ">
          <TwoGridSection
            renderComponent={() => <MindFulness />}
            image={mindfulnessImage}
            row={5}
          />
        </div>
        <div className="~py-12/24">
          <Banner data={BannerData} />
        </div>
        <div>
          <OurApproach
            data={timelineData}
            showBg={true}
            title="Benefits of Group Therapy for Kids and Teens"
            description="Group therapy offers many long-term benefits for kids and teens, including:"
          />
        </div>
        <div className="max-w-[1440px] mx-auto w-full ~pt-16/24 ">
          <TwoGridSection
            renderComponent={() => <WorkShopForParents />}
            image={workshopforparents}
            rtl={true}
            row={5}
          />
        </div>

        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: grouptherapyheroimage,
  title: "Group Therapy for Kids and Teens in Vaughan & Thornhill",
};
const HeroSectionDataMobile = {
  image: grouptherapymobile,
  title: "Group Therapy for Kids and Teens in Vaughan & Thornhill",
};

const timelineData = [
  {
    title: "Improved Social Skills",
    description:
      "Kids and teens practice interacting with peers in a structured environment, learning how to communicate effectively, resolve conflicts, and build friendships.",
  },
  {
    title: "Emotional Resilience",
    description:
      "Group therapy helps participants build emotional strength, teaching them how to manage stress, handle difficult emotions, and develop a positive mindset.",
  },
  {
    title: "Peer Support",
    description:
      "Participants gain valuable support from their peers, who often face similar challenges. This shared experience helps reduce feelings of isolation and boosts self-confidence.",
  },
];

const SubscriptionData = {
  title: "Get on the waitlist",
  description:
    "Sign up to get information and be notified of our next parenting group.",
  image: groupsubscriptionimage,
};

const BannerData = {
  title: "Family Involvement for Long-term Success",
  description:
    "At Young Sprouts Therapy, we believe that family involvement is key to ensuring the success of group therapy for kids and teens. We work closely with parents to ensure that the skills learned in therapy are reinforced at home. Family members are encouraged to participate in occasional sessions to support their child’s progress and to better understand the emotional and social challenges their child may face.",
  image: groupbannerimage,
};

const FaqData = {
  description:
    "Book a Group Therapy Session for Kids and Teens in Vaughan & Thornhill Are you ready to help your child or teen build social skills and emotional resilience? Contact us today to book a group therapy session at our Vaughan or Thornhill office. We offer both in-person and virtual sessions to meet your family’s needs. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
      title: "How long does group therapy ?",
      description:
        "Our group therapy programs typically run for 8-10 weeks, with one session per week. This structure allows participants to build strong connections with their peers while making steady progress toward their goals",
    },
    {
      title:
        "Can my Child join grpup therapy it they have never done individual therapy before?",
      description:
        "If your teen is struggling with persistent anxiety, mood swing, low-self-esteem, or difficulty managing school or social pressures, therapy can help. A licensed therapist will work with your teen to identify the root causes of their struggles and develop strategies for managing them.",
    },
    {
      title: "Is family involvement required in group therapy ?",
      description:
        "If your teen is struggling with persistent anxiety, mood swing, low-self-esteem, or difficulty managing school or social pressures, therapy can help. A licensed therapist will work with your teen to identify the root causes of their struggles and develop strategies for managing them.",
    },
  ],
};
