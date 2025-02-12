/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { getAllPosts, getAllTeamMembers } from "@/lib/client";
import { getServerSideSitemap } from "next-sitemap";
import { NextResponse } from "next/server";

// Static service slugs
const CONDITION_SUPPORT_SLUGS = [
  "adhd-therapy",
  "anxiety-therapy",
  "burnout-therapy",
  "behavioral-therapy",
  "depression-therapy",
  "grief-therapy",
  "trauma-therapy",
  "autism-therapy",
  "clinical-supervision",
];

const THERAPY_MODALITIES_SLUGS = [
  "art-therapy",
  "acceptance-commitment-therapy",
  "cognitive-behavioral-therapy",
  "dialectical-behavioral-therapy",
  "emotion-focused-therapy",
  "narrative-therapy",
  "play-therapy",
  "parent-child-therapy",
  "solution-focused-therapy",
  "music-therapy",
];

const THERAPY_TYPES_SLUGS = [
  "parenting-counselling",
  "child-therapy",
  "teen-therapy",
  "couples-counselling",
  "group-therapy",
];

export async function GET() {
  try {
    // Blog posts
    const blog = await getAllPosts();
    const blogFields = blog
      .filter((post) => post?.slug?.current)
      .map((post) => ({
        loc: `https://www.youngsproutstherapy.com/blog/${post.slug.current}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.7,
      }));

    // Team members
    const teamMembers = await getAllTeamMembers();
    const teamFields = teamMembers
      .filter((member) => member?.name)
      .map((member) => ({
        loc: `https://www.youngsproutstherapy.com/team/${member.name}`,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.6,
      }));

    // Static pages
    const staticPages = [
      {
        loc: "https://www.youngsproutstherapy.com",
        changefreq: "daily",
        priority: 1.0,
      },
      {
        loc: "https://www.youngsproutstherapy.com/blog",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        loc: "https://www.youngsproutstherapy.com/team",
        changefreq: "monthly",
        priority: 0.6,
      },
      {
        loc: "https://www.youngsproutstherapy.com/approach-and-specialties",
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "https://www.youngsproutstherapy.com/contact-us",
        changefreq: "monthly",
        priority: 0.5,
      },
      {
        loc: "https://www.youngsproutstherapy.com/locations",
        changefreq: "monthly",
        priority: 0.6,
      },
      {
        loc: "https://www.youngsproutstherapy.com/fees",
        changefreq: "monthly",
        priority: 0.5,
      },
      {
        loc: "https://www.youngsproutstherapy.com/faq",
        changefreq: "monthly",
        priority: 0.5,
      },
    ];

    // Dynamic service pages
    const servicePages = [
      ...CONDITION_SUPPORT_SLUGS.filter((slug) => slug).map((slug) => ({
        loc: `https://www.youngsproutstherapy.com/${slug}`,
        lastmod: new Date().toISOString(),
      })),

      ...THERAPY_MODALITIES_SLUGS.filter((slug) => slug).map((slug) => ({
        loc: `https://www.youngsproutstherapy.com/${slug}`,
        lastmod: new Date().toISOString(),
      })),

      ...THERAPY_TYPES_SLUGS.filter((slug) => slug).map((slug) => ({
        loc: `https://www.youngsproutstherapy.com/${slug}`,
        lastmod: new Date().toISOString(),
      })),
    ];

    const fields = [
      ...blogFields,
      ...teamFields,
      ...staticPages,
      ...servicePages,
    ];
    return getServerSideSitemap(fields);
  } catch (err) {
    console.error("Sitemap generation error:", err);
    return NextResponse.error();
  }
}
