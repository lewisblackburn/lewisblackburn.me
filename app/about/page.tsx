import Header from '@/components/header'
import { UserIcon } from 'lucide-react'

export default async function AboutPage() {
    return (
        <div className="bg-background relative">
            <Header
                icon={<UserIcon />}
                title="About Me"
                subtitle="A story of growth and discovery"
            />
        </div>
    )
}
