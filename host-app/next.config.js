const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          airport_suitability: 'airport_suitability@http://localhost:3000/_next/static/chunks/remoteEntry.js',
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
    return config;
  },
}; 