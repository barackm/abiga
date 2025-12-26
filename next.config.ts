import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["vmzndvyzclcpgzozziex.supabase.co", "photos.app.goo.gl", "youtube.com", "www.youtube.com", "youtu.be", "i.ytimg.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'youtu.be',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://youtube.com",
              "frame-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https: blob:",
              "connect-src 'self' https:",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
