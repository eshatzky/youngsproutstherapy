import {
  Banner,
  BlockWithPoints,
  Faq,
  HeroSection,
  TwoFlexSection,
  WhatIsSection,
  WhyChooseUs,
} from "@/components/organism/services";

import arttherapyheroimage from "/public/services/arttherapyheroimage.webp";
import arttherapymobile from "/public/services/arttherapymobile.png";
import benefitsofArttherapy from "/public/services/benefitsofArttherapy.webp";
import useArtThreapy from "/public/services/useArtThreapy.webp";
import integratingarttherapy from "/public/services/integratingarttherapy.webp";
import mindfullnessandarttherapy from "/public/services/mindfullnessandarttherapy.webp";
import groupArttherapy from "/public/services/groupArttherapy.webp";
import grouparttherapybannerimage from "/public/services/grouparttherapybannerimage.png";

export function ArtTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col lg:gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsArtTherapy} />
        <WhatIsSection
          data={WhatIsArtTherapySubSection}
          className="max-lg:mt-8 lg:!pt-4"
        />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16 max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={BenefitsofArtTherapy} />
          )}
          image={benefitsofArttherapy}
        />
      </div>
      <WhyChooseUs data={WhyChooseUsData} showBg={true} />
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={UsingArtTherapy} />}
          image={useArtThreapy}
          rtl={true}
        />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16  max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={IntegratingArtTherapy} />
          )}
          image={integratingarttherapy}
        />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16  max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={mindfullnessandarttherapyData} />
          )}
          image={mindfullnessandarttherapy}
          rtl={true}
        />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16  max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={GroupArtTherapyForKids} />
          )}
          image={groupArttherapy}
        />
      </div>
      <div className="~pt-12/16 max-w-[1440px] mx-auto w-full ~px-4/1 max-lg:pt-0">
        <Banner data={BannerData} />
      </div>
      <div className=" max-w-[1440px] w-full mx-auto ~px-4/10 max-lg:-pt-5">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: arttherapyheroimage,
  title: "Art Therapy for Kids and Teens in Vaughan & Thornhill",
  description:
    "Art Therapy involves the use of creative techniques such as drawing, painting, and sculpting to help individuals express themselves.",
};
const HeroSectionDataMobile = {
  image: arttherapymobile,
  title: "Art Therapy for Kids and Teens in Vaughan & Thornhill",
  description:
    "Art Therapy involves the use of creative techniques such as drawing, painting, and sculpting to help individuals express themselves.",
};

const WhatIsArtTherapy = {
  title:
    "Healing Through Creativity: Art Therapy for Emotional and Behavioural Growth",
  description:
    "At Young Sprouts Therapy, we believe in the power of creative expression to help children and teens process their emotions, overcome challenges, and develop healthier ways of thinking and behaving. Art therapy offers a unique, non-verbal outlet for kids and teens who struggle to express their feelings in words, providing a safe space for them to explore their inner world through creativity. Our art therapy programs are designed to meet the emotional and developmental needs of children and adolescents, addressing issues such as anxiety, trauma, ADHD, and emotional regulation. We offer both in-person art therapy sessions in Vaughan and Thornhill, as well as virtual sessions for families across Ontario.",
};

const WhatIsArtTherapySubSection = {
  title: "What Is Art Therapy?",
  description:
    "Art therapy is a form of psychotherapy that uses art-making as a way for children and teens to explore their emotions, express themselves, and work through personal challenges. Through activities like drawing, painting, and sculpture, participants can process their feelings in a creative, non-verbal way. This form of therapy is particularly effective for kids and teens who may find it difficult to talk about their emotions or traumatic experiences. Our licensed art therapists guide children and teens through the creative process, helping them make connections between their artwork and their thoughts or emotions. By working through these insights, kids and teens can develop emotional resilience and gain a deeper understanding of themselves.",
};

