import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [70, 72, 74, 75, 78, 80],
  },
  experimental: {
    webpackMemoryOptimizations: true,
    preloadEntriesOnStart: false,
  },
};

export default nextConfig;
