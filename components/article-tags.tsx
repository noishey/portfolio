"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { articles } from "@/lib/articles"

export default function ArticleTags() {
  const pathname = usePathname()
  const article = articles.find((a) => a.href === pathname)

  if (!article || !article.tags || article.tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 pt-6 font-mono text-xs">
      <span className="text-neutral-400 dark:text-neutral-500 mr-1 flex items-center">tags:</span>
      {article.tags.map((tag) => (
        <Link
          key={tag}
          href={`/?tag=${tag}`}
          className="px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:border-neutral-600 transition-colors"
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}
