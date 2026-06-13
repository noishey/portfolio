"use client"

import Link from "next/link"
import RevealOnView from "@/components/reveal-on-view"
import { articles } from "@/lib/articles"

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-20">
      {/* HERO */}
      <section className="mb-20">
        <RevealOnView intensity="soft">
          <div className="space-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono">
            <p>
              ai engineering/oss/web-apps
            </p>
          </div>
        </RevealOnView>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="mb-20 scroll-mt-24">
        <RevealOnView intensity="soft">
          {/* TAB BAR */}
          <div className="flex border-b border-neutral-200 dark:border-neutral-800 mb-8 font-mono text-sm">
            <button className="text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-2 -mb-px font-medium">
              open-source
            </button>
          </div>

          <div className="space-y-8">
            {articles
              .filter((article) => article.tags?.includes("open-source"))
              .map((article, i) => (
                <Link
                  key={i}
                  href={article.href}
                  className="group block"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                    <span className="text-sm font-mono text-neutral-600 shrink-0 min-w-[110px]">
                      {article.date}
                    </span>
                    <div className="space-y-1.5">
                      <span className="text-lg text-neutral-900 group-hover:text-black transition-colors decoration-neutral-300 group-hover:decoration-neutral-700 underline underline-offset-4 block dark:text-neutral-200 dark:group-hover:text-white dark:decoration-neutral-800 dark:group-hover:decoration-neutral-400">
                        {article.title}
                      </span>
                      <span className="text-sm text-neutral-500 block font-mono">
                        {article.takeaway}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </RevealOnView>
      </section>

      {/* OSS CONTRIBUTIONS */}
      <section className="mb-20">
        <RevealOnView intensity="soft">
          <div className="space-y-6">
            <h2 className="text-sm font-bold tracking-wider text-neutral-600 uppercase font-mono">
              active contributions
            </h2>
            <div className="grid gap-4 font-mono text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr] border-b border-white/5 pb-2 gap-1 sm:gap-6">
                <span className="text-neutral-700 dark:text-neutral-300">langchain-ai/langchainjs</span>
                <span className="text-neutral-500">prompt stream type parsing core</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr] border-b border-white/5 pb-2 gap-1 sm:gap-6">
                <span className="text-neutral-700 dark:text-neutral-300">rohitg00/agentmemory</span>
                <span className="text-neutral-500">multi-agent context isolation boundaries</span>
              </div>
            </div>
          </div>
        </RevealOnView>
      </section>
    </main>
  )
}