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
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SiteNav />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
