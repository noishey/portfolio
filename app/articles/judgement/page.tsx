"use client"

import Link from "next/link"
import RevealOnView from "@/components/reveal-on-view"
import ArticleTags from "@/components/article-tags"

export default function ArticlePage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-20">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <RevealOnView intensity="soft">
          <div className="space-y-6">
            <Link
              href="/"
              className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors font-mono"
            >
              ← Back
            </Link>

            <p className="text-sm font-mono text-neutral-500 dark:text-white/40">
              July 13, 2026
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white font-mono">
              All The Judgement is Inside You Baby.
            </h1>

            <p className="text-base text-neutral-500 dark:text-neutral-400 font-mono italic">
              Oh come on!! ft Chandler.
            </p>

            <div className="border-t border-neutral-200 dark:border-neutral-800 my-6" />

            <div className="space-y-6 text-neutral-700 dark:text-neutral-300 font-mono text-base leading-relaxed text-justify">
              <p>
                The people who you think is judging you is a voice inside your head.
              </p>
              <p>
                Your reaction to the judgement is a fear based response. Nobody is judging you. It is an illusion. If the fear dissolves, the universe understands it. For the fear to dissolve, the ego should go away. A rebirth should occur. These trance like states could be achieved not just through imbibing psychedelics but also through breathing techniques, music, dance or any other meditative activity. The point is to tune into that frequency and let it reflect in the 3D. All the negative energy in the universe shows as you aren't connected with yourself fully. It is hard. Tough. We are humans and rarely gods but we could be gods for sometime.
              </p>
            </div>

            <ArticleTags />

            <div className="pt-12 border-t border-neutral-200 dark:border-neutral-800">
              <Link
                href="/"
                className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors font-mono"
              >
                ← Back to Index
              </Link>
            </div>
          </div>
        </RevealOnView>
      </article>
    </main>
  )
}
