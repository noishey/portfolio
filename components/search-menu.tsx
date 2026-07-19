"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { FileText, Sparkles } from "lucide-react"
import { useSupabaseData } from "@/components/supabase-provider"

export default function SearchMenu() {
  const { articles } = useSupabaseData()
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    const toggleOpen = () => setOpen((open) => !open)

    document.addEventListener("keydown", down)
    window.addEventListener("toggle-search", toggleOpen)

    return () => {
      document.removeEventListener("keydown", down)
      window.removeEventListener("toggle-search", toggleOpen)
    }
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a keyword to search articles..." />
      <CommandList className="font-mono text-xs">
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Articles">
          {articles.map((article) => (
            <CommandItem
              key={article.href}
              value={`${article.title} ${article.takeaway} ${article.tags?.join(" ")}`}
              onSelect={() => {
                runCommand(() => router.push(article.href))
              }}
              className="flex items-start gap-3 py-3 px-4 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded"
            >
              <FileText className="size-4 mt-0.5 text-neutral-400 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-neutral-950 dark:text-neutral-50 text-sm">
                  {article.title}
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1">
                  {article.takeaway}
                </span>
              </div>
              {article.tags && article.tags.length > 0 && (
                <span className="ml-auto text-[10px] text-neutral-400 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-1.5 py-0.5 rounded uppercase shrink-0 font-medium">
                  {article.tags[0]}
                </span>
              )}
            </CommandItem>
          ))}
        </CommandGroup>
        
        <CommandSeparator />
        
        <CommandGroup heading="Navigation">
          <CommandItem
            value="home index portfolio homepage"
            onSelect={() => {
              runCommand(() => router.push("/"))
            }}
            className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded"
          >
            <Sparkles className="size-4 text-neutral-400 shrink-0" />
            <span className="font-semibold text-neutral-950 dark:text-neutral-50">
              index
            </span>
          </CommandItem>
          <CommandItem
            value="changes changelog releases updates"
            onSelect={() => {
              runCommand(() => router.push("/changes"))
            }}
            className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded"
          >
            <Sparkles className="size-4 text-neutral-400 shrink-0" />
            <span className="font-semibold text-neutral-950 dark:text-neutral-50">
              changes (site changelog)
            </span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
