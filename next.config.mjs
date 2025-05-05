/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/reown-api/:path*',
        destination: 'https://cloud.reown.com/:path*',
      }
    ]
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  devIndicators: {
    position: 'bottom-left',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { dev, isServer }) => {
    config.watchOptions = {
      poll: false,
      aggregateTimeout: 2000,
      ignored: [
        '**/.git/**',
        '**/node_modules/**',
        '**/.next/**',
        '**/dist/**',
        '**/coverage/**',
        '**/build/**',
        '**/tmp/**',
        '**/tmps/**',
        '**/logs/**',
        '**/public/**',
      ],
    };
    return config;
  },
}

export default nextConfig
