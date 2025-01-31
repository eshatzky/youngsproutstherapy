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
import { MusicTherapy } from "@/components/template/services/therapy-modalities/music-therapy";

interface ContidionsWeSupportTypeProps {
  params: {
    slug: string;
  };
}

interface ServiceConfig {
  title: string;
  description: string;
}

const serviceData: Record<string, ServiceConfig> = {
  "art-therapy": {
    title: "Art Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Engage in creative expression through art therapy to explore emotions, improve well-being, and enhance mental health for kids and teens in Thornhill and Vaughan.",
  },
  "acceptance-commitment-therapy": {
    title:
      "Acceptance and Commitment Therapy | Young Sprouts Therapy",
    description:
      "Help kids and teens in Thornhill and Vaughan embrace their thoughts and feelings with Acceptance Commitment Therapy (ACT), fostering personal growth and meaningful action.",
  },
  "cognitive-behavioral-therapy": {
    title:
      "Cognitive Behavioral Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Address negative thought patterns and improve emotional regulation with Cognitive Behavioral Therapy (CBT) for kids and teens in Thornhill and Vaughan.",
  },
  "dialectical-behavioral-therapy": {
    title:
      "Dialectical Behavioral Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Enhance emotional and interpersonal skills with Dialectical Behavioral Therapy (DBT) for kids and teens in Thornhill and Vaughan, using practical techniques for lasting change.",
  },
  "emotion-focused-therapy": {
    title: "Emotion Focused Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Help kids and teens in Thornhill and Vaughan understand and manage their emotions with Emotion-Focused Therapy (EFT) for personal growth and stronger relationships.",
  },
  "narrative-therapy": {
    title: "Narrative Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Empower change and healing by reframing and reshaping your personal story with Narrative Therapy for kids and teens in Thornhill and Vaughan.",
  },
  "play-therapy": {
    title: "Play Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "A child-centered approach using play to help kids and teens express feelings, resolve challenges, and build emotional resilience in Thornhill and Vaughan.",
  },
  "parent-child-therapy": {
    title: "Parent Child Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Strengthen the parent-child bond with guided therapeutic interactions to improve communication and understanding in therapy for kids and teens in Thornhill and Vaughan.",
  },
  "solution-focused-therapy": {
    title:
      "Solution-Focused Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Achieve your goals with Solution-Focused Therapy, a future-oriented approach to solving problems for kids and teens in Thornhill and Vaughan.",
  },
  "music-therapy": {
    title: "Music Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Express emotions, reduce stress, and achieve therapeutic goals through music therapy for kids and teens in Thornhill and Vaughan.",
  },
};

export async function generateMetadata({
  params,
}: ContidionsWeSupportTypeProps) {
  const service = serviceData[params.slug] || {
    title: "Young Sprouts Therapy",
    description:
      "Professional therapy services for individuals, families, and groups.",
  };

  return {
    title: `${service.title}`,
    description: service.description,
    alternates: {
      canonical: `https://www.youngsproutstherapy.com/services/therapy-modalities/${params.slug}`,
    },
  };
}

export default async function ConditionsWeSupportPage({
  params: { slug },
}: ContidionsWeSupportTypeProps) {
  let content: React.ReactNode | null = null;

  const service = serviceData[slug];
  const title = service?.title || "Young Sprouts Therapy";
  const description =
    service?.description || "Default description for services.";

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
      "@id": `https://www.youngsproutstherapy.com/services/therapy-modalities/${slug}`,
    },

    name: title,
    description: description,
    url: `https://www.youngsproutstherapy.com/services/therapy-modalities/${slug}`,
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
      sameAs: "https://en.wikipedia.org/wiki/Anxiety_disorder",
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
