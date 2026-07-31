"use client"

import React, { useState } from "react"
import { MapPin } from "lucide-react"

export interface MapLocation {
  id: string
  name: string
  region: string
  lat: number
  lng: number
  // Percentage coordinates for SVG overlay (x%, y%) on World / India map canvas
  x: number
  y: number
  photoCount?: number
}

interface PhotoMapProps {
  onSelectLocation: (id: string) => void
  activeLocation?: string | null
}

export default function PhotoMap({ onSelectLocation, activeLocation }: PhotoMapProps) {
  const [hoveredLoc, setHoveredLoc] = useState<string | null>(null)

  const handlePinClick = (id: string) => {
    onSelectLocation(id)
    const element = document.getElementById(`photo-accordion-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="w-full space-y-4 my-6">
      {/* BORDERLESS MAP CONTAINER */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] bg-neutral-100/70 dark:bg-neutral-900/50 rounded-2xl overflow-hidden p-2 sm:p-4 transition-colors">
        {/* Borderless World & Regional Map Vector */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full text-neutral-300 dark:text-neutral-800 transition-colors"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Grid Lines */}
          <defs>
            <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="fill-neutral-200 dark:fill-neutral-800" />
            </pattern>
          </defs>
          <rect width="1000" height="500" fill="url(#grid-dots)" />

          {/* North America */}
          <path d="M150,80 Q200,60 260,110 Q280,180 230,220 Q180,240 120,180 Q100,120 150,80 Z" opacity="0.4" />
          {/* South America */}
          <path d="M260,250 Q310,270 330,330 Q300,420 270,440 Q240,360 250,290 Z" opacity="0.4" />
          {/* Europe */}
          <path d="M470,90 Q530,70 560,110 Q540,150 490,160 Q460,130 470,90 Z" opacity="0.4" />
          {/* Africa */}
          <path d="M460,180 Q540,170 570,240 Q540,340 480,350 Q440,270 460,180 Z" opacity="0.4" />
          {/* Asia / Eurasia continent base */}
          <path d="M570,80 Q750,60 880,110 Q850,220 740,240 Q620,200 570,80 Z" opacity="0.35" />
          {/* Australia */}
          <path d="M800,320 Q870,310 890,360 Q860,420 790,390 Q770,350 800,320 Z" opacity="0.4" />

          {/* Detailed Regional Map Focus: India Outline */}
          <g className="text-neutral-400 dark:text-neutral-700 transition-colors" opacity="0.85">
            {/* High-definition India landmass vector path */}
            <path
              d="M 680 140 
                 C 690 130, 710 130, 720 145 
                 C 725 155, 735 160, 745 165 
                 C 760 170, 770 185, 765 200 
                 C 755 210, 745 220, 740 235 
                 C 730 255, 720 280, 715 310 
                 C 710 335, 700 365, 695 385 
                 C 692 395, 688 395, 685 380 
                 C 678 350, 672 320, 668 290 
                 C 665 260, 660 230, 655 215 
                 C 650 200, 652 185, 660 170 
                 C 668 155, 672 145, 680 140 Z"
              fill="currentColor"
              className="hover:text-neutral-500 dark:hover:text-neutral-600 transition-colors duration-300"
            />
          </g>

          {/* Connective Travel Path Lines */}
          <polyline
            points="695,177.5 708,192.5 700,210 672,215 676,305 694,350"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="text-neutral-400 dark:text-neutral-600 opacity-60"
          />
        </svg>
      </div>
    </div>
  )
}
