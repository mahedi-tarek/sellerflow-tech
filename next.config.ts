import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // Generate a fully-static /out directory
  images: {
    unoptimized: true,    // Required for static export (no server-side image optimization)
  },
};

export default nextConfig;
