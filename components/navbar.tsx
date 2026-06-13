"use client"

import * as React from "react"
import Link from "next/link"
import { Rss, Mail, Github, Coffee } from "lucide-react"

import { cn } from "@/lib/utils"
import ThemeToggle from '@/components/theme-toggle'

type NavItem = {
  label: string
  href: string
  external?: boolean
}

const navItems: NavItem[] = [
]

export default function Navbar({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-20 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="mx-auto flex h-24 max-w-2xl items-center justify-between px-4">
        <div className="flex items-center gap-9">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white"
              aria-label="Home"
            >
              <span>noishey</span>
            </Link>
            <Link
              href="/feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f26522] hover:text-[#ff7f41] transition-colors p-1"
              aria-label="RSS Feed"
            >
              <Rss className="h-4 w-4" />
            </Link>
          </div>

          <nav className="flex items-center gap-2" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-3 text-base text-neutral-500 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 dark:text-black/50 dark:hover:text-white dark:focus-visible:ring-white/20"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="mailto:tech.noishey@gmail.com"
            className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent border-neutral-300 hover:bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:text-white transition-colors"
            aria-label="Email"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </Link>

          <Link
            href="https://github.com/noishey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent border-neutral-300 hover:bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:text-white transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>

          <Link
            href="https://x.com/butn0tshy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent border-neutral-300 hover:bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:text-white transition-colors"
            aria-label="X (Twitter)"
            title="X (Twitter)"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>

          <Link
            href="https://buymeacoffee.com/noishey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent border-neutral-300 hover:bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:text-white transition-colors"
            aria-label="Buy Me a Coffee"
            title="Buy Me a Coffee"
          >
            <Coffee className="h-4 w-4" />
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}