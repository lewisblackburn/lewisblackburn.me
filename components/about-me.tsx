import { Container } from '@/components/ui/container'
import Image from 'next/image'

export default function AboutMe() {
    return (
        <section className="py-32">
            <Container>
                <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
                    <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
                        <div className="pr-6">
                            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">
                                Lewis Blackburn
                            </h1>
                            <p className="mb-9 lg:text-xl">
                                I recently graduated from York St John
                                University with a bachelor's degree in computer
                                science (first‑class hons, 2025). I consider
                                myself to be an ambitious, hard‑working
                                individual who is passionate about web
                                development.
                            </p>
                            <p className="text-muted-foreground">
                                I have real‑world experience building websites
                                as a freelance web developer and have completed
                                numerous work placement sessions throughout my
                                time in education and outside education with
                                online courses related to the industry. I love
                                to be in an environment where I can develop my
                                personal skills, be surrounded by those who love
                                development as much as I do, and to grow
                                alongside senior developers.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                            <Image
                                src="/about/frat-night.webp"
                                alt="about 1"
                                width={400}
                                height={560}
                                className="aspect-[0.7] w-full rounded-lg object-cover md:w-1/2"
                            />
                            <div className="hidden md:flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                                <Image
                                    src="/about/hike-2.webp"
                                    alt="about 2"
                                    width={400}
                                    height={440}
                                    className="aspect-[1.1] rounded-lg object-cover"
                                />
                                <Image
                                    src="/about/edge-of-gaping-gill.webp"
                                    alt="about 3"
                                    width={400}
                                    height={560}
                                    className="aspect-[0.7] rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
                        <div className="hidden md:flex flex-col items-center justify-center gap-6 md:flex-row">
                            <Image
                                src="/about/rowing.webp"
                                alt="about 4"
                                width={400}
                                height={444}
                                className="aspect-[0.9] w-full rounded-lg object-cover md:w-1/2"
                            />
                            <div className="hidden md:flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                                <Image
                                    src="/about/york-walls.webp"
                                    alt="about 5"
                                    width={400}
                                    height={500}
                                    className="aspect-[1.1] rounded-lg object-cover"
                                />
                                <Image
                                    src="/about/top-of-ingelborough.webp"
                                    alt="about 6"
                                    width={400}
                                    height={444}
                                    className="aspect-[0.9] rounded-lg object-cover"
                                />
                            </div>
                        </div>
                        <div className="px-8">
                            <h1 className="mb-8 text-2xl font-semibold lg:mb-6">
                                Beyond the Resume: Who I Am
                            </h1>
                            <p className="mb-9 lg:text-xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Impedit quae vel rem tenetur
                                illum aspernatur. Ea, facere soluta cumque
                                laboriosam repudiandae quaerat inventore dolores
                                saepe pariatur, adipisci atque voluptate
                                doloribus!
                            </p>
                            <p className="text-muted-foreground">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Iure aliquid laudantium minus
                                distinctio exercitationem odio non nihil
                                blanditiis quae, beatae assumenda ad reiciendis
                                soluta dolorem. Natus repellendus quidem dolorum
                                temporibus!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
