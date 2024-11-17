import {
  AdhdTherapy,
  AnxietyTherapy,
  AutismTherapy,
  BehavioralTherapy,
  BurnOutTherapy,
  ClinicalTherapy,
  DepressionTherapy,
  GriefTherapy,
  TraumaTherapy,
} from "@/components/pages/services/conditions-we-support";

interface TherapyTypeProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: TherapyTypeProps) {
  // Map the slug to a corresponding capability title
  const titles: Record<string, string> = {
    "adhd-therapy": "Adhd Therapy",
    "anxiety-therapy": "Anxiety Therapy",
    "burnout-therapy": "Burnout Therapy",
    "behavioral-therapy": "Behavioral Therapy",
    "depression-therapy": "Depression Therapy",
    "grief-therapy": "Grief Therapy",
    "trauma-therapy": "Trauma Therapy",
    "autism-therapy": "Autism Therapy",
    "clinical-supervision": "Clinical Therapy",
  };

  const title = titles[params.slug] || "Young Sprouts Therapy";

  return {
    title: `Young Sprouts Therapy - ${title}`,
  };
}

export default async function ConditionsWeSupportPage({
  params: { slug },
}: TherapyTypeProps) {
  let content: React.ReactNode | null = null;

  switch (slug) {
    case "adhd-therapy":
      content = <AdhdTherapy />;
      break;
    case "anxiety-therapy":
      content = <AnxietyTherapy />;
      break;
    case "burnout-therapy":
      content = <BurnOutTherapy />;
      break;
    case "behavioral-therapy":
      content = <BehavioralTherapy />;
      break;
    case "depression-therapy":
      content = <DepressionTherapy />;
      break;
    case "grief-therapy":
      content = <GriefTherapy />;
      break;
    case "trauma-therapy":
      content = <TraumaTherapy />;
      break;
    case "autism-therapy":
      content = <AutismTherapy />;
      break;
    case "clinical-supervision":
      content = <ClinicalTherapy />;
      break;

    default:
      content = null;
  }

  return <>{content}</>;
}
