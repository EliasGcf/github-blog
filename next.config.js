/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },

  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
