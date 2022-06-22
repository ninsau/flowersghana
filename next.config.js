
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "cloudinary.com", "images.unsplash.com"],
    minimumCacheTTL: 7884000,
  },
};

module.exports = nextConfig;



// const withPWA = require('next-pwa')
// const nextConfig = {
//   reactStrictMode: true,
//   productionBrowserSourceMaps: true,
//   swcMinify: true,
//   reactStrictMode: true,
//   images: {
//     domains: ["res.cloudinary.com", "cloudinary.com", "images.unsplash.com"],
//     minimumCacheTTL: 7884000,
//   },
//   pwa: {
//     dest: 'public'
//   },
// };

// module.exports = withPWA(nextConfig);
