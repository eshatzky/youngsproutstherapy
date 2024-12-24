import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, GraduationCap, MapPin, Star, Users } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 mix-blend-multiply" />
      <div
        className="relative min-h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert Therapy Services Across the GTA
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Find support for kids &amp; teens struggling with anxiety,
              behavioral issues, ADHD, grief, trauma, and more.
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-primary bg-white"
                asChild
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const locations = [
  {
    name: "Vaughan",
    slug: "vaughan",
    students: "500+",
    rating: "4.9",
    availability: "Mon-Sun",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80",
  },
  {
    name: "Richmond Hill",
    slug: "richmond-hill",
    students: "450+",
    rating: "4.8",
    availability: "Mon-Sun",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
  },
  // Add other locations with similar data
];

function LocationGrid() {
  return (
    <div className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Locations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find expert therapy services at a location near you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card
              key={location.slug}
              className="group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center text-white">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="font-semibold">{location.name}</span>
                </div>
              </div>

              <CardContent className="pt-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Users className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Clients</p>
                    <p className="font-semibold">{location.students}</p>
                  </div>
                  <div className="text-center">
                    <Star className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="font-semibold">{location.rating}</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Open</p>
                    <p className="font-semibold">{location.availability}</p>
                  </div>
                </div>

                <Link href={`/site/${location.slug}`}>
                  <Button className="w-full h-11 py-3 lg:max-w-36">
                    View Location
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Clients",
  },
  {
    icon: GraduationCap,
    value: "95%",
    label: "Success Rate",
  },
  {
    icon: Award,
    value: "5+",
    label: "Years Experience",
  },
];

export function StatsSection() {
  return (
    <div className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="bg-primary-foreground/10 border-primary-foreground/20"
            >
              <CardContent className="flex flex-col items-center p-6 text-white">
                <stat.icon className="h-8 w-8 mb-4 " />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm  text-center">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteTemplate() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <LocationGrid />
    </div>
  );
}
