/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: 'https://paral.no', // Custom domain for assets
  basePath: '/new-paral-website', // Adjust based on your GitHub Pages path
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
  trailingSlash: true, // Ensure trailing slashes in the URLs for static export
};

module.exports = nextConfig;
