import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    middlewarePerRoute: true,
  },
};

export default nextConfig;
