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
import {
  ChildTherapy,
  CouplesTherapy,
  GroupTherapy,
  ParentingCounselling,
  TeenTherapy,
} from "@/components/pages/services/type-of-therapy";
import { MusicTherapy } from "@/components/template/services/therapy-modalities/music-therapy";

interface TherapyTypeProps {
  params: {
    slug: string;
  };
}

interface ServiceConfig {
  title: string;
  description: string;
  wikiLink?: string;
}

const serviceData: Record<string, ServiceConfig> = {
  "parenting-counselling": {
    title: "Therapy for Parents of Kids and Teens | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers supportive therapy for parents of children and teens in Vaughan. We help parents build skills, gain confidence, and navigate the challenges of parenting.",
    wikiLink: "https://en.wikipedia.org/wiki/Parenting",
  },
  "child-therapy": {
    title: "Child Therapy | Young Sprouts Therapy",
    description:
      "Compassionate child therapy in Vaughan using play, art, and evidence-based approaches to support emotional growth, behaviours, anxiety, and self-esteem.",
    wikiLink: "https://en.wikipedia.org/wiki/Child_psychology",
  },
  "teen-therapy": {
    title: "Teen Therapy | Young Sprouts Therapy",
    description:
      "Teen therapy in Vaughan to help adolescents navigate anxiety, stress, and self-esteem challenges. Supportive, expert care for growth and resilience.",
    wikiLink: "https://en.wikipedia.org/wiki/Adolescence",
  },
  "couples-counselling": {
    title: "Couples Counselling | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers couples counseling in Vaughan to help partners improve communication, resolve conflict, and strengthen their relationships.",
    wikiLink: "https://en.wikipedia.org/wiki/Couples_therapy",
  },
  "group-therapy": {
    title: "Group Therapy for Kids and Families | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers group therapy for kids, teens, and families in Vaughan. Our groups provide a supportive environment to learn social skills, build connections, and address common challenges.",
    wikiLink: "https://en.wikipedia.org/wiki/Group_therapy",
  },
  "adhd-therapy": {
    title: "ADHD Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy helps children and teens with ADHD thrive. Our Vaughan therapists use evidence-based approaches to improve attention, focus, organization, and emotional regulation.",
    wikiLink:
      "https://en.wikipedia.org/wiki/Attention_deficit_hyperactivity_disorder",
  },
  "anxiety-therapy": {
    title: "Anxiety Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy provides specialized anxiety therapy for children and teenagers in Vaughan. Learn how our expert therapists can help your child manage anxiety with play therapy, CBT, and more.",
    wikiLink: "https://en.wikipedia.org/wiki/Anxiety_disorder",
  },
  "burnout-therapy": {
    title: "Burnout Therapy | Young Sprouts Therapy",
    description:
      "Struggling with school or workplace stress? Our therapy for teens and young adults in Vaughan helps with burnout, anxiety, overwhelm, and motivation challenges.",
    wikiLink: "https://en.wikipedia.org/wiki/Occupational_burnout",
  },
  "behavioral-therapy": {
    title: "Behaviour Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Behaviour therapy in Vaughan for kids and teens struggling with emotional regulation, ADHD, anxiety, and social skills. Play-based and evidence-based support.",
    wikiLink: "https://en.wikipedia.org/wiki/Behavior_therapy",
  },
  "depression-therapy": {
    title: "Depression Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Expert teen depression therapy in Vaughan to help with sadness, motivation loss, and emotional struggles. Supportive care for healing, resilience, and growth.",
    wikiLink: "https://en.wikipedia.org/wiki/Major_depressive_disorder",
  },
  "grief-therapy": {
    title: "Grief Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Compassionate grief therapy in Vaughan for kids and teens coping with loss. Support through counselling, play, and art to navigate emotions and healing.",
    wikiLink: "https://en.wikipedia.org/wiki/Grief",
  },
  "trauma-therapy": {
    title: "Trauma Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Trauma therapy in Vaughan for kids and teens to heal from distressing experiences. Using play, art, and evidence-based counselling to build resilience and safety.",
    wikiLink: "https://en.wikipedia.org/wiki/Trauma_(psychological)",
  },
  "autism-therapy": {
    title: "ASD Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Autism therapy in Vaughan using play, art, music, and counselling to support social skills, behaviours, communication, and emotional growth in kids and teens.",
    wikiLink: "https://en.wikipedia.org/wiki/Autism_spectrum",
  },
  "clinical-supervision": {
    title: "Clinical Supervision | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers clinical supervision to therapists-in-training in Vaughan. Our experienced supervisors provide guidance and support to help young professionals develop their skills and expertise.",
    wikiLink: "https://en.wikipedia.org/wiki/Clinical_supervision",
  },
  "art-therapy": {
    title: "Art Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Art therapy in Vaughan for kids and teens to express emotions, reduce anxiety, and improve behaviours through creative, therapeutic drawing and painting.",
    wikiLink: "https://en.wikipedia.org/wiki/Art_therapy",
  },
  "acceptance-commitment-therapy": {
    title:
      "Acceptance Commitment Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Acceptance and Commitment Therapy (ACT) in Vaughan helps teens and young adults manage anxiety, stress, and emotions while building resilience and mindfulness.",
    wikiLink: "https://en.wikipedia.org/wiki/Acceptance_and_commitment_therapy",
  },
  "cognitive-behavioral-therapy": {
    title:
      "Cognitive Behavioral Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Cognitive Behavioural Therapy (CBT) in Vaughan helps kids and teens manage anxiety, depression, and negative thoughts while building coping skills and resilience.",
    wikiLink: "https://en.wikipedia.org/wiki/Cognitive_behavioral_therapy",
  },
  "dialectical-behavioral-therapy": {
    title:
      "Dialectical Behavioral Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Dialectical Behaviour Therapy (DBT) in Vaughan for teens struggling with intense emotions, anxiety, and self-esteem. Build coping skills, balance, and resilience.",
    wikiLink: "https://en.wikipedia.org/wiki/Dialectical_behavior_therapy",
  },
  "emotion-focused-therapy": {
    title: "Emotion Focused Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Emotion-Focused Therapy (EFT) in Vaughan for teens and young adults to process emotions, build self-awareness, and strengthen relationships through counselling.",
    wikiLink: "https://en.wikipedia.org/wiki/Emotionally_focused_therapy",
  },
  "narrative-therapy": {
    title: "Narrative Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Narrative Therapy in Vaughan for kids and teens to reshape their story, build self-identity, and process challenges like anxiety, trauma, and self-esteem.",
    wikiLink: "https://en.wikipedia.org/wiki/Narrative_therapy",
  },
  "play-therapy": {
    title: "Play Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Play therapy in Vaughan for kids to express emotions, build social skills, and improve behaviours in a supportive, child-led environment using creative play.",
    wikiLink: "https://en.wikipedia.org/wiki/Play_therapy",
  },
  "parent-child-therapy": {
    title: "Parent Child Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Parent-Child Interaction Therapy (PCIT) in Vaughan helps strengthen parent-child bonds, improve behaviours, and build emotional connection through play-based therapy, including Theraplay.",
    wikiLink:
      "https://en.wikipedia.org/wiki/Parent%E2%80%93child_interaction_therapy",
  },
  "solution-focused-therapy": {
    title:
      "Solution-Focused Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Solution-Focused Therapy (SFT) in Vaughan helps kids and teens overcome challenges, build confidence, and develop problem-solving skills through a strengths-based approach.",
    wikiLink: "https://en.wikipedia.org/wiki/Solution-focused_brief_therapy",
  },
  "music-therapy": {
    title: "Music Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Music therapy in Vaughan for kids and teens to express emotions, reduce anxiety, and improve social skills through rhythm, songwriting, and creative musical play.",
    wikiLink: "https://en.wikipedia.org/wiki/Music_therapy",
  },
};

