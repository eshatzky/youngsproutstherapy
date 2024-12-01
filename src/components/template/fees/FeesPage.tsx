import { BookingConsultation } from "@/components/organism/home";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function FeesPage() {
  return (
    <section className="max-w-[1440px] mx-auto w-full ~px-4/10 ~py-16/24">
      <div className="">
        <h1 className="text-center text-4xl font-bold tracking-tight text-[#1a365d] mb-6">
          Child and Family Therapy Fees
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
          Young Sprouts Therapy offers a range of therapeutic services to
          support children, teens, and families. Our team of experienced
          therapists is dedicated to helping Young Sprouts grow and thrive. All
          of our services are covered by most insurance companies under social
          work and/or registered psychotherapists.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 relative w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-[#1a365d]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#1a365d]">
                    ${service.price}
                  </span>
                  <span className="text-xl text-muted-foreground">
                    /{service.duration}
                  </span>
                  <span className="text-muted-foreground ml-1">Min</span>
                </div>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-6 w-6 mr-2 text-teal-600 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={"#book"} className="w-full">
                  <Button className="w-full lg:w-full lg:max-w-full">
                    Book A Free Consult
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div id="book">
        <BookingConsultation />
      </div>
    </section>
  );
}

const services = [
  {
    title: "Individual Child and Teen Therapy",
    price: 185,
    duration: 50,
    image: "/images/child_counseling.webp",
    features: [
      "Personalized support for emotional, behavioral, or developmental issues.",
      "Nurturing environment for expression and growth.",
      "Therapists focused on positive growth and well-being.",
    ],
  },
  {
    title: "Parent Coaching",
    price: 185,
    duration: 50,
    image: "/images/mother_son.webp",
    features: [
      "Empower parents with effective strategies and tools.",
      "Guidance to build strong relationships with children.",
      "Support for promoting positive behavior.",
    ],
  },
  {
    title: "Family Therapy and Couples Counselling",
    price: 200,
    duration: 50,
    image: "/images/couple.webp",
    features: [
      "Warm and nurturing environment for families.",
      "Improves communication and addresses conflicts.",
      "Supportive space for couples to strengthen their bond.",
    ],
  },
];
