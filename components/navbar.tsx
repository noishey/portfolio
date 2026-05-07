"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type NavItem = {
  label: string
  href: string
  external?: boolean
}

const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-white"
          aria-label="Home"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15 transition-colors group-hover:bg-white/15">
            <Image
              src="/images/avatar.png"
              alt="Noishey avatar"
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden sm:inline">noishey</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" className="text-white/80 hover:text-white">
            <Link href="mailto:noishey@gmail.com">Email</Link>
          </Button>
          <Button asChild className="bg-white text-black hover:bg-white/90">
            <Link href="#contact">
              Let’s talk
              <ArrowUpRight className="ml-1" />
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-white/10 bg-neutral-950 text-white">
              <div className="mt-8 grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-4 grid gap-2 px-1">
                  <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                    <Link href="mailto:noishey@gmail.com">Email</Link>
                  </Button>
                  <Button asChild className="bg-white text-black hover:bg-white/90">
                    <Link href="#contact">Let’s talk</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

