import { LocationTemplate } from "@/components/template/site/location";
import React, { Suspense } from "react";

interface PageType {
  params: {
    location: string;
  };
}

// Metadata mapping for each location
const locationMetadata = {
  thornhill: {
    title: "Child, Teen, and Family Therapy in Thornhill",
    description:
      "Compassionate therapy services for children, teens, and families in Thornhill. Our registered therapists and social workers are covered by most workplace insurance.",
  },
  vaughan: {
    title: "Child, Teen, and Family Therapy in Vaughan",
    description:
      "Professional therapy services for children, teens, and families in Vaughan. Our experienced therapists provide support covered by most workplace insurance.",
  },
  richmondhill: {
    title: "Child, Teen, and Family Therapy in Richmond Hill",
    description:
      "Expert counselling services for children, teens, and families in Richmond Hill. Our dedicated therapists are covered by most workplace insurance.",
  },
  markham: {
    title: "Child, Teen, and Family Therapy in Markham",
    description:
      "Trusted therapy services for children, teens, and families in Markham. Covered by most workplace insurance.",
  },
  northyork: {
    title: "Child, Teen, and Family Therapy in North York",
    description:
      "Supportive therapy services for children, teens, and families in North York. Our experienced therapists provide professional care covered by most workplace insurance.",
  },
  maple: {
    title: "Child, Teen, and Family Therapy in Maple",
    description:
      "Dedicated therapy and counselling services for children, teens, and families in Maple. Our therapists are covered by most workplace insurance.",
  },
  concord: {
    title: "Child, Teen, and Family Therapy in Concord",
    description:
      "Professional therapy services in Concord for children, teens, and families. Our experienced therapists offer support covered by most workplace insurance.",
  },
  woodbridge: {
    title: "Child, Teen, and Family Therapy in Woodbridge",
    description:
      "Expert therapy and counselling services for children, teens, and families in Woodbridge. Covered by most workplace insurance.",
  },
  aurora: {
    title: "Child, Teen, and Family Therapy in Aurora",
    description:
      "Compassionate counselling services for children, teens, and families in Aurora. Most workplace insurance plans cover our services.",
  },
  newmarket: {
    title: "Child, Teen, and Family Therapy in Newmarket",
    description:
      "Trusted therapy services for children, teens, and families in Newmarket. Our experienced therapists provide professional support covered by most workplace insurance.",
  },
  mississauga: {
    title: "Child, Teen, and Family Therapy in Mississauga",
    description:
      "Experienced therapists providing child, teen, and family counselling in Mississauga. Covered by most workplace insurance.",
  },
  brampton: {
    title: "Child, Teen, and Family Therapy in Brampton",
    description:
      "Trusted therapy services for children, teens, and families in Brampton. Our registered therapists offer support covered by most workplace insurance.",
  },
  pickering: {
    title: "Child, Teen, and Family Therapy in Pickering",
    description:
      "Expert therapy and counselling services for children, teens, and families in Pickering. Most workplace insurance covers our services.",
  },
  ajax: {
    title: "Child, Teen, and Family Therapy in Ajax",
    description:
      "Compassionate therapy and counselling services for children, teens, and families in Ajax. Covered by most workplace insurance.",
  },
  whitby: {
    title: "Child, Teen, and Family Therapy in Whitby",
    description:
      "Professional therapy and counselling services for children, teens, and families in Whitby. Our therapists are covered by most workplace insurance.",
  },
  oshawa: {
    title: "Child, Teen, and Family Therapy in Oshawa",
    description:
      "Trusted therapy services for children, teens, and families in Oshawa. Our experienced therapists provide professional support covered by most workplace insurance.",
  },
  barrie: {
    title: "Child, Teen, and Family Therapy in Barrie",
    description:
      "Dedicated therapy services for children, teens, and families in Barrie. Our therapists provide expert care covered by most workplace insurance.",
  },
  hamilton: {
    title: "Child, Teen, and Family Therapy in Hamilton",
    description:
      "Compassionate therapy and counselling services for children, teens, and families in Hamilton. Covered by most workplace insurance.",
  },
  guelph: {
    title: "Child, Teen, and Family Therapy in Guelph",
    description:
      "Expert counselling services for children, teens, and families in Guelph. Our therapists provide support covered by most workplace insurance.",
  },
  kitchener: {
    title: "Child, Teen, and Family Therapy in Kitchener",
    description:
      "Professional therapy and counselling services for children, teens, and families in Kitchener. Our therapists are covered by most workplace insurance.",
  },
  waterloo: {
    title: "Child, Teen, and Family Therapy in Waterloo",
    description:
      "Compassionate therapy and counselling services for children, teens, and families in Waterloo. Covered by most workplace insurance.",
  },
  cambridge: {
    title: "Child, Teen, and Family Therapy in Cambridge",
    description:
      "Trusted therapy services for children, teens, and families in Cambridge. Our experienced therapists provide professional support covered by most workplace insurance.",
  },
  niagarafalls: {
    title: "Child, Teen, and Family Therapy in Niagara Falls",
    description:
      "Expert therapy and counselling services for children, teens, and families in Niagara Falls. Covered by most workplace insurance.",
  },
  stcatharines: {
    title: "Child, Teen, and Family Therapy in St. Catharines",
    description:
      "Dedicated therapy services for children, teens, and families in St. Catharines. Our therapists provide expert care covered by most workplace insurance.",
  },
};

export async function generateMetadata({ params }: PageType) {
  const { location } = params;
  const normalizedLocation = location.toLowerCase().replace(/-/g, "");
  const metadata = locationMetadata[normalizedLocation] || {
    title: "Child, Teen, and Family Therapy",
    description:
      "Professional therapy services for children, teens, and families. Our registered therapists and social workers are covered by most workplace insurance.",
  };

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `https://www.youngsproutstherapy.com/locations/${location}`,
    },
  };
}

export default function Page({ params: { location } }: PageType) {
  return (
    <Suspense fallback={null}>
      <LocationTemplate location={location} />
    </Suspense>
  );
}
