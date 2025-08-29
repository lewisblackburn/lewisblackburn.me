'use client'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { ScrollArea } from '@/components/ui/scroll-area'
import { experienceData } from '@/lib/experience'
import { Briefcase } from 'lucide-react'
import { IconButton } from './ui/icon-button'

export default function Experience() {
    const [activeId, setActiveId] = useState<number | null>(null)
    const sectionRefs = useRef<Array<HTMLDivElement | null>>([])

    useEffect(() => {
        sectionRefs.current = sectionRefs.current.slice(
            0,
            experienceData.length
        )

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100 // Adding offset to improve usability

            // Find the section that is currently in view
            const currentSectionIndex = sectionRefs.current.findIndex(
                (ref, index) => {
                    if (!ref) return false

                    const nextRef = sectionRefs.current[index + 1]
                    const refTop = ref.offsetTop
                    const refBottom = nextRef
                        ? nextRef.offsetTop
                        : document.body.scrollHeight

                    return (
                        scrollPosition >= refTop && scrollPosition < refBottom
                    )
                }
            )

            if (currentSectionIndex !== -1) {
                setActiveId(currentSectionIndex)
            } else if (
                scrollPosition < (sectionRefs.current[0]?.offsetTop || 0)
            ) {
                setActiveId(null)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initialize on mount

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [experienceData.length])

    const scrollToSection = (index: number) => {
        const sectionRef = sectionRefs.current[index]
        if (sectionRef) {
            window.scrollTo({
                top: sectionRef.offsetTop - 80,
                behavior: 'smooth',
            })
        }
    }

    // Correct way to set refs for linter
    const setRef = (index: number) => (el: HTMLDivElement | null) => {
        sectionRefs.current[index] = el
    }

    return (
        <section className="bg-background relative py-24 md:py-32 space-y-24">
            <div className="flex flex-col items-center gap-5">
                <IconButton icon={<Briefcase />} />

                <h3 className="font-semibold text-3xl md:text-4xl tracking-tighter">
                    Experience
                </h3>
            </div>

            <Container className="relative flex flex-col lg:flex-row">
                {/* Scrollspy sidebar */}
                <div className="sticky top-24 hidden h-fit w-72 overflow-visible pr-10 lg:block">
                    <ScrollArea className="h-[calc(100vh-300px)]">
                        <div className="pb-6">
                            <h3 className="mb-5 text-sm font-medium tracking-wider text-muted-foreground uppercase">
                                Career Highlights
                            </h3>
                            <nav className="flex flex-col space-y-2.5">
                                {experienceData.map((entry, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToSection(index)}
                                        className={cn(
                                            'group flex flex-col gap-2 rounded-md border border-transparent px-3 py-2 text-left transition-all hover:border-border hover:bg-accent',
                                            activeId === index
                                                ? 'border-border bg-accent font-medium text-foreground shadow-sm'
                                                : 'text-muted-foreground'
                                        )}
                                    >
                                        <span className="text-sm">
                                            {entry.company}
                                        </span>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>{entry.period}</span>
                                        </div>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </ScrollArea>
                </div>

                {/* Main content */}
                <div className="flex-1 lg:pl-10">
                    <div className="space-y-16 md:space-y-24">
                        {experienceData.map((entry, index) => (
                            <div
                                key={index}
                                ref={setRef(index)}
                                className="relative flex flex-col gap-6 border-l-4 border-l-border/30 pl-6 transition-colors hover:border-l-border md:gap-8"
                                id={`entry-${index}`}
                            >
                                <div className="flex flex-wrap items-center gap-3">
                                    <Badge
                                        variant="secondary"
                                        className="px-3 py-1 text-xs font-medium"
                                    >
                                        {entry.period}
                                    </Badge>
                                    <span className="text-xs font-medium text-muted-foreground">
                                        {entry.location}
                                    </span>
                                </div>
                                <div>
                                    <h2 className="text-xl leading-tight font-bold text-foreground md:text-2xl">
                                        {entry.company}
                                    </h2>
                                    <p className="mb-6 text-base text-muted-foreground md:text-base">
                                        {entry.position}
                                    </p>
                                    {entry.contributions &&
                                        entry.contributions.length > 0 && (
                                            <div className="mt-6 rounded-lg border bg-muted/30 p-5">
                                                <h3 className="mb-3 text-sm font-medium">
                                                    Key Contributions
                                                </h3>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    {entry.contributions.map(
                                                        (item, itemIndex) => (
                                                            <li
                                                                key={itemIndex}
                                                                className="flex items-start"
                                                            >
                                                                <span className="mt-1 mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                                <span>
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    {entry.image && (
                                        <div className="mt-8 overflow-hidden rounded-xl border">
                                            <img
                                                src={entry.image}
                                                alt={`${entry.location} visual`}
                                                className="w-full object-cover transition-transform hover:scale-105"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
