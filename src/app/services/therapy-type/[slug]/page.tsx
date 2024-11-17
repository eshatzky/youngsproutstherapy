import {
  ChildTherapy,
  CouplesTherapy,
  GroupTherapy,
  ParentingCounselling,
  TeenTherapy,
} from "@/components/pages/services/type-of-therapy";

interface TherapyTypeProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: TherapyTypeProps) {
  // Map the slug to a corresponding capability title
  const titles: Record<string, string> = {
    "parenting-counselling": "Parenting Counselling",
    "child-therapy": "Child Therapy",
    "teen-therapy": "Teen Therapy",
    "couples-therapy": "Couples Therapy",
    "group-therapy": "Group Therapy",
  };

  const title = titles[params.slug] || "Young Sprouts Therapy";

  return {
    title: `Young Sprouts Therapy - ${title}`,
  };
}

export default async function TherapyTypePage({
  params: { slug },
}: TherapyTypeProps) {
  let content = null;

  switch (slug) {
    case "parenting-counselling":
      content = <ParentingCounselling />;
      break;
    case "child-therapy":
      content = <ChildTherapy />;
      break;
    case "teen-therapy":
      content = <TeenTherapy />;
      break;
    case "couples-therapy":
      content = <CouplesTherapy />;
      break;
    case "group-therapy":
      content = <GroupTherapy />;
      break;

    default:
      content = null;
  }

  return <>{content}</>;
}
