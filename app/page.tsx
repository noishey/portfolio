"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import RevealOnView from "@/components/reveal-on-view"
import { articles } from "@/lib/articles"
import { cn } from "@/lib/utils"

function PortfolioContent() {
  const searchParams = useSearchParams()
  const urlTag = searchParams.get("tag")

  const [activeTab, setActiveTab] = React.useState<"about-me" | "archives" | "audio-tech" | "tech-philosophy">("audio-tech")

  // If a tag is active in the URL, show the articles view filtered by that tag
  const displayView = urlTag ? "articles" : activeTab

  const filteredArticles = React.useMemo(() => {
    if (urlTag) {
      return articles.filter((article) => article.tags?.includes(urlTag))
    }
    if (activeTab === "archives") {
      return articles.filter((article) => article.tags?.includes("archives"))
    }
    if (activeTab === "audio-tech") {
      return articles.filter((article) => article.tags?.includes("audio-tech"))
    }
    if (activeTab === "tech-philosophy") {
      return articles.filter((article) => article.tags?.includes("philosophy"))
    }
    return []
  }, [activeTab, urlTag])

  return (
    <RevealOnView intensity="soft">
      <div className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono mb-8 italic">
        Learning, Blogging & Building towards AI in Audio, Speech and Music | Guitarist, Vocalist & Music Production Interest
      </div>
      {/* TAB BAR */}
      <div className="flex border-b border-neutral-200 dark:border-neutral-800 mb-8 font-mono text-sm">
        {urlTag ? (
          <div className="flex items-center gap-2 pb-2 -mb-px">
            <span className="text-neutral-500">tag:</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-medium border-b-2 border-neutral-900 dark:border-neutral-100 pb-2 -mb-px">
              {urlTag}
            </span>
            <Link href="/" className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 ml-2">
              (clear)
            </Link>
          </div>
        ) : (
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("audio-tech")}
              className={cn(
                "pb-2 -mb-px font-medium border-b-2 transition-all cursor-pointer",
                activeTab === "audio-tech"
                  ? "text-neutral-900 dark:text-neutral-100 border-neutral-900 dark:border-neutral-100"
                  : "text-neutral-400 border-transparent hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              audio tech
            </button>
            <button
              onClick={() => setActiveTab("tech-philosophy")}
              className={cn(
                "pb-2 -mb-px font-medium border-b-2 transition-all cursor-pointer",
                activeTab === "tech-philosophy"
                  ? "text-neutral-900 dark:text-neutral-100 border-neutral-900 dark:border-neutral-100"
                  : "text-neutral-400 border-transparent hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              tech philosophy
            </button>
            <button
              onClick={() => setActiveTab("about-me")}
              className={cn(
                "pb-2 -mb-px font-medium border-b-2 transition-all cursor-pointer",
                activeTab === "about-me"
                  ? "text-neutral-900 dark:text-neutral-100 border-neutral-900 dark:border-neutral-100"
                  : "text-neutral-400 border-transparent hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              about me
            </button>
            <button
              onClick={() => setActiveTab("archives")}
              className={cn(
                "pb-2 -mb-px font-medium border-b-2 transition-all cursor-pointer",
                activeTab === "archives"
                  ? "text-neutral-900 dark:text-neutral-100 border-neutral-900 dark:border-neutral-100"
                  : "text-neutral-400 border-transparent hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              (archives)
            </button>
          </div>
        )}
      </div>

      {/* CONTENT */}
      {displayView === "about-me" ? (
        <div className="space-y-12">
          {/* HERO / BIO */}
          <section className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 self-center md:self-start">
              <Image
                src="/arjun.jpg"
                alt="Arjun"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, 160px"
                priority
              />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono text-justify flex-1">
              <p>Namaste 🙏</p>
              <p>I&apos;m Arjun, 26 (he/him).</p> 
              <p>Currently in <a href="https://en.wikipedia.org/wiki/Kochi" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">Kochi</a>, India.</p>
              <p>I&apos;m a morning bird and a strong reader.</p>
              <p>I&apos;m a <a href="https://en.wikipedia.org/wiki/First_principle" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">first principles thinker</a>. I want to <a href="https://nav.al/sell" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">sell the truth</a> in the market. My engineering motto is to use my reasoning and technical skills for the advancement of human species through innovation and problem solving. By contributing to the economy, I&apos;m actively <a href="https://www.youtube.com/watch?v=M-ZH3psUbfU" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">growing the economic pie</a> which cures scarcity mindset. Mathematics has all the answers about nature to a larger extent. My interest in technology lies in the intersection of web, deep learning, agentic engineering and speech/audio.</p>
              <p>Skipping steps in learning and understanding would result in debt and I&apos;m happily paying all my technical debts :&#41;</p>
              <p>My philosophical anchor in life is the <a href="https://en.wikipedia.org/wiki/Yoga_Sutras_of_Patanjali" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">Path of Yoga</a>.</p>
              <p>I stay in the surface web by saying no to piracy. Permanently away from social media for the love of long-form content.</p>
            </div>
          </section>

          {/* QUOTES THAT I LIVE BY */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
              quotes that i live by
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono text-justify">
              <p className="italic">
                &quot;Without music, life would be a mistake&quot; &mdash; <a href="https://en.wikipedia.org/wiki/Friedrich_Nietzsche" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">Nietzsche</a>
              </p>
              <p className="italic">
                &quot;If you want to find the secrets of the universe, think in terms of energy, frequency and vibration&quot; &mdash; <a href="https://en.wikipedia.org/wiki/Nikola_Tesla" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">Tesla</a>
              </p>
            </div>
          </section>

          {/* FORMAL EDUCATION */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
              formal education
            </h2>
            <div className="space-y-2 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2 gap-1">
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100 block">
                    Computer Science and Engineering
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 block mt-1">
                    <a href="https://en.wikipedia.org/wiki/APJ_Abdul_Kalam_Technological_University" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">
                      APJ Abdul Kalam Technological University
                    </a>
                  </span>
                </div>
                <div className="flex sm:flex-col sm:items-end text-sm text-neutral-500 dark:text-neutral-400 gap-2 sm:gap-0 shrink-0">
                  <span>2018 &mdash; 2022</span>
                  <span>7.95 CGPA</span>
                </div>
              </div>
            </div>
          </section>

          {/* NATURAL LANGUAGE */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
              natural language
            </h2>
            <div className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono">
              <div className="flex justify-between max-w-xs border-b border-neutral-200 dark:border-neutral-800 pb-1">
                <span>English</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold">8/10 (<a href="https://drive.google.com/file/d/1LEPz41yJ3vUFL_huUh73JZIY93YNpuaF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded-sm hover:bg-blue-100 dark:hover:bg-blue-950/70 transition-colors">IELTS</a>)</span>
              </div>
            </div>
          </section>

          {/* PROGRAMMING LANGUAGE */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
              programming language
            </h2>
            <div className="space-y-2 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono max-w-xs">
              <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-1">
                <span>Python</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold">3/10</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-1">
                <span>TypeScript</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold">2/10</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-1">
                <span>C++</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold">2/10</span>
              </div>
            </div>
          </section>

          {/* READING STACK */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
              my reading stack
            </h2>
            <div className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono">
              <p>
                &bull; <a href="https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">Sapiens: A Brief History of Humankind</a>
              </p>
            </div>
          </section>
        </div>
      ) : (
        /* ARTICLES LIST */
        <div className="space-y-8">
          {filteredArticles.map((article, i) => (
            <Link
              key={i}
              href={article.href}
              className="group block"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-10">
                <span className="text-sm font-mono text-neutral-600 shrink-0 min-w-[140px]">
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
      )}
    </RevealOnView>
  )
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 pt-6 pb-8">
      <React.Suspense fallback={<div className="font-mono text-sm text-neutral-500">Loading...</div>}>
        <PortfolioContent />
      </React.Suspense>
    </main>
  )
}