/** @type {import('next').NextConfig} */
module.exports = {
  webpack: function (config) {
    // to support import md files
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // optimize image using next/images
  images: {
    formats: ['image/avif'],
  },
};
