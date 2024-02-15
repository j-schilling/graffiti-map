/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["upload.wikimedia.org"],
//   },
// };

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
export default nextConfig;
