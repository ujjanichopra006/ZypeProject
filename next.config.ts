/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.jdmagicbox.com",
      },
      {
        protocol: "https",
        hostname: "loans.ramfincorp.com",
      },
    ],
  },
};

export default nextConfig;