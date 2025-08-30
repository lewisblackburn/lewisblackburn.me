export const siteConfig = {
    name: 'Lewis Blackburn',
    url: 'https://lewisblackburn.me',
    description:
        'I am a graduate software engineer based in the UK, learning and building cool things  along the way.',
    socials: [
        {
            name: 'Email',
            href: 'mailto:lewisblackburn10@gmail.com',
            icon: 'mail',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/lewisblackburn',
            icon: 'linkedin',
        },
        {
            name: 'GitHub',
            href: 'https://github.com/lewisblackburn',
            icon: 'github',
        },
        { name: 'Twitter', href: 'https://x.com/zxffo', icon: 'twitter' },
    ],
    navigation: [
        { title: 'Home', href: '/' },
        { title: 'Blog', href: '/blog' },
        { title: 'Projects', href: '/projects' },
        { title: 'Shorts', href: '/shorts' },
    ],
}

export type SiteConfig = typeof siteConfig
