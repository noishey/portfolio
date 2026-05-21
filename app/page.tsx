"use client"

import Link from "next/link"
import { PenTool } from "lucide-react"
import Image from "next/image"

import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const articles = [
    {
      date: "May 21, 2026",
      title: "Vosk as a Local STT Provider",
      href: "/articles/vosk-stt-provider",
    },
    {
      date: "May 19, 2026",
      title: "Aggregating Anthropic Streams in LangChain.js",
      href: "/articles/aggregating-anthropic-streams",
    },
    {
      date: "May 17, 2026",
      title: "Streaming Byte Cap to Prevent Resource Exhaustion",
      href: "/articles/streaming-byte-cap",
    },
  ]

  return (
    // 🛠️ Changed max-w-3xl to max-w-2xl, and px-6 to px-4 to match the navbar boundaries
    <main className="mx-auto w-full max-w-2xl px-4 py-20">
      {/* HERO */}
      <section className="mb-20">
        <RevealOnView intensity="soft">
          <div className="space-y-4 text-lg leading-relaxed text-white/80">
            <p>
              ai engineering.
            </p>
          </div>
        </RevealOnView>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="mb-20 scroll-mt-24">
        <RevealOnView intensity="soft">
          <div className="space-y-6">
            {articles.map((article, i) => (
              <Link
                key={i}
                href={article.href}
                className="group block"
              >
                {/* 🛠️ Replaced sm:gap-4 with gap-6 or gap-8 to cleanly separate date and title */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <span className="text-sm font-mono text-white/30 shrink-0 min-w-[110px]">
                    {article.date}
                  </span>
                  <span className="text-lg text-white/80 group-hover:text-white transition-colors decoration-white/20 underline-offset-4 group-hover:underline">
                    {article.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </RevealOnView>
      </section>
    </main>
  )
}