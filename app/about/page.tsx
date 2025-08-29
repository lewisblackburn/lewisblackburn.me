import Experience from '@/components/experience'
import Header from '@/components/header'
import { BlurFade } from '@/components/magicui/blur-fade'
import { UserIcon } from 'lucide-react'

export default async function AboutPage() {
    return (
        <div className="bg-background relative">
            <Header
                icon={<UserIcon />}
                title="About Me"
                subtitle="A story of growth and discovery"
            />

            {/* <BlurFade delay={0.1 * 4} inView direction="up">
                <AboutMe />
            </BlurFade> */}

            <BlurFade delay={0.1 * 5} inView direction="up">
                <Experience />
            </BlurFade>
        </div>
    )
}
