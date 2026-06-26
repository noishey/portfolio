"use client"

import Link from "next/link"
import RevealOnView from "@/components/reveal-on-view"
import ArticleTags from "@/components/article-tags"

export default function ArticlePage() {
    return (
        <main className="mx-auto w-full max-w-2xl px-4 py-20">
            <article className="prose prose-invert prose-neutral max-w-none">
                <RevealOnView intensity="soft">
                    <div className="space-y-6">
                        <p className="text-sm font-mono text-neutral-500 dark:text-white/40">
                            May 22, 2026
                        </p>

                        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                            Historical Profiles for Nuclear Site Layers
                        </h1>

                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider font-bold pt-2">
                            Map Tooltips
                        </p>

                        <p>
                            Analyzing geopolitical infrastructures requires more than raw coordinates and status flags. To provide analysts with deep contextual intelligence, a recent enhancement ({" "}
                            <a
                                href="https://github.com/koala73/worldmonitor/issues/3840"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
                            >
                                Issue #3840
                            </a>
                            ) in the <code>koala73/worldmonitor</code> repository introduces rich historical profiles for nuclear facility layers. This feature exposes operational dates, international treaties, and chronological development timelines directly within geospatial map overlays.
                        </p>

                        <p>
                            By integrating these profiles natively into both the 3D globe visualization and 2D flat maps, users can drill down into historical records without losing geographical context.
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white">Data Structure Extensions</h2>
                        <p>
                            To model these timelines, we extended the core geospatial data structures. The <code>NuclearFacility</code> interface and <code>NuclearSiteMarker</code> type definitions now support a structured <code>historicalProfile</code> block:
                        </p>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
                            <code className="text-sm font-mono leading-relaxed block">
                                <span className="text-red-400">export</span> <span className="text-red-400">interface</span> <span className="text-orange-400">HistoricalProfile</span> {"{\n"}
                                {"  "}<span className="text-cyan-400">established</span>: <span className="text-orange-400">string</span>;{"\n"}
                                {"  "}<span className="text-cyan-400">treaties</span>: <span className="text-orange-400">string</span>[];{"\n"}
                                {"  "}<span className="text-cyan-400">timeline</span>: {"{\n"}
                                {"    "}<span className="text-cyan-400">year</span>: <span className="text-orange-400">number</span>;{"\n"}
                                {"    "}<span className="text-cyan-400">event</span>: <span className="text-orange-400">string</span>;{"\n"}
                                {"  "}{"}[];\n"}
                                {"}\n"}
                                {"\n"}
                                <span className="text-red-400">export</span> <span className="text-red-400">interface</span> <span className="text-orange-400">NuclearFacility</span> {"{\n"}
                                {"  "}<span className="text-cyan-400">id</span>: <span className="text-orange-400">string</span>;{"\n"}
                                {"  "}<span className="text-cyan-400">name</span>: <span className="text-orange-400">string</span>;{"\n"}
                                {"  "}<span className="text-cyan-400">coordinates</span>: [<span className="text-orange-400">number</span>, <span className="text-orange-400">number</span>];{"\n"}
                                {"  "}<span className="text-cyan-400">historicalProfile</span>?: <span className="text-orange-400">HistoricalProfile</span>;{"\n"}
                                {"}"}
                            </code>
                        </pre>

                        <p>
                            We then added comprehensive Manhattan Project history to the primary geo-configurations for key historical sites including <strong>Los Alamos</strong> and <strong>Oak Ridge</strong>.
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white">Interactive Details Accordion</h2>
                        <p>
                            We embedded a custom interactive <code>&lt;details&gt;</code> accordion directly inside both 3D Globe map tooltips (<code>GlobeMap.ts</code>) and 2D flat map popups (<code>MapPopup.ts</code>). This allows dense timeline grids to remain hidden until explicitly requested by the analyst.
                        </p>

                        <h3 className="text-lg font-medium text-neutral-800 dark:text-white/90">Smooth CSS Arrow Rotation</h3>
                        <p>
                            To replace standard browser disclosure indicators with premium micro-interactions, we added custom animations in <code>main.css</code>. This hides Chrome/Safari triangles and rotates our custom arrow indicator smoothly by <code>180deg</code> upon opening:
                        </p>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
                            <code className="text-sm font-mono leading-relaxed block">
                                <span className="text-green-400">/* Hide default browser disclosure triangles */</span>{"\n"}
                                <span className="text-red-400">details summary::-webkit-details-marker</span> {"{\n"}
                                {"  "}<span className="text-cyan-400">display</span>: <span className="text-green-400">none</span>;{"\n"}
                                {"}\n"}
                                {"\n"}
                                <span className="text-green-400">/* Smooth arrow indicator rotation */</span>{"\n"}
                                <span className="text-red-400">details[open] .arrow-indicator</span> {"{\n"}
                                {"  "}<span className="text-cyan-400">transform</span>: <span className="text-purple-400">rotate</span>(<span className="text-orange-400">180deg</span>);{"\n"}
                                {"}\n"}
                                {"\n"}
                                <span className="text-red-400">.arrow-indicator</span> {"{\n"}
                                {"  "}<span className="text-cyan-400">transition</span>: <span className="text-cyan-400">transform</span> <span className="text-orange-400">0.2s</span> <span className="text-green-400">ease-in-out</span>;{"\n"}
                                {"}"}
                            </code>
                        </pre>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white">Spatial Tooltip Optimizations</h2>
                        <p>
                            Exposing timeline layers in tight popups required careful spatial refactoring. We made two critical adjustments to the UX framework:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Tooltip Max Width Expansion</strong>: Increased standard tooltip maximum width to <code>300px</code>, accommodating multi-column historical dates and descriptions without vertical text truncation or horizontal overflow.
                            </li>
                            <li>
                                <strong>Dynamic Dismiss Extension</strong>: Increased the automatic tooltip hide/dismiss timer from the standard <code>3500ms</code> to <code>5000ms</code> when an interactive profile is active. This grants analysts ample time to hover and click the details accordion before the popup closes.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white">Summary of Benefits</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Context Preservation</strong>: Research timelines can be consumed inline without navigating away from the active geospatial layer.
                            </li>
                            <li>
                                <strong>Dense Information Layout</strong>: Collapsible accordion design preserves the map viewport's signal-to-noise ratio.
                            </li>
                            <li>
                                <strong>High-Fidelity Animations</strong>: Transition animations deliver a highly responsive, modern interface aesthetic.
                            </li>
                        </ul>

                        <div className="pt-4">
                            <Link
                                href="https://github.com/koala73/worldmonitor/issues/3840"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-mono text-neutral-500 underline decoration-neutral-800 underline-offset-4 transition-colors hover:text-neutral-200 hover:decoration-neutral-400"
                                aria-label="Link to GitHub Issue"
                            >
                                Link To GitHub Issue ↗
                            </Link>
                        </div>

                        <ArticleTags />

                        <div className="pt-8">
                            <Link
                                href="/"
                                className="text-sm text-neutral-500 transition-colors hover:text-neutral-200 font-mono"
                            >
                                ← Back
                            </Link>
                        </div>
                    </div>
                </RevealOnView>
            </article>
        </main>
    )
}
