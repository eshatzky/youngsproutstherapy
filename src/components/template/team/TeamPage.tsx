import { TeamCardWrapper } from "@/components/organism/team";
import { Team } from "@/components/types";

type Props = {
  teams: Team[];
};

export function TeamPage({ teams }: Props) {
  return (
    <section className="min-h-screen max-w-[1440px] mx-auto w-full ~px-5/10 py-16 flex flex-col gap-6 @container/team">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl text-center font-medium">Our Team</h1>
        <p className="text-center leading-7 text-lg ">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
      </div>
      <TeamCardWrapper teams={teams} />
    </section>
  );
}
