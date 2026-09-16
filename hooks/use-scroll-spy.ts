'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollSpy(offset = 128) {
    const [activeSection, setActiveSection] = useState(0)
    const entryRefs = useRef<(HTMLElement | null)[]>([])

    useEffect(() => {
        let frame: number | null = null

        const updateActiveSection = () => {
            frame = null
            // Follow the last heading above the reading line, including the
            // gaps between entries, so the highlight is stable in both directions.
            const readingLine = Math.min(offset, window.innerHeight / 3)
            let activeIndex = 0

            entryRefs.current.forEach((entry, index) => {
                if (entry && entry.getBoundingClientRect().top <= readingLine) {
                    activeIndex = index
                }
            })

            setActiveSection(activeIndex)
        }

        const scheduleUpdate = () => {
            if (frame === null) {
                frame = window.requestAnimationFrame(updateActiveSection)
            }
        }

        updateActiveSection()
        window.addEventListener('scroll', scheduleUpdate, { passive: true })
        window.addEventListener('resize', scheduleUpdate)

        const observer = new ResizeObserver(scheduleUpdate)
        entryRefs.current.forEach((entry) => {
            if (entry) observer.observe(entry)
        })

        return () => {
            window.removeEventListener('scroll', scheduleUpdate)
            window.removeEventListener('resize', scheduleUpdate)
            observer.disconnect()
            if (frame !== null) window.cancelAnimationFrame(frame)
        }
    }, [offset])


    return { activeSection, setActiveSection, entryRefs }
}
