import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Clock, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

const locations = {
  vaughan: {
    name: "Vaughan",
    description:
      "Expert tutoring services in the Vaughan area for elementary and high school students.",
    address: "7700 Keele Street, Vaughan, ON L4K 2A1",
    mapUrl: "https://maps.google.com/?q=7700+Keele+Street+Vaughan+ON",
  },
  // Add other locations as needed
};

const services = [
  {
    icon: Book,
    title: "All Therapy Types",
    description: "Expert support in Adhd, teen, child and more",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "One-on-one therapy tailored to each child's needs",
  },
  {
    icon: GraduationCap,
    title: "Qualified Therapist",
    description: "Experienced therapist with proven track records",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Available after school, evenings, and weekends",
  },
];

export function LocationTemplate({ location }: { location: string }) {
  const locationData = locations[location as keyof typeof locations];
  return (
    <div>
      <div className="min-h-screen bg-background">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">
              Tutoring Services in {locationData.name}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              {locationData.description}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Location Information</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our {locationData.name} therapy center is conveniently located
                at:
              </p>
              <p className="text-lg mb-6">{locationData.address}</p>
              <Button asChild>
                <Link href={locationData.mapUrl} target="_blank">
                  View on Map
                </Link>
              </Button>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Get Started</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ready to help your child excel? Contact us today to learn more
                about our therapy services in {locationData.name}.
              </p>
              <div className="space-x-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
