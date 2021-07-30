// const { createSecureHeaders } = require("next-secure-headers");

// module.exports = {
//   async headers() {
//     return [{ source: "/(.*)", headers: createSecureHeaders() },  {
//       source: '/:all*(webp|js|css)',
//       locale: false,
//       headers: [
//         {
//           key: 'Cache-Control',
//           value: 'public, max-age=999999999, must-revalidate',
//         }
//       ],
//     }];
//   },
// };

