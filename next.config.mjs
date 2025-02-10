/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      { hostname: "cdn.sanity.io" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === "production",
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production",
  },

  compress: true,

  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value:
  //             "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com https://cdn.cal.com; style-src 'self' 'unsafe-inline' https:; img-src 'self' https: data:; connect-src 'self' https:",
  //         },
  //         {
  //           key: "Strict-Transport-Security",
  //           value: "max-age=31536000; includeSubDomains; preload",
  //         },
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },

  async rewrites() {
    return [
      {
        source: "/call-tracking/:path*",
        destination: "https://www.gstatic.com/call-tracking/:path*",
      },
      {
        source: "/gtag/:path*",
        destination: "https://www.googletagmanager.com/gtag/:path*",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/adhd-therapy-for-kids-and-teens-vaughan",
        destination: "/adhd-therapy",
        permanent: true,
      },
      {
        source: "/anxiety-therapy-for-kids-and-teens",
        destination: "/anxiety-therapy",
        permanent: true,
      },

      {
        source: "/couples-therapy",
        destination: "/couples-counselling",
        permanent: true,
      },
      {
        source: "/behaviour-therapy-for-kids-and-teens",
        destination: "/behavioral-therapy",
        permanent: true,
      },
      {
        source: "/clinical-supervision-vaughan",
        destination: "/clinical-supervision",
        permanent: true,
      },
      {
        source: "/grief-therapy-for-kids-and-teens-vaughan",
        destination: "/grief-therapy",
        permanent: true,
      },
      {
        source: "/therapy-for-parents-of-kids-and-teens-vaughan",
        destination: "/parenting-counselling",
        permanent: true,
      },
      {
        source: "/group-therapy-for-kids-and-families",
        destination: "/group-therapy",
        permanent: true,
      },
      {
        source: "/trauma-therapy-for-kids-and-teens-vaughan",
        destination: "/trauma-therapy",
        permanent: true,
      },
      {
        source: "/autism-therapy-kids-vaughan",
        destination: "/autism-therapy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
