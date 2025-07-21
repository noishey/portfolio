'use client';

import Scene from './components/Scene';
import Image from 'next/image';
import SubstackWidget from './components/SubstackWidget';
import { useState } from 'react';
import Spline from '@splinetool/react-spline/next';
import Card from './components/Card';
import DiagonalScroll from './components/DiagonalScroll';

export default function Home() {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Main content section - REMOVED grid layout to allow natural flow and scrolling */}
      <div className="relative p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* Centered heading overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-40">
          <h1
            className="text-2xl md:text-3xl font-mono text-center tracking-widest leading-tight flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              color: '#181818', // matte black
              textShadow: '0 0 8px #fff, 0 0 2px #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff',
              WebkitTextStroke: '1px #fff',
              imageRendering: 'pixelated',
              filter: 'contrast(180%)',
            }}
          >
            <span className="text-4xl md:text-5xl font-serif text-white drop-shadow-lg select-none" style={{marginRight: '0.25em'}}>&ldquo;</span>
            reduce the noise and tune in
            <span className="text-4xl md:text-5xl font-serif text-white drop-shadow-lg select-none" style={{marginLeft: '0.25em'}}>&rdquo;</span>
          </h1>
          {/* Newsletter subscribe section below tagline */}
          <div className="w-full flex flex-col items-center justify-center mt-8 pointer-events-auto">
            <h2 className="text-lg md:text-2xl font-mono text-gray-300 mb-4 tracking-wide text-center" style={{ fontFamily: 'var(--font-geist-mono), monospace' }}>
              Subscribe to my newsletter
            </h2>
            <div className="w-full max-w-md">
              <SubstackWidget />
            </div>
          </div>
        </div>
        <Scene />
        {/* Card should now be positioned within the natural flow */}
        <Card />

        <div className="h-screen flex items-center justify-center">
          {/* Main content removed */}
        </div>

        {/* Diagonal scroll section */}
        <DiagonalScroll />

        {/* Floating Contact Widget */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md p-6 rounded-xl bg-white/10 border border-white/20 shadow-md backdrop-blur-md flex flex-col items-center z-20">
          <h3 className="text-lg font-mono text-gray-200 mb-4 text-center" style={{ fontFamily: 'var(--font-geist-mono), monospace' }}>
            Contact Me
          </h3>
          <p className="text-xs text-gray-400 mb-4 text-center">Your message will be sent to <span className="text-yellow-300">tech.noishey@gmail.com</span></p>
          <form className="w-full flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 text-white placeholder-white/70"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 text-white placeholder-white/70"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 text-white placeholder-white/70"
              required
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 rounded-lg font-semibold transition-colors"
              style={{ backgroundColor: '#b49d1f', color: 'white' }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#a0881a')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#b49d1f')}
            >
              Send
            </button>
          </form>
        </div>

        {/* Other fixed elements can remain as they are */}
        {/* Socials with Spline above */}
        <div className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
          

          <a
            className="flex items-center justify-center hover:underline hover:underline-offset-4 hover:ring-4 hover:ring-yellow-300/40 hover:bg-yellow-100/10 rounded-full transition-all duration-200"
            href="https://x.com/butn0tshy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-10 w-10 fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            className="flex items-center justify-center hover:underline hover:underline-offset-4 hover:ring-4 hover:ring-yellow-300/40 hover:bg-yellow-100/10 rounded-full transition-all duration-200"
            href="https://github.com/noishey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-10 w-10 fill-white dark:fill-white"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            className="flex items-center justify-center hover:underline hover:underline-offset-4 hover:ring-4 hover:ring-yellow-300/40 hover:bg-yellow-100/10 rounded-full transition-all duration-200 p-2"
            href="https://linkedin.com/in/noishey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
              <path fill="#FFFFFF" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
            </svg>
          </a>
          {/* Bento link below socials */}
          <a
            className="flex items-center justify-center hover:underline hover:underline-offset-4 hover:ring-4 hover:ring-yellow-300/40 hover:bg-yellow-100/10 rounded-full transition-all duration-200"
            href="https://bento.me/noishey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-center w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-10 w-10"
              >
                <ellipse cx="12" cy="12" rx="10" ry="7" fill="#181818" />
                <text x="12" y="18" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#fff" dominantBaseline="middle">b</text>
              </svg>
            </span>
          </a>
          <a
            className="flex items-center justify-center hover:underline hover:underline-offset-4 hover:ring-4 hover:ring-yellow-300/40 hover:bg-yellow-100/10 rounded-full transition-all duration-200"
            href="https://www.goodreads.com/user/show/191334744-arjun-shenoy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-center w-12 h-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-10 w-10">
                <g>
                  <circle cx="24" cy="24" r="24" fill="#fff"/>
                  <path d="M24 10c-5.523 0-10 4.477-10 10s4.477 10 10 10c2.485 0 4.735-0.91 6.5-2.414V34a1 1 0 1 0 2 0V14a1 1 0 1 0-2 0v2.414C28.735 10.91 26.485 10 24 10zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" fill="#6D4C3D"/>
                </g>
              </svg>
            </span>
          </a>
          {/* LeetCode icon below Goodreads */}
          <a
            className="flex items-center justify-center hover:underline hover:underline-offset-4 hover:ring-4 hover:ring-yellow-300/40 hover:bg-yellow-100/10 rounded-full transition-all duration-200"
            href="https://leetcode.com/noishey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-center w-12 h-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-10 w-10">
                <g>
                  <path fill="#fff" d="M36.7 34.7c-1.1-1.1-2.2-2.2-3.3-3.3c-0.6-0.6-0.6-1.1 0-1.7c0.6-0.6 1.1-0.6 1.7 0c1.2 1.2 2.4 2.4 3.6 3.6c1.1 1.1 1.1 2.2 0 3.3c-2.7 2.7-5.4 5.4-8.1 8.1c-1.1 1.1-2.2 1.1-3.3 0c-2.7-2.7-5.4-5.4-8.1-8.1c-1.1-1.1-1.1-2.2 0-3.3c1.2-1.2 2.4-2.4 3.6-3.6c0.6-0.6 1.1-0.6 1.7 0c0.6 0.6 0.6 1.1 0 1.7c-1.1 1.1-2.2 2.2-3.3 3.3c-0.6 0.6-0.6 1.1 0 1.7c2.7 2.7 5.4 5.4 8.1 8.1c0.6 0.6 1.1 0.6 1.7 0c2.7-2.7 5.4-5.4 8.1-8.1C37.3 35.8 37.3 35.3 36.7 34.7z"/>
                  <path fill="#fff" d="M24 0C10.7 0 0 10.7 0 24c0 13.3 10.7 24 24 24c13.3 0 24-10.7 24-24C48 10.7 37.3 0 24 0zM24 46C11.8 46 2 36.2 2 24C2 11.8 11.8 2 24 2c12.2 0 22 9.8 22 22C46 36.2 36.2 46 24 46z"/>
                  <path fill="#fff" d="M34.7 13.3c-1.1-1.1-2.2-2.2-3.3-3.3c-0.6-0.6-1.1-0.6-1.7 0c-0.6 0.6-0.6 1.1 0 1.7c1.1 1.1 2.2 2.2 3.3 3.3c0.6 0.6 0.6 1.1 0 1.7c-2.7 2.7-5.4 5.4-8.1 8.1c-0.6 0.6-1.1 0.6-1.7 0c-2.7-2.7-5.4-5.4-8.1-8.1c-0.6-0.6-0.6-1.1 0-1.7c1.2-1.2 2.4-2.4 3.6-3.6c0.6-0.6 1.1-0.6 1.7 0c0.6 0.6 0.6 1.1 0 1.7c-1.1 1.1-2.2 2.2-3.3 3.3c-0.6 0.6-0.6 1.1 0 1.7c2.7 2.7 5.4 5.4 8.1 8.1c0.6 0.6 1.1 0.6 1.7 0c2.7-2.7 5.4-5.4 8.1-8.1C35.3 14.4 35.3 13.9 34.7 13.3z"/>
                </g>
              </svg>
            </span>
          </a>
        </div>
      {/* Music section at the bottom center with liquidy circled edge rectangle */}
      <div className="fixed top-4 right-4 z-50 flex flex-col items-center">
        <div className="px-6 py-3 rounded-full bg-white/10 border border-white/30 shadow-lg backdrop-blur-md flex flex-col items-center gap-2 animate-pulse-slow" style={{ boxShadow: '0 4px 32px 0 rgba(31,48,108,0.15)', borderRadius: '2rem 2.5rem 2rem 2.5rem / 2.5rem 2rem 2.5rem 2rem' }}>
          <span className="text-lg md:text-xl font-semibold text-yellow-300 italic font-mono block">🎷🍃 jazzindica</span>
          <div className="flex flex-row items-center gap-5 mt-2">
            <a
              className="flex items-center justify-center hover:underline hover:underline-offset-4"
              href="https://instagram.com/noisheymusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5.25 2A4.25 4.25 0 1 0 15 12a4.25 4.25 0 0 0-4.25-4.25zm0 1.5A2.75 2.75 0 1 1 8.75 12a2.75 2.75 0 0 1 2.75-2.75z" />
              </svg>
            </a>
            <a
              className="flex items-center justify-center hover:underline hover:underline-offset-4"
              href="https://soundcloud.com/noishey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
                <path d="M17.5 16.5c1.38 0 2.5-1.12 2.5-2.5 0-1.13-.76-2.09-1.8-2.41A3.5 3.5 0 0 0 10 13.09V16.5h7.5zm-9 0h1v-4h-1v4zm2 0h1v-5h-1v5zm2 0h1v-6h-1v6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="fixed top-4 left-4 z-50 flex flex-col items-center w-32">
          <Image src="/avatar.png" alt="Avatar" width={128} height={128} className="w-32 h-32 rounded" />
          <span className="mt-2 text-lg font-bold text-white tracking-wide text-center">noishey</span>
          <span className="mt-1 text-sm text-gray-300 text-center">i build and ship iOS mobile first web apps</span>
      </div>
      {/* Buy Me a Coffee floating button */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://buymeacoffee.com/noishey"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2 py-1 rounded-xl bg-white/10 border border-white/20 shadow-md backdrop-blur-md hover:bg-white/20 transition-colors text-xs font-medium"
        >
          <span className="mr-1 font-semibold text-white">buy me a coffee</span>
          <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="3" width="12" height="2" fill="currentColor"/>
            <polygon points="7,5 17,5 15.5,19 8.5,19" fill="currentColor"/>
            <rect x="7" y="9" width="10" height="3" fill="#fff"/>
          </svg>
        </a>
      </div>
      {/* Diagonal scroll section */}
      <DiagonalScroll />
      </div> {/* Close grid container */}
    </div> 
  );
}

