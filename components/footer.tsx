import { RiLinkedinFill } from '@remixicon/react'
import React from 'react'

export default function Footer() {
    return (
        <section className="bg-background border-t">
            <div className="max-w-7xl mx-auto p-12">
                <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
                        <div className="flex items-center gap-2 lg:justify-start">
                            <h2 className="text-xl font-semibold">
                                Lewis Blackburn
                            </h2>
                        </div>
                        <p className="text-muted-foreground max-w-[70%] text-sm">
                            description
                        </p>
                        <ul className="text-muted-foreground flex items-center space-x-6">
                            <li className="hover:text-primary font-medium">
                                <a href="" aria-label="LinkedIn">
                                    <RiLinkedinFill className="size-5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
                        <div>
                            <h3 className="mb-4 font-bold">section</h3>
                            <ul className="text-muted-foreground space-y-3 text-sm">
                                <li className="hover:text-primary font-medium">
                                    <a href="">link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">
                        &copy; {new Date().getFullYear()} Your Company. All
                        rights reserved.
                    </p>
                    <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                        <li className="hover:text-primary">
                            <a href="">NOW PLAYING</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
