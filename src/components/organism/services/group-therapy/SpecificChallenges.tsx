import { Card } from "@/components/ui/card";

export function SpecificChallenges() {
  return (
    <section className=" flex flex-col gap-6 lg:gap-14">
      <div className="flex flex-col gap-6">
        <h2 className="~text-2xl/3xl font-medium text-primary text-center">
          Age-Specific Group Therapy for Kids and Teens
        </h2>
        <p className="text-center leading-6 max-w-[948px] mx-auto">
          At Young Sprouts Therapy, we understand that the challenges faced by
          kids and teens differ based on their age and developmental stage.
          That&apos;s why we offer age-specific group therapy programs that
          target social-emotional learning, self-esteem, and leadership skills.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-11 max-w-[1245px] mx-auto">
        {ChallengesData.map((item, index) => (
          <Card
            key={index}
            className="p-6 flex flex-col gap-6 bg-secondary rounded-lg"
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
    title: "Group Therapy for Kids (Ages 8-12)",
    description:
      "For younger children, group therapy focuses on building social skills, improving emotional vocabulary, and helping kids navigate peer interactions. Through interactive activities and discussions, kids learn how to express their feelings, understand others' emotions, and develop empathy in a supportive group environment.",
  },
  {
    title: "Group Therapy for Teens (Ages 13-17)",
    description:
      "Our teen group therapy sessions address the emotional and social challenges that adolescents face, including anxiety, peer pressure, and self-esteem issues. Teens learn how to manage stress, build healthier relationships, and develop leadership skills. These sessions offer a safe space for teens to share their experiences, receive feedback from their peers, and develop the confidence they need to thrive.",
  },
];
