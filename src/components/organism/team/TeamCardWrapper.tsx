import { TeamCard } from "@/components/molecules/team";
import { Team } from "@/components/types";

type Props = {
  teams: Team[];
};

export function TeamCardWrapper({ teams }: Props) {
  return (
    <ul className="grid grid-cols-1 @[468px]/team:grid-cols-2 @[1256px]/team:grid-cols-3 gap-x-4 gap-y-6">
      {teams.map((item, key) => (
        <TeamCard item={item} key={key} />
      ))}
    </ul>
  );
}
