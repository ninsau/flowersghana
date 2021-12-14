const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
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
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
  { key: "Strict-Transport-Security", value: "max-age=315360000" },
  // {
  //   key: "Content-Security-Policy",
  //   value: "amazonaws.com *.amazonaws.com cloudinary.com *.cloudinary.com",
  // },
];

module.exports = {
  productionBrowserSourceMaps: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "cloudinary.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
