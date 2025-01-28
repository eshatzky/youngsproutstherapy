/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { getAllPosts, getAllTeamMembers } from "@/lib/client";
import { getServerSideSitemap } from "next-sitemap";
import { NextResponse } from "next/server";

// Service slugs for different categories
const CONDITION_SUPPORT_SLUGS = [
  "adhd-therapy", "anxiety-therapy", "burnout-therapy", 
  "behavioral-therapy", "depression-therapy", "grief-therapy", 
  "trauma-therapy", "autism-therapy", "clinical-supervision"
];

const THERAPY_MODALITIES_SLUGS = [
  "art-therapy", "acceptance-commitment-therapy", 
  "cognitive-behavioral-therapy", "dialectical-behavioral-therapy", 
  "emotion-focused-therapy", "narrative-therapy", "play-therapy", 
  "parent-child-therapy", "solution-focused-therapy", "music-therapy"
];

const THERAPY_TYPES_SLUGS = [
  "parenting-counselling", "child-therapy", "teen-therapy", 
  "couples-therapy", "group-therapy"
];

// Function to dynamically fetch service slugs from the application
async function getServiceSlugs() {
  // TO DO: implement logic to fetch service slugs from the application
  // For now, return the predefined slugs
  return {
    conditionSupportSlugs: CONDITION_SUPPORT_SLUGS,
    therapyModalitiesSlugs: THERAPY_MODALITIES_SLUGS,
    therapyTypesSlugs: THERAPY_TYPES_SLUGS,
  };
}

export async function GET() {
  try {
    // Blog posts
    const blog = await getAllPosts();
    const blogFields = blog.map((post) => ({
      loc: `https://www.youngsproutstherapy.com/blog/${post.slug.current}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    }));

    // Team members
    const teamMembers = await getAllTeamMembers();
    const teamFields = teamMembers.map((member) => ({
      loc: `https://www.youngsproutstherapy.com/team/${member.slug.current}`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    }));

    // Static pages
    const staticPages = [
      { 
        loc: "https://www.youngsproutstherapy.com", 
        changefreq: "daily", 
        priority: 1.0 
      },
      { 
        loc: "https://www.youngsproutstherapy.com/blog", 
        changefreq: "weekly", 
        priority: 0.8 
      },
      { 
        loc: "https://www.youngsproutstherapy.com/team", 
        changefreq: "monthly", 
        priority: 0.6 
      },
      { 
        loc: "https://www.youngsproutstherapy.com/services/approach-and-specialties", 
        changefreq: "monthly", 
        priority: 0.7 
      },
      { 
        loc: "https://www.youngsproutstherapy.com/contact-us", 
        changefreq: "monthly", 
        priority: 0.5 
      },
      { 
        loc: "https://www.youngsproutstherapy.com/locations", 
        changefreq: "monthly", 
        priority: 0.6 
      },
      { 
        loc: "https://www.youngsproutstherapy.com/fees", 
        changefreq: "monthly", 
        priority: 0.5 
      },
      { 
        loc: "https://www.youngsproutstherapy.com/faq", 
        changefreq: "monthly", 
        priority: 0.5 
      }
    ];

    // Dynamic service pages
    const { conditionSupportSlugs, therapyModalitiesSlugs, therapyTypesSlugs } = await getServiceSlugs();
    const servicePages = [
      // Conditions We Support
      ...conditionSupportSlugs.map((slug) => ({
        loc: `https://www.youngsproutstherapy.com/services/conditions-we-support/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.7,
      })),

      // Therapy Modalities
      ...therapyModalitiesSlugs.map((slug) => ({
        loc: `https://www.youngsproutstherapy.com/services/therapy-modalities/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.7,
      })),

      // Therapy Types
      ...therapyTypesSlugs.map((slug) => ({
        loc: `https://www.youngsproutstherapy.com/services/therapy-type/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.7,
      }))
    ];

    const fields = [
      ...blogFields, 
      ...teamFields, 
      ...staticPages, 
      ...servicePages
    ];

    return getServerSideSitemap(fields);
  } catch (err) {
    console.error("Sitemap generation error:", err);
    return NextResponse.error();
  }
}
