

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=315360000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  { key: "Cache-Control", value: "public, max-age=315360000, immutable" },
  { key: "Strict-Transport-Security", value: "max-age=315360000" },
  // {
  //   key: "Content-Security-Policy",
  //   value: "default-src 'self' cdn.jsdelivr.net; script-src 'self' https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.47/dist/chunks/chunk.HAL7R4WT.js https://embed.tawk.to/_s/v4/app/61adcafd0e1/js/twk-chunk-vendors.js https://js.paystack.co/v1/inline.js https://www.google-analytics.com/analytics.js https://www.googletagmanager.com/gtm.js 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://eljsuiwhwbb5lp5lmre5eifzuu.appsync-api.us-east-1.amazonaws.com https://embed.tawk.to https://va.tawk.to https://vitals.vercel-insights.com https://vsb75.tawk.to https://vsb89.tawk.to https://www.google-analytics.com wss://eljsuiwhwbb5lp5lmre5eifzuu.appsync-realtime-api.us-east-1.amazonaws.com wss://vsb75.tawk.to wss://vsb89.tawk.to; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://embed.tawk.to https://fonts.googleapis.com; img-src 'self' data: https://embed.tawk.to https://res.cloudinary.com https://tawk.link https://www.google-analytics.com;",
  // },
];


// const nextConfig = {
//   reactStrictMode: true,
//   productionBrowserSourceMaps: true,
//   swcMinify: true,
//   reactStrictMode: true,
//   images: {
//     domains: ["res.cloudinary.com", "cloudinary.com", "images.unsplash.com"],
//     minimumCacheTTL: 7884000,
//   },
// };

// module.exports = nextConfig;



const withPWA = require('next-pwa')
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "cloudinary.com", "images.unsplash.com"],
    minimumCacheTTL: 7884000,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  pwa: {
    dest: 'public'
  },
};

module.exports = withPWA(nextConfig);
