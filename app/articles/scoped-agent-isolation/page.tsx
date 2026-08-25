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
                            May 25, 2026
                        </p>

                        <h1 className="article-header text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                            Scoped Agent Isolation
                        </h1>

                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider font-bold pt-2">
                            Agent Memory
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">Repository</h2>

                        <p>
                            This{" "}
                            <a
                                href="https://github.com/rohitg00/agentmemory"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
                            >
                                repository
                            </a>{" "}
                            has the software that acts as the database/memory layer for multi-agent environment. In general an agent forgets the context of the prompts post the session. This library mitigates that issue by storing the data such as Sessions, Raw Observations, Compressed Observations and Long Term Memories. There are two ways the data is stored which are Key-Value pairs (Instant Retrieval) and Indexing (Deep Contextual Search).
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">Problem Statement</h2>

                        <p>
                            The issue is regarding a system architectural problem which creates contextual pollution for agents in the scene. The problems are Token Pollution and State Overwrite.
                        </p>
                        <p>
                            Token Pollution happens because of multiple agents could be present in a session, say a Developer Agent could be using the terminal multiple times and a Test Agent could run parallely, this results in mixing of data stored and loss of context. The State Overwrite happens when parallel running agents overwrite each other memory thus polluting the database. The agents here run in a Node.js environment and there is a zero dependency database design.
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">Solution</h2>

                        <p>
                            The solution to this is Scoped Agent Isolation.
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">Steps of my solution:</h2>

                        <p>
                            1. Adding <code>agentId?: string;</code> to all the memory type{" "}
                            <a
                                href="https://github.com/rohitg00/agentmemory/blob/main/src/types.ts"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
                            >
                                interfaces
                            </a>. The question mark ensures backward compatibility as legacy data won’t be having the agentId field.
                        </p>

                        <p>
                            2. Tracking Env State - It is to modify the state of the agent by cleaning it to either make it isolated or shared
                        </p>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 my-4">
                            <code className="text-sm font-mono leading-relaxed block text-neutral-700 dark:text-neutral-300">
                                <span className="text-neutral-500">// 1. Check for the agent ID across possible environment variable aliases</span>{"\n"}
                                <span className="text-red-400">const</span> <span className="text-cyan-400">agentId</span> = <span className="text-cyan-400">process</span>.<span className="text-cyan-400">env</span>.<span className="text-cyan-400">AGENT_ID</span> || <span className="text-cyan-400">process</span>.<span className="text-cyan-400">env</span>.<span className="text-cyan-400">AGENTMEMORY_AGENT_ID</span>;{"\n\n"}
                                <span className="text-neutral-500">// 2. Read the scope variable, default to 'shared' if not provided</span>{"\n"}
                                <span className="text-red-400">const</span> <span className="text-cyan-400">scopeInput</span> = <span className="text-cyan-400">process</span>.<span className="text-cyan-400">env</span>.<span className="text-cyan-400">AGENT_SCOPE</span> || <span className="text-cyan-400">process</span>.<span className="text-cyan-400">env</span>.<span className="text-cyan-400">AGENTMEMORY_AGENT_SCOPE</span> || <span className="text-green-400">'shared'</span>;{"\n\n"}
                                <span className="text-neutral-500">// 3. Normalize the string (lowercase it and trim whitespace) to prevent typos from breaking the app</span>{"\n"}
                                <span className="text-red-400">const</span> <span className="text-cyan-400">agentScope</span> = <span className="text-cyan-400">scopeInput</span>.<span className="text-purple-400">toLowerCase()</span>.<span className="text-purple-400">trim()</span> === <span className="text-green-400">'isolated'</span> ? <span className="text-green-400">'isolated'</span> : <span className="text-green-400">'shared'</span>;
                            </code>
                        </pre>

                        <p>
                            3. Lifecyle Propogation/Ingestion Flow
                        </p>

                        <p className="pl-4 font-semibold text-neutral-800 dark:text-white/95">
                            A. Session Creation (<code>src/triggers/api.ts</code>)
                        </p>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 my-4">
                            <code className="text-sm font-mono leading-relaxed block text-neutral-700 dark:text-neutral-300">
                                <span className="text-neutral-500">// Automatically inject the running agent's ID if isolation is configured</span>{"\n"}
                                <span className="text-cyan-400">agentId</span>: <span className="text-cyan-400">agentConfig</span>.<span className="text-cyan-400">agentScope</span> === <span className="text-green-400">'isolated'</span> ? <span className="text-cyan-400">agentConfig</span>.<span className="text-cyan-400">agentId</span> : <span className="text-red-400">undefined</span>,
                            </code>
                        </pre>

                        <p className="pl-4 font-semibold text-neutral-800 dark:text-white/95">
                            B. Making Observations (<code>src/functions/observe.ts</code>)
                        </p>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 my-4">
                            <code className="text-sm font-mono leading-relaxed block text-neutral-700 dark:text-neutral-300">
                                <span className="text-red-400">export async function</span> <span className="text-purple-400">observe</span>(<span className="text-cyan-400">sessionId</span>: <span className="text-orange-400">string</span>, <span className="text-cyan-400">content</span>: <span className="text-orange-400">string</span>) {"{\n"}
                                {"  "}<span className="text-neutral-500">// Fetch the current session details from the DB</span>{"\n"}
                                {"  "}<span className="text-red-400">const</span> <span className="text-cyan-400">session</span> = <span className="text-red-400">await</span> <span className="text-cyan-400">db</span>.<span className="text-purple-400">getSession</span>(<span className="text-cyan-400">sessionId</span>);{"\n\n"}
                                {"  "}<span className="text-red-400">const</span> <span className="text-cyan-400">observationData</span> = {"{\n"}
                                {"    "}<span className="text-cyan-400">sessionId</span>,{"\n"}
                                {"    "}<span className="text-cyan-400">content</span>,{"\n"}
                                {"    "}<span className="text-neutral-500">// Propagate the agentId downward from the parent session</span>{"\n"}
                                {"    "}<span className="text-cyan-400">agentId</span>: <span className="text-cyan-400">session</span>?.<span className="text-cyan-400">agentId</span>,{"\n"}
                                {"  "}{"};\n\n"}
                                {"  "}<span className="text-neutral-500">// Code to insert observation into the database...</span>{"\n"}
                                {"}"}
                            </code>
                        </pre>

                        <p>
                            4. Algorithmic Gatekeeping (Two-Pass Search Filtering)
                        </p>

                        <p className="pl-4 font-semibold text-neutral-800 dark:text-white/95">
                            Core filtering logic
                        </p>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 my-4">
                            <code className="text-sm font-mono leading-relaxed block text-neutral-700 dark:text-neutral-300">
                                <span className="text-neutral-500">// 1. Fetch a larger pool of potential matches from the vector database (Over-fetching)</span>{"\n"}
                                <span className="text-red-400">const</span> <span className="text-cyan-400">rawResults</span> = <span className="text-red-400">await</span> <span className="text-cyan-400">vectorDb</span>.<span className="text-purple-400">search</span>(<span className="text-cyan-400">projectId</span>, <span className="text-cyan-400">query</span>, <span className="text-cyan-400">limit</span> * <span className="text-orange-400">3</span>);{"\n\n"}
                                <span className="text-neutral-500">// 2. If the system is set to 'shared', bypass filtering. If 'isolated', enforce boundaries.</span>{"\n"}
                                <span className="text-red-400">if</span> (<span className="text-cyan-400">config</span>.<span className="text-cyan-400">agentScope</span> === <span className="text-green-400">'isolated'</span>) {"{\n"}
                                {"  "}<span className="text-red-400">const</span> <span className="text-cyan-400">activeAgentId</span> = <span className="text-cyan-400">config</span>.<span className="text-cyan-400">agentId</span>;{"\n"}
                                {"  "}<span className="text-red-400">const</span> <span className="text-cyan-400">filteredResults</span> = <span className="text-cyan-400">rawResults</span>.<span className="text-purple-400">filter</span>((<span className="text-cyan-400">item</span>) =&gt; {"{\n"}
                                {"    "}<span className="text-neutral-500">// RULE A: If the item belongs to the active agent, let it pass</span>{"\n"}
                                {"    "}<span className="text-red-400">if</span> (<span className="text-cyan-400">item</span>.<span className="text-cyan-400">agentId</span> === <span className="text-cyan-400">activeAgentId</span>) <span className="text-red-400">return true</span>;{"\n\n"}
                                {"    "}<span className="text-neutral-500">// RULE B: If the item has NO agentId (legacy data from before your PR), let it pass so history isn't lost</span>{"\n"}
                                {"    "}<span className="text-red-400">if</span> (<span className="text-cyan-400">item</span>.<span className="text-cyan-400">agentId</span> === <span className="text-red-400">undefined</span> || <span className="text-cyan-400">item</span>.<span className="text-cyan-400">agentId</span> === <span className="text-red-400">null</span>) <span className="text-red-400">return true</span>;{"\n\n"}
                                {"    "}<span className="text-neutral-500">// RULE C: If it belongs to a completely different agent ID, block it</span>{"\n"}
                                {"    "}<span className="text-red-400">return false</span>;{"\n"}
                                {"  "}{"});\n\n"}
                                {"  "}<span className="text-neutral-500">// 3. Slice the filtered array down to the exact maximum number of results requested by the user</span>{"\n"}
                                {"  "}<span className="text-red-400">return</span> <span className="text-cyan-400">filteredResults</span>.<span className="text-purple-400">slice</span>(<span className="text-orange-400">0</span>, <span className="text-cyan-400">limit</span>);{"\n"}
                                {"}"}
                            </code>
                        </pre>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">Learnings</h2>

                        <p>
                            This is a good amount of exposure towards multi-agent environments and how the state of the data retrieval is managed. I was able to strengthen the fundamental concepts in js/ts ecosystem like runtime environment,closures, interfaces, optional chaining etc. The ai engineering concepts which I need to explore would be vector embeddings, retrieval augemtnaed generattion(RAGs) and reciprocal rank fusion.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="https://github.com/rohitg00/agentmemory"
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
