/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const isProduction = process.env.NODE_ENV === 'production';
const repository = 'airport-suitability-web'; // Replace with your repository name

const nextConfig = {
  reactStrictMode: true,
  basePath: isProduction ? `/${repository}` : '',
  assetPrefix: isProduction ? `/${repository}/` : '',
  images: { unoptimized: true },
  output: 'export',
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'airport_suitability',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './ThemeProvider': './src/components/ThemeProvider.tsx',
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: false,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: false,
            },
          },
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig; 