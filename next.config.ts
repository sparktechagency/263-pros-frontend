import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all domains
      },
      {
        protocol: "http",
        hostname: "**", // allow http domains too
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // you can increase more if needed
    },
  },
};

export default nextConfig;
