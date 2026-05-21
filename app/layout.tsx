import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'noishey',
  description: 'Created with v0',
  generator: 'v0.dev',
  openGraph: {
    title: 'Arjun Shenoy | Portfolio',
    description: 'ai engineer',
    images: [],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Arjun Shenoy | Portfolio',
    description: 'ai engineer/open-source',
    images: [],
  },
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
html { font-family: var(--font-sans); }
        `}</style>
      </head>
      <body className="min-h-dvh bg-neutral-950 text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}