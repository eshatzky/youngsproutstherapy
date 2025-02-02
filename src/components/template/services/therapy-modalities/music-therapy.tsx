import {
  BlockWithPoints,
  Faq,
  HeroSection,
  TimeLine,
  TwoFlexSection,
  WhatIsSection,
  WhyChooseUs,
} from "@/components/organism/services";

import musictherapyherosection from "/public/services/musictherapyherosection.png";
import musictherapymobile from "/public/services/musictherapymobile.png";
import musictherapyaboutimage from "/public/services/musictherapyaboutimage.png";
import musictherapyforchildren from "../../../../../public/services/music/music.jpg";

export function MusicTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col lg:gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsDialecticalTherapy} />
      </div>

      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 py-10 max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={MusicTherapyAboutSectionData} />
          )}
          image={musictherapyaboutimage}
        />
      </div>
      <div className=" ~pb-6/8">
        <WhyChooseUs data={howPCITWorks} row={3} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 py-10 max-lg:pt-5">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={MusicTherapyChallenges} />
          )}
          image={musictherapyforchildren}
        />
      </div>

      <div className="flex flex-col gap-8  overflow-hidden max-w-[1440px] w-full mx-auto ~px-4/10 pt-10 max-lg:pt-5">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            How Music Therapy Can Help Your Child or Teen
          </h2>
          <p className="text-center leading-6">
            Through music therapy, children and teens can expect to see:
          </p>
        </div>
        <TimeLine props={TimeLineSectionData} />
      </div>

      <div className=" max-w-[1440px] w-full mx-auto ~px-4/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: musictherapyherosection,
  title: "Music Therapy for Kids & Teens in Vaughan & Thornhill",
};
const HeroSectionDataMobile = {
  image: musictherapymobile,
  title: "Music Therapy for Kids & Teens in Vaughan & Thornhill",
};

const WhatIsDialecticalTherapy = {
  title: "What Is Music Therapy?",
  description:
    "Music therapy is a creative, evidence-based therapeutic approach that helps children and teens express emotions, build social skills, and develop emotional resilience through the use of music. For young people on the autism spectrum, dealing with emotional regulation, or struggling with social interactions, music therapy offers an engaging way to connect and grow.At Young Sprouts Therapy, we specialize in providing music therapy for children and teens, offering both individual and group sessions that are tailored to each child’s needs. We focus on improving communication, emotional expression, and social connections through music.",
};

const MusicTherapyChallenges = {
  title: "Music Therapy for Children with Autism and Developmental Challenges",
  description:
    "Music therapy is particularly effective for children on the autism spectrum or those with developmental challenges. Music allows children to process sensory input, communicate emotions, and engage socially in ways that may not be accessible through traditional therapy methods.",
  list: [
    {
      title: "Sensory Regulation",
      description:
        "Children with sensory processing difficulties benefit from the structure and rhythm of music therapy, which provides a safe, predictable space for sensory exploration.",
    },
    {
      title: "Communication and Emotional Expression",
      description:
        "Music therapy helps children who struggle with verbal communication find alternative ways to express their feelings and communicate with others.",
    },
    {
      title: "Social Skills Development",
      description:
        "Group sessions help children develop social connections, taking turns, and working cooperatively with peers.",
    },
  ],
};
const MusicTherapyAboutSectionData = {
  title: "Benefits of Music Therapy for Kids & Teens",
  description:
    "Our music therapy programs for children and teens are designed to:",
  list: [
    {
      title: "Enhance Communication:",
      description:
        "Music therapy helps children, especially those with developmental delays or non-verbal communication, express their emotions and thoughts through music.",
    },
    {
      title: "Emotional Regulation",
      description:
        "Music provides a soothing outlet for children and teens to process their emotions, helping them manage stress, anxiety, and frustration.",
    },
    {
      title: "Social Skill Development",
      description:
        "Group music therapy encourages social interaction, teaching kids and teens how to work together, listen, and engage with peers in a supportive setting.",
    },
    {
      title: "Build Confidence and Self-Esteem",
      description:
        "As children master musical tasks, they develop a sense of accomplishment that boosts their confidence and fosters personal growth.",
    },
  ],
};

const howPCITWorks = {
  title: "Our Music Therapy Approach",
  description:
    "At Young Sprouts Therapy, we use a variety of music therapy techniques to ensure each child or teen gets the most out of their sessions:",
  list: [
    {
      title: "Play-Based Music Therapy",
      description:
        "Younger children respond well to playful, interactive music therapy sessions that integrate rhythm, movement, and songs. This helps them build motor skills while engaging their creativity.",
    },
    {
      title: "Art and Music Integration",
      description:
        "For teens, we incorporate art therapy alongside music therapy, allowing them to create meaningful connections between their emotions and creative expression.",
    },
    {
      title: "Social Skills Groups",
      description:
        "Group music therapy sessions focus on improving peer relationships and social skills through musical collaboration, teamwork, and shared activities.",
    },
  ],
};

const TimeLineSectionData = [
  {
    title: "Improved Emotional Regulation",
    description:
      "Music therapy provides a non-verbal way for children to process and release difficult emotions, helping them manage stress and anxiety more effectively.",
  },
  {
    title: "Stronger Social Connections",
    description:
      "Children and teens in group sessions learn how to communicate, collaborate, and build friendships in a structured, supportive environment.",
  },
  {
    title: "Greater Confidence ",
    description:
      " By mastering musical tasks, children develop a sense of achievement, improving their self-esteem and overall confidence in other areas of life.",
  },
];

const FaqData = {
  description:
    "If you're seeking music therapy for your child or teen, our experienced therapists at Young Sprouts Therapy can help. Contact us today to schedule an in-person or virtual session. Fill out our online contact form or schedule a free consultation to start your child’s journey toward emotional and social growth through music.",
  accordion: [
   {
    "title": "What is music therapy and how can it benefit my child or teen?",
    "description": "Music therapy is a clinical and evidence-based practice where trained therapists use music interventions to achieve individualized goals. It helps children and teens express emotions, improve communication skills, and manage behavioural issues through musical activities."
  },
  {
    "title": "How can music therapy support children aged 6 and under in developing social and communication skills?",
    "description": "For young children, music therapy provides a non-verbal medium to express themselves, facilitating the development of social and communication skills. Engaging in musical activities can enhance their ability to interact with others and communicate effectively."
  },
  {
    "title": "How does music therapy assist children with autism?",
    "description": "Music therapy has been shown to improve social interaction and communication skills in children with autism. Musical activities can provide a safe and structured environment for these children to express themselves and connect with others."
  },
  {
    "title": "What happens during a typical music therapy session?",
    "description": "In a music therapy session, your child may engage in activities such as playing instruments, singing, songwriting, or listening to music. These sessions are tailored to your child's needs and aim to provide a safe space for self-expression and emotional processing."
  },
  {
    "title": "Is musical ability required to participate in music therapy?",
    "description": "No musical skills are necessary for your child to benefit from music therapy. The focus is on using music as a therapeutic tool to address emotional, cognitive, and social needs, not on musical performance."
  },
  {
    "title": "Is music therapy available in Vaughan and surrounding areas?",
    "description": "Yes, we offer music therapy services to children and families in Vaughan, Thornhill, North York, Richmond Hill, Markham, and nearby communities. Our clinic is located in Thornhill, making it easily accessible from these areas. We are committed to providing compassionate care to support your child's well-being."
  },
  ],
};
