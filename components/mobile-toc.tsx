'use client'

import { TableOfContents } from '@/components/table-of-contents'
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { ListTree } from 'lucide-react'
import { Button } from './ui/button'

export function MobileTableOfContents() {
    return (
        <Drawer>
            <DrawerTrigger className="lg:hidden fixed bottom-6 right-6 z-50">
                <Button
                    className="border border-border text-xs hover:bg-secondary/90"
                    variant="secondary"
                    asChild
                >
                    <div>
                        <ListTree
                            className="opacity-60"
                            size={16}
                            aria-hidden="true"
                        />
                        Table of Contents
                    </div>
                </Button>
            </DrawerTrigger>

            <DrawerContent className="lg:hidden">
                <DrawerHeader>
                    <h3 className="font-semibold">Table of Contents</h3>
                </DrawerHeader>

                <DrawerBody>
                    <TableOfContents />
                </DrawerBody>

                {/* <DrawerFooter>
          <PromoContent variant="mobile" />
        </DrawerFooter> */}
            </DrawerContent>
        </Drawer>
    )
}
