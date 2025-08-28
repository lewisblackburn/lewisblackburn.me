import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
    url: string
    title: string
    description: string
    date: string
    thumbnail?: string
}

export function BlogCard({
    url,
    title,
    description,
    date,
    thumbnail,
}: BlogCardProps) {
    return (
        <Link href={url}>
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <time className="block text-sm font-medium text-muted-foreground">
                        {date}
                    </time>
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:underline underline-offset-4">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                        {description}
                    </p>
                </div>
                {thumbnail && (
                    <div className="relative w-full h-48 overflow-hidden">
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

            {/* <div className="p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:underline underline-offset-4">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                        {description}
                    </p>
                    <time className="block text-sm font-medium text-muted-foreground">
                        {date}
                    </time>
                </div> */}
        </Link>
    )
}
