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
import dynamic from "next/dynamic";

const BookingConsultation = dynamic(
  () =>
    import("../../organism/home/BookingConsultation").then(
      (module) => module.BookingConsultation
    ),
  {
    ssr: false,
  }
);

export function Home() {
  return (
   
      <>
        <header role="banner">
          <HeroSection />
        </header>
        <div role="main">
          <section aria-labelledby="therapist-section">
            <TherapistInVaughan />
          </section>
          <section aria-labelledby="psychotherapy-help">
            <HowPsychotherapyCanHelp />
          </section>
          <section aria-labelledby="team-section">
            <MeetOurTeam />
          </section>
          <section aria-labelledby="modalities-section">
            <TherapeuticModalities />
          </section>
          <section aria-labelledby="therapy-works">
            <HowTherapyWorks />
          </section>
          <section aria-labelledby="why-choose">
            <WhyChooseUs />
          </section>
          <section aria-labelledby="personalized-therapy">
            <PersonalizedTherapy />
          </section>
          <section aria-labelledby="location">
            <ConvenientLocation />
          </section>
          <section aria-labelledby="insurance">
            <InsuranceCoverage />
          </section>
          <section aria-labelledby="outcomes">
            <PositiveOutcomes />
          </section>
          <section aria-labelledby="booking">
            <BookingConsultation />
          </section>
          <section aria-labelledby="faq">
            <HomepageFaq />
          </section>
          <section aria-labelledby="blog">
            <LatestBlogPosts />
          </section>
        </div>
        <div className="~pb-8/16" role="complementary">
          <MapBox />
        </div>
      </>
  );
}
