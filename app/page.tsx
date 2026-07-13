"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import RevealOnView from "@/components/reveal-on-view"
import { articles } from "@/lib/articles"
import { cn } from "@/lib/utils"
import { photos } from "@/lib/photography"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

function PhotographySection() {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible defaultValue="kerala">
        <AccordionItem value="kerala" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            Kerala
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

function PortfolioContent() {
  const searchParams = useSearchParams()
  const urlTag = searchParams.get("tag")

  const [activeTab, setActiveTab] = React.useState<"about-me" | "archives" | "tech" | "manhood" | "philosophy" | "photography">("tech")

  // If a tag is active in the URL, show the articles view filtered by that tag
  const displayView = urlTag ? "articles" : activeTab

  const filteredArticles = React.useMemo(() => {
    if (urlTag) {
      return articles.filter((article) => article.tags?.includes(urlTag))
    }
    if (activeTab === "archives") {
      return articles.filter((article) => article.tags?.includes("archives"))
    }
    if (activeTab === "tech") {
      return articles.filter((article) => article.tags?.includes("tech"))
    }
    if (activeTab === "manhood") {
      return articles.filter((article) => article.tags?.includes("manhood"))
    }
    if (activeTab === "philosophy") {
      return articles.filter((article) => article.tags?.includes("philosophy"))
    }
    if (activeTab === "photography") {
      return articles.filter((article) => article.tags?.includes("photography"))
    }
    return []
  }, [activeTab, urlTag])

  return (
    <RevealOnView intensity="soft">
      <div className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono mb-8 italic">
        in a synthetic dream. love. peace. enlightenment.
      </div>
      {/* TAB BAR */}
      <div className="flex border-b border-neutral-200 dark:border-neutral-800 mb-8 font-mono text-sm overflow-x-auto scrollbar-none whitespace-nowrap">
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
              onClick={() => setActiveTab("manhood")}
              className={cn(
                "pb-2 -mb-px font-medium border-b-2 transition-all cursor-pointer",
                activeTab === "manhood"
                  ? "text-neutral-900 dark:text-neutral-100 border-neutral-900 dark:border-neutral-100"
                  : "text-neutral-400 border-transparent hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              manhood
            </button>
            <button
              onClick={() => setActiveTab("philosophy")}
              className={cn(
                "pb-2 -mb-px font-medium border-b-2 transition-all cursor-pointer",
                activeTab === "philosophy"
                  ? "text-neutral-900 dark:text-neutral-100 border-neutral-900 dark:border-neutral-100"
                  : "text-neutral-400 border-transparent hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              philosophy
            </button>
            <button
              onClick={() => setActiveTab("photography")}
              className={cn(
                "pb-2 -mb-px font-medium border-b-2 transition-all cursor-pointer",
                activeTab === "photography"
                  ? "text-neutral-900 dark:text-neutral-100 border-neutral-900 dark:border-neutral-100"
                  : "text-neutral-400 border-transparent hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              photography
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
              <p>I&apos;m Arjun. a.k.a Neural Manacle</p> 
              Who is Neural Manacle?
              The formation of the name comes from the division of syllables 'Neu' and 'Ma' from the greek word symbolizing the vital spirit, 'Pneuma'.
              I filled the gap with Neural Manacle as it symbolizes my neurodivergence and the fact that humans are bound to the capabilities of their cognition.
              Neural Manacle is also a rebirth to my birth identity. It is my adopted persona. I'm a musical artist and a computer engineer. 
              My Ikigai is working in audio tech and growing my musicianship. Neural Manacle also hints Neural Networks, the foundational framework which powers generative AI.
              I've adopted Shiva Yoga as my primary philosophical framework to curb my chronophobia. This yogic, musical and tech journey is what Neural Manacle
              has to offer to humanity. I'm a strong advocate for masculinity and male mental health.
              I'm primarily availabe on mail: neuralmanacle@gmail.com
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
      ) : displayView === "photography" ? (
        <PhotographySection />
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
      {activeTab === "manhood" && (
        <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-400 dark:text-neutral-500 font-mono">
          * my body is that of a man.
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