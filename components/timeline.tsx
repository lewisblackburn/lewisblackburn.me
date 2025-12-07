import { formatDate } from '@/lib/utils'
import { DocsBody } from 'fumadocs-ui/page'
import { Container } from './ui/container'
import { sideQuestsSource } from '@/source'

interface SideQuestData {
    title: string
    date: string
    location?: string
    body: any
}

interface SideQuestPage {
    url: string
    data: SideQuestData
}

export default function Timeline() {
    const allSideQuests = sideQuestsSource.getPages()

    return (
        <section className="bg-background relative py-12 lg:py-32">
            <Container>
                <div className="flex flex-col space-y-24">
                    {allSideQuests.map((quest) => {
                        const MDX = quest.data.body
                        const date = new Date(quest.data.date)
                        const formattedDate = formatDate(date)

                        return (
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                key={quest.url}
                            >
                                <time className="block text-sm font-medium text-muted-foreground">
                                    {formattedDate}
                                </time>
                                <div className="col-span-2">
                                    <h3 className="text-md font-medium tracking-wider">
                                        {quest.data.title}
                                    </h3>
                                    <h4 className="text-sm text-secondary-foreground/70 tracking-wider">
                                        {quest.data.location}
                                    </h4>
                                    <DocsBody className="text-muted-foreground mt-4">
                                        <MDX />
                                    </DocsBody>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
