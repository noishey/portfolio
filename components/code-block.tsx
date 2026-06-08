"use client"

import { useEffect, useState } from "react"
import { codeToHtml } from "shiki"
import { useTheme } from "next-themes"

type CodeBlockProps = {
  /** Raw code as a string */
  code: string
  /** Language id, e.g. "typescript", "python", "bash", "json", "tsx", "javascript" */
  language?: string
}

/**
 * Renders syntax-highlighted code using Shiki.
 * Picks between github-light and github-dark themes based on the active theme.
 * Works inside "use client" article pages.
 */
export default function CodeBlock({ code, language = "typescript" }: CodeBlockProps) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [html, setHtml] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    let cancelled = false
    // Resolve the active theme: if "system", use systemTheme; otherwise use the explicit theme.
    const resolved = theme === "system" ? systemTheme : theme
    const shikiTheme = resolved === "light" ? "github-light" : "github-dark"
    codeToHtml(code, { lang: language, theme: shikiTheme })
      .then((out) => {
        if (!cancelled) setHtml(out)
      })
      .catch(() => {
        if (!cancelled) setHtml("")
      })
    return () => {
      cancelled = true
    }
  }, [code, language, theme, systemTheme, mounted])

  return (
    <pre
      className="overflow-x-auto rounded-2xl border border-neutral-200 bg-neutral-50 p-4 my-4 dark:border-white/10 dark:bg-white/5 [&_code]:text-sm [&_code]:font-mono [&_code]:leading-relaxed"
      // Shiki returns already-escaped HTML; this is the supported way to inject it.
      dangerouslySetInnerHTML={{ __html: html || `<code>${escapeHtml(code)}</code>` }}
    />
  )
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}
