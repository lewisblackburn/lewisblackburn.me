import Header from '@/components/header'
import { BlurFade } from '@/components/magicui/blur-fade'
import Timeline from '@/components/timeline'
import { Swords } from 'lucide-react'

export default async function SideQuestsPage() {
    return (
        <div className="bg-background relative">
            <Header
                icon={<Swords />}
                title="Side Quests"
                subtitle="New skills and adventures I have unlocked"
            />

            <BlurFade
                delay={0.1 * 4}
                inView
                direction="up"
                className="border-t"
            >
                <Timeline />
            </BlurFade>
        </div>
    )
}
