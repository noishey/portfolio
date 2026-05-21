"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, Github, Twitter } from "lucide-react"

import { cn } from "@/lib/utils"

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
    "sticky top-0 z-50 w-full border-b border-white/5 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50",
    className
  )}
>
  <div className="mx-auto flex h-24 max-w-2xl items-center justify-between px-4">
    <div className="flex items-center gap-9">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-white"
        aria-label="Home"
      >
        <span>noishey</span>
      </Link>

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

    <div className="flex items-center gap-4">
      <Link
        href="mailto:tech.noishey@gmail.com"
        className="p-3 text-white/80 transition-colors hover:text-white"
        aria-label="Email"
      >
        <Mail className="size-6" />
      </Link>

      <Link
        href="https://github.com/noishey"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 text-white/40 transition-colors hover:text-white"
        aria-label="GitHub"
      >
        <Github className="size-6" />
      </Link>

      <Link
        href="https://x.com/butn0tshy"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 text-white/40 transition-colors hover:text-white"
        aria-label="X (Twitter)"
      >
        <Twitter className="size-6" />
      </Link>
    </div>
  </div>
</header>
  )
}