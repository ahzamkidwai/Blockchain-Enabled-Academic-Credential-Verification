/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow IPFS gateway images
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ipfs.io" },
      { protocol: "https", hostname: "cloudflare-ipfs.com" },
    ],
  },
  turbopack: {
    resolve: {
      fallback: {
        fs: false,
        net: false,
        tls: false,
      },
    },
  },
};

export default nextConfig;
