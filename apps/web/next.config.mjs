import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MONOREPO ROOT so Turbopack can resolve workspace deps (pnpm)
const repoRoot = path.resolve(__dirname, "../..");

/** @type {import("next").NextConfig} */
const nextConfig = {
  turbopack: {
    root: repoRoot,
  },
};

export default nextConfig;
