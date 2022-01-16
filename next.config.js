const nextConfig = {
  reactStrictMode: true,
};

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
  { key: "Cache-Control", value: "max-age=315360000" },
  { key: "Strict-Transport-Security", value: "max-age=315360000" },
  // { key: "Content-Security-Policy", value: "script-src self" },
];

module.exports = {
  productionBrowserSourceMaps: true,
  nextConfig,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
