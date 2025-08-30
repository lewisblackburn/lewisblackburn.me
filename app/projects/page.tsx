import Header from '@/components/header'
import { BlurFade } from '@/components/magicui/blur-fade'
import ProjectCard from '@/components/project-card'
import { Container } from '@/components/ui/container'
import { projects } from '@/lib/projects'
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
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    repository={project.repository}
                                    url={project.url}
                                />
                            ))}
                        </div>
                    </section>
                </Container>
            </BlurFade>
        </div>
    )
}