const BenefitsofArtTherapy = {
  title: "Benefits of Art Therapy for Kids and Teens",
  description:
    "Art therapy offers a wide range of benefits for children and teens, helping them:",
  list: [
    {
      title: "Process Trauma",
      description:
        "cess Trauma Children and teens who have experienced trauma can use art therapy to safely explore their feelings and memories. By externalizing their emotions through creative expression, they can gain distance from their pain and begin the healing process.",
    },
    {
      title: "Improve Emotional Regulation",
      description:
        "Many kids struggle with managing big emotions like anger, anxiety, or sadness. Art therapy helps them identify and process these feelings in a healthy way, reducing the likelihood of emotional outbursts or withdrawal.",
    },
    {
      title: "Boost Self-Esteem",
      description:
        "Creating art allows kids and teens to take pride in their work and develop a sense of accomplishment. This can boost their self-confidence and help them see their own strengths more clearly.",
    },
    {
      title: "Enhance Social Skills",
      description:
        "In group art therapy sessions, children and teens learn how to share, collaborate, and communicate with their peers, improving their social skills and building stronger relationships.",
    },
  ],
};
const UsingArtTherapy = {
  title: "Using Art Therapy to Manage ADHD and Behavioural Challenges",
  description:
    "For children and teens with ADHD or behavioural challenges, art therapy provides an outlet for energy, creativity, and emotional expression. Art therapy can help improve focus, impulse control, and emotional regulation, giving kids the tools they need to manage their behaviours in more constructive ways.",
  list: [
    {
      title: "Improve Focus and Attention:",
      description:
        "By engaging in structured art activities, kids with ADHD can practice focusing on tasks for longer periods, which helps improve concentration over time.",
    },
    {
      title: "Manage Impulsivity:",
      description:
        "Art therapy encourages mindfulness and reflection, helping kids slow down and think before they act.",
    },
    {
      title: "Manage Impulsivity:",
      description:
        "Art therapy encourages mindfulness and reflection, helping kids slow down and think before they act.",
    },
  ],
};
const IntegratingArtTherapy = {
  title: "Integrating Art Therapy with Cognitive-Behavioural Therapy (CBT)",
  description:
    "At Young Sprouts Therapy, we often combine art therapy with Cognitive-Behavioural Therapy (CBT) to help kids and teens develop a deeper understanding of their thoughts, emotions, and behaviours. This integrative approach allows children to express their emotions through art while learning how to challenge negative thinking patterns and develop healthier coping strategies.",
  list: [
    {
      title: "Emotional Awareness:",
      description:
        "Art therapy can help kids become more aware of their emotions, while CBT provides them with practical tools for managing those feelings.",
    },
    {
      title: "Creative Problem-Solving:",
      description:
        "By incorporating art into CBT, kids can engage in creative problem-solving, allowing them to explore new ways of handling difficult situations.",
    },
  ],
};

const mindfullnessandarttherapyData = {
  title: "Mindfulness and Art Therapy: A Powerful Combination",
  description:
    "Mindfulness practices are another powerful tool we integrate with art therapy. By combining mindfulness exercises like deep breathing and body scans with creative expression, kids and teens can learn how to stay present in the moment and manage overwhelming emotions.",
  list: [
    {
      title: "Calming the Mind:",
      description:
        "Art therapy helps kids slow down and focus on the present moment, reducing anxiety and promoting relaxation.",
    },
    {
      title: "Building Emotional Resilience:",
    },
    {
      title: "Manage Impulsivity:",
      description:
        "Art therapy encourages mindfulness and reflection, helping kids slow down and think before they act.",
    },
  ],
};
const GroupArtTherapyForKids = {
  title: "Group Art Therapy for Kids and Teens",
  description:
    "Group art therapy offers kids and teens the opportunity to express themselves while connecting with peers who may be facing similar challenges. In a supportive group environment, participants work on creative projects together, fostering a sense of community and collaboration.",
  list: [
    {
      title: "Peer Support and Social Skills:",
      description:
        "Group therapy helps kids build social skills and gain support from their peers, making it easier to navigate challenges like peer pressure or social anxiety.",
    },
    {
      title: "Emotional Expression in a Group Setting:",
      description:
        "Working alongside others allows participants to share their experiences and learn from the emotional journeys of their peers.",
    },
  ],
};

