import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1440, 1920, 2560],
  },
  // three / drei ship modern ESM; transpile for consistent bundling
  transpilePackages: ["three"],
  typescript: {
    ignoreBuildErrors: true,
  },
  /**
   * Keep search engines out until the site is on its own domain.
   * Any *.vercel.app address (production and previews) answers with
   * "noindex, nofollow", so Google drops it and does not index it again.
   * On the real domain the rule does not match, so indexing turns on by itself.
   * SITE_NOINDEX=true (in Vercel's environment variables) switches indexing
   * off on every address, the real domain included, if ever needed.
   * Do not block these pages in robots.txt: Google must be able to crawl a
   * page to see its noindex.
   */
  async headers() {
    const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];
    if (process.env.SITE_NOINDEX === "true") return [{ source: "/:path*", headers: noindex }];
    return [{ source: "/:path*", has: [{ type: "host", value: "(?<sub>.+)\\.vercel\\.app" }], headers: noindex }];
  },
};

export default nextConfig;
