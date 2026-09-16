import { useTheme } from 'next-themes'
import { ReactNode } from 'react'
import { ShineBorder } from '../magicui/shine-border'

interface IconButtonProps {
    icon: ReactNode
    className?: string
    onClick?: () => void
    disabled?: boolean
    shine?: boolean
    label?: string
}

export function IconButton({
    icon,
    className = '',
    onClick,
    disabled = false,
    shine = true,
    label,
}: IconButtonProps) {
    const theme = useTheme()
    const Element = onClick ? 'button' : 'div'
    return (
        <div className="relative">
            <Element
                aria-label={onClick ? label : undefined}
                aria-hidden={onClick ? undefined : true}
                type={onClick ? "button" : undefined}
                className={`p-3 bg-accent rounded-lg transition-colors hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
                onClick={onClick}
                disabled={disabled}
            >
                {shine && (
                    <ShineBorder
                        shineColor={theme.theme === 'dark' ? 'white' : 'black'}
                    />
                )}
                <div className="w-4 h-4 flex items-center justify-center">
                    {icon}
                </div>
            </Element>
        </div>
    )
}
