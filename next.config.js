const { withContentlayer } = require("next-contentlayer");
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
  //   output: 'export',
  // distDir: '_static',
  }
 
module.exports = withContentlayer(nextConfig);