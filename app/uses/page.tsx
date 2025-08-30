import Header from '@/components/header'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Safari } from '@/components/magicui/safari'
import { Container } from '@/components/ui/container'
import { siteConfig } from '@/lib/site'
import React from 'react'

export default async function UsesPage() {
    const usesItem = siteConfig.horizontalNav.find(
        (item) => item.title === 'Uses'
    )!

    return (
        <div className="bg-background relative">
            <Header
                icon={React.createElement(usesItem.icon)}
                title={usesItem.title}
                subtitle={usesItem.description}
            />

            <BlurFade
                delay={0.1 * 4}
                inView
                direction="up"
                className="border-t"
            >
                <Container>
                    <section className="bg-background relative py-24 md:py-32">
                        <Safari
                            url="lewisblackburn.me/uses"
                            className="size-full"
                            imageSrc="https://via.placeholder.com/1200x750"
                        />
                    </section>
                </Container>
            </BlurFade>
        </div>
    )
}
