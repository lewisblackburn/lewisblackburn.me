export interface BucketListItem {
    title: string
    description: string
    completed: boolean
    year?: number
}

export const bucketList: BucketListItem[] = [
    {
        title: 'Run a Half Marathon',
        description: 'I ran a tough half marathon in Settle, North Yorkshire.',
        completed: true,
        year: 2025,
    },
    {
        title: 'Land My First Tech Job',
        description:
            'Achieved a major milestone by starting my graduate software engineering role.',
        completed: true,
        year: 2025,
    },
    {
        title: 'See the Northern Lights',
        description:
            'Travel to a northern country and witness the aurora borealis.',
        completed: false,
    },
    {
        title: 'Visit Japan During Cherry Blossom',
        description: 'I caught the end of the season in Tokyo in April.',
        completed: true,
        year: 2026,
    },
    {
        title: 'Run a Marathon',
        description: 'I have booked a place in the Manchester 2026 marathon.',
        completed: false,
    },
    {
        title: 'Skydive',
        description: 'Jump out of a plane and experience freefall.',
        completed: false,
    },
]
