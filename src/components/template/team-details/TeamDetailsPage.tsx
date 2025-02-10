"use client";

import { ContactDialog } from "@/components/molecules/home/contact-dialog";
import { Team } from "@/components/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { urlForImage } from "@/lib/image";
import { motion } from "motion/react";
import Image from "next/image";

type Props = {
  team: Team;
};

type TeamMember = {
  description: string;
  specialities: string[];
  clientFocus: string[];
  therapyFormats: string[];
  therapyAreasOfSupport: string[];
};

export function TeamDetailsPage({ team }: Props) {
  const imageProps =
    team && team?.mainImage ? urlForImage(team.mainImage) : null;
  return (
    <div className="pt-6 pb-16">
      <Card className="max-w-[1340px] mx-auto w-full ~px-5/14 py-8 flex flex-col lg:flex-row gap-5 lg:divide-x divide-[#B0DEE6] ">
        <div className="flex-shrink-0 flex flex-col gap-8">
          <div className="w-full flex items-center justify-center">
            {imageProps && (
              <Image
                src={imageProps.src}
                {...(team.mainImage.blurDataURL && {
                  placeholder: "blur",
                  blurDataURL: team.mainImage.blurDataURL,
                })}
                alt={team.mainImage.alt || "Thumbnail"}
                loading="lazy"
                className="object-cover rounded-md object-top transition-all w-[334px] h-[387px] group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out"
                width={300}
                height={300}
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="~text-lg/2xl font-medium"> {team.name}</h1>
            <p className="text-primary font-medium ~text-lg/2xl">
              {team.position}
            </p>

            <ContactDialog className="!w-full rounded-lg lg:!w-full lg:max-w-full" />
          </div>
          {team?.therapyFormats && team.therapyFormats.length > 0 && (
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold ">Therapy Formats</h3>
              <ul className="list-disc pl-5">
                {team.therapyFormats.map((format, index) => (
                  <li key={index} className="text-lg text-gray-600">
                    {format}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="lg:p-4 lg:pt-0 flex flex-col justify-between gap-8">
          <TeamDetailsCard team={team} />
        </div>
      </Card>
    </div>
  );
}

export function TeamDetailsCard({ team }: { team: TeamMember }) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            About
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-7 text-gray-700">{team?.description}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team?.specialities && (
          <DetailsSection
            title="Specialities"
            items={team?.specialities}
            icon="🧠"
          />
        )}
        {team?.clientFocus && (
          <DetailsSection
            title="Client Focus"
            items={team?.clientFocus}
            icon="👥"
          />
        )}
        {team?.therapyAreasOfSupport && (
          <DetailsSection
            title="Areas of Support"
            items={team?.therapyAreasOfSupport}
            icon="🙌"
          />
        )}
      </div>
    </div>
  );
}

function DetailsSection({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: string;
}) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
        <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
          <span className="text-2xl">{icon}</span> {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          {items?.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 text-gray-700 capitalize"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="h-2 w-2 bg-primary rounded-full !capitalize" />
              {item}
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
