import Header from '@/components/header'
import { BlurFade } from '@/components/magicui/blur-fade'
import TodoItem from '@/components/todo-item'
import { Container } from '@/components/ui/container'
import { bucketList } from '@/lib/bucket-list'
import { siteConfig } from '@/lib/site'
import React from 'react'

export const metadata = {
    title: 'Bucket List',
    description: 'My personal bucket list of things to do!',
}

export default async function BucketListPage() {
    const sortedBucketList = bucketList.sort((a, b) => {
        const yearA = a.year || 0
        const yearB = b.year || 0
        return yearA - yearB
    })

    const bucketListItem = siteConfig.horizontalNav.find(
        (item) => item.title === 'Bucket List'
    )!

    return (
        <div className="bg-background relative">
            <Header
                icon={React.createElement(bucketListItem.icon)}
                title={bucketListItem.title}
                subtitle={bucketListItem.description}
            />

            <BlurFade
                delay={0.1 * 4}
                inView
                direction="up"
                className="border-t"
            >
                <section className="bg-background relative py-12">
                    <Container className="max-w-2xl">
                        <div className="space-y-12">
                            {sortedBucketList.reverse().map((item, index) => (
                                <TodoItem
                                    key={index}
                                    title={item.title}
                                    subtitle={item.year?.toString()}
                                    description={item.description}
                                    checked={item.completed}
                                />
                            ))}
                        </div>
                    </Container>
                </section>
            </BlurFade>
        </div>
    )
}
