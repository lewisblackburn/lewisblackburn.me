import GuestBook from '@/components/guestbook'
import Header from '@/components/header'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Container } from '@/components/ui/container'
import { siteConfig } from '@/lib/site'
import React from 'react'

export const metadata = {
    title: 'Guest Book',
    description: 'Leave a message in my guest book!',
}

export default async function GuestBookPage() {
    const guestBookItem = siteConfig.verticalNav.find(
        (item) => item.title === 'Guest Book'
    )!

    return (
        <div className="bg-background relative">
            <Header
                icon={React.createElement(guestBookItem.icon)}
                title={guestBookItem.title}
                subtitle={guestBookItem.description}
            />

            <BlurFade
                delay={0.1 * 4}
                inView
                direction="up"
                className="border-t"
            >
                <Container>
                    <section className="bg-background relative py-24 md:py-32">
                        <GuestBook />
                    </section>
                </Container>
            </BlurFade>
        </div>
    )
}
