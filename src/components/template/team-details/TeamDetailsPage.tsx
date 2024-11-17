import { Team } from "@/components/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { urlForImage } from "@/lib/image";
import Image from "next/image";

type Props = {
  team: Team;
};

export function TeamDetailsPage({ team }: Props) {
  const imageProps =
    team && team?.mainImage ? urlForImage(team.mainImage) : null;
  return (
    <div className="pt-6 pb-16">
      <Card className="max-w-[1340px] mx-auto w-full ~px-5/14 py-8 flex flex-col lg:flex-row gap-5 divide-x divide-[#B0DEE6] ">
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
                priority={false}
                className="object-cover rounded-md object-top transition-all w-[334px] h-[387px] group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out"
                width={300}
                height={300}
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="~text-lg/2xl font-medium"> {team.name}</h2>
            <p className="text-primary font-medium ~text-lg/2xl">
              {team.position}
            </p>
            <Button className="!w-full rounded-lg lg:!w-full lg:max-w-full">
              Book Free Consultating
            </Button>
          </div>
        </div>
        <div className="p-4 flex flex-col justify-between gap-8">
          <p className="leading-6 text-[#000]">{team.description}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {team.specialities && (
              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-medium text-gray-500">
                  Specialities:
                </h3>
                <ul className="list-disc text-primary font-medium accent-primary flex flex-col gap-4">
                  {team.specialities.map((item, key) => (
                    <li key={key} className="ml-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {team.clientFocus && (
              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-medium text-gray-500">
                  Client Focus:
                </h3>
                <ul className="list-disc text-primary font-medium accent-primary flex flex-col gap-4">
                  {team.clientFocus.map((item, key) => (
                    <li key={key} className="ml-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {team.therapyFormats && (
              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-medium text-gray-500">
                  Therapy Formats:
                </h3>
                <ul className="list-disc text-primary font-medium accent-primary flex flex-col gap-4">
                  {team.therapyFormats.map((item, key) => (
                    <li key={key} className="ml-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
