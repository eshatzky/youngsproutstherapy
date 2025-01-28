/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.youngsproutstherapy.com/",
  generateRobotsTxt: true,
  additionalSitemaps: [
    'https://www.youngsproutstherapy.com/sitemap-0.xml',
    'https://www.youngsproutstherapy.com/sitemap-1.xml',
    'https://www.youngsproutstherapy.com/sitemap-2.xml',
  ],
};
