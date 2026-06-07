import type { NextConfig } from "next";

const isPagesDeployment = process.env.GITHUB_PAGES === "true";
const basePath = isPagesDeployment ? "/abraham-portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
