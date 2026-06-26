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
                            May 31, 2026
                        </p>

                        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                            Supporting Big Int Type
                        </h1>

                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider font-bold pt-2">
                            QuickJS
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">
                            Repository
                        </h2>

                        <p>
                            This is the deepagent repository.
                        </p>

                        <p>
                            Deepagent is the layer above langgraph which is the orchestration layer of langchain. Deepagentjs is a core framework for building stateful, multi-actor applications with loops.
                        </p>

                        <p>
                            Running AI generated code in host server is a massive security risk so this repository allows a sandbox called @langchain/quickjs known as the WASM(Web Assembly) Sandbox.
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">
                            Problem Statement
                        </h2>

                        <p>
                            JSON is serialized across environments for supporting across it. Here the environment is Web Assembly which provides a safe environment to run the js code made up by agents. The problem is js serialization json.stringify doesn’t natively support BigInt data types and throws a harsh TypeError.
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">
                            The Fix
                        </h2>

                        <p className="text-neutral-700 dark:text-neutral-300">
                            The solution involves updates across utility functions, sandbox execution contexts, and TypeScript compilation configurations:
                        </p>

                        <div className="mt-8 space-y-10 border-l border-white/10 pl-6 ml-1">
                            {/* File 1: utils.ts */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                                    <span className="font-mono text-xs text-neutral-800 bg-neutral-100 border border-neutral-200 dark:text-neutral-300 dark:bg-white/5 dark:border-white/10 px-2 py-0.5 rounded">
                                        libs/providers/quickjs/src/utils.ts
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Define a reusable utility function to safely serialize guest values to JSON, converting native <code>BigInt</code> types into strings:
                                </p>
                                <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <code className="text-sm font-mono leading-relaxed block text-neutral-200">
                                        <span className="text-neutral-500">/**{"\n"}</span>
                                        <span className="text-neutral-500"> * Safely stringifies a value to JSON, converting BigInt values to strings.{"\n"}</span>
                                        <span className="text-neutral-500"> */{"\n"}</span>
                                        <span className="text-red-400">export</span> <span className="text-red-400">function</span> <span className="text-cyan-400">stringifyJson</span>(value: <span className="text-orange-400">unknown</span>, space?: <span className="text-orange-400">string</span> | <span className="text-orange-400">number</span>): <span className="text-orange-400">string</span> {"{"}{"\n"}
                                        {"  "}<span className="text-red-400">return</span> <span className="text-cyan-400">JSON</span>.<span className="text-cyan-400">stringify</span>({"\n"}
                                        {"    "}value,{"\n"}
                                        {"    "}(_, item) <span className="text-red-400">=&gt;</span> (typeof item === <span className="text-green-400">"bigint"</span> ? item.toString() : item),{"\n"}
                                        {"    "}space,{"\n"}
                                        {"  "});{"\n"}
                                        {"}"}
                                    </code>
                                </pre>
                            </div>

                            {/* File 2: session.ts */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                                    <span className="font-mono text-xs text-neutral-800 bg-neutral-100 border border-neutral-200 dark:text-neutral-300 dark:bg-white/5 dark:border-white/10 px-2 py-0.5 rounded">
                                        libs/providers/quickjs/src/session.ts
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Integrate the utility in the runtime execution context. When processing execution outcomes, format the result and preserve native formats without string quotes when possible:
                                </p>
                                <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <code className="text-sm font-mono leading-relaxed block text-neutral-200">
                                        <span className="text-red-400">if</span> (result.ok) {"{"}{"\n"}
                                        {"  "}<span className="text-red-400">if</span> (result.value !== <span className="text-orange-400">undefined</span>) {"{"}{"\n"}
                                        {"    "}<span className="text-red-400">const</span> <span className="text-cyan-400">formatted</span> ={"\n"}
                                        {"      "}typeof result.value === <span className="text-green-400">"string"</span>{"\n"}
                                        {"        "}? result.value{"\n"}
                                        {"        "}: typeof result.value === <span className="text-green-400">"bigint"</span>{"\n"}
                                        {"          "}? result.value.toString(){"\n"}
                                        {"          "}: stringifyJson(result.value, <span className="text-purple-400">2</span>);{"\n"}
                                        {"    "}parts.push(<span className="text-green-400">`→ ${"{"}formatted{"}"}`</span>);{"\n"}
                                        {"  "}{"}"}{"\n"}
                                        {"}"}
                                    </code>
                                </pre>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    The above code ensures the final output is clean of double quotes when presenting the BigInt result.
                                </p>

                                <div className="mt-4 p-5 rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/5 space-y-3">
                                    <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                                        Resolving the Web Assembly FFI Boundary Issues
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                                        <li>
                                            <strong>Fallback Detection:</strong> If <code>context.dump</code> encounters an object containing a bigint, it returns <code>&quot;[object Object]&quot;</code> due to internal VM serialization throws. We actively check for and handle this string fallback.
                                        </li>
                                        <li>
                                            <strong>Sentinel Stringification:</strong> We evaluate a stringify function inside the guest context that serializes bigints with a prefix sentinel <code>&quot;__BIGINT__:&quot;</code>.
                                        </li>
                                        <li>
                                            <strong>Dynamic Deserialization:</strong> The host deserializes this string using <code>JSON.parse</code> with a reviver function, translating <code>&quot;__BIGINT__:&lt;value&gt;&quot;</code> strings back into native host-side bigint primitives dynamically.
                                        </li>
                                        <li>
                                            <strong>Tool Safety:</strong> Prevents crashes inside <code>extractToolText(result)</code> if a host-side tool returns a structure containing a native BigInt to the guest VM.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* File 3: tsconfig.json */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                                    <span className="font-mono text-xs text-neutral-800 bg-neutral-100 border border-neutral-200 dark:text-neutral-300 dark:bg-white/5 dark:border-white/10 px-2 py-0.5 rounded">
                                        libs/deepagents/tsconfig.json
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Resolves the circular reference compilation error caused by modules referencing types from adjacent packages.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">
                            Learnings
                        </h2>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                The role of a sandbox to ensure safety in software development especially production grade code
                            </li>
                            <li>
                                Javascript primitive BigInt
                            </li>
                            <li>
                                Serialization concept across multiple environments and its significance
                            </li>
                        </ul>

                        <div className="pt-4">
                            <Link
                                href="https://github.com/langchain-ai/deepagents"
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
