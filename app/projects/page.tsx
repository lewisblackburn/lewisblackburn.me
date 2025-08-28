import Header from '@/components/header'
import { Folder } from 'lucide-react'

export default async function ProjectsPage() {
    return (
        <div className="bg-background relative">
            <Header
                icon={<Folder />}
                title="Projects"
                subtitle="Showcase of my projects that I'm proud of."
            />
        </div>
    )
}
