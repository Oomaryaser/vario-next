/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    fetchCache: true,
  },
};

export default nextConfig;
