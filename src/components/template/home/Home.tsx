import {
  HeroSection,
  HowPsychotherapyCanHelp,
  HowTherapyWorks,
  MeetOurTeam,
  TherapeuticModalities,
  TherapistInVaughan,
  WhyChooseUs,
  InsuranceCoverage,
  PositiveOutcomes,
  MapBox,
  LatestBlogPosts,
  HomepageFaq,
  PersonalizedTherapy,
  ConvenientLocation,
} from "@/components/organism/home";

export function Home() {
  return (
    <>
      <header role="banner">
        <HeroSection />
      </header>
      <div role="main">
        <TherapistInVaughan />
        <HowPsychotherapyCanHelp />
        <MeetOurTeam />
        <TherapeuticModalities />
        <HowTherapyWorks />
        <WhyChooseUs />
        <PersonalizedTherapy />
        <ConvenientLocation />
        <InsuranceCoverage />
        <PositiveOutcomes />
        {/* <BookingConsultation /> */}
        <HomepageFaq />
        <LatestBlogPosts />
      </div>
      <div className="~pb-8/16" role="complementary">
        <MapBox />
      </div>
    </>
  );
}
