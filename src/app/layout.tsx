import "./globals.css";
import { Footer, Header } from "@/components/organism";
import MotionWrapper from "@/components/molecules/MotionWrapper";
import { AlertBar } from "@/components/molecules/AlertBar";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export async function generateMetadata() {
  return processMetadata();
}

export async function processMetadata() {
  const url = "https://www.youngsproutstherapy.com";
  return {
    metadataBase: new URL(
      process.env.BASE_URL || "https://www.youngsproutstherapy.com/"
    ),
    title: "Young Sprouts | Child, Teen and Family Therapy | Vaughan",
    keywords: [
      "child therapy Vaughan",
      "teen therapy Vaughan",
      "family therapy Vaughan",
      "psychotherapy for kids",
      "therapy for teens",
      "parent coaching Vaughan",
      "CBT for kids",
      "play therapy",
      "art therapy",
      "behavioral therapy for children",
      "anxiety therapy for teens",
      "ADHD therapy Vaughan",
      "trauma therapy for kids",
      "grief counseling for children",
      "school collaboration therapy Vaughan",
    ],
    description:
      "Psychotherapy and counseling for kids and teens in Vaughan. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    openGraph: {
      type: "website",
      url,
      title: "Young Sprouts Therapy | Child, Teen & Family Therapy | Vaughan",
      description:
        "Psychotherapy and counseling for kids and teens in Vaughan. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
      images: [
        {
          url: "/images/logo.png",
          width: 2500,
          height: 1041,
        },
      ],
    },

    alternates: {
      canonical: url,
      languages: {
        en: process.env.BASE_URL || "https://www.youngsproutstherapy.com/",
      },
    },
    twitter: {
      title: "Young Sprouts Therapy | Child, Teen & Family Therapy | Vaughan",
      description:
        "Psychotherapy and counseling for kids and teens in Vaughan. Find support for kids and teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
      googlebot: "index, follow",
      
    },
    // verification: {
    //   google: "your-google-site-verification-code",
    //   bing: "your-bing-site-verification-code",
    // },
    other: {
      rating: "General",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metadata = await generateMetadata();
  return (
    <html lang="en" suppressHydrationWarning className={lato.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""}
        />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
        <SpeedInsights />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="min-h-screen text-[#5c5c5c] bg-white antialiased">
        <AlertBar />
        <Header />
        <MotionWrapper>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </MotionWrapper>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

export const revalidate = 1500;
