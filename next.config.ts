import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['jecky.id'],
  },
  typescript: {
    // !! WARNING !!
    ignoreBuildErrors: false,
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
