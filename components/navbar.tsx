"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Rss, Mail, Github, Coffee, Search, History, Linkedin } from "lucide-react"

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
      <div className="mx-auto flex min-h-[5rem] py-4 sm:h-24 max-w-2xl items-center justify-between px-4">
        <div className="flex flex-col gap-1.5 items-start">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href="/"
              className={cn(
                "group inline-flex items-center gap-2 sm:gap-3 tracking-tight text-neutral-900 dark:text-white",
                "font-mono text-xl sm:text-3xl font-semibold"
              )}
              aria-label="Home"
            >
              <Image
                src="/logo.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-cover"
                priority
              />
              <span>neural manacle</span>
            </Link>
            <Link
              href="/feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e3b50f] hover:text-[#e3b50f] transition-colors p-1"
              aria-label="RSS Feed"
            >
              <Rss className="h-4 w-4" />
            </Link>
          </div>
          <span className="pl-10 text-xs font-mono italic text-[#e3b50f]">
            in a synthetic dream ꩜
          </span>

          {/* Socials just below the text for mobile */}
          <div className="flex md:hidden items-center gap-3 mt-1 px-1">
            <Link
              href="mailto:arjunshenoy23@gmail.com"
              className="text-neutral-400 hover:text-[#e3b50f] dark:text-neutral-500 dark:hover:text-[#e3b50f] transition-colors"
              aria-label="Email"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/neuralmanacle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#e3b50f] dark:text-neutral-500 dark:hover:text-[#e3b50f] transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com/in/neuralmanacle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#e3b50f] dark:text-neutral-500 dark:hover:text-[#e3b50f] transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="https://x.com/neuralmanacle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#e3b50f] dark:text-neutral-500 dark:hover:text-[#e3b50f] transition-colors"
              aria-label="X"
              title="X"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </Link>
            <Link
              href="https://razorpay.me/@arjunkshenoy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#e3b50f] dark:text-neutral-500 dark:hover:text-[#e3b50f] transition-colors"
              aria-label="Buy Me a Coffee"
              title="Buy Me a Coffee"
            >
              <Coffee className="h-4 w-4" />
            </Link>
            <Link
              href="/changes"
              className="text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white transition-colors duration-300"
              aria-label="Changelog"
              title="Changelog"
            >
              <History className="h-4 w-4" />
            </Link>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("toggle-search"))}
              className="text-neutral-400 hover:text-[#e3b50f] dark:text-neutral-500 dark:hover:text-[#e3b50f] transition-colors cursor-pointer"
              aria-label="Search"
              title="Search (Cmd+K)"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="mailto:arjunshenoy23@gmail.com"
            className="hidden md:inline-flex items-center justify-center rounded border-none sm:border p-1.5 sm:px-2 sm:py-1 text-sm bg-transparent border-transparent sm:border-neutral-300 hover:bg-neutral-100 hover:text-[#e3b50f] text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:hover:text-[#e3b50f] dark:text-white transition-colors"
            aria-label="Email"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </Link>

          <Link
            href="https://github.com/neuralmanacle"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded border-none sm:border p-1.5 sm:px-2 sm:py-1 text-sm bg-transparent border-transparent sm:border-neutral-300 hover:bg-neutral-100 hover:text-[#e3b50f] text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:hover:text-[#e3b50f] dark:text-white transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>

          <Link
            href="https://linkedin.com/in/neuralmanacle"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded border-none sm:border p-1.5 sm:px-2 sm:py-1 text-sm bg-transparent border-transparent sm:border-neutral-300 hover:bg-neutral-100 hover:text-[#e3b50f] text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:hover:text-[#e3b50f] dark:text-white transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Link>

          <Link
            href="https://x.com/neuralmanacle"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded border-none sm:border p-1.5 sm:px-2 sm:py-1 text-sm bg-transparent border-transparent sm:border-neutral-300 hover:bg-neutral-100 hover:text-[#e3b50f] text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:hover:text-[#e3b50f] dark:text-white transition-colors duration-300"
            aria-label="X"
            title="X"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
            </svg>
          </Link>

          <Link
            href="https://razorpay.me/@arjunkshenoy"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded border-none sm:border p-1.5 sm:px-2 sm:py-1 text-sm bg-transparent border-transparent sm:border-neutral-300 hover:bg-neutral-100 hover:text-[#e3b50f] text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:hover:text-[#e3b50f] dark:text-white transition-colors"
            aria-label="Buy Me a Coffee"
            title="Buy Me a Coffee"
          >
            <Coffee className="h-4 w-4" />
          </Link>

          <Link
            href="/changes"
            className="hidden md:inline-flex items-center justify-center rounded border-none sm:border p-1.5 sm:px-2 sm:py-1 text-sm bg-transparent border-transparent sm:border-neutral-300 hover:bg-neutral-100 hover:text-[#e3b50f] text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:hover:text-[#e3b50f] dark:text-white transition-colors"
            aria-label="Changelog"
            title="Changelog"
          >
            <History className="h-4 w-4" />
          </Link>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent("toggle-search"))}
            className="hidden md:inline-flex items-center justify-center rounded border-none sm:border p-1.5 sm:px-2 sm:py-1 text-sm bg-transparent border-transparent sm:border-neutral-300 hover:bg-neutral-100 hover:text-[#e3b50f] text-neutral-700 dark:border-neutral-700 dark:hover:bg-white/3 dark:hover:text-[#e3b50f] dark:text-white transition-colors cursor-pointer"
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