import { RiBook2Fill } from '@remixicon/react'
import {
    BookOpen,
    Briefcase,
    ChartArea,
    Folder,
    Home,
    ListCheck,
    MessageCircle,
    Swords,
} from 'lucide-react'

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
        {
            title: 'Home',
            href: '/',
            description: 'Welcome to my little corner of the internet',
            icon: Home,
        },
        {
            title: 'Blog',
            href: '/blog',
            description:
                'Thoughts, mental models, and tutorials about front-end development',
            icon: RiBook2Fill,
        },
        {
            title: 'Projects',
            href: '/projects',
            description: "Showcase of my projects that I'm proud of",
            icon: Folder,
        },
    ],
    horizontalNav: [
        {
            title: 'Bucket List',
            href: '/bucket-list',
            description:
                'A list of things I want to do at least once in my life',
            icon: ListCheck,
        },
        {
            title: 'Side Quests',
            href: '/side-quests',
            description: 'New skills and adventures I have unlocked',
            icon: Swords,
        },
        {
            title: 'Statistics',
            href: '/statistics',
            description: 'A collection of my personal statistics and metrics',
            icon: ChartArea,
        },
    ],
    verticalNav: [
        {
            title: 'Guest Book',
            href: '/guestbook',
            description: 'Leave a message or see what others have said',
            icon: BookOpen,
        },
        {
            title: 'Experience',
            href: '/#experience',
            description: 'A timeline of my life and career',
            icon: Briefcase,
        },
        {
            title: 'Testimonials',
            href: '/#testimonials',
            description: 'What others say about me',
            icon: MessageCircle,
        },
    ],
}

export type SiteConfig = typeof siteConfig
