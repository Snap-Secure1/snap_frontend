import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Vercel will deploy even if ESLint errors exist
  },

  async headers() {
    return [
      {
        source: "/:all*(js|css|png|jpg|jpeg|webp|svg|gif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 year cache
          },
        ],
      },
    ];
  },
};

export default nextConfig;
