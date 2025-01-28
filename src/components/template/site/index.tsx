import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

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
      {/* Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Serving Communities Across the GTA
            </h2>
            <p className="text-xl text-gray-600">Find a location near you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Thornhill",
              "Vaughan",
              "Richmond Hill",
              "Markham",
              "North York",
              "Maple",
              "Concord",
              "Woodbridge",
              "Aurora",
              "Newmarket",
              "Mississauga",
              "Brampton",
              "Pickering",
              "Ajax",
              "Whitby",
              "Oshawa",
              "Barrie",
              "Hamilton",
              "Guelph",
              "Kitchener",
              "Waterloo",
              "Cambridge",
              "Niagara Falls",
              "St. Catharines",
            ].map((location, index) => (
              <Link
                href={`/locations/${location.toLowerCase().replace(/ /g, "-")}`}
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-3"
              >
                <span className="text-primary">&#8226;</span>
                <div className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                  {location}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards positive change. Schedule your free
            consultation today.
          </p>
          <Link
            href="/#book-consultation"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
