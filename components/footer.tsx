"use client"

import * as React from "react"
import Link from "next/link"
import { articles } from "@/lib/articles"

export default function Footer() {
  const allTags = React.useMemo(() => {
    const tagsSet = new Set<string>()
    articles.forEach((article) => {
      article.tags?.forEach((tag) => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  }, [])

  return (
    <footer className="mx-auto w-full max-w-2xl px-4 pb-20 border-t border-neutral-100 dark:border-neutral-900 pt-8 font-mono text-xs text-neutral-500">
      <div className="space-y-6">
        <div>
          <span className="block font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-3">
            Tags / Taxonomy
          </span>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              const count = articles.filter((a) => a.tags?.includes(tag)).length
              return (
                <Link
                  key={tag}
                  href={`/?tag=${tag}`}
                  className="px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:border-neutral-600 transition-colors flex items-center gap-1.5"
                >
                  <span>{tag}</span>
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500">
                    {count}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
        
        <div className="flex justify-between items-center text-[10px] text-neutral-400 dark:text-neutral-600 pt-4 border-t border-neutral-100/50 dark:border-neutral-900/50">
          <span>&copy; {new Date().getFullYear()} noishey</span>
          <Link href="/changes" className="hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors">
            site changelog
          </Link>
        </div>
      </div>
    </footer>
  )
}
