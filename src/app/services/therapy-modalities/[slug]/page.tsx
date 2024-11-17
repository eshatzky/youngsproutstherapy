import {
  AcceptanceTherapy,
  ArtTherapy,
  CognitiveTherapy,
  DialecticalTherapy,
  EmotionFocusedTherapy,
  NarrativeTherapy,
  ParentChildTherapy,
  PlayTherapy,
  SolutionFocusedTherapy,
} from "@/components/pages/services/therapy-modalities";

interface ContidionsWeSupportTypeProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ContidionsWeSupportTypeProps) {
  const titles: Record<string, string> = {
    "art-therapy": "Art Therapy",
    "Acceptance-commitment-therapy": "Acceptance Commitment Therapy",
    "cognitive-behavioral-therapy": "Cognitive Behavioral Therapy",
    "dialectical-behavioral-therapy": "Dialectical Behavioral Therapy",
    "emotion-focused-therapy": "Emotion Focused Therapy",
    "narrative-therapy": "Narrative Therapy",
    "play-therapy": "Play Therapy",
    "parent-child-therapy": "Parent Child Therapy",
    "solution-focused-therapy": "Solution focused Therapy",
  };

  const title = titles[params.slug] || "Young Sprouts Therapy";

  return {
    title: `Young Sprouts Therapy - ${title}`,
  };
}

export default async function ConditionsWeSupportPage({
  params: { slug },
}: ContidionsWeSupportTypeProps) {
  let content: React.ReactNode | null = null;

  switch (slug) {
    case "art-therapy":
      content = <ArtTherapy />;
      break;
    case "Acceptance-commitment-therapy":
      content = <AcceptanceTherapy />;
      break;
    case "cognitive-behavioral-therapy":
      content = <CognitiveTherapy />;
      break;
    case "dialectical-behavioral-therapy":
      content = <DialecticalTherapy />;
      break;
    case "emotion-focused-therapy":
      content = <EmotionFocusedTherapy />;
      break;
    case "narrative-therapy":
      content = <NarrativeTherapy />;
      break;
    case "play-therapy":
      content = <PlayTherapy />;
      break;
    case "parent-child-therapy":
      content = <ParentChildTherapy />;
      break;
    case "solution-focused-therapy":
      content = <SolutionFocusedTherapy />;
      break;

    default:
      content = null;
  }

  return <>{content}</>;
}
