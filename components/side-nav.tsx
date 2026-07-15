"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { User, FileText, Sparkles, Camera, Book, Archive, Compass, Music, Headphones, Mail, Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

type SectionItem = {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const sections: SectionItem[] = [
  { id: "tech", label: "tech", icon: Headphones },
  { id: "music", label: "music", icon: Music },
  { id: "articles", label: "articles", icon: FileText },
  { id: "poetry", label: "poetry", icon: Sparkles },
  { id: "photography", label: "photography", icon: Camera },
  { id: "bookshelf", label: "bookshelf", icon: Book },
  { id: "about-me", label: "about me", icon: User },
  { id: "archives", label: "archives", icon: Archive },
]

function SideNavContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeSection = searchParams.get("section") || "tech"
  const isHomepage = pathname === "/"

  const [isExpanded, setIsExpanded] = React.useState(false)
  const navRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const hoverTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const isTouchActive = React.useRef(false)

  React.useEffect(() => {
    const onTouchStart = () => { isTouchActive.current = true }
    const onTouchEnd = () => { setTimeout(() => { isTouchActive.current = false }, 500) }
    window.addEventListener("touchstart", onTouchStart)
    window.addEventListener("touchend", onTouchEnd)
    return () => {
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend", onTouchEnd)
    }
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch) return

      const targetElement = document.elementFromPoint(touch.clientX, touch.clientY)
      if (!targetElement) return

      const link = targetElement.closest("a[data-section-id]")
      if (link) {
        const sectionId = link.getAttribute("data-section-id")
        if (sectionId && sectionId !== activeSection) {
          e.preventDefault()
          router.push(`/?section=${sectionId}`, { scroll: true })
        }
      }
    }

    container.addEventListener("touchmove", handleTouchMove, { passive: false })
    return () => {
      container.removeEventListener("touchmove", handleTouchMove)
    }
  }, [activeSection, router])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    router.push(`/?section=${id}`, { scroll: true })
    setIsExpanded(false)
  }

  const handleSectionHover = (id: string) => {
    if (isTouchActive.current) return
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)
    hoverTimerRef.current = setTimeout(() => {
      if (id !== activeSection) {
        router.push(`/?section=${id}`, { scroll: false })
      }
    }, 300)
  }

  const cancelHover = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)
  }

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed left-0 top-1/2 -translate-y-1/2 z-40 flex items-center transition-all duration-300 ease-in-out",
        isExpanded ? "w-56" : "w-14"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => {
        if (!isExpanded) setIsExpanded(true)
      }}
    >
      {/* Container holding the navigation bar */}
      <div className="flex items-stretch bg-background/50 dark:bg-background/40 backdrop-blur-md rounded-r-2xl shadow-md w-full h-[460px] overflow-hidden transition-all duration-300 ease-in-out">
        
        {/* Navigation Content */}
        <div className="flex flex-col py-6 px-3 w-full justify-center items-center">
          {/* Links container */}
          <div ref={containerRef} className="space-y-2 flex flex-col justify-center items-center w-full">
            {sections.map((section) => {
              const Icon = section.icon
              const isActive = isHomepage && activeSection === section.id

              return (
                <a
                  key={section.id}
                  data-section-id={section.id}
                  href={`/?section=${section.id}`}
                  onClick={(e) => handleClick(e, section.id)}
                  onMouseEnter={() => handleSectionHover(section.id)}
                  onMouseLeave={cancelHover}
                  className={cn(
                    "flex items-center rounded-md font-mono text-sm transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-900/60 group/item",
                    isExpanded ? "px-3 py-2 justify-start w-full" : "p-2 justify-center w-10 h-10",
                    isActive 
                      ? "bg-neutral-100/50 dark:bg-neutral-900/40 text-neutral-900 dark:text-white"
                      : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-200"
                  )}
                >
                  <Icon className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200 group-hover/item:scale-110",
                    isActive ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-500"
                  )} />
                  <span className={cn(
                    "capitalize transition-all duration-300 whitespace-nowrap",
                    isExpanded ? "opacity-100 max-w-[150px] ml-3" : "opacity-0 max-w-0 overflow-hidden ml-0",
                    isActive ? "font-bold animate-rainbow" : "font-medium"
                  )}>
                    {section.label}
                  </span>
                </a>
              )
            })}
          </div>

          {/* Socials section (visible only when expanded on mobile) */}
          {isExpanded && (
            <div className="md:hidden flex items-center justify-center gap-4 pt-3.5 mt-2.5 border-t border-neutral-200/50 dark:border-neutral-800/50 w-full animate-fade-in">
              <a
                href="mailto:arjunshenoy23@gmail.com"
                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label="Email"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/neuralmanacle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/neuralmanacle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>

      </div>
    </nav>
  )
}

export default function SideNav() {
  return (
    <React.Suspense fallback={null}>
      <SideNavContent />
    </React.Suspense>
  )
}
