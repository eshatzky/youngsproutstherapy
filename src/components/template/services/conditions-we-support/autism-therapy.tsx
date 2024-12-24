import {
  BlockWithPoints,
  Faq,
  HeroSection,
  TimeLine,
  TwoFlexSection,
  WhatIsSection,
  WhyChooseUs,
} from "@/components/organism/services";

import autismtherapyhomepageimage from "/public/services/autismtherapyhomepageimage.webp";
import Autismtherapymobile from "/public/services/Autismtherapymobile.png";
import autismtherapyaboutimage from "/public/services/autismtherapyaboutimage.webp";
import autismcounselling from "/public/services/autismcounselling.webp";
import therapyforautism from "/public/services/therapyforautism.webp";
import parentingsupportofautism from "/public/services/parentingsupportofautism.webp";

export function AutismTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsAutismTherapy} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={AutismTherapyData} />}
          image={autismtherapyaboutimage}
        />
      </div>
      <div className="pt-16">
        <WhyChooseUs data={WhyChooseUsData} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={AutismCounsellingTherapyData} />
          )}
          image={autismcounselling}
        />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => <BlockWithPoints data={TheraplayforAutism} />}
          image={therapyforautism}
          rtl={true}
        />
      </div>
      <div className="pt-4">
        <WhyChooseUs data={SocialSkillsDevelopment} row={3} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={ParentingSupoorttoAutism} />
          )}
          image={parentingsupportofautism}
          rtl={true}
        />
      </div>
      <div className="flex flex-col gap-8  overflow-hidden max-w-[1250.5px] mx-auto w-full ~pt-10/16 ~px-4/10">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            How Autism Therapy Can Help
          </h2>
          <p className="text-center leading-6 max-w-[846px] mx-auto">
            Through our autism therapy programs, children and teens experience
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
  image: autismtherapyhomepageimage,
  title: "Autism Therapy & Services in Vaughan & Thornhill",
  description:
    "Expert autism therapy and counseling for children and teens. Compassionate support tailored to your child's needs.",
};
const HeroSectionDataMobile = {
  image: Autismtherapymobile,
  title: "Autism Therapy & Services in Vaughan & Thornhill",
  description:
    "Expert autism therapy and counseling for children and teens. Compassionate support tailored to your child's needs.",
};

const WhatIsAutismTherapy = {
  title: "What Is Autism Therapy?",
  description:
    "Autism therapy helps children and teens on the autism spectrum develop essential social, emotional, and behavioural skills. At Young Sprouts Therapy, we offer personalized, creative approaches using play therapy, art therapy, sandtray therapy, and social skill development to help children thrive. Our therapists work with children, teens, and their families to ensure holistic support through individual and family therapy. We provide in-person sessions in Vaughan and Thornhill, as well as virtual therapy across Ontario.",
};

const WhyChooseUsData = {
  title: "Art and Sandtray Therapy for Autism",
  description:
    "Creative therapies, such as art therapy and sandtray therapy, allow children to express their emotions in non-verbal ways:",
  list: [
    {
      title: "Art Therapy:",
      description:
        "Helps children communicate emotions through drawing, painting, or sculpting, supporting both emotional expression and sensory processing.",
    },
    {
      title: "Sandtray Therapy:",
      description:
        "A hands-on therapy that allows children to explore feelings and experiences using miniatures and sand, making it easier to understand and process difficult emotions.",
    },
  ],
};
const SocialSkillsDevelopment = {
  title: "Social Skills Development for Autism",
  description:
    "Our social skills development programs help children and teens with autism improve their ability to interact with others:",
  list: [
    {
      title: "Peer Interaction:",
      description:
        "Through group activities and role-playing, children practice social interactions, from making eye contact to maintaining conversations.",
    },
    {
      title: "Emotional Awareness:",
      description:
        "Children learn to recognize emotions in themselves and others, promoting empathy and emotional regulation.",
    },
    {
      title: "Independence:",
      description:
        "Social skills training helps children gain confidence, enabling them to navigate social situations at school, home, and in the community.",
    },
  ],
};

