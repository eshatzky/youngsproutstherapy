"use client";

import { Mail, Phone, HelpCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

export function ThankYouPage() {
  useEffect(() => {
    const gtagScript = document.createElement("script");
    gtagScript.src =
      "https://www.googletagmanager.com/gtag/js?id=AW-10834730946";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const gtagConfigScript = document.createElement("script");
    gtagConfigScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10834730946');
        `;
    document.head.appendChild(gtagConfigScript);

    const gtagConversionScript = document.createElement("script");
    gtagConversionScript.innerHTML = `
          gtag('event', 'conversion', {
            'send_to': 'AW-10834730946/pABUCKDe774YEMK_s64o'
          });
        `;
    document.head.appendChild(gtagConversionScript);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 px-4">
      <div className="mx-auto max-w-2xl py-12 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Sparkles className="h-12 w-12 text-primary animate-pulse" />
          </div>
        </div>
        <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl">
          Thank you!
        </h1>
        <Card className="mb-8 border-primary/20">
          <CardContent className="pt-6">
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Thank you for scheduling a free consultation with Young Sprouts
              Therapy! We appreciate your trust in us to support your child and
              family&apos;s well-being.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              As the consultation date approaches, we want to ensure everything
              goes smoothly for you. You can expect a friendly reminder 24 hours
              in advance of your appointment, just to help you keep it on your
              calendar.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              If you have any questions or need to get in touch with us before
              the consultation, please don&apos;t hesitate to reach out. You can
              contact us via email at{" "}
              <Link
                href="mailto:info@youngsproutstherapy.com"
                className="text-primary"
              >
                <span>info@youngsproutstherapy.com</span>
              </Link>{" "}
              or simply give us a call at (289) 579-4769. We&apos;re here to
              assist you in any way we can. You can also explore our FAQ at any
              point.
            </p>
          </CardContent>
        </Card>
        <div className="mb-8 space-y-6 text-left">
          <h2 className="text-xl font-semibold">Need to get in touch?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="mailto:info@youngsproutstherapy.com"
              className="flex items-center rounded-lg border p-4 transition-colors hover:bg-gray-50"
            >
              <Mail className="mr-3 h-5 w-5 text-primary" />
              <span>info@youngsproutstherapy.com</span>
            </Link>
            <Link
              href="tel:(+289) 579-4769"
              className="flex items-center rounded-lg border p-4 transition-colors hover:bg-gray-50"
            >
              <Phone className="mr-3 h-5 w-5 text-primary" />
              <span>(+289) 579-4769</span>
            </Link>
          </div>
          <Link
            href="/faq"
            className="flex items-center rounded-lg border p-4 transition-colors hover:bg-gray-50"
          >
            <HelpCircle className="mr-3 h-5 w-5 text-primary" />
            <span>Check out our FAQ for quick answers</span>
          </Link>
        </div>
        <div className="space-y-4 rounded-lg bg-gray-50 p-6">
          <p className="font-medium">
            Once again, we want to extend a warm thank you for choosing Young
            Sprouts Therapy. We&apos;re eager to meet you and your family, and
            we look forward to supporting you on your journey towards growth,
            healing, and positive change.
          </p>
          <p className="text-muted-foreground">See you soon!</p>
          <p className="font-semibold">Best regards,</p>
          <p className="text-primary">Young Sprouts Therapy</p>
        </div>
      </div>
    </div>
  );
}
