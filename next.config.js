const withPWA = require("next-pwa");

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
  // { key: "Cache-Control", value: "public, max-age=315360000, immutable" },
  // { key: "Strict-Transport-Security", value: "max-age=315360000" },
];

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
    dest: "public",
  },
};

module.exports = withPWA(nextConfig);
