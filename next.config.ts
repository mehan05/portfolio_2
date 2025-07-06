import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains:["avatars.githubusercontent.com","img.icons8.com","icons8.com"]
  },
   typescript: {
    ignoreBuildErrors: true, // ⛔ Skips type checking during build
  },
};

export default nextConfig;
