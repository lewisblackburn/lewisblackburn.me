'use client'

import { Moon, Sun } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

type props = {
    className?: string
}

export const AnimatedThemeToggler = ({ className }: props) => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    // Ensure component is mounted before rendering
    useEffect(() => {
        setMounted(true)
    }, [])

    const changeTheme = async () => {
        if (!buttonRef.current) return

        const newTheme = theme === 'dark' ? 'light' : 'dark'

        await document.startViewTransition(() => {
            flushSync(() => {
                setTheme(newTheme)
            })
        }).ready

        const { top, left, width, height } =
            buttonRef.current.getBoundingClientRect()
        const y = top + height / 2
        const x = left + width / 2

        const right = window.innerWidth - left
        const bottom = window.innerHeight - top
        const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom))

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRad}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 700,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)',
            }
        )
    }

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) {
        return (
            <Button
                className={cn('relative cursor-pointer', className)}
                variant="outline"
                size="icon"
            >
                <div className="h-[1.2rem] w-[1.2rem]" />
            </Button>
        )
    }

    return (
        <Button
            ref={buttonRef}
            onClick={changeTheme}
            className={cn('relative cursor-pointer', className)}
            variant="outline"
            size="icon"
        >
            {theme === 'dark' ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-200" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all duration-200" />
            )}
        </Button>
    )
}
