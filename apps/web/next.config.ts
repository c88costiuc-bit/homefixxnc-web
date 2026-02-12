import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@web0host/env",
    "@web0host/deploy-mark",
    "@web0host/site-config",
  ],
};

export default nextConfig;