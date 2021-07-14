// module.exports = {
//   images: {
//     domains: ['www.flowersghana.com'],
//   },
// }

// const path = require("path");
// const CopyPlugin = require("copy-webpack-plugin");
// const withPlugins = require('next-compose-plugins');
// const withTM = require('next-transpile-modules')(['@shoelace-style/shoelace']);

// module.exports = withPlugins([withTM], {
//   webpack: config => {
//     config.plugins.push(
//       new CopyPlugin({
//         patterns: [
//           {
//             from: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets/icons'),
//             to: path.resolve(__dirname, 'static/icons')
//           }
//         ]
//       })
//     );
//     return config;
//   }
// });
