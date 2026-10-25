import type { NextConfig } from "next";
import webpack from "webpack";

const isVercel = process.env.VERCEL === "1";
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

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
      { key: "Content-Security-Policy", value: contentSecurityPolicy },
    ] }];
  },
};

export default nextConfig;
