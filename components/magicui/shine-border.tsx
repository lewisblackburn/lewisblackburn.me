'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Width of the border in pixels
     * @default 1
     */
    borderWidth?: number
    /**
     * Duration of the animation in seconds
     * @default 14
     */
    duration?: number
    /**
     * Color of the border, can be a single color or an array of colors
     * @default "#000000"
     */
    shineColor?: string | string[]
}

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
    borderWidth = 1,
    duration = 14,
    shineColor = '#000000',
    className,
    style,
    ...props
}: ShineBorderProps) {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Don't render the component until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <div
                className={cn(
                    'pointer-events-none absolute inset-0 size-full rounded-[inherit]',
                    className
                )}
                style={{
                    padding: `${borderWidth}px`,
                    ...style,
                }}
                {...props}
            />
        )
    }

    return (
        <div
            style={
                {
                    '--border-width': `${borderWidth}px`,
                    '--duration': `${duration}s`,
                    backgroundImage: `radial-gradient(transparent,transparent, ${
                        Array.isArray(shineColor)
                            ? shineColor.join(',')
                            : shineColor
                    },transparent,transparent)`,
                    backgroundSize: '300% 300%',
                    mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: 'var(--border-width)',
                    ...style,
                } as React.CSSProperties
            }
            className={cn(
                'pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] motion-safe:animate-shine',
                className
            )}
            {...props}
        />
    )
}
