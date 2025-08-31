import { RiGithubFill } from '@remixicon/react'
import { SquareArrowOutUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from './ui/aspect-ratio'
import { Button } from './ui/button'

interface ProjectCardProps {
    title: string
    description: string
    image: string
    repository?: string
    url?: string
}

export default function ProjectCard({
    title,
    description,
    image,
    repository,
    url,
}: ProjectCardProps) {
    return (
        <div className=" group flex flex-col gap-6 py-8 md:flex-row md:items-center">
            <div className="md:w-1/3">
                <AspectRatio
                    ratio={16 / 9}
                    className="overflow-hidden rounded-lg"
                >
                    <Image
                        src={image}
                        alt="Project image"
                        fill
                        className="object-cover object-center"
                    />
                </AspectRatio>
            </div>

            <div className="flex flex-1 flex-col gap-2 md:pl-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    {description}
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                    <Button variant="outline" asChild>
                        <Link
                            href={repository ?? '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RiGithubFill
                                className="opacity-60"
                                size={16}
                                aria-hidden="true"
                            />
                            Repository
                        </Link>
                    </Button>
                    {url && (
                        <Button variant="outline" asChild>
                            <Link
                                href={url ?? '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Preview
                                <SquareArrowOutUpRightIcon
                                    className="opacity-60"
                                    size={16}
                                    aria-hidden="true"
                                />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