const WhyChooseUsData = {
  title: "Art Therapy for Trauma Recovery",
  description:
    "Children and teens who have experienced trauma often struggle to talk about their emotions. Art therapy offers a safe and non-threatening way for them to explore their feelings without needing to verbalize painful memories. By using visual expression, kids can process complex emotions like fear, guilt, or sadness, helping them to make sense of their trauma and begin the path to recovery.",
  list: [
    {
      title: "Externalizing Trauma:",
      description:
        "Through the process of creating art, kids can express feelings that they may not have words for, allowing them to release and transform difficult emotions.",
    },
    {
      title: "Gaining Emotional Distance:",
      description:
        "Art therapy allows kids to externalize their trauma, making it easier to discuss and work through their experiences without feeling overwhelmed.",
    },
  ],
};

const BannerData = {
  title: "Family Involvement in Art Therapy",
  description:
    "At Young Sprouts Therapy, we believe that family involvement is essential to the success of art therapy. We work closely with parents and caregivers to ensure that the progress made in therapy is supported at home. Family members are encouraged to participate in occasional sessions to strengthen the family dynamic and provide ongoing support for their child’s emotional growth.",
  image: grouparttherapybannerimage,
};
const FaqData = {
  description:
    "Book an Art Therapy Session for Your Child or Teen in Vaughan & Thornhill. Are you ready to help your child express their emotions and develop emotional resilience through art? Contact us today to book an art therapy session at our Vaughan or Thornhill office. We offer both in-person and virtual sessions to meet your family’s needs. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
    "title": "What is art therapy and how can it help my child or teen?",
    "description": "Art therapy is a mental health profession that enriches the lives of individuals, families, and communities through active art-making, creative processes, applied psychological theory, and human experience within a psychotherapeutic relationship. It helps children and teens express emotions, develop coping skills, and improve self-esteem through creative expression."
  },
  {
    "title": "What are the benefits of art therapy for children and adolescents?",
    "description": "Art therapy offers numerous advantages for children's well-being, including emotional, cognitive, and social benefits. It provides a non-threatening way for children and teens to express their inner feelings, which can be especially helpful for those who find it difficult to verbalize their emotions."
  },
  {
    "title": "How is art therapy different from regular art classes?",
    "description": "While both involve creative activities, art therapy is facilitated by a trained therapist and focuses on using art as a medium for healing and personal growth. Unlike regular art classes that emphasize technique and aesthetics, art therapy aims to help individuals process emotions and experiences."
  },
  {
    "title": "How is art therapy incorporated into sessions with other therapeutic approaches?",
    "description": "At Young Sprouts Therapy, art therapy is often integrated with other modalities like play therapy, cognitive-behavioural therapy (CBT), and mindfulness techniques, depending on each child’s needs. This personalized approach ensures that children and teens receive well-rounded support that fosters emotional expression, resilience, and self-confidence."
  },
  {
    "title": "What can we expect during an art therapy session?",
    "description": "In an art therapy session, your child will engage in creative activities tailored to their needs. The therapist provides a safe and supportive environment, encouraging the child to express themselves through various art materials. Sessions are designed to help children process their feelings and experiences."
  },
  {
    "title": "Is art therapy available in Vaughan and surrounding areas?",
    "description": "Yes, we offer art therapy services to children and families in Vaughan, Thornhill, North York, Richmond Hill, Markham, and nearby communities. Our clinic is located in Thornhill, making it easily accessible from these areas. We are committed to providing compassionate care to support your child's well-being."
  },
  ],
};
