'use client'
import { fetcher } from '@/lib/fetcher'
import { ApiResponseSuccess, GetLastFMUserResponse } from '@/types/api'
import { Headphones, Info, LucideIcon, Music, User } from 'lucide-react'
import Link from 'next/link'
import useSWR from 'swr'
import { NumberTicker } from './magicui/number-ticker'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Container } from './ui/container'

interface StatisticCardProps {
    title: string
    number?: number | string
    description: string
    icon?: LucideIcon
}

function StatisticCard({
    title,
    number = 0,
    description,
    icon: Icon,
}: StatisticCardProps) {
    const numberAsInt = typeof number === 'string' ? parseInt(number) : number
    return (
        <Link
            href="https://www.last.fm/user/lewisblackburn"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full"
        >
            <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        {title}
                    </CardTitle>
                    {Icon ? (
                        <Icon className="h-4 w-4 text-muted-foreground" />
                    ) : (
                        <Info className="h-4 w-4 text-muted-foreground" />
                    )}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                    <NumberTicker
                        value={numberAsInt}
                        className="text-2xl font-bold"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                        {description}
                    </p>
                </CardContent>
            </Card>
        </Link>
    )
}

export default function StatisticCards() {
    const { data: lastfm } = useSWR<ApiResponseSuccess<GetLastFMUserResponse>>(
        '/api/lastfm/user',
        fetcher
    )

    return (
        <section className="bg-background relative py-12">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <StatisticCard
                        title="Total Scrobbles"
                        number={lastfm?.data.user.playcount}
                        description="The amount of tracks I've listened to."
                        icon={Headphones}
                    />
                    <StatisticCard
                        title="Total Tracks"
                        number={lastfm?.data.user.track_count}
                        description="The amount of different tracks I've listened to."
                        icon={Music}
                    />
                    <StatisticCard
                        title="Total Artists"
                        number={lastfm?.data.user.artist_count}
                        description="The amount of different artists I've listened to."
                        icon={User}
                    />
                </div>
            </Container>
        </section>
    )
}
