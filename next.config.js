/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // If you need to handle environment-specific settings
  env: {
    // your env variables here
  }
};

module.exports = nextConfig; 