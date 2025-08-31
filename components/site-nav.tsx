'use client'

import { FileText, Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { siteConfig } from '@/lib/site'
import Link from 'next/link'
import { AnimatedThemeToggler } from './animated-theme-toggler'
import { Container } from './ui/container'

export default function SiteNav() {
    const [open, setOpen] = useState(false)

    return (
        <section className="bg-transparent relative inset-x-0 top-0 z-20">
            <Container className="px-4 lg:px-8">
                <NavigationMenu className="w-full max-w-none">
                    <div className="flex w-full items-center justify-between gap-12 py-4">
                        <div className="flex items-center gap-8">
                            <NavigationMenuList className="hidden lg:flex">
                                {siteConfig.navigation?.map((item, index) => (
                                    <NavigationMenuLink
                                        asChild
                                        className={navigationMenuTriggerStyle()}
                                        key={index}
                                    >
                                        <Link href={item.href}>
                                            {item.title}
                                        </Link>
                                    </NavigationMenuLink>
                                ))}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        More
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!min-w-7xl">
                                        <div className="flex gap-4 p-4">
                                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                                                {siteConfig.horizontalNav?.map(
                                                    (item, index) => {
                                                        const IconComponent =
                                                            item.icon
                                                        return (
                                                            <NavigationMenuLink
                                                                key={index}
                                                                href={item.href}
                                                                className="group border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-full flex-col overflow-clip rounded-lg border p-6 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                                                            >
                                                                <div className="mb-4">
                                                                    <div className="bg-primary/10 text-primary rounded-lg p-2 w-fit">
                                                                        {IconComponent && (
                                                                            <IconComponent className="h-5 w-5" />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="mt-auto">
                                                                    <div className="mb-2 text-lg font-semibold group-hover:text-primary transition-colors">
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </div>
                                                                    <div className="text-muted-foreground text-sm font-normal leading-relaxed">
                                                                        {
                                                                            item.description
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </NavigationMenuLink>
                                                        )
                                                    }
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-3 min-w-[280px]">
                                                {siteConfig.verticalNav?.map(
                                                    (item, index) => {
                                                        const IconComponent =
                                                            item.icon
                                                        return (
                                                            <NavigationMenuLink
                                                                key={index}
                                                                href={item.href}
                                                                className="group border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-full flex-col overflow-clip rounded-lg border p-4 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                                                            >
                                                                <div className="flex gap-3 items-start">
                                                                    <div className="bg-primary/10 text-primary rounded-lg p-2 w-fit flex-shrink-0">
                                                                        {IconComponent && (
                                                                            <IconComponent className="h-4 w-4" />
                                                                        )}
                                                                    </div>
                                                                    <div className="flex flex-col gap-1 min-w-0">
                                                                        <div className="text-sm font-medium group-hover:text-primary transition-colors">
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </div>
                                                                        <div className="text-muted-foreground text-xs font-normal leading-relaxed">
                                                                            {
                                                                                item.description
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </NavigationMenuLink>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="outline" asChild>
                                <Link
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                    <FileText className="size-4" />
                                </Link>
                            </Button>
                            <AnimatedThemeToggler />
                            <Button
                                variant="outline"
                                size="icon"
                                aria-label="Main Menu"
                                className="lg:hidden"
                                onClick={() => {
                                    if (open) {
                                        setOpen(false)
                                    } else {
                                        setOpen(true)
                                    }
                                }}
                            >
                                {!open && <Menu className="size-4" />}
                                {open && <X className="size-4" />}
                            </Button>
                        </div>
                    </div>
                </NavigationMenu>
            </Container>
        </section>
    )
}
