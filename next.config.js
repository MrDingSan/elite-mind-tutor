/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    return config;
  },
  // Configure for Cloudflare Pages
  // output: 'export', // Removed to enable API routes
  // distDir: 'out', // Removed as not required for API routes
  // trailingSlash: true, // Removed as not required for API routes
};

module.exports = nextConfig; 