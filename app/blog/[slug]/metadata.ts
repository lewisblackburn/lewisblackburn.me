import { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import { blogSource } from '@/source'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    try {
        const { slug } = await params

        if (!slug || slug.length === 0) {
            return {
                title: 'Blog Not Found',
                description: 'The requested blog post could not be found.',
            }
        }

        const page = blogSource.getPage([slug])

        if (!page) {
            return {
                title: 'Blog Not Found',
                description: 'The requested blog post could not be found.',
            }
        }

        const ogUrl = `${siteConfig.url}/blog/${slug}`
        const ogImage = `${ogUrl}/opengraph-image`

        return {
            title: page.data.title,
            description: page.data.description,
            keywords: [
                page.data.title,
                ...(page.data.tags || []),
                'Blog',
                'Article',
                'Web Development',
                'Programming',
                'Technology',
                'Software Engineering',
            ],
            authors: [
                {
                    name: page.data.author || 'Lewis Blackburn',
                    url: siteConfig.url,
                },
            ],
            creator: page.data.author || 'Lewis Blackburn',
            publisher: 'Lewis Blackburn',
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
            openGraph: {
                title: page.data.title,
                description: page.data.description,
                type: 'article',
                url: ogUrl,
                publishedTime: page.data.date,
                authors: [page.data.author || 'Lewis Blackburn'],
                tags: page.data.tags,
                images: [
                    {
                        url: page.data.thumbnail || ogImage,
                        width: 1200,
                        height: 630,
                        alt: page.data.title,
                    },
                ],
                siteName: siteConfig.name,
            },
            twitter: {
                card: 'summary_large_image',
                title: page.data.title,
                description: page.data.description,
                images: [page.data.thumbnail || ogImage],
                creator: '@zxffo',
                site: '@zxffo',
            },
            alternates: {
                canonical: ogUrl,
            },
        }
    } catch (error) {
        console.error('Error generating metadata:', error)
        return {
            title: 'Blog Not Found',
            description: 'The requested blog post could not be found.',
        }
    }
}
