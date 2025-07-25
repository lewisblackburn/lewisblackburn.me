"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  tagCounts?: Record<string, number>;
}

export function TagFilter({ tags, selectedTag, tagCounts }: TagFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams();
    if (tag !== "overview") {
      params.set("tag", tag);
    }
    router.push(`${pathname}?${params.toString()}`);
    setIsOpen(false);
  };

  const DesktopTagFilter = () => (
    <div className="hidden md:flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`h-8 flex items-center px-1 pl-3 rounded-lg cursor-pointer border text-sm transition-colors ${
            selectedTag === tag
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border hover:bg-muted"
          }`}
        >
          <span>{tag}</span>
          {tagCounts?.[tag] && (
            <span
              className={`ml-2 text-xs border rounded-md h-6 min-w-6 font-medium flex items-center justify-center ${
                selectedTag === tag
                  ? "border-border/40 dark:border-primary-foreground bg-background text-primary"
                  : "border-border dark:border-border"
              }`}
            >
              {tagCounts[tag]}
            </span>
          )}
        </button>
      ))}
    </div>
  );

  const MobileTagFilter = () => (
    <>
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-between px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
        >
          <span className="capitalize text-sm font-medium">{selectedTag}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />

          <div className="md:hidden fixed bottom-3 left-0 right-0 bg-background border border-border rounded-lg z-50 max-h-[70vh] overflow-hidden w-[95%] mx-auto flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-sm">Select Category</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              <div className="space-y-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="w-full flex items-center justify-between font-medium cursor-pointer text-sm transition-colors"
                  >
                    <span
                      className={`w-full flex items-center justify-between font-medium cursor-pointer text-sm transition-colors ${
                        selectedTag === tag
                          ? "underline underline-offset-4 text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tag}
                    </span>
                    {tagCounts?.[tag] && (
                      <span className="flex-shrink-0 ml-2 border border-border rounded-md h-6 min-w-6 flex items-center justify-center">
                        {tagCounts[tag]}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );

  return (
    <>
      <DesktopTagFilter />
      <MobileTagFilter />
    </>
  );
}
