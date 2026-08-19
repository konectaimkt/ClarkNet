import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', 
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Isso ignora o linting durante o build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig