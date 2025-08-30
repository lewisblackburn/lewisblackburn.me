import Header from '@/components/header'
import { BlurFade } from '@/components/magicui/blur-fade'
import ProjectCard from '@/components/project-card'
import { Container } from '@/components/ui/container'
import { Folder } from 'lucide-react'

export default async function ProjectsPage() {
    return (
        <div className="bg-background relative">
            <Header
                icon={<Folder />}
                title="Projects"
                subtitle="Showcase of my projects that I'm proud of."
            />

            <BlurFade
                delay={0.1 * 4}
                inView
                direction="up"
                className="border-t"
            >
                <Container>
                    <section className="bg-background relative py-24 md:py-32">
                        <div className="grid grid-cols-1 gap-24">
                            <ProjectCard
                                title="Drive 2 Learn"
                                description="A bespoke website developed for a driving instructor to enhance their online presence and streamline their business operations."
                                image="/projects/drive2learn.png"
                                repository="https://github.com/lewisblackburn/drive2learn"
                                url="https://www.drive2learn.co.uk/"
                            />
                            <ProjectCard
                                title="Metabase"
                                description="A comprehensive database that brings together information about films, TV shows, books, people, and songs, all in one convenient platform. Just like popular services like TMDB or IMDb, Metabase provides a place for users to navigate, create and update their favourite media."
                                image="/projects/metabase.png"
                                repository="https://github.com/lewisblackburn/metabase"
                            />
                        </div>
                    </section>
                </Container>
            </BlurFade>
        </div>
    )
}
