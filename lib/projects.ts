export interface Project {
    title: string
    description: string
    image: string
    repository: string
    url?: string
}

export const projects: Project[] = [
    {
        title: 'Drive 2 Learn',
        description:
            'A bespoke website developed for a driving instructor to enhance their online presence and streamline their business operations.',
        image: '/projects/drive2learn.png',
        repository: 'https://github.com/lewisblackburn/drive2learn',
        url: 'https://www.drive2learn.co.uk/',
    },
    {
        title: 'Metabase',
        description:
            'A comprehensive database that brings together information about films, TV shows, books, people, and songs, all in one convenient platform. Just like popular services like TMDB or IMDb, Metabase provides a place for users to navigate, create and update their favourite media.',
        image: '/projects/metabase.png',
        repository: 'https://github.com/lewisblackburn/metabase',
    },
]
