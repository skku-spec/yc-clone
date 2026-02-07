import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bookface-static.ycombinator.com",
      },
    ],
  },
};

export default nextConfig;
