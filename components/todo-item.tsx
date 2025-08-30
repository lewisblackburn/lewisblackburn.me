import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'

interface TodoItemProps {
    title: string
    subtitle?: string
    description: string
    checked: boolean
}

export default function TodoItem({
    title,
    subtitle,
    description,
    checked,
}: TodoItemProps) {
    return (
        <div className="flex items-start gap-2 border-border border-b border-dashed last:border-0 pb-6">
            <Checkbox checked={checked} />
            <div className="grid grow gap-2">
                <Label>
                    {title}{' '}
                    <span className="text-muted-foreground text-xs leading-[inherit] font-normal">
                        {subtitle && '(' + subtitle + ')'}
                    </span>
                </Label>
                <p className="text-muted-foreground text-xs">{description}</p>
            </div>
        </div>
    )
}
