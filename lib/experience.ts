export type ExperienceEntry = {
    location: string
    period: string
    company: string
    position: string
    contributions?: string[]
    image?: string
}

export const experienceData: ExperienceEntry[] = [
    {
        location: '60 Spring Gardens, Manchester M2 2BQ',
        period: 'September 2025 ‑ Present',
        company: 'Bally’s Interactive',
        position: 'Grdauate Software Engineer',
        contributions: [
            'I am currently working as a Graduate Software Engineer at Bally’s Interactive.',
            'In this role, I will move across five teams over the course of two years, gaining experience in various aspects of software development.',
        ],
        image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-aspect-video-1.svg',
    },
    {
        location: '45 Innovation Wy, Barnsley S75 1JG',
        period: 'August 2024 - August 2025',
        company: 'Drive 2 Learn',
        position: 'Freelance Web Developer',
        contributions: [
            'Designed and developed a professional website for a driving instructor.',
            'Collaborated with the client to deliver a tailored solution and understand their requirements.',
            'Implemented features such as file uploads, contact forms, a booking system, dynamic data tables, content ordering, a live content editor, and a custom dashboard for streamlined management.',
            'Ensured the website was responsive and accessible across all devices.',
            'Optimised the website for search engines and improved its performance.',
        ],
        image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-aspect-video-1.svg',
    },
    {
        location: '212‑214 Fulford Road, YO10 4DX',
        period: 'October 2022 ‑ May 2023',
        company: "Sainsbury's Local",
        position: 'Retail Assistant',
        contributions: [
            'Strong time management skills by balancing work and study.',
            'Prioritised tasks effectively in the high‑pressure environment of a busy shop.',
            'Improved communication skills through regular customer interaction.',
            'Fulfilling online orders which requires attention to detail and ability to work quickly.',
            'Demonstrated ability to take pride in my work and ensure high standards through stocking shelves, facing up, and maintaining both cleanliness of the shop and it’s equipment e.g. the floor and Costa machine.',
        ],
    },
    {
        location: 'Snowhill Retail Park, WF1 2UZ',
        period: 'November 2021 ‑ April 2022',
        company: "McDonald's",
        position: 'Crew Member',
        contributions: [
            'Organising micro‑transactions in a fast‑paced environment.',
            'Ability to adapt to various roles within a dynamic environment',
            'Collaborating with colleagues in order to process orders efficiently.',
            'Quick learner, able to pick up new tasks on short notice.',
            'Demonstrated ability to work under pressure and maintain a positive attitude.',
            'Often received positive feedback from customers for my friendly and helpful approach.',
        ],
    },
]
