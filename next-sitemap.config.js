/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.youngsproutstherapy.com/",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.youngsproutstherapy.com/sitemap.xml",
      "https://www.youngsproutstherapy.com/sitemap-0.xml",
      "https://www.youngsproutstherapy.com/server-sitemap.xml",
    ],
  },
};
