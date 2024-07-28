/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "website.fr",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
  transpilePackages: ["three"],

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; object-src 'none';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
        ],
      },
    ];
  },
}

if (process.env.NODE_ENV === "development") {
  // only in development
  nextConfig.images.remotePatterns = [
    {
      protocol: "https",
      hostname: "**",
    },
    {
      protocol: "http",
      hostname: "**",
    },
    {
      protocol: "http",
      hostname: "",
    },
    {
      protocol: "http",
      hostname: "localhost",
      port: "3000",
    },
    {
      protocol: "http",
      hostname: "localhost",
      port: "3001",
    },
  ]
}

export default nextConfig
