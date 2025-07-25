"use client";

import React, { useState } from "react";
import { List, X } from "lucide-react";
import { TableOfContents } from "@/components/table-of-contents";
import { PromoContent } from "@/components/promo-content";

export function MobileTableOfContents() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      >
        <List size={20} />
      </button>

      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />

          <div className="lg:hidden fixed bottom-3 left-0 right-0 bg-background border-t border-border rounded-lg z-50 max-h-[70vh] overflow-hidden w-[95%] mx-auto flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold">Table of Contents</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              <TableOfContents />
            </div>

            <PromoContent variant="mobile" />
          </div>
        </>
      )}
    </>
  );
}
