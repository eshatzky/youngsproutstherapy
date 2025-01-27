import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const locations = {
  thornhill: {
    name: "Thornhill",
    description:
      "Expert tutoring services in the Thornhill area for elementary and high school students.",
    address: "17 Thornhill Woods Dr, Thornhill, ON L4J 8V3",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
  vaughan: {
    name: "Vaughan",
    description:
      "Expert tutoring services in the Vaughan area for elementary and high school students.",
    address: "1000 16th Ave, Vaughan, ON L4K 0C5",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
  richmondHill: {
    name: "Richmond Hill",
    description:
      "Expert tutoring services in the Richmond Hill area for elementary and high school students.",
    address: "29 Major Mackenzie Dr E, Richmond Hill, ON L4C 1G2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
  markham: {
    name: "Markham",
    description:
      "Expert tutoring services in the Markham area for elementary and high school students.",
    address: "3100 Steeles Ave E, Markham, ON L3R 8T3",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
  northYork: {
    name: "North York",
    description:
      "Expert tutoring services in the North York area for elementary and high school students.",
    address: "18 Yorkville Ave, North York, ON M4W 1L4",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
  maple: {
    name: "Maple",
    description:
      "Expert tutoring services in the Maple area for elementary and high school students.",
    address: "12288 Keele St, Maple, ON L6A 1T6",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
  concord: {
    name: "Concord",
    description:
      "Expert tutoring services in the Concord area for elementary and high school students.",
    address: "1330 Pickering Pkwy, Concord, ON L4K 4W3",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
  woodbridge: {
    name: "Woodbridge",
    description:
      "Expert tutoring services in the Woodbridge area for elementary and high school students.",
    address: "404 Woodbridge Ave, Woodbridge, ON L4L 1A6",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
  aurora: {
    name: "Aurora",
    description:
      "Expert tutoring services in the Aurora area for elementary and high school students.",
    address: "150 Hollidge Blvd, Aurora, ON L4G 1C4",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
  newmarket: {
    name: "Newmarket",
    description:
      "Expert tutoring services in the Newmarket area for elementary and high school students.",
    address: "100 Davis Dr, Newmarket, ON L3Y 2M6",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
  mississauga: {
    name: "Mississauga",
    description:
      "Expert tutoring services in the Mississauga area for elementary and high school students.",
    address: "300 City Centre Dr, Mississauga, ON L5B 3C1",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
  brampton: {
    name: "Brampton",
    description:
      "Expert tutoring services in the Brampton area for elementary and high school students.",
    address: "300 Main St N, Brampton, ON L6V 1P8",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s7700%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%202A1!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd",
  },
};

export function LocationTemplate({ location }: { location: string }) {
  const locationData = locations[location as keyof typeof locations];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm mb-4">
            At Young Sprouts Therapy, we are dedicated to supporting children,
            teens, and families in{" "}
            {locationData?.name?.toLowerCase().replace(/ /g, "-")} through
            expert psychotherapy and counselling services. We understand that
            every family and individual is unique, and our tailored approaches
            are designed to nurture growth, build resilience, and create lasting
            change.
          </p>
          <h1 className="text-3xl font-bold mb-6">
            Child and Family Therapy in{" "}
            {locationData?.name?.toLowerCase().replace(/ /g, "-")}
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
                {locationData?.name?.toLowerCase().replace(/ /g, "-")},
                addressing various emotional, behavioural, and relational
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
              <Button asChild className="!py-3 mt-4">
                <Link href="/#book-consultation">Book a Free Consultation</Link>
              </Button>
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
          <Card className="text-white bg-primary">
            <CardHeader>
              <CardTitle>Child Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Helping young sprouts navigate challenges such as anxiety,
                behavioural concerns, grief, and self-esteem issues.
              </p>
              <Button variant="link" asChild className="mt-4 p-0">
                <Link className="text-white" href="/child-therapy">
                  MORE ABOUT CHILD THERAPY →
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-white bg-primary">
            <CardHeader>
              <CardTitle>Teen Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Supporting adolescents in managing stress, trauma, social
                challenges, and personal growth.
              </p>
              <Button variant="link" asChild className="mt-4 p-0">
                <Link className="text-white" href="/teen-therapy">
                  MORE ABOUT TEEN THERAPY →
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-white bg-primary">
            <CardHeader>
              <CardTitle>Family Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Strengthening family dynamics and fostering communication and
                connection among family members.
              </p>
              <Button variant="link" asChild className="mt-4 p-0">
                <Link className="text-white" href="/family-therapy">
                  MORE ABOUT FAMILY THERAPY →
                </Link>
              </Button>
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
        <Button asChild>
          <Link href="/contact">Book a Free Consultation</Link>
        </Button>
      </div>
    </div>
  );
}
