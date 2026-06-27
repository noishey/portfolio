"use client"

import * as React from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import RevealOnView from "@/components/reveal-on-view"
import { articles } from "@/lib/articles"
import { cn } from "@/lib/utils"

function PortfolioContent() {
  const searchParams = useSearchParams()
  const urlTag = searchParams.get("tag")

  const [activeTab, setActiveTab] = React.useState<"about-me" | "tech">("tech")

  // If a tag is active in the URL, show the articles view filtered by that tag
  const displayView = urlTag ? "articles" : activeTab

  const filteredArticles = React.useMemo(() => {
    if (urlTag) {
      return articles.filter((article) => article.tags?.includes(urlTag))
    }
    if (activeTab === "tech") {
      return articles.filter((article) => article.tags?.includes("tech"))
    }
    return []
  }, [activeTab, urlTag])

  return (
    <RevealOnView intensity="soft">
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
              onClick={() => setActiveTab("tech")}
              className={cn(
                "pb-2 -mb-px font-medium border-b-2 transition-all cursor-pointer",
                activeTab === "tech"
                  ? "text-neutral-900 dark:text-neutral-100 border-neutral-900 dark:border-neutral-100"
                  : "text-neutral-400 border-transparent hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              tech
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
          </div>
        )}
      </div>

      {/* CONTENT */}
      {displayView === "about-me" ? (
        <div className="space-y-12">
          {/* HERO / BIO */}
          <section>
            <div className="space-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono">
              <p>Namaste 🙏</p>
              <p>I&apos;m Arjun, 26 (he/him).</p> 
              <p>Currently in <a href="https://en.wikipedia.org/wiki/Kochi" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">Kochi</a>, India.</p>
              <p>An Aspiring AI Engineer!!</p>
              <p>I&apos;m a morning bird and a strong reader.</p>
              <p>I&apos;m a <a href="https://en.wikipedia.org/wiki/First_principle" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">first principles thinker</a>. I want to <a href="https://nav.al/sell" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">sell the truth</a> in the market. My engineering motto is to use my reasoning and technical skills for the advancement of human species through innovation and problem solving. By contributing to the economy, I&apos;m actively <a href="https://www.youtube.com/watch?v=M-ZH3psUbfU" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">growing the economic pie</a> which cures scarcity mindset. Mathematics has all the answers about nature to a larger extent. My interest in technology lies in the intersection of web, deep learning, agentic engineering and speech/audio.</p>
              <p>Skipping steps in learning and understanding would result in debt and I&apos;m happily paying all my technical debts :&#41;</p>
              <p>My philosophical anchor in life is the <a href="https://en.wikipedia.org/wiki/Yoga_Sutras_of_Patanjali" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">Path of Yoga</a>.</p>
              <p>Politically social conservative (2.46) & economically centrist (0.0)</p>
              
              {/* POLITICAL COMPASS CHART */}
              <div className="flex flex-col items-center justify-center p-6 bg-neutral-50 dark:bg-neutral-900/30 rounded-2xl border border-neutral-200 dark:border-neutral-800 max-w-[280px] font-mono my-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-6">
                  Political Compass
                </span>
                
                <div className="relative w-36 h-36 border border-neutral-300 dark:border-neutral-700">
                  {/* Quadrants */}
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-500/10 dark:bg-red-500/15" />
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 dark:bg-blue-500/15" />
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-500/10 dark:bg-emerald-500/15" />
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-500/10 dark:bg-yellow-500/15" />

                  {/* Axis Lines */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-neutral-300 dark:bg-neutral-700" />
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-neutral-300 dark:bg-neutral-700" />

                  {/* Labels on Axes */}
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Authoritarian
                  </span>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Libertarian
                  </span>
                  <span className="absolute top-1/2 -left-6 -translate-y-1/2 text-[8px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Left
                  </span>
                  <span className="absolute top-1/2 -right-8 -translate-y-1/2 text-[8px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Right
                  </span>

                  {/* Coordinate Dot (0.0, 2.46) */}
                  <div 
                    className="absolute w-2.5 h-2.5 bg-red-600 dark:bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-red-600/50 border border-white dark:border-neutral-900"
                    style={{ left: "50%", top: "37.7%" }}
                  />
                </div>
                
                <div className="mt-6 text-[10px] text-neutral-500 dark:text-neutral-400 text-center space-y-1">
                  <p>
                    Economic Left/Right: <span className="text-neutral-900 dark:text-neutral-100 font-bold">0.00</span>
                  </p>
                  <p>
                    Social Conservative/Libertarian: <span className="text-neutral-900 dark:text-neutral-100 font-bold">+2.46</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* QUOTES THAT I LIVE BY */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
              quotes that i live by
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono">
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
                <span>JavaScript</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold">3/10</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-1">
                <span>TypeScript</span>
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