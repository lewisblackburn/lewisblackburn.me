import Header from '@/components/header'
import { BlurFade } from '@/components/magicui/blur-fade'
import StatisticCards from '@/components/statistic-cards'
import TopTracks from '@/components/top-tracks'
import { siteConfig } from '@/lib/site'
import React from 'react'

export const metadata = {
    title: 'Statistics',
    description: 'A collection of my personal statistics.',
}

export default async function StatisticsPage() {
    const statisticsItem = siteConfig.horizontalNav.find(
        (item) => item.title === 'Statistics'
    )!

    return (
        <div className="bg-background relative">
            <Header
                icon={React.createElement(statisticsItem.icon)}
                title={statisticsItem.title}
                subtitle={statisticsItem.description}
            />

            <BlurFade
                delay={0.1 * 4}
                inView
                direction="up"
                className="border-t"
            >
                <StatisticCards />
            </BlurFade>

            <BlurFade
                delay={0.1 * 6}
                inView
                direction="up"
                className="border-t"
            >
                <TopTracks />
            </BlurFade>
        </div>
    )
}
