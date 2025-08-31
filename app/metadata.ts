import { siteConfig } from '@/lib/site'
import { Metadata } from 'next'

export const metadataKeywords = ['Lewis Blackburn', 'Software Engineer']

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: 'Lewis Blackburn',
            url: 'https://lewisblackburn.me',
        },
    ],
    creator: 'Lewis Blackburn',
    openGraph: {
        type: 'website',
        locale: 'en_GB',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        creator: '@zxffo',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}
