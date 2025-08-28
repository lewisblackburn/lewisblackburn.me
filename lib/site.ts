export const siteConfig = {
    name: 'Lewis Blackburn',
    url: 'https://lewisblackburn.me',
    description:
        'I am a graduate software engineer based in the UK, learning and building cool things  along the way.',
    navigation: [
        { title: 'Home', href: '/' },
        { title: 'Blog', href: '/blog' },
        { title: 'Projects', href: '/projects' },
        { title: 'Shorts', href: '/shorts' },
        { title: 'About', href: '/about' },
    ],
}

export type SiteConfig = typeof siteConfig
