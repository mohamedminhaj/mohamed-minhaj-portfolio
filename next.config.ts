import type { NextConfig } from "next";

// Set REPO_NAME to your GitHub repo name when deploying to GitHub Pages
// (project sites are served from https://<user>.github.io/<repo>/).
// Leave GITHUB_PAGES unset (e.g. when deploying to Vercel) to skip this.
const repoName = process.env.REPO_NAME ?? "";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  output: "export",
  basePath: isGithubPages && repoName ? `/${repoName}` : "",
  assetPrefix: isGithubPages && repoName ? `/${repoName}/` : ""
};

export default nextConfig;