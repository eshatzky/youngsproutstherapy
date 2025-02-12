"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const locations = {
  thornhill: {
    name: "Thornhill",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "17 Thornhill Woods Dr, Thornhill, ON L4J 8V3",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.123456789012!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2sThornhill%20Woods%20Dr%2C%20Thornhill%2C%20ON!5e0!3m2!1sen!2sca!4v1731796678561!5m2!1sen!2sca",
  },
  vaughan: {
    name: "Vaughan",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "1000 16th Ave, Vaughan, ON L4K 0C5",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92092.7878805373!2d-79.64834130533858!3d43.83717922378304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b268883243a77%3A0xdd95317585aa054b!2sVaughan%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738062693891!5m2!1sen!2sbd",
  },
  "richmond-hill": {
    name: "Richmond Hill",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "200 York Blvd, Richmond Hill, ON L4B 3J4",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91990.11678028788!2d-79.51070175245174!3d43.90366303302156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sRichmond%20Hill%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056591650!5m2!1sen!2sbd",
  },
  markham: {
    name: "Markham",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "300 Main St, Markham, ON L3P 1Z2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92025.50477592275!2d-79.45542543996659!3d43.880756894266824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d5efa0324ca9%3A0xf73d52812cb23d63!2sMarkham%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056624450!5m2!1sen!2sbd",
  },
  "north-york": {
    name: "North York",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "400 Yonge St, North York, ON M2N 0B2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92220.67808331583!2d-79.52439880893407!3d43.75425244934779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b322ec4918c75%3A0xfb330d877abf7e3d!2sNorth%20York%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056661066!5m2!1sen!2sbd",
  },
  maple: {
    name: "Maple",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "500 Maple Rd, Maple, ON L6A 1S2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23017.88698775727!2d-79.54574984354883!3d43.850939548387714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b29035d80589d%3A0xe9c39e17ba1ddefd!2sMaple%2C%20Vaughan%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056689225!5m2!1sen!2sbd",
  },
  concord: {
    name: "Concord",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "600 Concord Ave, Concord, ON L4K 1B2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46069.17389504498!2d-79.54892129341908!3d43.80765154245235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2ef69e4bab3b%3A0x8f3aa5e88bdaf18c!2sConcord%2C%20Vaughan%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056720496!5m2!1sen!2sbd",
  },
  woodbridge: {
    name: "Woodbridge",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "700 Woodbridge Ave, Woodbridge, ON L4L 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46072.986535262666!2d-79.62553654347175!3d43.802707997632005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b257a9ad0b911%3A0xecea3dfb3abd0ac2!2sWoodbridge%2C%20Vaughan%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056750073!5m2!1sen!2sbd",
  },
  aurora: {
    name: "Aurora",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "800 Aurora Rd, Aurora, ON L4G 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45923.45527782772!2d-79.4876203914055!3d43.996261394655534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad392943890c7%3A0x5037b28c7231a30!2sAurora%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056773425!5m2!1sen!2sbd",
  },
  newmarket: {
    name: "Newmarket",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "900 Newmarket St, Newmarket, ON L3Y 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45881.585931278314!2d-79.50240539082675!3d44.050335787882894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad20bf0ae014f%3A0xcb39bf730072dc8f!2sNewmarket%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056796017!5m2!1sen!2sbd",
  },
  mississauga: {
    name: "Mississauga",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "1000 Mississauga Rd, Mississauga, ON L5B 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184985.37627873477!2d-79.6591540468505!3d43.577456818359416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b469fe76b05b7%3A0x3146cbed75966db!2sMississauga%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056819617!5m2!1sen!2sbd",
  },
  brampton: {
    name: "Brampton",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "1100 Brampton St, Brampton, ON L6P 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184531.2943256528!2d-79.92435017044492!3d43.725063729050355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15eaa5d05abf%3A0x352d31667cc38677!2sBrampton%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056841809!5m2!1sen!2sbd",
  },
  pickering: {
    name: "Pickering",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "1200 Pickering Rd, Pickering, ON L1V 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368811.97221155814!2d-79.4060868189731!3d43.76572726918989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d9abfae88d1d%3A0x4bd24862b12786d8!2sPickering%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056866120!5m2!1sen!2sbd",
  },
  ajax: {
    name: "Ajax",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "1300 Ajax Rd, Ajax, ON L1S 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46021.905634133705!2d-79.06996874276604!3d43.86890362825505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4e7b441ad15d1%3A0xfb77e101d380bece!2sAjax%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056893201!5m2!1sen!2sbd",
  },
  whitby: {
    name: "Whitby",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "1400 Whitby Rd, Whitby, ON L1N 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368609.0764671951!2d-79.24232619380012!3d43.79862587324898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51e88fc357749%3A0xd77b28711c4012cb!2sWhitby%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056921480!5m2!1sen!2sbd",
  },
  oshawa: {
    name: "Oshawa",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "1500 Oshawa Rd, Oshawa, ON L1H 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91920.8809585992!2d-78.96075135050472!3d43.94845088819139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d21ccd37533%3A0xdd8ceff2f844fcbf!2sOshawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056943172!5m2!1sen!2sbd",
  },
  barrie: {
    name: "Barrie",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "1600 Barrie Rd, Barrie, ON L4M 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91283.25504687845!2d-79.74812233256644!3d44.359232368296574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3371ad7206d%3A0x1d2e0f00a84b535a!2sBarrie%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056965150!5m2!1sen!2sbd",
  },
  hamilton: {
    name: "Hamilton",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "1700 Hamilton Rd, Hamilton, ON L8H 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185954.92503790412!2d-80.09795545321366!3d43.26094214425763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c986c27de778f%3A0x2b6aee56d8df0e21!2sHamilton%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738056990968!5m2!1sen!2sbd",
  },
  guelph: {
    name: "Guelph",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "1800 Guelph Rd, Guelph, ON N1H 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92558.6039758035!2d-80.32256836843158!3d43.53452786447026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9ad0c3a9fb6b%3A0x5037b28c7231b60!2sGuelph%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738057016482!5m2!1sen!2sbd",
  },
  kitchener: {
    name: "Kitchener",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "1900 Kitchener Rd, Kitchener, ON N2A 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92718.07427072432!2d-80.55871542291221!3d43.43052943458779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf48c03ee5105%3A0x9525f8e6df5f544b!2sKitchener%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738057040332!5m2!1sen!2sbd",
  },
  waterloo: {
    name: "Waterloo",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "2000 Waterloo Rd, Waterloo, ON N2J 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46319.38434870205!2d-80.5879188468746!3d43.48227338285425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf1565ffe672b%3A0x5037b28c7231d90!2sWaterloo%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738057058616!5m2!1sen!2sbd",
  },
  cambridge: {
    name: "Cambridge",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "2100 Cambridge Rd, Cambridge, ON N1R 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39127.18402945437!2d0.07878780331512417!3d52.19888753470316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d85d89f32a012d%3A0x63a320e1a35e3d21!2sCambridge%2C%20UK!5e0!3m2!1sen!2sbd!4v1738057081584!5m2!1sen!2sbd",
  },
  "niagara-falls": {
    name: "Niagara Falls",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "2200 Niagara Falls Blvd, Niagara Falls, ON L2E 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93292.95510977176!2d-79.24392174371238!3d43.053952162085544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3445eec824db9%3A0x46d2c56156bda288!2sNiagara%20Falls%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738057114343!5m2!1sen!2sbd",
  },
  "st.-catharines": {
    name: "St. Catharines",
    description:
      "Psychotherapy and counseling for kids and teens in Thornhill. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    address: "2300 St. Catharines Rd, St. Catharines, ON L2M 1A2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93292.95510977176!2d-79.24392174371238!3d43.053952162085544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d35054bb6a5a4b%3A0x37563636c082837!2sSt.%20Catharines%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738057139331!5m2!1sen!2sbd",
  },
};

