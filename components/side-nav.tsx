"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { User, Book, Headphones, Package, Briefcase, Play, Wrench, History } from "lucide-react"
import { cn } from "@/lib/utils"

type SectionItem = {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

type SuperSection = {
  title?: string
  items: SectionItem[]
}

const superSections: SuperSection[] = [
  {
    items: [
      { id: "tech", label: "blog", icon: Headphones },
      { id: "projects", label: "projects", icon: Package },
      { id: "demos", label: "demos", icon: Play },
      { id: "setup", label: "setup", icon: Wrench },
      { id: "books", label: "reading", icon: Book },
      { id: "resume", label: "resume", icon: Briefcase },
      { id: "changelog", label: "changelog", icon: History },
    ]
  },
  {
    items: [
      { id: "about-me", label: "about me", icon: User },
    ]
  },
]

const sections = superSections.flatMap((s) => s.items)

function SideNavContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeSection = searchParams.get("section") || "about-me"
  const isHomepage = pathname === "/"

  const isExpanded = true
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
    router.push(id === "changelog" ? "/changes" : `/?section=${id}`, { scroll: true })
  }

  const handleSectionHover = (id: string) => {
    if (isTouchActive.current) return
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)
    hoverTimerRef.current = setTimeout(() => {
      const isChangelog = id === "changelog"
      const isActive = isChangelog
        ? pathname === "/changes"
        : isHomepage && activeSection === id

      if (!isActive) {
        router.push(id === "changelog" ? "/changes" : `/?section=${id}`, { scroll: false })
      }
    }, 300)
  }

  const cancelHover = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)
  }

  const isArticlePage = pathname.startsWith("/articles")

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-20 z-40 flex items-stretch transition-all duration-300 ease-in-out",
        isArticlePage && "hidden md:flex"
      )}
    >
      {/* Container holding the navigation bar */}
      <div className="flex items-stretch bg-background/50 dark:bg-background/40 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-700/80 shadow-md w-full overflow-hidden transition-colors duration-300 ease-in-out">
        
        {/* Navigation Content */}
        <div className="flex py-2 px-3 w-full justify-center items-center">
          {/* Links container */}
          <div ref={containerRef} className="flex flex-wrap justify-center items-center gap-1 w-full">
            {superSections.map((superSection, sIdx) => (
              <React.Fragment key={sIdx}>
                {superSection.title && (
                  <div className="text-[9px] uppercase font-mono font-bold tracking-wider text-neutral-400 dark:text-neutral-500 px-2 select-none">
                    {superSection.title}
                  </div>
                )}
                {superSection.items.map((section) => {
                  const Icon = section.icon
                  const isChangelog = section.id === "changelog"
                  const isActive = isChangelog
                    ? pathname === "/changes"
                    : isHomepage && activeSection === section.id

                  return (
                    <a
                      key={section.id}
                      data-section-id={section.id}
                      href={isChangelog ? "/changes" : `/?section=${section.id}`}
                      onClick={(e) => handleClick(e, section.id)}
                      onMouseEnter={() => handleSectionHover(section.id)}
                      onMouseLeave={cancelHover}
                      className={cn(
                        "flex items-center rounded-md font-mono text-sm transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-900/60 group/item",
                        "px-3 py-2 justify-start",
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
                        "opacity-100 ml-2",
                        isActive ? "font-bold animate-rainbow" : "font-medium"
                      )}>
                        {section.label}
                      </span>
                    </a>
                  )
                })}
              </React.Fragment>
            ))}
          </div>

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
