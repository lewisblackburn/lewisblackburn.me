'use client'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export default function GuestBook() {
    const { theme } = useTheme()

    return (
        <Giscus
            repo="lewisblackburn/lewisblackburn.me"
            repoId="R_kgDOLcri-Q"
            category="General"
            categoryId="DIC_kwDOLcri-c4CuzYT"
            mapping="pathname"
            strict="0"
            reactionsEnabled="0"
            emitMetadata="0"
            inputPosition="bottom"
            theme={theme === 'dark' ? 'noborder_dark' : 'noborder_light'}
            lang="en"
        />
    )
}
