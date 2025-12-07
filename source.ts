import { loader } from 'fumadocs-core/source'
import type { InferPageType } from 'fumadocs-core/source'
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server'
import { docs, meta, sideQuestsDocs, sideQuestsMeta } from './.source/server'

export const blogSource = loader({
    baseUrl: '/blog',
    source: toFumadocsSource(docs, meta),
})

export const sideQuestsSource = loader({
    baseUrl: '/side-quests',
    source: toFumadocsSource(sideQuestsDocs, sideQuestsMeta),
})

export type BlogPage = InferPageType<typeof blogSource>
export type SideQuestPage = InferPageType<typeof sideQuestsSource>
