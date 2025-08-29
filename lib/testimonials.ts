export interface Testimonial {
    id: string
    name: string
    title: string
    date: string
    avatar: string
    content: string
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Drive 2 Learn',
        title: 'Alex Psyllos · Founder',
        date: '2025-08-15',
        avatar: '/testimonials/drive2learn.png',
        content:
            'Drive 2 Learn was a mere info page from Google Sites. We started expanding but our web page remained the same for years, until Lewis turned up. He transformed our website to be professional, well-designed and functional. Lewis implemented his own ideas and forward-thinking content. Thank you very much Lewis for working with us and taking us to the next level .',
    },
    {
        id: 'p-1',
        name: '',
        title: '',
        date: '',
        avatar: '',
        content: '',
    },
    {
        id: 'p-2',
        name: '',
        title: '',
        date: '',
        avatar: '',
        content: '',
    },
    {
        id: '2',
        name: "Sainsbury's",
        title: 'Store Management',
        date: '2023-05-10',
        avatar: '/testimonials/sainsburys.jpeg',
        content:
            'Lewis was a standout member of our team—whenever he needs a reference, any one of us in Sainsbury’s management will be happy to provide it.',
    },
    {
        id: 'p-3',
        name: '',
        title: '',
        date: '',
        avatar: '',
        content: '',
    },
    {
        id: 'p-4',
        name: '',
        title: '',
        date: '',
        avatar: '',
        content: '',
    },
]
