/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { AnimatedThemeToggler } from './animated-theme-toggler'
import { siteConfig } from '@/lib/site'

export function SiteNav() {
    return (
        <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto w-full flex h-14 items-center justify-between px-6">
                <nav className="flex items-center space-x-6">
                    {siteConfig.navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-primary font-medium"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <div className="flex flex-1 w-full justify-end">
                    <nav className="flex items-center">
                        <AnimatedThemeToggler />
                    </nav>
                </div>
            </div>
        </header>
    )
}
