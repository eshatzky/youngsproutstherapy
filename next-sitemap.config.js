/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.youngsproutstherapy.com/",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/404", "/500"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.youngsproutstherapy.com/sitemap-0.xml",
      "https://www.youngsproutstherapy.com/server-sitemap.xml",
    ],
  },
  transform: async (config, path) => {
    return {
      loc: `${config.siteUrl}${path}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    };
  },
};
