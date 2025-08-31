import { createMDX } from 'fumadocs-mdx/next'
import type { NextConfig } from 'next'

const withMDX = createMDX()

const nextConfig: NextConfig = {
    transpilePackages: ['geist'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
            },
        ],
    },
}

export default withMDX(nextConfig)
