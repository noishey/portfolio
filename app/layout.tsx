import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'noishey',
  description: 'Created with v0',
  generator: 'v0.dev',
  openGraph: {
    title: "noishey's tech blog",
    description: 'ai engineer/oss/web-apps',
    images: [],
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Add className="dark" and suppressHydrationWarning here
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <style>{`
:root {
  --font-sans: "Geist", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
html { font-family: var(--font-mono); }
        `}</style>
      </head>
      <body className="min-h-dvh bg-black text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <footer className="mx-auto w-full max-w-2xl px-4 pb-12 pt-8 border-t border-white/5">
            <div className="flex items-center justify-between font-mono">
              <span className="text-xs text-neutral-600">
                noishey
              </span>
              <a
                href="https://rss.app/feeds/ZngrW2bih5eA4Ow2.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-200 transition-colors"
                aria-label="RSS Feed Link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 text-orange-500/80 transition-colors group-hover:text-orange-400"
                >
                  <path d="M4 11a9 9 0 0 1 9 9" />
                  <path d="M4 4a16 16 0 0 1 16 16" />
                  <circle cx="5" cy="19" r="1" />
                </svg>
                rss feed
              </a>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}