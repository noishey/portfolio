export interface SiteChange {
  date: string
  added?: string[]
  fixed?: string[]
  changed?: string[]
}

export const siteChanges: SiteChange[] = [
  {
    date: "July 12, 2026",
    changed: [
      "Switched primary social communication channel from X (Twitter) to Bluesky (@neuralmanacle.bsky.social)."
    ]
  },
  {
    date: "June 16, 2026",
    added: [
      "In-site command search palette (accessible via Cmd+K or navigation trigger).",
      "Granular taxonomy tag cloud on the homepage to filter posts dynamically.",
      "Dedicated '/changes' changelog feed to track portfolio feature releases."
    ],
    changed: [
      "Unified CSS layout and fonts to use Geist and Geist Mono across all components."
    ]
  },
  {
    date: "June 7, 2026",
    added: [
      "Interactive dot grid background shader using WebGL."
    ],
    fixed: [
      "Article layout responsiveness on narrow mobile viewpoints."
    ]
  },
  {
    date: "May 20, 2026",
    added: [
      "Plausible Analytics script integration for privacy-first metrics.",
      "RSS feed generator at /feed.xml for syndicating posts."
    ]
  }
]
