import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { BlurFade } from '@/components/magicui/blur-fade'
import { SocialIcons } from '@/components/social-icons'
import Testimonials from '@/components/testimonials'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ArrowRightIcon, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default async function HomePage() {
    return (
        <div className="bg-background relative">
            <section className="flex items-center min-h-fd-container">
                <Container className="space-y-12">
                    <BlurFade delay={0.1} inView direction="up">
                        <Link
                            href="https://www.ballys.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 w-fit no-underline px-4 py-2'
                            )}
                        >
                            <AnimatedShinyText className="inline-flex items-center justify-center gap-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                <span>
                                    💼 Software Engineer at
                                    <span className="ml-1 font-medium underline underline-offset-3">
                                        Bally&apos;s
                                    </span>
                                </span>
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedShinyText>
                        </Link>
                    </BlurFade>
                    <div className="w-full lg:w-1/2">
                        <BlurFade delay={0.1 * 2} inView direction="up">
                            <h1
                                data-fade="1"
                                className="h1 text-primary font-semibold text-5xl sm:text-7xl mt-10"
                            >
                                {siteConfig.name}
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.1 * 3} inView direction="up">
                            <p
                                data-fade="2"
                                className="mt-4 text-xl text-muted-foreground"
                            >
                                {siteConfig.description}
                            </p>
                        </BlurFade>
                    </div>
                    <BlurFade delay={0.1 * 4} inView direction="up">
                        <div className="flex flex-wrap gap-4 justify-start">
                            <Link href="#how">
                                <Button className="relative pe-12">
                                    Learn How
                                    <span className="bg-primary-foreground/15 pointer-events-none absolute inset-y-0 end-0 flex w-9 items-center justify-center">
                                        <ChevronDown
                                            className="opacity-60"
                                            size={16}
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    variant="outline"
                                    className="bg-background! cursor-pointer"
                                >
                                    More about me
                                </Button>
                            </Link>
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.1 * 5} inView direction="up">
                        <SocialIcons iconClassName="size-5" />
                    </BlurFade>
                </Container>
            </section>

            {/* Other sections can go here and will flow naturally */}
            <section
                id="how"
                className="flex items-center justify-center min-h-fd-container"
            >
                <Container>test</Container>
            </section>

            <Testimonials />
        </div>
    )
}
