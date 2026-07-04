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
                            May 17, 2026
                        </p>

                        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                            Streaming Byte Cap to Prevent Resource Exhaustion
                        </h1>

                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider font-bold pt-2">
                            MCP Servers
                        </p>

                        <p>
                            When building tools that fetch arbitrary external web content—such as Model Context Protocol (MCP) servers—unbounded response sizes are a critical vulnerability. Without strict limits, a server can easily be brought down by a resource exhaustion attack (e.g., fetching a multi-gigabyte file that floods system memory).
                        </p>

                        <p>
                            A recent pull request (
                            <a
                                href="https://github.com/modelcontextprotocol/servers/pull/4185"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
                            >
                                PR #4185
                            </a>
                            ) in the <code>modelcontextprotocol/servers</code> repository addresses this vector by refactoring the <code>fetch</code> tool to use async memory-safe streaming combined with a hard byte cap.
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white">The Core Implementation</h2>
                        <p>
                            The upgrade shifts from an eager, all-at-once data retrieval model to an incremental chunk-processing model.
                        </p>

                        <h3 className="text-lg font-medium text-neutral-800 dark:text-white/90">1. Enforcing a Hard Byte Cap</h3>
                        <p>
                            The PR introduces a strict safety ceiling of <strong>2MB</strong> (<code>MAX_RESPONSE_BYTES</code>). Instead of relying on the HTTP <code>Content-Length</code> header (which can be easily spoofed or omitted by malicious or misconfigured servers), the cap is enforced programmatically during chunk consumption.
                        </p>

                        <h3 className="text-lg font-medium text-neutral-800 dark:text-white/90">2. Memory-Safe Streaming with HTTPX</h3>
                        <p>
                            By moving from standard retrieval to HTTPX's streaming utilities, the server can inspect data as it arrives.
                        </p>

                        <p>
                            The updated logic imports <code>HTTPError</code> from <code>httpx</code> to gracefully catch and handle network disruptions, timeouts, or protocol violations:
                        </p>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
                            <code className="text-sm font-mono leading-relaxed block">
                                <span className="text-red-400">from</span> <span className="text-cyan-400">httpx</span> <span className="text-red-400">import</span> <span className="text-orange-400">HTTPError</span>{"\n"}
                                <span className="text-red-400">from</span> <span className="text-cyan-400">typing</span> <span className="text-red-400">import</span> <span className="text-orange-400">Annotated</span>, <span className="text-orange-400">Tuple</span>{"\n"}
                                <span className="text-red-400">from</span> <span className="text-cyan-400">urllib.parse</span> <span className="text-red-400">import</span> <span className="text-purple-400">urlparse</span>, <span className="text-purple-400">urlunparse</span>
                            </code>
                        </pre>

                        <p>
                            During the stream iteration, the server tracks the cumulative bytes received. If the total exceeds the 2MB threshold, the stream is aborted immediately, preventing the server from allocating excessive memory.
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white">Configuration & Tooling Updates</h2>
                        <p>
                            Beyond the core server logic, the PR refactors the Python environment configuration to guarantee strict type safety and predictable async testing behavior.
                        </p>

                        <p>
                            In <code>src/fetch/pyproject.toml</code>, explicit configurations for <code>pyright</code> and <code>pytest</code> were consolidated:
                        </p>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
                            <code className="text-sm font-mono leading-relaxed block">
                                <span className="text-red-400">[tool.pytest.ini_options]</span>{"\n"}
                                <span className="text-cyan-400">testpaths</span> = [ <span className="text-green-400">"tests"</span> ]{"\n"}
                                <span className="text-cyan-400">asyncio_mode</span> = <span className="text-green-400">"auto"</span>{"\n"}
                                {"\n"}
                                <span className="text-red-400">[tool.pyright]</span>{"\n"}
                                <span className="text-cyan-400">pythonVersion</span> = <span className="text-green-400">"3.10"</span>{"\n"}
                                <span className="text-cyan-400">typeCheckingMode</span> = <span className="text-green-400">"basic"</span>{"\n"}
                                <span className="text-cyan-400">include</span> = [ <span className="text-green-400">"src"</span>, <span className="text-green-400">"tests"</span> ]
                            </code>
                        </pre>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong><code>asyncio_mode = "auto"</code></strong>: Ensures that the newly added async streaming test cases are executed natively by <code>pytest-asyncio</code> without requiring verbose decorators on every test function.
                            </li>
                            <li>
                                <strong>Pyright Type Verification</strong>: Enforces <code>basic</code> type checking against a target of Python 3.10, ensuring that async generators and chunk types strictly align with the expected type definitions.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white">Summary of Benefits</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>DoS Protection</strong>: Massive payloads are cut off at exactly 2MB before they can saturate memory.
                            </li>
                            <li>
                                <strong>Predictable Footprint</strong>: Streaming guarantees a low, fixed memory overhead regardless of response length.
                            </li>
                            <li>
                                <strong>Graceful Degradation</strong>: Enhanced error handling ensures network anomalies or breached caps return structured failures rather than unhandled exceptions.
                            </li>
                        </ul>

                        <div className="pt-4">
                            <Link
                                href="https://github.com/modelcontextprotocol/servers/pull/4185"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-mono text-neutral-500 underline decoration-neutral-800 underline-offset-4 transition-colors hover:text-neutral-200 hover:decoration-neutral-400"
                                aria-label="Link to Pull Request"
                            >
                                Link To Pull Request ↗
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
