import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
  images: {
    // if remote images are added later, configure domains here
  },
};

export default nextConfig;
