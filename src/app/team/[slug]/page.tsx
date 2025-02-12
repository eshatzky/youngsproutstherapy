import { TeamDetailsPage } from "@/components/pages/team-details";
import { getTeamBySlug } from "@/lib/client";

interface ParemsType {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ParemsType) {
  const team = await getTeamBySlug(params.slug);
  const url = `https://www.youngsproutstherapy.com/team/${params.slug}`;
  return {
    title: `${params.slug.replace("-", " ")} | ${team?.position}`,
    description:
      team?.seoDesc ||
      "Young Sprouts Therapy offers play therapy, CBT, DBT, and more for kids, teens, and families in Vaughan, Toronto, and surrounding areas. In-person and virtual sessions available.",
    alternates: {
      canonical: url,
    },
  };
}

export default async function page({ params }: ParemsType) {
  const team = await getTeamBySlug(params.slug);
  return <TeamDetailsPage team={team} />;
}
