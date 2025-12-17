import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"

type Props = {
  title?: string
  subtitle?: string
  imageSrc?: string
  tags?: string[]
  href?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  imageContainerClassName?: string
  containerClassName?: string
  revealDelay?: number
}

// Server Component (no client hooks)
export default function ScrollCard({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=720&width=1280",
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
}: Props) {
  return (
    <Link href={href || "#"} className={cn("group block", containerClassName)}>
      <article className={cn("relative transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl")}>
        <RevealOnView
        delay={revealDelay}
        className="rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] lg:h-full transition-all duration-300 group-hover:border-white/30 group-hover:shadow-[0_20px_80px_-10px_rgba(0,0,0,0.8)]"
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <div className="relative overflow-hidden rounded-[1.35rem] bg-black lg:h-full transition-all duration-300 group-hover:bg-gray-900">
          {/* Image */}
          <div className={cn("relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full", imageContainerClassName)}>
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority={priority}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Enhanced vignette with hover effect */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/30 transition-opacity duration-300 group-hover:from-black/10 group-hover:to-black/20" />
            {/* Highlight overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Remove this entire top-left tags section */}
          {/* Top-left tags with enhanced styling */}
          <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="pointer-events-auto bg-black/50 text-white border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/70 group-hover:border-white/40 group-hover:scale-105"
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* Bottom content with enhanced styling */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Remove this entire tags section */}
            </div>
          </div>
        </div>
      </RevealOnView>
        </article>
      </Link>
  )
}