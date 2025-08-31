import Header from '@/components/header'
import { BlurFade } from '@/components/magicui/blur-fade'
import Timeline from '@/components/timeline'
import { siteConfig } from '@/lib/site'
import React from 'react'

export const metadata = {
    title: 'Side Quests',
    description: 'A collection of my side quests and challenges.',
}

export default async function SideQuestsPage() {
    const sideQuestsItem = siteConfig.horizontalNav.find(
        (item) => item.title === 'Side Quests'
    )!

    return (
        <div className="bg-background relative">
            <Header
                icon={React.createElement(sideQuestsItem.icon)}
                title={sideQuestsItem.title}
                subtitle={sideQuestsItem.description}
            />

            <BlurFade
                delay={0.1 * 4}
                inView
                direction="up"
                className="border-t"
            >
                <Timeline />
            </BlurFade>
        </div>
    )
}
