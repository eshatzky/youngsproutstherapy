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
} from '@/components/organism/home';

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
    </section>
  );
}
