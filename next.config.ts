import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'document-export.canva.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
