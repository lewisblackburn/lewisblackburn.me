import { siteConfig } from '@/lib/site'
import {
    RiGithubLine,
    RiLinkedinLine,
    RiMailLine,
    RiTwitterLine,
} from '@remixicon/react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <section className="bg-background border-t">
            <div className="max-w-7xl mx-auto p-12">
                <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col justify-between gap-4 lg:items-start">
                        <div className="flex items-center gap-2 lg:justify-start">
                            <h2 className="text-xl font-semibold">
                                {siteConfig.name}
                            </h2>
                        </div>
                        <p className="text-muted-foreground max-w-[70%] text-sm">
                            {siteConfig.description}
                        </p>
                        <ul className="text-muted-foreground flex items-center space-x-4 mt-2">
                            <li className="hover:text-primary font-medium">
                                <Link href="" aria-label="LinkedIn">
                                    <RiMailLine className="size-4" />
                                </Link>
                            </li>
                            <li className="hover:text-primary font-medium">
                                <Link href="" aria-label="LinkedIn">
                                    <RiLinkedinLine className="size-4" />
                                </Link>
                            </li>
                            <li className="hover:text-primary font-medium">
                                <Link href="" aria-label="LinkedIn">
                                    <RiGithubLine className="size-4" />
                                </Link>
                            </li>
                            <li className="hover:text-primary font-medium">
                                <Link href="" aria-label="LinkedIn">
                                    <RiTwitterLine className="size-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
                        <div>
                            <h3 className="mb-4 font-semibold text-xs text-muted-foreground">
                                General
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-primary font-medium">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="hover:text-primary font-medium">
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li className="hover:text-primary font-medium">
                                    <Link href="/projects">Projects</Link>
                                </li>
                                <li className="hover:text-primary font-medium">
                                    <Link href="/shorts">Shorts</Link>
                                </li>
                                <li className="hover:text-primary font-medium">
                                    <Link href="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold text-xs text-muted-foreground">
                                The Website
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-primary font-medium">
                                    <Link href="/bucket-list">Bucket List</Link>
                                </li>
                                <li className="hover:text-primary font-medium">
                                    <Link href="/uses">Uses</Link>
                                </li>
                                <li className="hover:text-primary font-medium">
                                    <Link href="/side-quests">Side Quests</Link>
                                </li>
                                <li className="hover:text-primary font-medium">
                                    <Link href="/attribution">Attribution</Link>
                                </li>
                                <li className="hover:text-primary font-medium">
                                    <Link href="/statistics">Statistics</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold text-xs text-muted-foreground">
                                Other
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-primary font-medium">
                                    <Link href="/rss">RSS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">
                        &copy; {new Date().getFullYear()} Your Company. All
                        rights reserved.
                    </p>
                    <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                        <li className="hover:text-primary">
                            <a href="">NOW PLAYING</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
