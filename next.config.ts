import type { NextConfig } from "next";
import webpack from "webpack";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: isVercel ? {
    resolveAlias: {
      "cloudflare:workers": "./lib/cloudflare-workers-vercel.ts",
    },
  } : undefined,
  webpack(config) {
    if (isVercel) {
      config.plugins.push(new webpack.NormalModuleReplacementPlugin(
        /^cloudflare:workers$/,
        new URL("./lib/cloudflare-workers-vercel.ts", import.meta.url).pathname,
      ));
    }
    return config;
  },
  async headers() {
    return [{ source: "/(.*)", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
    ] }];
  },
};

export default nextConfig;
