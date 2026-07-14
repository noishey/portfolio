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
  const keralaPhotos = photos.filter(p => p.gallery === 'kerala')
  const delhiPhotos = photos.filter(p => p.gallery === 'new-delhi')
  const hpPhotos = photos.filter(p => p.gallery === 'dharamkot-&-mcledoganj')
  const rishikeshPhotos = photos.filter(p => p.gallery === 'rishikesh')
  const goaPhotos = photos.filter(p => p.gallery === 'north-goa')

  const otherGoaPhotos = goaPhotos.filter(p => p.name !== 'photo_1.jpg')

  return (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={["kerala", "new-delhi", "dharamkot-&-mcledoganj", "rishikesh", "north-goa"]} className="space-y-4">
        <AccordionItem value="kerala" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            Kochi, Kerala, India
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {keralaPhotos.map((photo, i) => (
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

        <AccordionItem value="new-delhi" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            New Delhi, India
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {delhiPhotos.map((photo, i) => (
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

        <AccordionItem value="dharamkot-&-mcledoganj" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            Dharamkot & Mcledoganj, Himachal Pradesh, India
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {hpPhotos.map((photo, i) => (
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

        <AccordionItem value="rishikesh" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            Rishikesh, Uttarakhand, India
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {rishikeshPhotos.map((photo, i) => (
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

        <AccordionItem value="north-goa" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            North Goa, India
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {otherGoaPhotos.map((photo, i) => (
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

const StarIcon = ({ filled, half }: { filled: boolean; half?: boolean }) => {
  if (half) {
    return (
      <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path fill="url(#halfGrad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  }
  return (
    <svg
      className={`w-3.5 h-3.5 ${filled ? "text-amber-500" : "text-neutral-300 dark:text-neutral-700"}`}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.977-2.888a1 1 0 00-1.176 0l-3.977 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= Math.floor(rating)
        const isHalf = !isFilled && star === Math.ceil(rating) && rating % 1 !== 0
        return <StarIcon key={star} filled={isFilled} half={isHalf} />
      })}
      <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 ml-1.5">
        {rating}/5
      </span>
    </div>
  )
}

const books = [
  {
    title: "The Zahir",
    author: "Paulo Coelho",
    publishedYear: 2005,
    rating: 4,
    coverUrl: "/api/bookcover?isbn=9780060832810",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Zahir_(novel)",
    review: "A wonderful exploration of obsession, love, and self-discovery."
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    publishedYear: 1939,
    rating: 4.5,
    coverUrl: "/api/bookcover?isbn=9780143039433",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Grapes_of_Wrath",
    review: "An absolute masterpiece. Deeply moving portrayal of human resilience and social injustice."
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    publishedYear: 2011,
    coverUrl: "/api/bookcover?isbn=9780062316097",
    wikiUrl: "https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind",
    status: "reading"
  }
]

function PortfolioContent() {
  const searchParams = useSearchParams()
  const urlTag = searchParams.get("tag")

  const [activeTab, setActiveTab] = React.useState<"about-me" | "archives" | "tech" | "writing" | "poetry" | "photography" | "books">("tech")

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
    if (activeTab === "writing") {
      return articles.filter((article) => article.tags?.includes("writing"))
    }
    if (activeTab === "poetry") {
      return articles.filter((article) => article.tags?.includes("poetry"))
    }
    if (activeTab === "photography") {
      return articles.filter((article) => article.tags?.includes("photography"))
    }
    return []
  }, [activeTab, urlTag])

  return (
    <RevealOnView intensity="soft">
      <div className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono mb-8 italic animate-rainbow">
        walking back the hippie trail ꩜
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
              onClick={() => setActiveTab("writing")}
              className={cn(
                "pb-2 -mb-px font-medium border-b-2 transition-all cursor-pointer",
                activeTab === "writing"
                  ? "text-neutral-900 dark:text-neutral-100 border-neutral-900 dark:border-neutral-100"
                  : "text-neutral-400 border-transparent hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              writing
            </button>
            <button
              onClick={() => setActiveTab("poetry")}
              className={cn(
                "pb-2 -mb-px font-medium border-b-2 transition-all cursor-pointer",
                activeTab === "poetry"
                  ? "text-neutral-900 dark:text-neutral-100 border-neutral-900 dark:border-neutral-100"
                  : "text-neutral-400 border-transparent hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              poetry
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
              onClick={() => setActiveTab("books")}
              className={cn(
                "pb-2 -mb-px font-medium border-b-2 transition-all cursor-pointer",
                activeTab === "books"
                  ? "text-neutral-900 dark:text-neutral-100 border-neutral-900 dark:border-neutral-100"
                  : "text-neutral-400 border-transparent hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              books
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
              <p>I&apos;m Arjun. a.k.a Neural Manacle!!</p> <br />
              
              The formation of the name comes from the division of syllables 'Neu' and 'Ma' from the greek word symbolizing the vital spirit, 'Pneuma'.
              I filled the gap with Neural Manacle as it symbolizes my neurodivergence and the fact that humans are bound to the capabilities of their cognition.
              Neural Manacle is also a rebirth to my birth identity. It is my adopted persona. I'm a musical artist and a computer engineer. 
              My Ikigai is working in audio tech and growing my musicianship. Neural Manacle also hints Neural Networks, the foundational framework which powers generative AI.
              I've adopted Path of Yoga as the primary philosophical framework to curb my phobias. This yogic, musical and tech journey is what Neural Manacle
              has to offer to humanity.
              I'm primarily available on mail: <a href="mailto:neuralmanacle@gmail.com" className="animate-rainbow font-bold hover:underline">neuralmanacle@gmail.com</a>
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

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            {/* NATURAL LANGUAGE */}
            <section className="space-y-4 flex-1">
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
            <section className="space-y-4 flex-1">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
                programming language
              </h2>
              <div className="space-y-2 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono max-w-xs">
                <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-1">
                  <span>C++</span>
                  <span className="text-neutral-900 dark:text-neutral-100 font-semibold">2/10</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-1">
                  <span>Python</span>
                  <span className="text-neutral-900 dark:text-neutral-100 font-semibold">3/10</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-1">
                  <span>TypeScript</span>
                  <span className="text-neutral-900 dark:text-neutral-100 font-semibold">2/10</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : displayView === "books" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center py-4">
          {books.map((book, i) => (
            <a
              key={i}
              href={book.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center space-y-3 cursor-pointer w-full max-w-[160px]"
            >
              <div className="h-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                {book.status === "reading" ? (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider font-mono">
                    Currently Reading
                  </span>
                ) : book.rating !== undefined ? (
                  <RatingStars rating={book.rating} />
                ) : null}
              </div>
              <div className="relative w-28 h-40 sm:w-36 sm:h-52 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-xl dark:group-hover:shadow-neutral-900/50">
                <Image
                  src={book.coverUrl}
                  alt={book.title}
                  fill
                  sizes="(max-width: 640px) 112px, 144px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors text-xs sm:text-sm font-sans line-clamp-2 leading-snug">
                  {book.title}
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                  {book.author} {book.publishedYear && `(${book.publishedYear})`}
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : displayView === "photography" ? (
        <PhotographySection />
      ) : (
        /* ARTICLES LIST */
        <div className="space-y-12">
          {filteredArticles.map((article, i) => {
            const isPoetry = article.tags?.includes("poetry")

            if (isPoetry) {
              return (
                <div key={i} className="space-y-4 max-w-lg">
                  <h3 className="text-lg font-semibold font-mono text-neutral-900 dark:text-neutral-200">
                    {article.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-mono leading-relaxed whitespace-pre-line">
                    {article.content}
                  </p>
                </div>
              )
            }

            return (
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
            )
          })}
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