'use client'
import { BadgeCheck, Clock, MessageSquareCode, User } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Testimonial, testimonials } from '@/lib/testimonials'

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    const isPlaceholder = !testimonial.content && !testimonial.name

    return (
        <Card
            className={`relative mb-5 break-inside-avoid rounded-xl p-5 shadow-sm ${
                isPlaceholder ? 'opacity-80' : ''
            }`}
        >
            <div className="flex items-center gap-4">
                <Avatar className="ring-muted h-10 w-10 rounded-full ring-1">
                    {testimonial.avatar ? (
                        <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                            <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                    )}
                </Avatar>
                <div>
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">
                            {testimonial.name || 'Endorsement pending'}
                        </p>
                        {!isPlaceholder ? (
                            <BadgeCheck className="h-4 w-4 fill-cyan-400 stroke-white" />
                        ) : null}
                    </div>
                    {testimonial.title ? (
                        <p className="text-muted-foreground mt-2 text-xs">
                            {testimonial.title}
                        </p>
                    ) : null}
                </div>
            </div>

            <div className="border-border my-4 border-t border-dashed" />

            <div
                className={`text-sm ${
                    isPlaceholder
                        ? 'text-muted-foreground italic'
                        : 'text-foreground'
                }`}
            >
                {testimonial.content ? (
                    <q>{testimonial.content}</q>
                ) : (
                    'More endorsements coming soon.'
                )}
            </div>

            {testimonial.date ? (
                <div className="text-muted-foreground mt-4 flex items-center gap-2 text-xs">
                    <Clock className="h-4 w-4" />
                    <span>{testimonial.date}</span>
                </div>
            ) : null}
        </Card>
    )
}

export default function Testimonials() {
    const [columnCount, setColumnCount] = useState(3)

    // Get current column count based on screen size
    useEffect(() => {
        const getColumnCount = () => {
            if (typeof window === 'undefined') return 3
            const width = window.innerWidth
            if (width < 768) return 1
            if (width < 1024) return 2
            return 3
        }

        const updateColumnCount = () => {
            setColumnCount(getColumnCount())
        }

        updateColumnCount()
        window.addEventListener('resize', updateColumnCount)
        return () => window.removeEventListener('resize', updateColumnCount)
    }, [])

    // Function to reorder items for left-to-right flow in CSS columns
    const reorderForColumns = (items: Testimonial[], columns: number) => {
        const itemsPerColumn = Math.ceil(items.length / columns)
        const reordered: Testimonial[] = []

        for (let col = 0; col < columns; col++) {
            for (let row = 0; row < itemsPerColumn; row++) {
                const originalIndex = row * columns + col
                if (originalIndex < items.length) {
                    reordered.push(items[originalIndex])
                }
            }
        }

        return reordered
    }

    // Calculate reordered data based on current column count
    const reorderedData = useMemo(() => {
        const items =
            columnCount === 1
                ? testimonials.filter((t) => !(!!!t.content && !!!t.name))
                : testimonials
        return reorderForColumns(items, columnCount)
    }, [columnCount])

    return (
        <section
            id="testimonials"
            className="bg-background relative py-24 md:py-32"
        >
            <Container>
                <div className="my-4 flex justify-center">
                    <Badge
                        variant="outline"
                        className="rounded-sm py-2 shadow-md"
                    >
                        <MessageSquareCode className="text-muted-foreground mr-2 size-4" />
                        <span>Personal Endorsements</span>
                    </Badge>
                </div>

                {/* Title */}
                <div className="flex flex-col items-center gap-6 px-4 sm:px-8">
                    <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
                        What people I&apos;ve worked with say
                    </h2>
                </div>
                <div className="after:bg-linear-to-t after:from-background relative mt-14 w-full px-4 after:absolute after:inset-x-0 after:-bottom-2 after:h-96 sm:px-8 md:px-16 lg:px-32">
                    <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
                        {reorderedData.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                </div>

                {/* <div className="flex justify-center">
                    <Button
                        className="hover:bg-primary/90 mt-4 gap-2 rounded-lg px-5 py-3 text-sm shadow-sm transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        disabled={true}
                    >
                        <span className="flex items-center gap-1">
                            <span>More</span>
                            <span className="text-muted/80">-</span>
                            <span className="text-muted/80">Endorsements</span>
                        </span>
                        <ChevronRight className="text-muted-foreground/80 h-4 w-4" />
                    </Button>
                </div> */}
            </Container>
        </section>
    )
}