export async function generateMetadata({ params }: TherapyTypeProps) {
  const service = serviceData[params.slug] || {
    title: "Young Sprouts Therapy",
    description:
      "Professional therapy services for individuals, families, and groups.",
  };

  return {
    title: `${service.title}`,
    description: service.description,
    alternates: {
      canonical: `https://www.youngsproutstherapy.com/services/${params.slug}`,
    },
  };
}

export default async function ServicePage({
  params: { slug },
}: TherapyTypeProps) {
  let content: React.ReactNode | null = null;

  const service = serviceData[slug];
  const title = service?.title || "Young Sprouts Therapy";
  const description =
    service?.description || "Default description for services.";

  switch (slug) {
    case "parenting-counselling":
      content = <ParentingCounselling />;
      break;
    case "child-therapy":
      content = <ChildTherapy />;
      break;
    case "teen-therapy":
      content = <TeenTherapy />;
      break;
    case "couples-counselling":
      content = <CouplesTherapy />;
      break;
    case "group-therapy":
      content = <GroupTherapy />;
      break;

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

    case "art-therapy":
      content = <ArtTherapy />;
      break;
    case "acceptance-commitment-therapy":
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
    case "music-therapy":
      content = <MusicTherapy />;
      break;

    default:
      content = null;
  }

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": [
      "MedicalWebPage",
      "WebPage",
      "LocalBusiness",
      "MedicalBusiness",
      "HealthAndBeautyBusiness",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.youngsproutstherapy.com/${slug}`,
    },

    name: title,
    description: description,
    url: `https://www.youngsproutstherapy.com/${slug}`,
    author: {
      "@type": "Organization",
      name: "Young Sprouts Therapy",
    },
    publisher: {
      "@type": "Organization",
      name: "Young Sprouts Therapy",
      logo: {
        "@type": "ImageObject",
        url: "https://www.youngsproutstherapy.com/images/logo.png",
      },
    },
    inLanguage: "en-CA",
    about: {
      "@type": "Thing",
      name: title,
      description: description,
      sameAs: service.wikiLink || `https://en.wikipedia.org/wiki/${slug}`,
    },
    keywords: [
      "anxiety therapy",
      "child anxiety",
      "teen anxiety",
      "Vaughan anxiety therapist",
    ],

    mainEntity: {
      "@type": ["LocalBusiness", "MedicalBusiness", "HealthAndBeautyBusiness"],
      name: "Young Sprouts Therapy",
      telephone: "(289) 579-4769",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1137 Centre Street, Suite #204",
        addressLocality: "Thornhill",
        addressRegion: "ON",
        postalCode: "L4J 3M6",
        addressCountry: "CA",
      },
      description:
        "At Young Sprouts Therapy, we offer specialized psychological services for children, teens, and families, including Cognitive Behavioural Therapy (CBT), Play Therapy, Art Therapy, and more.",
      areaServed: [
        {
          "@type": "Place",
          name: "Thornhill",
        },
        {
          "@type": "Place",
          name: "Richmond Hill",
        },
        {
          "@type": "Place",
          name: "Vaughan",
        },
        {
          "@type": "Place",
          name: "Aurora",
        },
        {
          "@type": "Place",
          name: "Newmarket",
        },
        {
          "@type": "Place",
          name: "Toronto",
        },
        {
          "@type": "Place",
          name: "North York",
        },
        {
          "@type": "Place",
          name: "Markham",
        },
      ],
    },
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {content}
    </section>
  );
}
