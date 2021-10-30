module.exports = {
  swcMinify: true,
  webpack(config) {
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
