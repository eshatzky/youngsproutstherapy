import {
  HeroSection,
  HowPsychotherapyCanHelp,
  HowTherapyWorks,
  MeetOurTeam,
  TherapeuticModalities,
  TherapistInVaughan,
  WhyChooseUs,
  BookingConsultation,
  InsuranceCoverage,
  PositiveOutcomes,
  MapBox,
  LatestBlogPosts,
  HomepageFaq,
} from "@/components/organism/home";

export function Home() {
  return (
    <section>
      <HeroSection />
      <TherapistInVaughan />
      <HowPsychotherapyCanHelp />
      <MeetOurTeam />
      <TherapeuticModalities />
      <HowTherapyWorks />
      <WhyChooseUs />
      <InsuranceCoverage />
      <PositiveOutcomes />
      <BookingConsultation />
      <HomepageFaq />
      <LatestBlogPosts />
      <div className="~pb-8/16">
        <MapBox />
      </div>
    </section>
  );
}
