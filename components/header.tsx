'use client'
import { IconButton } from '@/components/ui/icon-button'
import { BlurFade } from './magicui/blur-fade'
import { FlickeringGrid } from './magicui/flickering-grid'

interface HeaderProps {
    icon: React.ReactNode
    title: string
    subtitle: string
}

export default function Header({ title, subtitle, icon }: HeaderProps) {
    return (
        <div className="bg-background relative flex justify-center">
            <div className="absolute top-0 left-0 z-0 w-full h-[150px] [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
                <FlickeringGrid
                    className="absolute top-0 left-0 size-full"
                    squareSize={4}
                    gridGap={6}
                    color="#6B7280"
                    maxOpacity={0.2}
                    flickerChance={0.05}
                />
            </div>
            <div className="p-6 flex flex-col gap-6 min-h-[350px] justify-center relative z-10">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col items-center gap-5">
                        <BlurFade delay={0.1} inView direction="up">
                            <IconButton icon={icon} />
                        </BlurFade>

                        <BlurFade delay={0.1 * 2} inView direction="up">
                            <h1 className="font-semibold text-5xl md:text-6xl tracking-tighter">
                                {title}
                            </h1>
                        </BlurFade>

                        <BlurFade delay={0.1 * 3} inView direction="up">
                            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
                                {subtitle}
                            </p>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </div>
    )
}
