/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  // Add basePath if deploying to GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

module.exports = nextConfig;