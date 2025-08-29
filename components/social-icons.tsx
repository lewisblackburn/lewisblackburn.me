import { siteConfig } from '@/lib/site'
import {
    RiGithubLine,
    RiLinkedinLine,
    RiMailLine,
    RiTwitterLine,
} from '@remixicon/react'
import Link from 'next/link'
import React from 'react'

interface SocialIconsProps {
    className?: string
    iconClassName?: string
}

export function SocialIcons({
    className,
    iconClassName = 'size-4',
}: SocialIconsProps) {
    const iconMap: Record<string, React.ReactNode> = {
        mail: <RiMailLine className={iconClassName} />,
        linkedin: <RiLinkedinLine className={iconClassName} />,
        github: <RiGithubLine className={iconClassName} />,
        twitter: <RiTwitterLine className={iconClassName} />,
    }

    return (
        <ul
            className={
                (className ?? '') +
                ' text-muted-foreground flex items-center space-x-4 mt-2'
            }
        >
            {siteConfig.socials?.map((social) => (
                <li
                    key={social.name}
                    className="hover:text-primary font-medium text-muted-foreground/50"
                >
                    <Link href={social.href} aria-label={social.name}>
                        {iconMap[social.icon]}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
