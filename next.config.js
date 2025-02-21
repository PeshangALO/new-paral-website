/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: 'https://paral.no', // Custom domain for assets
  basePath: '', // No need to prepend basePath, since we use the full domain
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'paral.no', // Allow images from your custom domain
        port: '',
        pathname: '**',
      },
    ],
  },
  // Add this to help with static export
  trailingSlash: true,
};

module.exports = nextConfig;
