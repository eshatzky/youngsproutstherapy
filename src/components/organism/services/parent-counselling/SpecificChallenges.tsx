import { Card } from "@/components/ui/card";

export function SpecificChallenges() {
  return (
    <section className="~py-10/16 flex flex-col gap-6 lg:gap-14">
      <div className="flex flex-col gap-6">
        <h2 className="~text-2xl/3xl font-medium text-primary text-center">
          How We Help with Specific Challenges
        </h2>
        <p className="text-center leading-6 max-w-[948px] mx-auto">
          Our team is experienced in addressing a wide variety of parenting
          challenges, from childhood trauma to everyday behavioural concerns. We
          offer tailored support to meet your family’s unique needs.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-11 max-w-[1245px] mx-auto">
        {ChallengesData.map((item, index) => (
          <Card
            key={index}
            className="p-6 flex flex-col gap-6 bg-primary rounded-lg"
          >
            <h3 className="text-white font-medium text-xl">{item.title}</h3>
            <p className="text-white leading-6">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

const ChallengesData = [
  {
    title: "Trauma & Anxiety",
    description:
      "If your child has experienced trauma or struggles with anxiety, we can help. Our therapeutic approach focuses on creating a safe and supportive space for both you and your child to process emotions and heal. We provide you with tools to manage your own stress and anxiety, enabling you to be the calm and present parent your child needs.",
  },
  {
    title: "Behavioral Challenges",
    description:
      "Whether you're dealing with defiance, aggression, or issues related to ADHD, our therapists work with you to develop strategies that manage difficult behaviours while reinforcing positive ones. We provide practical, consistent approaches that encourage your child’s emotional and behavioural growth.",
  },
];
