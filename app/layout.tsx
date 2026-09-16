import '@/app/globals.css'
import Footer from '@/components/footer'
import SiteNav from '@/components/site-nav'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/lib/site'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import { metadataKeywords } from './metadata'

export const viewport: Viewport = {
    themeColor: 'black',
}

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: metadataKeywords,
    alternates: {
        types: { 'application/rss+xml': [{ url: '/rss', title: 'Lewis Blackburn’s blog' }] },
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
            suppressHydrationWarning
        >
            <head>
                <meta
                    name="apple-mobile-web-app-title"
                    content="Lewis Blackburn"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function() {
                            try {
                                const theme = localStorage.getItem('theme') || 
                                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                                if (theme === 'dark') {
                                    document.documentElement.classList.add('dark');
                                } else {
                                    document.documentElement.classList.remove('dark');
                                }
                            } catch (e) {}
                        })();
                    `,
                    }}
                />
            </head>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-background focus:p-4 focus:text-foreground focus:ring-2 focus:ring-ring">Skip to content</a>
                    <SiteNav />
                    <main id="main-content" tabIndex={-1}>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
