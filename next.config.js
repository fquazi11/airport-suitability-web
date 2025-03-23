const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'airport_suitability',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './ThemeProvider': './src/components/ThemeProvider.tsx',
          },
          remotes: {
            airport_suitability: `airport_suitability@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
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