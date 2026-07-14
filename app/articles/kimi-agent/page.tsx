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
                        <Link
                          href="/"
                          className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors font-mono"
                        >
                          ← Back
                        </Link>

                        <p className="text-sm font-mono text-neutral-500 dark:text-white/40">
                            May 27, 2026
                        </p>

                        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                            Adding Kimi Code Support to CodeGraph: Local MCP Semantic Indexing
                        </h1>

                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider font-bold pt-2">
                            CodeGraph
                        </p>

                        <p>
                            {"The developer tool ecosystem is experiencing a massive shift away from rigid, monolithic plugins toward dynamic, agentic workflows. Central to this evolution is the Model Context Protocol (MCP)—an open standard that enables AI models to safely and securely interact with local data sources and tools."}
                        </p>

                        <p>
                            {"Among the latest generation of flagship models, "}
                            <strong>Kimi Code</strong>
                            {" has been rapidly gaining traction in the engineering community. Known for its massive context window processing and highly accurate code-generation capabilities, it is a prime candidate for advanced repository-level tasks. However, to maximize an agent's reasoning power, it needs an accurate, low-latency understanding of your local codebase."}
                        </p>

                        <p>
                            {"This is where "}
                            <strong>CodeGraph</strong>
                            {" comes in—a sleek tool designed to streamline MCP client-server communication. By building a local semantic index, CodeGraph acts as the context broker between your IDE and the AI. To leverage this synergy, I recently contributed to CodeGraph's repository to integrate native support for Kimi Code."}
                        </p>

                        <p>
                            {"Here is a deep dive into how CodeGraph operates under the hood and how I implemented the integration."}
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">Working</h2>

                        <p>It is distributed in four steps which are</p>

                        <div className="space-y-4 pt-2">
                            <p>
                                <strong>Extraction</strong> - {"This is the mapping of the various nodes of a supported programming language be it functions, loops or classes.The edges are calls, imports, extensions etc."}
                            </p>
                            <p>
                                <strong>Storage</strong> - {"After extraction, the symbols, relationships and files are stored in a simple SQLite database."}
                            </p>
                            <p>
                                <strong>Resolution</strong> - {"This step is the resolution of classes to its definition, framework specific routing paths, imports to its source file etc."}
                            </p>
                            <p>
                                <strong>Auto - Syncing</strong> - {"Codegraph is a standalone semantic index which includes an MCP server.This MCP server monitors the project using native OS file events.Debouncing is one activity that is done by Codegraph to manage the load for the CPU and the disk.MCP acts like an extension which signals the statelessness if a request is made by user during debouncing period.Debouncing is the process of adding a wait time so that the code changes made by user gets processed by Codegraph before the client AI agent makes another request."}
                            </p>
                        </div>

                        <p>
                            {"Codegraph simplifies the user flow by adding a semantic indexing layer stored 100 % locally through SQLite."}
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">Problem Statement</h2>

                        <p>
                            {"The issue is to integrate Kimi Code along with other agents to reap off the benefits of Codegraph."}
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">Solution</h2>

                        <div className="space-y-6 pt-2">
                            <div>
                                <p className="font-semibold text-neutral-800 dark:text-white/90">1. Core Target Implementation</p>
                                <p className="mt-1">
                                    {"The main change made here is the extension of AgentTarget to create KimiTarget.This allows the integration of Kimi CLI into the Codegraph MCP server."}
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-neutral-800 dark:text-white/90">2. Target Registration and Type System</p>
                                <ul className="list-disc pl-5 space-y-3 mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>
                                        <code className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-xs text-neutral-200">src/installer/targets/types.ts</code>
                                        <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400 pl-4">
                                            {"Added 'kimi' to the TargetId union type('claude' | 'cursor' | 'codex' | 'opencode' | 'hermes' | 'kimi')."}
                                        </p>
                                    </li>
                                    <li>
                                        <code className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-xs text-neutral-200">src/installer/targets/registry.ts</code>
                                        <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400 pl-4">
                                            {"Imported and registered kimiTarget in ALL_TARGETS so the CLI automatically lists, installs, and manages Kimi Code along with the other agents."}
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-neutral-800 dark:text-white/90">3. Installer and Uninstaller CLI Updates</p>
                                <ul className="list-disc pl-5 space-y-3 mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>
                                        <code className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-xs text-neutral-200">src/installer/index.ts</code>
                                        <ul className="list-circle pl-5 mt-1.5 space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                                            <li>{"Updated the installer module 's header docs to reflect Kimi Code support."}</li>
                                            <li>{"Updated runUninstaller global / local target selection hints to show where Kimi Code configs live(~/.kimi-code and ./.kimi - code) so users know exactly what files will be removed."}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-neutral-800 dark:text-white/90">4. Testing</p>
                                <ul className="list-disc pl-5 space-y-3 mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>
                                        <code className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-xs text-neutral-200">__tests__/installer-targets.test.ts</code>
                                        <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400 pl-4">
                                            {"Added an integration test assertion to ensure getTarget('kimi') resolves successfully and yields the correct ID."}
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-neutral-800 dark:text-white/90">5. Housekeeping</p>
                                <ul className="list-disc pl-5 space-y-3 mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>
                                        <code className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-xs text-neutral-200">package-lock.json</code>
                                        <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400 pl-4">
                                            {"A minor lockfile dependency update(removed \"peer\": true under an esbuild / postcss sub - dependency)."}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">Learnings</h2>

                        <p>
                            {"This repository exposed me to learn about the concepts of semantic indexing and how more CLI tools like Codegraph could be created to automate and streamline agentic workflows for maximal engineering."}
                        </p>
                        <p>
                            {"KIMI is one agent that definitely needs to be explored."}
                        </p>
                        <p>
                            {"Building CLI extensions that abstract away the friction of MCP configurations is essential for scaling agentic engineering workflows. As local context brokers evolve, pairing them with flagship reasoning models in a tight, isolated, and low-latency loop will become the standard paradigm for software engineering."}
                        </p>

                        <div className="pt-4">
                            <Link
                                href="https://github.com/colbymchenry/codegraph"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-mono text-neutral-500 underline decoration-neutral-800 underline-offset-4 transition-colors hover:text-neutral-200 hover:decoration-neutral-400"
                                aria-label="Link to Repository"
                            >
                                Link To Repository ↗
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