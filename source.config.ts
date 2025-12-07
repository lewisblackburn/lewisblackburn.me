import {
    defineConfig,
    defineDocs,
    frontmatterSchema,
} from 'fumadocs-mdx/config'
import { z } from 'zod'

export default defineConfig({
    mdxOptions: {
        providerImportSource: '@/mdx-components',
    },
})

export const { docs, meta } = defineDocs({
    dir: 'blog/content',
    docs: {
        schema: frontmatterSchema.extend({
            date: z.string(),
            tags: z.array(z.string()).optional(),
            featured: z.boolean().optional().default(false),
            readTime: z.string().optional(),
            author: z.string().optional(),
            thumbnail: z.string().optional(),
        }),
    },
})

export const { docs: sideQuestsDocs, meta: sideQuestsMeta } = defineDocs({
    dir: 'side-quests/content',
    docs: {
        schema: frontmatterSchema.extend({
            title: z.string(),
            date: z.string(),
            location: z.string().optional(),
        }),
    },
})
