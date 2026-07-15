"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import RevealOnView from "@/components/reveal-on-view"
import { cn } from "@/lib/utils"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useSupabaseData } from "@/components/supabase-provider"
import ContactForm from "@/components/contact-form"

function PhotographySection() {
  const { photos } = useSupabaseData()
  const keralaPhotos = photos.filter(p => p.gallery === 'kerala')
  const delhiPhotos = photos.filter(p => p.gallery === 'new-delhi')
  const hpPhotos = photos.filter(p => p.gallery === 'dharamkot-&-mcleodganj')
  const rishikeshPhotos = photos.filter(p => p.gallery === 'rishikesh')
  const goaPhotos = photos.filter(p => p.gallery === 'north-goa')

  const otherGoaPhotos = goaPhotos.filter(p => p.name !== 'photo_1.jpg')

  return (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={["kerala", "new-delhi", "dharamkot-&-mcleodganj", "rishikesh", "north-goa"]} className="space-y-4">
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

        <AccordionItem value="dharamkot-&-mcleodganj" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            Dharamkot & Mcleodganj, Himachal Pradesh, India
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

function PortfolioContent() {
  const { articles, books } = useSupabaseData()
  const searchParams = useSearchParams()
  const urlTag = searchParams.get("tag")
  const currentSection = searchParams.get("section") || "tech"
  const hasSectionParam = searchParams.has("section") && !!searchParams.get("section")

  const filteredArticles = React.useMemo(() => {
    if (urlTag) {
      return articles.filter((article) => article.tags?.includes(urlTag))
    }
    return []
  }, [urlTag, articles])

  return (
    <RevealOnView intensity="soft">
      <div className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono mb-8 italic animate-rainbow">
        walking back the hippie trail ꩜
      </div>

      {urlTag ? (
        /* FILTERED TAG VIEW */
        <div className="space-y-12">
          <div className="flex border-b border-neutral-200 dark:border-neutral-800 mb-8 font-mono text-sm overflow-x-auto scrollbar-none whitespace-nowrap">
            <div className="flex items-center gap-2 pb-2 -mb-px">
              <span className="text-neutral-500">tag:</span>
              <span className="text-neutral-900 dark:text-neutral-100 font-medium border-b-2 border-neutral-900 dark:border-neutral-100 pb-2 -mb-px">
                {urlTag}
              </span>
              <Link href="/" className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 ml-2">
                (clear)
              </Link>
            </div>
          </div>

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
        </div>
      ) : (
        /* SIMPLE VERTICAL SECTIONS VIEW - Now displaying one section at a time */
        <div className="space-y-12">


          {/* TECH SECTION */}
          {currentSection === "tech" && (
            <section
              id="tech"
              className={cn(
                "space-y-6 scroll-mt-28 animate-fade-in",
                !hasSectionParam && "hidden md:block"
              )}
            >
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                blog
              </h2>
              <div className="space-y-12">
                {articles
                  .filter((article) => article.tags?.includes("tech") && !article.tags?.includes("archives"))
                  .map((article, i) => (
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
            </section>
          )}

          {/* PRODUCTS SECTION */}
          {currentSection === "products" && (
            <section
              id="products"
              className="space-y-6 scroll-mt-28 animate-fade-in"
            >
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                products
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 font-mono leading-relaxed text-justify max-w-lg">
                My focus is on audio programming in C++, including the development of VST plugins and real-time DSP systems. I explore machine learning integration for intelligent audio processing, such as audio effects, analysis, and generation. I&apos;m interested in source separation (STEM separation), browser-based music tools, sample management workflows, and improving creative software for musicians and producers. I also work with digital audio workstation (DAW) workflows involving automation, MIDI routing, and plugin interoperability. Alongside audio engineering, I emphasize version control, CI/CD, and thoughtful UI/UX design to build reliable, developer-friendly, and musician-centric products.
              </p>
            </section>
          )}

          {/* MUSIC SECTION */}
          {currentSection === "music" && (
            <section id="music" className="space-y-6 scroll-mt-28 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                music
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 font-mono italic leading-relaxed text-justify max-w-lg">
                I have pulled down all releases under the name Neural Manacle. Focused on musical training and education. Awaiting for the music and live shows to unfold in the upcoming times. Stay Tuned!! Stay Blessed!!
              </p>
            </section>
          )}

          {/* ARTICLES & ESSAYS SECTION */}
          {currentSection === "articles" && (
            <section id="articles" className="space-y-6 scroll-mt-28 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                articles & essays
              </h2>
              <div className="space-y-12">
                {articles
                  .filter((article) => !article.tags?.includes("poetry") && !article.tags?.includes("archives") && !article.tags?.includes("tech"))
                  .map((article, i) => (
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
            </section>
          )}

          {/* POETRY SECTION */}
          {currentSection === "poetry" && (
            <section id="poetry" className="space-y-6 scroll-mt-28 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                poetry
              </h2>
              <div className="space-y-12">
                {articles
                  .filter((article) => article.tags?.includes("poetry"))
                  .map((article, i) => (
                    <div key={i} className="space-y-4 max-w-lg">
                      <h3 className="text-base font-semibold font-mono text-neutral-900 dark:text-neutral-200">
                        {article.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-mono leading-relaxed whitespace-pre-line">
                        {article.content}
                      </p>
                    </div>
                  ))}
              </div>
            </section>
          )}

          {/* PHOTOGRAPHY SECTION */}
          {currentSection === "photography" && (
            <section id="photography" className="space-y-6 scroll-mt-28 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                photography
              </h2>
              <PhotographySection />
            </section>
          )}

          {/* BOOKS SECTION */}
          {currentSection === "bookshelf" && (
            <section id="bookshelf" className="space-y-6 scroll-mt-28 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                bookshelf
              </h2>
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
            </section>
          )}

          {/* ABOUT ME SECTION */}
          {(currentSection === "about-me" || !hasSectionParam) && (
            <section
              id="about-me"
              className={cn(
                "space-y-12 scroll-mt-28 animate-fade-in",
                !hasSectionParam && "block md:hidden"
              )}
            >
              {/* HERO / BIO */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
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
                  
                  The formation of the name comes from the division of syllables &apos;Neu&apos; and &apos;Ma&apos; from the greek word symbolizing the vital spirit, &apos;Pneuma&apos;.
                  I filled the gap with Neural Manacle as it symbolizes my neurodivergence and the fact that humans are bound to the capabilities of their cognition.
                  Neural Manacle is also a rebirth to my birth identity. It is my adopted persona. I&apos;m a musical artist and a computer engineer. 
                  My Ikigai is working in audio tech and growing my musicianship. Neural Manacle also hints Neural Networks, the foundational framework which powers generative AI.
                  I&apos;ve adopted Path of Yoga as the primary philosophical framework to curb my phobias. This yogic, musical and tech journey is what Neural Manacle
                  has to offer to humanity.
                </div>
              </div>

              {/* CONTACT FORM */}
              <ContactForm />


            </section>
          )}

          {/* RESUME SECTION */}
          {currentSection === "resume" && (
            <section
              id="resume"
              className="space-y-12 scroll-mt-28 animate-fade-in"
            >
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                resume
              </h2>

              {/* WORK EXPERIENCE */}
              <div className="space-y-4">
                <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
                  work experience
                </h2>
                <div className="space-y-2 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 gap-1">
                    <div>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100 block">
                        Software Engineer Intern
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 block mt-1">
                        Pitch Innovations &middot; Internship &middot; Remote
                      </span>
                      <ul className="list-disc pl-4 space-y-1.5 mt-3 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
                        <li>Developed production-grade audio applications, bridging desktop audio architectures with modern web technologies.</li>
                        <li>Engineered C++ based music plugins for Digital Audio Workstations (DAWs) and seamlessly integrated them with Node.js-based user interfaces.</li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-1.5 items-center">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 dark:text-neutral-500 mr-1 select-none">
                          Skills:
                        </span>
                        {["C++", "JavaScript", "CI/CD", "JUCE"].map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-semibold bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end text-sm text-neutral-500 dark:text-neutral-400 gap-2 sm:gap-0 shrink-0">
                      <span>Sep 2025 &mdash; Dec 2025</span>
                      <span>4 mos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORMAL EDUCATION */}
              <div className="space-y-4">
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
              </div>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                {/* NATURAL LANGUAGE */}
                <div className="space-y-4 flex-1">
                  <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
                    natural language
                  </h2>
                  <div className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono">
                    <div className="flex justify-between max-w-xs border-b border-neutral-200 dark:border-neutral-800 pb-1">
                      <span>English</span>
                      <span className="text-neutral-900 dark:text-neutral-100 font-semibold">8/10 (<a href="https://drive.google.com/file/d/1LEPz41yJ3vUFL_huUh73JZIY93YNpuaF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded-sm hover:bg-blue-100 dark:hover:bg-blue-950/70 transition-colors">IELTS</a>)</span>
                    </div>
                  </div>
                </div>

                {/* PROGRAMMING LANGUAGE */}
                <div className="space-y-4 flex-1">
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
                </div>
              </div>
            </section>
          )}

          {/* ARCHIVES SECTION */}
          {currentSection === "archives" && (
            <section id="archives" className="space-y-6 scroll-mt-28 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                archives
              </h2>
              <div className="space-y-12">
                {articles
                  .filter((article) => article.tags?.includes("archives"))
                  .map((article, i) => (
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
            </section>
          )}
        </div>
      )}
    </RevealOnView>
  )
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-2xl pl-16 pr-4 md:px-4 pt-6 pb-8">
      <React.Suspense fallback={<div className="font-mono text-sm text-neutral-500">Loading...</div>}>
        <PortfolioContent />
      </React.Suspense>
    </main>
  )
}