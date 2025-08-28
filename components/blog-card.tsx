import Image from 'next/image'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { RiTimeFill } from '@remixicon/react'

interface BlogCardProps {
    url: string
    title: string
    description: string
    date: string
    thumbnail?: string
    tags?: string[]
    readTime?: string
    showDivider?: boolean
}

export function BlogCard({
    url,
    title,
    description,
    date,
    thumbnail,
    tags,
    readTime,
    showDivider = true,
}: BlogCardProps) {
    return (
        <Link href={url}>
            <div className="grid grid-cols-7 gap-6">
                <div className="col-span-5">
                    <time className="block text-sm font-medium text-muted-foreground">
                        {date}
                    </time>
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:underline underline-offset-4">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                        {description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <RiTimeFill className="size-4 mb-0.5" />
                            <span className="text-xs text-muted-foreground">
                                {readTime}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {tags?.map((tag) => (
                                <Badge
                                    key={tag}
                                    className="text-[10px] text-muted-foreground bg-secondary/50 tracking-wide"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                {thumbnail && (
                    <div className="relative w-full h-32 overflow-hidden col-span-2">
                        <Image
                            src={thumbnail}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                )}
            </div>
            {showDivider && (
                <div className="col-span-5 border-b border-dashed border-border mt-4" />
            )}
        </Link>
    )
}
