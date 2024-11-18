import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@/components/organism";
import MotionWrapper from "@/components/molecules/MotionWrapper";
import { AlertBar } from "@/components/molecules/AlertBar";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    title: "Young Sprouts Therapy | Child, Teen & Family Therapy | Vaughan",
    description:
      "Psychotherapy and counseling for kids & teens in Vaughan. Find support for kids & teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    openGraph: {
      type: "website",
      url,
      title: "Young Sprouts Therapy | Child, Teen & Family Therapy | Vaughan",
      description:
        "Psychotherapy and counseling for kids & teens in Vaughan. Find support for kids & teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
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
    },
    twitter: {
      title: "Young Sprouts Therapy | Child, Teen & Family Therapy | Vaughan",
      description:
        "Psychotherapy and counseling for kids & teens in Vaughan. Find support for kids & teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-7SPHMHP3YC" />
        <GoogleTagManager gtmId="GTM-KZHGKVZ" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-[#5c5c5c] antialiased`}
      >
        <AlertBar />
        <Header />
        <MotionWrapper>
          <main>{children}</main>
          <Footer />
        </MotionWrapper>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

export const revalidate = 3600;
