import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        "@web0host/env": path.join(__dirname, "../../packages/env/src"),
        "@web0host/deploy-mark": path.join(__dirname, "../../packages/deploy-mark/src"),
        "@web0host/site-config": path.join(__dirname, "../../packages/site-config/src"),
      },
    },
  },
  transpilePackages: ["@web0host/env", "@web0host/deploy-mark", "@web0host/site-config"],
};

export default nextConfig;