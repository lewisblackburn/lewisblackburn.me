import { ThemePalette } from '@/components/theme-palette'
import type { ComponentType } from 'react'

export interface Project {
    title: string
    description: string
    image?: string
    preview?: ComponentType
    repository: string
    featured?: boolean
    url?: string
}

export const projects: Project[] = [
    {
        title: 'Drive 2 Learn',
        featured: true,
        description:
            'A bespoke website developed for a driving instructor to enhance their online presence and streamline their business operations.',
        image: '/projects/drive2learn.png',
        repository: 'https://github.com/lewisblackburn/drive2learn',
        url: 'https://www.drive2learn.co.uk/',
    },
    {
        title: 'Metabase',
        featured: true,
        description:
            'A comprehensive database that brings together information about films, TV shows, books, people, and songs, all in one convenient platform. Just like popular services like TMDB or IMDb, Metabase provides a place for users to navigate, create and update their favourite media.',
        image: '/projects/metabase.png',
        repository: 'https://github.com/lewisblackburn/metabase',
    },
    {
        title: 'VS Code Dark 2026',
        preview: ThemePalette,
        featured: true,
        description:
            'A port of Microsoft’s VS Code 2026 Dark theme for Neovim and Ghostty, with a Base24 palette for other compatible tools. Includes an upstream change checker to help keep the themes in sync with the original.',
        repository: 'https://github.com/lewisblackburn/vscode-dark-2026',
    },
]
