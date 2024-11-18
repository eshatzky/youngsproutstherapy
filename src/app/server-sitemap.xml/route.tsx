/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { getAllPosts } from "@/lib/client";
import { getServerSideSitemap } from "next-sitemap";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blog = await getAllPosts();

    const blogFields = blog.map((post) => ({
      loc: `https://www.youngsproutstherapy.com/blog/${post.slug.current}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.8,
    }));
    const fields = [...blogFields];

    return getServerSideSitemap(fields);
  } catch (err) {
    console.error("Error generating sitemap:", err);
    return NextResponse.error();
  }
}
