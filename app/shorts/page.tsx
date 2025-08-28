import Header from '@/components/header'
import { NotebookText } from 'lucide-react'

export default async function ShortsPage() {
    return (
        <div className="bg-background relative">
            <Header
                icon={<NotebookText />}
                title="Short Notes"
                subtitle="My personal notes that's not long enough to be a blog post"
            />
        </div>
    )
}
