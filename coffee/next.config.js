/** @type {import('next').NextConfig} */
// const nextConfig = {}

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        },
      ],
    },
  }

module.exports = nextConfig
