/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.magicui.design",
      },
    ],
  },
};

export default nextConfig;
