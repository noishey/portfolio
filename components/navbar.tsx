"use client"

import * as React from "react"
import Link from "next/link"
import { Rss, Mail, Github, Coffee, Search, History, Linkedin } from "lucide-react"

import { cn } from "@/lib/utils"
import ThemeToggle from '@/components/theme-toggle'

import { useHoverFlip } from "@/hooks/use-sanskrit"

type NavItem = {
  label: string
  href: string
  external?: boolean
}

const navItems: NavItem[] = [
]

export default function Navbar({ className }: { className?: string }) {
  const { isSanskrit, hoverProps } = useHoverFlip(1000)

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
              className={cn(
                "group inline-flex items-center gap-3 tracking-tight text-neutral-900 dark:text-white",
                isSanskrit ? "font-sanskrit text-3xl" : "font-mono text-2xl font-semibold"
              )}
              aria-label="Home"
              {...hoverProps}
            >
              <span>{isSanskrit ? "न्यूरलमैनकल" : "neural manacle"}</span>
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
            href="mailto:arjunshenoy23@gmail.com"
            className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent border-neutral-300 hover:bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:text-white transition-colors"
            aria-label="Email"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </Link>

          <Link
            href="https://github.com/neuralmanacle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent border-neutral-300 hover:bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:text-white transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>

          <Link
            href="https://linkedin.com/in/neuralmanacle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent border-neutral-300 hover:bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:text-white transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Link>

          <Link
            href="https://bsky.app/profile/neuralmanacle.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent border-neutral-300 hover:bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:text-white transition-colors"
            aria-label="Bluesky"
            title="Bluesky"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 256 226" aria-hidden="true">
              <path d="M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686 11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068-9.138 32.654-42.436 40.983-72.057 35.942 51.775 8.812 64.946 38 36.501 67.187-54.021 55.433-77.644-13.908-83.696-31.676-1.11-3.257-1.63-4.78-1.637-3.485-.008-1.296-.527.228-1.637 3.485-6.052 17.768-29.675 87.11-83.696 31.676-28.445-29.187-15.274-58.375 36.5-67.187-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116 0-13.028 34.314-.727 55.491 15.172Z" />
            </svg>
          </Link>

          <Link
            href="https://razorpay.me/@arjunkshenoy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent border-neutral-300 hover:bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:text-white transition-colors"
            aria-label="Buy Me a Coffee"
            title="Buy Me a Coffee"
          >
            <Coffee className="h-4 w-4" />
          </Link>

          <Link
            href="/changes"
            className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent border-neutral-300 hover:bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:text-white transition-colors"
            aria-label="Changelog"
            title="Changelog"
          >
            <History className="h-4 w-4" />
          </Link>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent("toggle-search"))}
            className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent border-neutral-300 hover:bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:text-white transition-colors cursor-pointer"
            aria-label="Search"
            title="Search (Cmd+K)"
          >
            <Search className="h-4 w-4" />
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}