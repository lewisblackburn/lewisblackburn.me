'use client'

import { ChevronDown, FileText } from 'lucide-react'
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
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { AnimatedThemeToggler } from './animated-theme-toggler'
import { Container } from './ui/container'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'

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

                            <DropdownMenu open={open} onOpenChange={setOpen}>
                                <DropdownMenuTrigger>
                                    <Button
                                        variant="outline"
                                        aria-label="Main Menu"
                                        className="lg:hidden focus:outline-none focus:ring-0 focus:ring-offset-0"
                                        onClick={() => {
                                            if (open) {
                                                setOpen(false)
                                            } else {
                                                setOpen(true)
                                            }
                                        }}
                                        asChild
                                    >
                                        <div>
                                            Menu
                                            <ChevronDown
                                                className={cn(
                                                    'opacity-60 transition-transform duration-150',
                                                    open
                                                        ? 'rotate-180'
                                                        : 'rotate-0'
                                                )}
                                                size={16}
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    side="bottom"
                                    className="w-[280px] focus:outline-none focus:ring-0 focus:ring-offset-0"
                                    sideOffset={8}
                                >
                                    <DropdownMenuGroup>
                                        {siteConfig.navigation?.map(
                                            (navItem) => {
                                                const IconComponent =
                                                    navItem.icon
                                                return (
                                                    <DropdownMenuItem
                                                        key={navItem.href}
                                                        className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus:bg-accent"
                                                        asChild
                                                    >
                                                        <Link
                                                            href={navItem.href}
                                                            className="flex items-start gap-3 w-full"
                                                        >
                                                            {IconComponent && (
                                                                <div className="bg-primary/10 text-primary rounded-lg p-1.5 w-fit flex-shrink-0">
                                                                    <IconComponent className="h-4 w-4" />
                                                                </div>
                                                            )}
                                                            <div className="flex flex-col gap-1 min-w-0 flex-1">
                                                                <div className="text-sm font-medium">
                                                                    {
                                                                        navItem.title
                                                                    }
                                                                </div>
                                                                {navItem.description && (
                                                                    <div className="text-muted-foreground text-xs font-normal leading-relaxed">
                                                                        {
                                                                            navItem.description
                                                                        }
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </Link>
                                                    </DropdownMenuItem>
                                                )
                                            }
                                        )}
                                    </DropdownMenuGroup>

                                    {siteConfig.horizontalNav &&
                                        siteConfig.horizontalNav.length > 0 && (
                                            <>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuGroup>
                                                    {siteConfig.horizontalNav.map(
                                                        (navItem) => {
                                                            const IconComponent =
                                                                navItem.icon
                                                            return (
                                                                <DropdownMenuItem
                                                                    key={
                                                                        navItem.href
                                                                    }
                                                                    className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus:bg-accent"
                                                                    asChild
                                                                >
                                                                    <Link
                                                                        href={
                                                                            navItem.href
                                                                        }
                                                                        className="flex items-start gap-3 w-full"
                                                                    >
                                                                        {IconComponent && (
                                                                            <div className="bg-primary/10 text-primary rounded-lg p-1.5 w-fit flex-shrink-0">
                                                                                <IconComponent className="h-4 w-4" />
                                                                            </div>
                                                                        )}
                                                                        <div className="flex flex-col gap-1 min-w-0 flex-1">
                                                                            <div className="text-sm font-medium">
                                                                                {
                                                                                    navItem.title
                                                                                }
                                                                            </div>
                                                                            {navItem.description && (
                                                                                <div className="text-muted-foreground text-xs font-normal leading-relaxed">
                                                                                    {
                                                                                        navItem.description
                                                                                    }
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </Link>
                                                                </DropdownMenuItem>
                                                            )
                                                        }
                                                    )}
                                                </DropdownMenuGroup>
                                            </>
                                        )}

                                    {siteConfig.verticalNav &&
                                        siteConfig.verticalNav.length > 0 && (
                                            <>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuGroup>
                                                    {siteConfig.verticalNav.map(
                                                        (navItem) => {
                                                            const IconComponent =
                                                                navItem.icon
                                                            return (
                                                                <DropdownMenuItem
                                                                    key={
                                                                        navItem.href
                                                                    }
                                                                    className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus:bg-accent"
                                                                    asChild
                                                                >
                                                                    <Link
                                                                        href={
                                                                            navItem.href
                                                                        }
                                                                        className="flex items-start gap-3 w-full"
                                                                    >
                                                                        {IconComponent && (
                                                                            <div className="bg-primary/10 text-primary rounded-lg p-1.5 w-fit flex-shrink-0">
                                                                                <IconComponent className="h-4 w-4" />
                                                                            </div>
                                                                        )}
                                                                        <div className="flex flex-col gap-1 min-w-0 flex-1">
                                                                            <div className="text-sm font-medium">
                                                                                {
                                                                                    navItem.title
                                                                                }
                                                                            </div>
                                                                            {navItem.description && (
                                                                                <div className="text-muted-foreground text-xs font-normal leading-relaxed">
                                                                                    {
                                                                                        navItem.description
                                                                                    }
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </Link>
                                                                </DropdownMenuItem>
                                                            )
                                                        }
                                                    )}
                                                </DropdownMenuGroup>
                                            </>
                                        )}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </NavigationMenu>
            </Container>
        </section>
    )
}
