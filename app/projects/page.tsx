import Header from '@/components/header'
import { BlurFade } from '@/components/magicui/blur-fade'
import ProjectCard from '@/components/project-card'
import { Container } from '@/components/ui/container'
import { projects } from '@/lib/projects'
import { siteConfig } from '@/lib/site'
import React from 'react'

export const metadata = {
    title: 'Projects',
    description: "Showcase of my projects that I'm proud of.",
}

export default async function ProjectsPage() {
    const projectItem = siteConfig.navigation.find(
        (item) => item.title === 'Projects'
    )!

    return (
        <div className="bg-background relative">
            <Header
                icon={React.createElement(projectItem.icon)}
                title={projectItem.title}
                subtitle={projectItem.description}
            />

            <BlurFade
                delay={0.1 * 4}
                inView
                direction="up"
                className="border-t"
            >
                <Container>
                    <section className="bg-background relative py-12">
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
