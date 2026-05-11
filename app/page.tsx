"use client"

import { useState } from 'react';
import Link from "next/link"
import { ArrowRight, Instagram, Music2, Cloud } from "lucide-react"
import Image from "next/image"
import books from '@/data/books.json';
import { GitHubCalendar } from 'react-github-calendar';


import DotGridShader from "@/components/DotGridShader"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  // MCP-generated spring token (motion design system) for About-card micro-interactions.
  // Output format: "<duration> <easing-function>"
  const aboutSpringToken = "450ms linear(0, 0.2459, 0.6526, 0.9468, 1.0764, 1.0915, 1.0585, 1.0219, 0.9993, 0.9914, 0.9921, 0.9957, 0.9988, 1.0004, 1)"
  const match = aboutSpringToken.match(/^(\d+ms)\s+(.+)$/)
  const aboutSpringDuration = match?.[1] ?? "450ms"
  const aboutSpringTiming = match?.[2] ?? "linear"

  const years = Array.from(new Set(books.map((b: any) => b.yearRead))).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(years[0] || 2026);
  const filteredBooks = books.filter((book: any) => book.yearRead === selectedYear);

  return (
    <main className="mx-auto w-full max-w-6xl px-4">
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16" aria-label="Intro">
        <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
          <DotGridShader />
        </div>

        <RevealOnView
          as="div"
          intensity="hero"
          className="relative rounded-3xl border border-white/10 bg-neutral-900/40 p-6 sm:p-10"
          staggerChildren
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <Image
                  src="/images/avatar.jpg"
                  alt="Avatar"
                  width={56}
                  height={56}
                  className="rounded-full bg-white/10 ring-1 ring-white/15"
                />
                <div>
                  <div className="text-sm text-white/60">Arjun Shenoy</div>
                  <div className="text-sm font-medium text-white/80">programmer • designer • musician • writer</div>
                </div>
              </div>

              <AnimatedHeading
                className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl"
                style={{ color: "#B3B41F" }}
                lines={["reduce the noise", "& tune in"]}
              />

              <p className="mt-5 max-w-[60ch] text-base text-white/70 sm:text-lg">
                I build expressive products that mix engineering and design. Currently shipping web tools, playful
                interfaces, and experimental projects.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="#work"
                  className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                >
                  See work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="https://cal.com/noishey/15min?overlayCalendar=true"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                >
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 md:grid-cols-1 md:gap-4">
              <Link href="https://github.com/noishey" className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <div className="text-sm font-semibold">GitHub</div>
                <div className="mt-1 text-xs text-white/60">code + experiments</div>
              </Link>
              <Link href="https://noishdreams.substack.com/" className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <div className="text-sm font-semibold">Newsletter</div>
                <div className="mt-1 text-xs text-white/60">writing & notes</div>
              </Link>
              <Link href="#contact" className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <div className="text-sm font-semibold">Contact</div>
                <div className="mt-1 text-xs text-white/60">collabs & work</div>
              </Link>
            </div>
          </div>
        </RevealOnView>
      </section>

      {/* WORK */}
      <section id="work" className="scroll-mt-24 py-12" aria-label="Work">
        <RevealOnView>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Selected work</h2>
              <p className="mt-2 text-sm text-white/60 sm:text-base">A few projects I’m excited about right now.</p>
            </div>
            <Link href="https://github.com/noishey" className="text-sm font-medium text-white/70 hover:text-white">
              View more <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
        </RevealOnView>

        <RevealOnView>
          <div className="mt-4 rounded-3xl border border-white/10 bg-neutral-900/30 p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Coming soon</div>
                <p className="mt-1 text-sm text-white/60">
                  I’m building and shipping new projects—more case studies will land here soon.
                </p>
              </div>
              <div className="text-xs text-white/45 sm:text-sm">In progress</div>
            </div>
          </div>
        </RevealOnView>
      </section>

      {/* GITHUB GRID SECTION */}
      <RevealOnView>
        <div className="mt-6 rounded-3xl border border-white/10 bg-neutral-900/30 p-6 sm:p-10">
          <div className="mb-6 flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-white">Contribution Graph</h3>
            <p className="text-sm text-white/50">My recent activity on GitHub.</p>
          </div>
          
          <div className="flex justify-center overflow-hidden">
            <GitHubCalendar 
              username="noishey" 
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              theme={{
                light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
            />
          </div>
          
          <div className="mt-6 flex justify-center">
            <Link 
              href="https://github.com/noishey" 
              className="text-xs font-medium text-white/40 hover:text-white transition-colors"
            >
              View full profile on GitHub →
            </Link>
          </div>
        </div>
      </RevealOnView>

      {/* EXPERIENCE */}
      <section id="experience" className="scroll-mt-24 py-12" aria-label="Work experience">
        <RevealOnView>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Work experience</h2>
              <p className="mt-2 text-sm text-white/60 sm:text-base">A quick timeline of where I’ve shipped.</p>
            </div>
          </div>
        </RevealOnView>

        <div className="mt-6 grid gap-3">
          <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-5 sm:p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="text-base font-semibold">Invesco</div>
              <div className="text-sm text-white/50">Jul 2022 — Nov 2023</div>
            </div>
            <div className="mt-1 text-sm text-white/70">Software Engineer</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-5 sm:p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="text-base font-semibold">Pitch Innovations</div>
              <div className="text-sm text-white/50">Oct 2025 — Dec 2025</div>
            </div>
            <div className="mt-1 text-sm text-white/70">Software Engineer Intern</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 py-12" aria-label="About">
        <RevealOnView>
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-neutral-900/30 p-6 sm:p-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About</h2>
              <p className="mt-3 text-sm text-white/65 sm:text-base">
                I like systems that feel alive: crisp typography, generous motion, and sound you can touch. I’m happiest
                when the product has a point of view and the implementation is clean.
              </p>
              <p className="mt-4 text-sm text-white/65 sm:text-base">
                If you’re building something weird-in-a-good-way, I’m in.
              </p>
            </div>
            <div className="grid gap-3">
              <div
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-0 will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                style={{ transitionDuration: aboutSpringDuration, transitionTimingFunction: aboutSpringTiming }}
              >
                <div className="text-sm font-semibold">Focus</div>
                <div className="mt-1 text-sm text-white/65">MCP Servers</div>
              </div>
              <div
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-0 will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                style={{ transitionDuration: aboutSpringDuration, transitionTimingFunction: aboutSpringTiming }}
              >
                <div className="text-sm font-semibold">Currently</div>
                <div className="mt-1 text-sm text-white/65">Shipping tools + releasing music</div>
              </div>
              <div
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-0 will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                style={{ transitionDuration: aboutSpringDuration, transitionTimingFunction: aboutSpringTiming }}
              >
                <div className="text-sm font-semibold">Based</div>
                <div className="mt-1 text-sm text-white/65">India • remote friendly</div>
              </div>
            </div>
          </div>
        </RevealOnView>
      </section>

      {/* MUSIC */}
      <section id="music" className="scroll-mt-24 py-12" aria-label="Music">
        <RevealOnView>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Music</h2>
              <p className="mt-2 text-sm text-white/60 sm:text-base">
                Old releases, new demos, and links to where I’m posting.
              </p>
            </div>
          </div>
        </RevealOnView>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <Music2 className="size-5 text-white/80" />
              </span>
              <div>
                <div className="text-sm font-semibold">Old Spotify</div>
                <div className="text-xs text-white/55">Neural Manacle</div>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="https://open.spotify.com/artist/3YytkHPmRTI4ra9ksQZ8nw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white"
              >
                Open on Spotify
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <Link
            href="https://instagram.com/noisheymusic"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-neutral-900/30 p-5 transition hover:bg-white/5 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <Instagram className="size-5 text-white/80" />
              </span>
              <div>
                <div className="text-sm font-semibold">Instagram</div>
                <div className="text-xs text-white/55">@noisheymusic</div>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center text-sm font-medium text-white/70 group-hover:text-white">
              Open <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="https://soundcloud.com/noishey"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-neutral-900/30 p-5 transition hover:bg-white/5 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <Cloud className="size-5 text-white/80" />
              </span>
              <div>
                <div className="text-sm font-semibold">SoundCloud</div>
                <div className="text-xs text-white/55">noishey</div>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center text-sm font-medium text-white/70 group-hover:text-white">
              Listen <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* BOOKS */}
    
      <section id="books" className="scroll-mt-24 py-12" aria-label="Books">
        <RevealOnView>
          <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-neutral-900/30 p-6 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Books</h2>
              <p className="mt-2 text-sm text-white/60">
                My reading journey and reviews.
              </p>
            </div>

            {/* Dropdown Menu */}
            <div className="relative w-full sm:w-auto">
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="w-full appearance-none rounded-xl border border-white/10 bg-neutral-800 px-4 py-2 text-sm font-medium text-white outline-none ring-primary/50 focus:ring-2 sm:w-32"
              >
                {years.map((year: number) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              {/* Custom arrow for the dropdown */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/40">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
              </div>
            </div>
          </div>

          {/* Books Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book: Book) => (
                <div key={book.id} className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-0 will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
                  <div className="flex items-center gap-3">
                    <Image src={book.coverImage} alt={book.title} width={56} height={56} className="rounded-lg bg-white/10 ring-1 ring-white/15" />
                    <div>
                      <div className="text-sm font-semibold">{book.title}</div>
                      <div className="text-xs text-white/55">{book.author}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-white/70">{book.review}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white/40 italic">No books logged for this year yet.</p>
            )}
          </div>
        </RevealOnView>
      </section>

      {/* WRITING */}
      <section id="writing" className="scroll-mt-24 py-12" aria-label="Writing">
        <RevealOnView>
          <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-neutral-900/30 p-6 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Writing</h2>
              <p className="mt-2 text-sm text-white/60 sm:text-base">
                Short notes on building, music, and whatever I’m learning.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="https://noishdreams.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="https://www.goodreads.com/user/show/195686946-noishdreams"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                Goodreads
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </RevealOnView>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 py-12" aria-label="Contact">
        <RevealOnView>
          <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-6 sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let’s build</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/60 sm:text-base">
              For freelance work, collabs, or just to say hey—email me or book a quick call.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="mailto:noishey@gmail.com"
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                Email
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="https://cal.com/noishey/15min?overlayCalendar=true"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                Book a call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </RevealOnView>

        <footer className="py-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Arjun Shenoy · built with Next.js
        </footer>
      </section>
    </main>

  )
}
