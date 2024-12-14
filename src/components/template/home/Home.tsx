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
  PersonalizedTherapy,
  ConvenientLocation,
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
      <PersonalizedTherapy />
      <ConvenientLocation />
      <InsuranceCoverage />
      <div className="">
        {/* <Image
          src={"/svg/rectangle.svg"}
          alt="svg"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
          className="-z-20"
        /> */}
        <PositiveOutcomes />
        <BookingConsultation />
        <HomepageFaq />
      </div>
      <LatestBlogPosts />
      <div className="~pb-8/16">
        <MapBox />
      </div>
    </section>
  );
}
