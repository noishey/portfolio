"use client"

import * as React from "react"
import Link from "next/link"
import { Rss } from "lucide-react"

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
        "sticky top-0 z-50 w-full bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50",
        className
      )}
    >
      <div className="mx-auto flex h-24 max-w-2xl items-center justify-between px-4">
        <div className="flex items-center gap-9">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-white"
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
                className="rounded-md px-4 py-3 text-base text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6 text-sm font-mono">
          <Link
            href="mailto:tech.noishey@gmail.com"
            className="text-neutral-500 hover:text-neutral-200 transition-colors underline underline-offset-4 decoration-neutral-800 hover:decoration-neutral-400"
            aria-label="Email"
          >
            email
          </Link>

          <Link
            href="https://github.com/noishey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-200 transition-colors underline underline-offset-4 decoration-neutral-800 hover:decoration-neutral-400"
            aria-label="GitHub"
          >
            github
          </Link>

          <Link
            href="https://x.com/butn0tshy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-200 transition-colors underline underline-offset-4 decoration-neutral-800 hover:decoration-neutral-400"
            aria-label="X (Twitter)"
          >
            x
          </Link>

          <Link
            href="https://buymeacoffee.com/noishey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-200 transition-colors underline underline-offset-4 decoration-neutral-800 hover:decoration-neutral-400"
            aria-label="Buy Me a Coffee"
          >
            coffee
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}