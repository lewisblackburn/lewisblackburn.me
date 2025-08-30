export interface BucketListItem {
    title: string
    description: string
    completed: boolean
    images: string[]
    year?: number
}

export const bucketList: BucketListItem[] = [
    {
        title: 'Run a Half Marathon',
        description: 'I ran a tough half marathon in Settle, North Yorkshire.',
        completed: true,
        year: 2025,
        images: ['/images/bucket/marathon-1.jpg'],
    },
    {
        title: 'Land My First Tech Job',
        description:
            'Achieved a major milestone by starting my graduate software engineering role.',
        completed: true,
        year: 2025,
        images: ['/images/bucket/marathon-1.jpg'],
    },
    {
        title: 'See the Northern Lights',
        description:
            'Travel to a northern country and witness the aurora borealis.',
        completed: false,
        images: [
            '/images/bucket/northern-lights-1.jpg',
            '/images/bucket/northern-lights-2.jpg',
        ],
    },
    {
        title: 'Visit Japan During Cherry Blossom',
        description: 'Experience hanami in Japan during sakura season.',
        completed: false,
        images: [
            '/images/bucket/japan-cherry-1.jpg',
            '/images/bucket/japan-cherry-2.jpg',
        ],
    },
    {
        title: 'Skydive',
        description: 'Jump out of a plane and experience freefall.',
        completed: false,
        images: ['/images/bucket/skydive-1.jpg'],
    },
]