export function LocationTemplate({ location }: { location: string }) {
  const locationData = locations[location as keyof typeof locations];

  const [isCalLoaded, setIsCalLoaded] = useState(true);
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const cal = await getCalApi({ namespace: "consult" });
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#0196af",
            },
            dark: {
              "cal-brand": "#007acc",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        setIsCalLoaded(true);
      } catch (error) {
        console.error("Failed to load Cal.com API:", error);
      }
    }, 2000); // Delays execution by 2 seconds (2000 ms)

    return () => clearTimeout(timer); // Cleanup function to avoid memory leaks
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm mb-4">
            At Young Sprouts Therapy, we are dedicated to supporting children,
            teens, and families in{" "}
            <span className="!capitalize">
              {locationData?.name?.toLowerCase().replace(/-/g, " ")}
            </span>{" "}
            through expert psychotherapy and counselling services. We understand
            that every family and individual is unique, and our tailored
            approaches are designed to nurture growth, build resilience, and
            create lasting change.
          </p>
          <h1 className="text-3xl font-bold mb-6">
            Child and Family Therapy in{" "}
            <span className="capitalize">
              {" "}
              {locationData?.name?.toLowerCase().replace(/-/g, " ")}
            </span>
          </h1>
        </div>
      </div>

      {/* Map and Intro Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-full flex flex-col justify-between">
            <div>
              <p className="text-muted-foreground mb-6">
                At Young Sprouts Therapy, we offer a wide range of therapy
                options for children, teens, and families in{" "}
                <span className="capitalize">
                  {" "}
                  {locationData?.name?.toLowerCase().replace(/-/g, " ")}
                </span>
                , addressing various emotional, behavioural, and relational
                challenges.
              </p>
              <p className="text-muted-foreground mb-6">
                {locationData?.description}
              </p>
            </div>
            <div className="bg-primary/5 p-6 ">
              <h2 className="font-semibold mb-2">Ready to Get Started?</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Take the first step toward a brighter future for your family.
                Contact Young Sprouts Therapy today to schedule a free 15-minute
                consultation.
              </p>

              {isCalLoaded && (
                <Button
                  variant={"default"}
                  className="!py-3 mt-4"
                  aria-label="Book a Free Consult"
                  data-cal-namespace="consult"
                  data-cal-link="youngsproutstherapy/consult"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book a Free Consult
                </Button>
              )}
            </div>
          </div>
          <div className="h-[400px] relative rounded-lg overflow-hidden">
            <iframe
              src={locationData?.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-white bg-secondary">
            <CardHeader>
              <CardTitle>Child Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Helping young sprouts navigate challenges such as anxiety,
                behavioural concerns, grief, and self-esteem issues.
              </p>
              <div className="mt-4 p-0">
                <Link className="text-white" href="/child-therapy">
                  MORE →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="text-white bg-secondary">
            <CardHeader>
              <CardTitle>Teen Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Supporting adolescents in managing stress, trauma, social
                challenges, and personal growth.
              </p>
              <div className="mt-4 p-0">
                <Link className="text-white" href="/teen-therapy">
                  MORE →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="text-white bg-secondary">
            <CardHeader>
              <CardTitle>Family Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Strengthening family dynamics and fostering communication and
                connection among family members.
              </p>
              <div className="mt-4 p-0">
                <Link className="text-white" href="/parenting-counselling">
                  MORE →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Schools Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h3 className="text-2xl font-semibold mb-6">
          Why Choose Young Sprouts Therapy?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-start space-x-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Experienced Therapists
              </h4>
              <p className="text-muted-foreground">
                Our team consists of registered psychotherapists and social
                workers with specialized training in child and family therapy.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Personalized Care</h4>
              <p className="text-muted-foreground">
                Each treatment plan is uniquely designed to address the needs
                and goals of your family.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Convenient Location
              </h4>
              <p className="text-muted-foreground">
                Our Vaughan office is easily accessible, offering a welcoming
                and safe environment for therapy sessions.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-12 mb-6">Areas We Serve</h3>
        <p className="text-muted-foreground mb-6">
          Serving Vaughan, Thornhill, Richmond Hill, Markham, and the Greater
          Toronto Area (GTA). We also offer virtual therapy services across
          Ontario.
        </p>

        <h3 className="text-2xl font-semibold mt-12 mb-6">
          Contact Information
        </h3>
        <p className="text-muted-foreground mb-6">
          Address: 1137 Centre Street, Suite #204, Vaughan, ON, L4J 3M6
        </p>
        <p className="text-muted-foreground mb-6">Phone: (289) 579-4769</p>
        <p className="text-muted-foreground mb-6">
          Email: info@youngsproutstherapy.com
        </p>
      </div>

      {/* Footer Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-xl font-bold mb-4">About Our Vaughan Office</h2>
        <p className="text-muted-foreground mb-6">
          Located in the heart of Vaughan, Young Sprouts Therapy is committed to
          providing a nurturing space where families can feel comfortable and
          supported. Our office is designed with children and teens in mind,
          creating an inviting atmosphere that encourages growth and connection.
        </p>

        {isCalLoaded && (
          <Button
            variant={"default"}
            className="!py-3 mt-4"
            aria-label="Book a Free Consult"
            data-cal-namespace="consult"
            data-cal-link="youngsproutstherapy/consult"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a Free Consult
          </Button>
        )}
      </div>
    </div>
  );
}
