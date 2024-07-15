/** @type {import('next').NextConfig} */

const nextConfig = {
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
