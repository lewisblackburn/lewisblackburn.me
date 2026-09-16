import { siteConfig } from '@/lib/site'
import { blogSource } from '@/source'

export const dynamic = 'force-static'

function escapeXml(value: string): string {
    return value.replace(/[<>&"']/g, (character) => {
        const entities: Record<string, string> = {
            '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
        }
        return entities[character]
    })
}

export function GET() {
    const posts = [...blogSource.getPages()].sort(
        (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    )
    const items = posts.map((post) => {
        const url = escapeXml(new URL(post.url, siteConfig.url).href)
        const date = new Date(post.data.date)
        if (Number.isNaN(date.getTime())) {
            throw new Error(`Invalid RSS publication date for ${post.url}`)
        }
        return `<item>
            <title>${escapeXml(post.data.title)}</title>
            <link>${url}</link>
            <guid isPermaLink="true">${url}</guid>
            <description>${escapeXml(post.data.description ?? '')}</description>
            <pubDate>${date.toUTCString()}</pubDate>
            ${(post.data.tags ?? []).map((tag) => `<category>${escapeXml(tag)}</category>`).join('')}
        </item>`
    }).join('\n')

    return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${escapeXml(siteConfig.name)}’s blog</title>
        <link>${escapeXml(new URL('/blog', siteConfig.url).href)}</link>
        <description>${escapeXml(siteConfig.description)}</description>
        <language>en-gb</language>
        <atom:link href="${escapeXml(new URL('/rss', siteConfig.url).href)}" rel="self" type="application/rss+xml" />
        ${items}
    </channel>
</rss>`, {
        headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
    })
}
