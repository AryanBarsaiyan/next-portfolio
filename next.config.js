/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ["react-icons", "react-bootstrap"],
  },
  // Ensure static files are properly served
  trailingSlash: false,
  // Add proper headers for static assets
  async headers() {
    return [
      {
        source: "/Assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
