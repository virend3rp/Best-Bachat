/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // Replace true with an empty object (or add configurations if required)
  },
  serverExternalPackages: ['mongoose'], // Move this out of the experimental key
  images: {
    domains: ['m.media-amazon.com'], // Allow images from this domain
  },
};

module.exports = nextConfig;
