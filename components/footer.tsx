"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-4 pb-20 border-t border-neutral-100 dark:border-neutral-900 pt-8 font-mono text-xs text-neutral-500">
      <div className="space-y-6">
        <div className="flex justify-between items-center text-xs text-neutral-400 dark:text-neutral-600 pt-4 border-t border-neutral-100/50 dark:border-neutral-900/50">
          <span className="inline-flex items-center gap-1.5 animate-rainbow">
            <span>&copy; {new Date().getFullYear()}</span>
            <span
              className="font-mono text-xs font-semibold"
            >
              neural manacle
            </span>
          </span>
          <Link href="/changes" className="transition-colors animate-rainbow">
            site changelog
          </Link>
        </div>
      </div>
    </footer>
  )
}
