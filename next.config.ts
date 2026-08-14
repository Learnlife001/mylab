import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [{ source: "/intelligence", destination: "/intelligence/index.html" }],
      fallback: [],
    };
  },
};

export default nextConfig;

