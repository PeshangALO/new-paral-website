/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/test-website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/test-website' : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './loader.js',
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;