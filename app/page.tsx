"use client"

import Link from "next/link"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const articles = [
    {
      date: "May 21, 2026",
      title: "Vosk as a Local STT Provider",
      href: "/articles/vosk-stt-provider",
      takeaway: "built an offline, lightweight speech-to-text pipeline utilizing Kaldi stream processing to preserve edge memory footprints.",
    },
    {
      date: "May 19, 2026",
      title: "Aggregating Anthropic Streams in LangChain.js",
      href: "/articles/aggregating-anthropic-streams",
      takeaway: "resolved streaming frame type validation errors by standardizing mergeable base delta mappings in core.",
    },
    {
      date: "May 17, 2026",
      title: "Streaming Byte Cap to Prevent Resource Exhaustion",
      href: "/articles/streaming-byte-cap",
      takeaway: "implemented programmatic chunk-size boundaries on HTTPX streams to mitigate Node.js heap exhaustion vectors.",
    },
  ]

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-20">
      {/* HERO */}
      <section className="mb-20">
        <RevealOnView intensity="soft">
          <div className="space-y-4 text-base leading-relaxed text-neutral-400 font-mono">
            <p>
              ai engineering/oss
            </p>
          </div>
        </RevealOnView>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="mb-20 scroll-mt-24">
        <RevealOnView intensity="soft">
          <div className="space-y-8">
            {articles.map((article, i) => (
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
                    <span className="text-lg text-neutral-200 group-hover:text-white transition-colors decoration-neutral-800 group-hover:decoration-neutral-400 underline underline-offset-4 block">
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
                <span className="text-neutral-300">NousResearch/hermes-agent</span>
                <span className="text-neutral-500">stt optimizations & caching</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr] border-b border-white/5 pb-2 gap-1 sm:gap-6">
                <span className="text-neutral-300">langchain-ai/langchainjs</span>
                <span className="text-neutral-500">prompt stream type parsing core</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr] border-b border-white/5 pb-2 gap-1 sm:gap-6">
                <span className="text-neutral-300">modelcontextprotocol/servers</span>
                <span className="text-neutral-500">async streaming boundaries</span>
              </div>
            </div>
          </div>
        </RevealOnView>
      </section>
    </main>
  )
}