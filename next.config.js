/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/new-paral-website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/new-paral-website' : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '**',
      },
    ],
  },
  // Add this to help with static export
  trailingSlash: true,
};

module.exports = nextConfig;