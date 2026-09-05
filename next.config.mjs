/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.promfly.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;