const ParentingSupoorttoAutism = {
  title: "Parenting Support for Autism",
  description:
    "Parenting a child with autism comes with unique challenges. Our parenting support for autism services provide guidance and resources to help families navigate their child’s needs:",
  list: [
    {
      title: "Parent Coaching:",
      description:
        "We work closely with parents to develop strategies that reinforce therapy goals at home, focusing on communication, behaviour management, and emotional support.",
    },
    {
      title: "Family Involvement:",
      description:
        "We believe in a family-centred approach to autism therapy, ensuring that parents feel supported and equipped to handle challenges.",
    },
    {
      title: "Education & Resources:",
      description:
        "We provide parents with educational resources on autism and parenting techniques, helping them better understand their child’s development and needs.",
    },
  ],
};

const TimeLineSectionData = [
  {
    title: "Enhanced Communication:",
    description:
      "Helping children express their needs and emotions more effectively.",
  },
  {
    title: "Social Confidence:",
    description: "Improving peer interactions and relationship-building.",
  },
  {
    title: "Emotional Regulation:",
    description:
      "Teaching children how to manage overwhelming emotions and sensory experiences.",
  },
];

const AutismTherapyData = {
  title: "Play-Based Autism Therapy",
  description:
    "Play therapy is a key component of our autism services. Through guided play, children learn to express emotions, improve communication, and practice social skills in a supportive environment. Play therapy for autism focuses on:",
  list: [
    {
      title: "Communication:",
      description:
        "Developing both verbal and non-verbal skills through interactive play.",
    },
    {
      title: "Social Interaction:",
      description: "Learning how to take turns, share, and follow social cues.",
    },
    {
      title: "Emotional Regulation:",
      description: "Helping children understand and manage their emotions.",
    },
  ],
};
const AutismCounsellingTherapyData = {
  title: "Autism Counselling for Older Children & Teens",
  description:
    "For older children and teens with high-functioning autism, our autism counselling focuses on developing advanced social skills and emotional intelligence. This counselling is designed to:",
  list: [
    {
      title: "Build Social Confidence:",
      description:
        "Through one-on-one sessions, teens learn how to navigate social situations, improve conversation skills, and enhance peer relationships.",
    },
    {
      title: "Emotional Awareness:",
      description:
        "Teens are guided through understanding their emotions, recognizing the emotions of others, and building empathy.",
    },
    {
      title: "Problem Solving:",
      description:
        "Autism counselling helps teens develop critical thinking and problem-solving skills, enabling them to handle challenges in social and academic settings with greater independence.",
    },
  ],
};
const TheraplayforAutism = {
  title: "Theraplay for Autism",
  description:
    "Theraplay is a structured, attachment-based therapy designed to enhance the bond between parents and their children. Theraplay is particularly effective for children on the autism spectrum, as it provides:",
  list: [
    {
      title: "Positive Social Engagement:",
      description:
        "Through playful, nurturing interactions, children develop positive social behaviours and improved communication skills.",
    },
    {
      title: "Emotional Safety:",
      description:
        "Theraplay helps children feel safe and supported, reducing anxiety and improving their ability to form relationships.",
    },
    {
      title: "Strengthened Parent-Child Bond:",
      description:
        "By involving parents directly in therapy, Theraplay strengthens the parent-child relationship, helping children feel more secure and understood.",
    },
  ],
};

const FaqData = {
  description:
    "Book an Autism Therapy Session in Vaughan & Thornhill If your child is on the autism spectrum and could benefit from autism therapy or autism services, our team is here to help. Contact us today to schedule an in-person or virtual session. Fill out our online contact form or schedule a free consultation to begin your child’s journey toward growth and development.",
  accordion: [
    {
      title:
        "What therapies are available for autism at young sprouts therapy ?",
      description:
        "We offer play therapy, art therapy, sandtray therapy, and social skills development as part of our autism services. These therapies focus on helping children communicate, process emotions, and improve social interactions.",
    },
    {
      title: "Is autism therapy available for teens ?",
      description:
        "Yes, we provide autism counselling for older children and teens. These sessions focus on social skills, emotional regulation, and problem-solving, helping teens navigate social situations and relationships.",
    },
    {
      title: "Can parents be involved in autism therapy ?",
      description:
        "Absolutely. We believe in a family-centred approach. Our therapists work closely with parents through parent coaching and Theraplay to ensure a strong support system at home.",
    },
  ],
};
