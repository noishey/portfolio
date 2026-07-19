export interface SiteChange {
  date: string
  added?: string[]
  fixed?: string[]
  changed?: string[]
}

export const siteChanges: SiteChange[] = [
  {
    date: "July 19, 2026",
    added: [
      "Published a new article: 'A F*cked Family & Society' discussing control systems, colonization effects, and the path to financial freedom."
    ],
    changed: [
      "Removed technical articles ('Historical Profiles' and 'Streaming Byte Cap') from the essays section by properly classifying them under tech tags."
    ]
  },
  {
    date: "July 15, 2026",
    added: [
      "Dedicated 'music' section showing upcoming plans and a stay tuned message.",
      "Collapsible and expandable side-nav navigation bar that is always visible on all pages and viewports.",
      "Touch slide gesture support to switch sections in the SideNav by sliding a finger across icons on mobile.",
      "Hover-based debounced section switching on desktop for immediate page shifting."
    ],
    changed: [
      "Enlarged the 'neural manacle' logo header text in the top navigation bar for bolder aesthetics.",
      "Repositioned the social media links directly under the logo title on mobile viewport sizes to save space.",
      "Increased the vertical height of the SideNav bar and expanded spacing between section icons for a more premium look.",
      "Shifted main mobile layout padding to accommodate the collapsed SideNav strip on the left.",
      "Optimized bookshelf load times by pointing book cover URLs directly to Open Library CDN, bypassing the server-side API proxy."
    ]
  },
  {
    date: "July 14, 2026",
    added: [
      "Collapsible photography section titled 'North Goa, India' displaying a personal note, a featured photo, and a grid of 53 other optimized photos.",
      "Collapsible photography section titled 'Rishikesh, Uttarakhand, India' displaying a grid of 21 optimized photos.",
      "Collapsible photography section titled 'Dharamkot & Mcleodganj, Himachal Pradesh, India' displaying a grid of 38 optimized photos.",
      "Published two new poems: 'These Are The Times' and 'Churned Are The Masses'.",
      "Collapsible photography section titled 'Kochi, Kerala, India' displaying a grid of 19 optimized photos.",
      "Published two new articles: 'All The Judgement is Inside You Baby.' and 'I live in India but I'm English.'.",
      "Added a new 'poetry' tab to showcase articles tagged with 'poetry'."
    ],
    changed: [
      "Renamed the 'philosophy' tab, state, and related tags to 'writing'.",
      "Removed the 'manhood' tab, articles filter, and footnote from the homepage.",
      "Updated homepage subtitle to 'walking back the hippie trail' with a flowing pastel rainbow text animation."
    ]
  },
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
