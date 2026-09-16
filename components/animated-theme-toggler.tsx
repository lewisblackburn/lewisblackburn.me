'use client'

import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { Button } from './ui/button'

type props = {
    className?: string
}

export const AnimatedThemeToggler = ({ className }: props) => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    // Ensure component is mounted before rendering
    useEffect(() => {
        setMounted(true)
    }, [])

    const changeTheme = async () => {
        if (!buttonRef.current) return

        const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

        if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setTheme(newTheme)
            return
        }

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
                aria-label="Toggle colour theme"
                disabled
            >
                <div className="h-[1.2rem] w-[1.2rem]" />
            </Button>
        )
    }

    return (
        <Button
            ref={buttonRef}
            aria-label={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={changeTheme}
            className={cn('relative cursor-pointer', className)}
            variant="outline"
            size="icon"
        >
            {resolvedTheme === 'dark' ? (
                <Sun aria-hidden="true" className="h-[1.2rem] w-[1.2rem] transition-all duration-200" />
            ) : (
                <Moon aria-hidden="true" className="h-[1.2rem] w-[1.2rem] transition-all duration-200" />
            )}
        </Button>
    )
}
