import { useId } from 'react'
import {
    RiCalendar2Fill,
    RiGatsbyLine,
    RiNextjsLine,
    RiReactjsLine,
    RiTimeFill,
} from '@remixicon/react'

import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export default function SortBySelect() {
    const id = useId()
    return (
        <div className="*:not-first:mt-2">
            <Select defaultValue="1">
                <SelectTrigger
                    id={id}
                    className="h-11 px-4 py-3 [&>span_svg]:text-muted-foreground/80 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
                >
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:flex [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0">
                    <SelectItem value="1">
                        <RiCalendar2Fill size={16} aria-hidden="true" />
                        <span className="truncate">Sort by date</span>
                    </SelectItem>
                    <SelectItem value="2">
                        <RiTimeFill size={16} aria-hidden="true" />
                        <span className="truncate">Sort by read time</span>
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
