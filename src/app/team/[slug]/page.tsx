import { TeamDetailsPage } from "@/components/pages/team-details";
import { getTeamBySlug } from "@/lib/client";

interface ParemsType {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ParemsType) {
  const team = await getTeamBySlug(params.slug);
  const url = `https://www.youngsproutstherapy.com/team/${team?.name}`;
  return {
    title: team.name,
    alternates: {
      canonical: url,
    },
  };
}

export default async function page({ params }: ParemsType) {
  const team = await getTeamBySlug(params.slug);
  return <TeamDetailsPage team={team} />;
}
