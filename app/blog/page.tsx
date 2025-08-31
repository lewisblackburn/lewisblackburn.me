import { docs, meta } from '@/.source'
import { BlogCard } from '@/components/blog-card'
import Header from '@/components/header'
import { BlurFade } from '@/components/magicui/blur-fade'
import { TagFilter } from '@/components/tag-filter'
import { Container } from '@/components/ui/container'
import { Label } from '@/components/ui/label'
import { siteConfig } from '@/lib/site'
import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'
import React, { Suspense } from 'react'

interface BlogData {
    title: string
    description: string
    date: string
    tags?: string[]
    featured?: boolean
    readTime?: string
    author?: string
    authorImage?: string
    thumbnail?: string
}

interface BlogPage {
    url: string
    data: BlogData
}

const blogSource = loader({
    baseUrl: '/blog',
    source: createMDXSource(docs, meta),
})

const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>
}) {
    const blogItem = siteConfig.navigation.find(
        (item) => item.title === 'Blog'
    )!

    const resolvedSearchParams = await searchParams
    const allPages = blogSource.getPages() as BlogPage[]
    const sortedBlogs = allPages.sort((a, b) => {
        const dateA = new Date(a.data.date).getTime()
        const dateB = new Date(b.data.date).getTime()
        return dateB - dateA
    })

    const allTags = [
        'All',
        ...Array.from(
            new Set(sortedBlogs.flatMap((blog) => blog.data.tags || []))
        ).sort(),
    ]

    const selectedTag = resolvedSearchParams.tag || 'All'
    const filteredBlogs =
        selectedTag === 'All'
            ? sortedBlogs
            : sortedBlogs.filter((blog) =>
                  blog.data.tags?.includes(selectedTag)
              )

    const tagCounts = allTags.reduce((acc, tag) => {
        if (tag === 'All') {
            acc[tag] = sortedBlogs.length
        } else {
            acc[tag] = sortedBlogs.filter((blog) =>
                blog.data.tags?.includes(tag)
            ).length
        }
        return acc
    }, {} as Record<string, number>)

    return (
        <div className="bg-background relative">
            <Header
                icon={React.createElement(blogItem.icon)}
                title={blogItem.title}
                subtitle={blogItem.description}
            />

            <BlurFade
                delay={0.1 * 4}
                inView
                direction="up"
                className="border-t"
            >
                <Container className="px-0 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 lg:border-x lg:border-border/50 px-4 lg:px-8 py-12">
                            <Suspense fallback={<div>Loading articles...</div>}>
                                <div className="grid grid-cols-1 gap-8">
                                    {filteredBlogs.map((blog) => {
                                        const date = new Date(blog.data.date)
                                        const formattedDate = formatDate(date)

                                        return (
                                            <BlogCard
                                                key={blog.url}
                                                url={blog.url}
                                                title={blog.data.title}
                                                description={
                                                    blog.data.description
                                                }
                                                date={formattedDate}
                                                thumbnail={blog.data.thumbnail}
                                                tags={blog.data.tags}
                                                readTime={blog.data.readTime}
                                            />
                                        )
                                    })}
                                </div>
                            </Suspense>
                        </div>
                        <div className="hidden lg:flex flex-col gap-8 py-12">
                            {/* <SortBySelect /> */}
                            <div className="flex flex-col space-y-4">
                                <Label>Choose a topic</Label>
                                {allTags.length > 0 && (
                                    <TagFilter
                                        tags={allTags}
                                        selectedTag={selectedTag}
                                        tagCounts={tagCounts}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </BlurFade>
        </div>
    )
}
