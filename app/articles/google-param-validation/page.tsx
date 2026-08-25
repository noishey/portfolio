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
                            June 7, 2026
                        </p>
                        <h1 className="article-header text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                            Chat Model Parameter Validation - Vertex AI(GCP)
                        </h1>

                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider font-bold pt-2">
                            LangChain
                        </p>

                        <p>
                            This issue is regarding langchainjs Google Host connection (GoogleHostConnection.computedEndpoint) of Langchain reading Vertex AI’s multi-region zone “eu” just like normal single region like us-central1.
                        </p>

                        <p>
                            The below code snippet shows the logic to rectify this:
                        </p>

                        <p>
                            The getter function
                        </p>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 my-4">
                            <code className="text-sm font-mono leading-relaxed block text-neutral-700 dark:text-neutral-300">
                                <span className="text-red-400">get</span> <span className="text-cyan-400">computedEndpoint</span>(): <span className="text-orange-400">string</span> {"{"}{"\n"}
                                {"  "}<span className="text-red-400">if</span> (<span className="text-red-400">this</span>.<span className="text-cyan-400">location</span> === <span className="text-green-400">"global"</span>) {"{"}{"\n"}
                                {"    "}<span className="text-red-400">return</span> <span className="text-green-400">"aiplatform.googleapis.com"</span>;{"\n"}
                                {"  "}{"}"} <span className="text-red-400">else if</span> (<span className="text-red-400">this</span>.<span className="text-cyan-400">location</span> === <span className="text-green-400">"eu"</span>) {"{"}{"\n"}
                                {"    "}<span className="text-red-400">return</span> <span className="text-green-400">"aiplatform.eu.rep.googleapis.com"</span>;{"\n"}
                                {"  "}{"}"} <span className="text-red-400">else</span> {"{"}{"\n"}
                                {"    "}<span className="text-red-400">return</span> <span className="text-green-400">`\${"{"}</span><span className="text-red-400">this</span>.<span className="text-cyan-400">location</span><span className="text-green-400">{"}"}-aiplatform.googleapis.com\`</span>;{"\n"}
                                {"  "}{"}"}{"\n"}
                                {"}"}
                            </code>
                        </pre>

                        <p>
                            The testing is split into two test functions in chat_models.test.ts
                            <br />
                            The first one is for connecting with Google eu multi-region and the second is for eu with custom endpoint.
                        </p>

                        <p>
                            A MockClientAuthInfo is used to save time and cost of hitting the real Google API
                        </p>

                        <p>
                            This is the snippet of first testing code
                        </p>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 my-4">
                            <code className="text-sm font-mono leading-relaxed block text-neutral-700 dark:text-neutral-300">
                                <span className="text-neutral-500">// Declares a unit test named "platform endpoint - gcp eu location" using an asynchronous execution block</span>{"\n"}
                                <span className="text-cyan-400">test</span>(<span className="text-green-400">"platform endpoint - gcp eu location"</span>, <span className="text-red-400">async</span> () <span className="text-red-400">=&gt;</span> {"{"}{"\n"}
                                {"  "}{"\n"}
                                {"  "}<span className="text-neutral-500">// Creates an empty object to act as a data spy; the mock auth client will record outbound request metrics here</span>{"\n"}
                                {"  "}<span className="text-red-400">const</span> <span className="text-cyan-400">record</span>: <span className="text-orange-400">Record</span>&lt;<span className="text-orange-400">string</span>, <span className="text-orange-400">any</span>&gt; = {"{}"};{"\n"}
                                {"  "}{"\n"}
                                {"  "}<span className="text-neutral-500">// Generates a mock, randomized Google Cloud project ID string to simulate a valid workspace target</span>{"\n"}
                                {"  "}<span className="text-red-400">const</span> <span className="text-cyan-400">projectId</span> = <span className="text-purple-400">mockId</span>();{"\n"}
                                {"  "}{"\n"}
                                {"  "}<span className="text-neutral-500">// Assembles the mock authentication context config, linking the spy object, project ID, and static mock response payload</span>{"\n"}
                                {"  "}<span className="text-red-400">const</span> <span className="text-cyan-400">authOptions</span>: <span className="text-orange-400">MockClientAuthInfo</span> = {"{"}{"\n"}
                                {"    "}record,{"\n"}
                                {"    "}projectId,{"\n"}
                                {"    "}resultFile: <span className="text-green-400">"chat-1-mock.json"</span>,{"\n"}
                                {"  "}{"};"}{"\n"}
                                {"  "}{"\n"}
                                {"  "}<span className="text-neutral-500">// Initializes a new ChatGoogle instance explicitly configured for Vertex AI (gcp) and targets the "eu" region</span>{"\n"}
                                {"  "}<span className="text-red-400">const</span> <span className="text-cyan-400">model</span> = <span className="text-red-400">new</span> <span className="text-purple-400">ChatGoogle</span>({"{"}{"\n"}
                                {"    "}authOptions,{"\n"}
                                {"    "}platformType: <span className="text-green-400">"gcp"</span>,{"\n"}
                                {"    "}location: <span className="text-green-400">"eu"</span>,{"\n"}
                                {"  "}{"});"}{"\n"}
                                {"  "}{"\n"}
                                {"  "}<span className="text-neutral-500">// Constructs a standard sequence of LangChain base message objects to mimic an ongoing multi-turn conversation</span>{"\n"}
                                {"  "}<span className="text-red-400">const</span> <span className="text-cyan-400">messages</span>: <span className="text-orange-400">BaseMessageLike</span>[] = [{"\n"}
                                {"    "}<span className="text-red-400">new</span> <span className="text-purple-400">HumanMessage</span>(<span className="text-green-400">"Flip a coin and tell me H for heads and T for tails"</span>),{"\n"}
                                {"    "}<span className="text-red-400">new</span> <span className="text-purple-400">AIMessage</span>(<span className="text-green-400">"H"</span>),{"\n"}
                                {"    "}<span className="text-red-400">new</span> <span className="text-purple-400">HumanMessage</span>(<span className="text-green-400">"Flip it again"</span>),{"\n"}
                                {"  "}];{"\n"}
                                {"  "}{"\n"}
                                {"  "}<span className="text-neutral-500">// Triggers the execution pipeline, forcing the class to build its internal request structures and call the mock wrapper</span>{"\n"}
                                {"  "}<span className="text-red-400">await</span> <span className="text-cyan-400">model</span>.<span className="text-purple-400">invoke</span>(messages);{"\n"}
                                {"\n"}
                                {"  "}<span className="text-neutral-500">// Asserts that the captured HTTP request URL matches the specialized GCP EU endpoint structure implemented in your fix</span>{"\n"}
                                {"  "}<span className="text-purple-400">expect</span>(record?.opts.url).<span className="text-purple-400">toEqual</span>({"\n"}
                                {"    "}<span className="text-green-400">\`https://aiplatform.eu.rep.googleapis.com/v1/projects/\${"{"}</span>projectId<span className="text-green-400">{"}"}/locations/eu/publishers/google/models/gemini-pro:generateContent\`</span>{"\n"}
                                {"  "});{"\n"}
                                {"});"}
                            </code>
                        </pre>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">Concepts Learned</h2>

                        <p>
                            JavaScript/TypeScript concepts - Structural Typing, Object References and Asynchronous Execution
                        </p>

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
