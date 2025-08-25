"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

import { button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"
import ScrollCard from "@/components/scroll-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"
import { Button } from "react-day-picker"

export default function Page() {
  const sections = [
    {
      title: "Coming Soon",
      subtitle: "",
      imageSrc: "images/grainy-grad.jpg",
      tags: [],
      href: "https://cal.com/noishey/15min?overlayCalendar=true",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#36B41F",
    },  
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                {/* Wordmark */}
                <div className="mb-8 flex items-center gap-2">
                  <div className="text-2xl font-extrabold tracking-tight">noishey</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                  <div className="text-2xl font-extrabold tracking-tight">arjun</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                  <div className="flex items-center gap-3 ml-2">
                    <div className="relative">
                      <Image
                        src="/images/avatar.png"
                        alt="Avatar"
                        width={56}
                        height={56}
                        className="rounded-full backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg ring-1 ring-white/10"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/headshot.jpeg"
                        alt="Headshot"
                        width={56}
                        height={56}
                        className="rounded-full backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg ring-1 ring-white/10"
                      />
                    </div>
                  </div>
                </div>
                {/* Headline with intro blur effect */}
                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  style={{ color: '#B3B41F' }}
                  lines={["reduce the noise", "& tune in"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-green/70">
                  noishey is an creative, engineer, designer and an artist
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button aschild="true" size="lg" className="rounded-full">
                    <Link href="mailto:brandon@portfolio.dev">
                      Hire me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </button>
                  <button aschild="true" size="lg" className="rounded-full">
                    <Link href="/Resume.pdf" download="Resume.pdf">
                      Resume
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </button>
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                  {/* Socials Section */}
                  <div>
                    <h3 className="text-sm font-medium text-white/70 mb-3">Socials</h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <Link href="https://github.com/noishey" className="group">
                        <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:scale-105">
                          <Image
                            src="/github.png"
                            alt="GitHub"
                            width={24}
                            height={24}
                            className="transition-opacity duration-200 group-hover:opacity-80"
                          />
                        </div>
                      </Link>
                      <Link href="https://linkedin.com/in/noishey" className="group">
                        <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:scale-105">
                          <Image
                            src="/linkedin.png"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                            className="transition-opacity duration-200 group-hover:opacity-80"
                          />
                        </div>
                      </Link>
                      <Link href="https://x.com/butn0tshy" className="group">
                        <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:scale-105">
                          <Image
                            src="/twitter.png"
                            alt="Twitter"
                            width={24}
                            height={24}
                            className="transition-opacity duration-200 group-hover:opacity-80"
                          />
                        </div>
                      </Link>
                      <Link href="https://leetcode.com/noishey" className="group">
                        <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:scale-105">
                          <Image
                            src="/leetcode.png"
                            alt="LeetCode"
                            width={24}
                            height={24}
                            className="transition-opacity duration-200 group-hover:opacity-80"
                          />
                        </div>
                      </Link>
                      <Link href="https://goodreads.com/noishey" className="group">
                        <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:scale-105">
                          <Image
                            src="/goodreads.png"
                            alt="Goodreads"
                            width={24}
                            height={24}
                            className="transition-opacity duration-200 group-hover:opacity-80"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Stream Music Section */}
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-white/70 mb-3">Stream Music</h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <Link href="https://instagram.com/noisheymusic" className="group">
                        <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:scale-105">
                          <Image
                            src="/instagram.png"
                            alt="Instagram"
                            width={24}
                            height={24}
                            className="transition-opacity duration-200 group-hover:opacity-80"
                          />
                        </div>
                      </Link>
                      <Link href="https://soundcloud.com/noishey" className="group">
                        <div className="p-2 bg-white rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:scale-105">
                          <Image
                            src="/soundcloud.png"
                            alt="SoundCloud"
                            width={24}
                            height={24}
                            className="transition-opacity duration-200 group-hover:opacity-80"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {sections.map((p, idx) => (
              <ScrollCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>

  )
}
