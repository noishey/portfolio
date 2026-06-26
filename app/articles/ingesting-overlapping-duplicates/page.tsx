"use client"

import Link from "next/link"
import Image from "next/image"
import RevealOnView from "@/components/reveal-on-view"
import ArticleTags from "@/components/article-tags"

export default function ArticlePage() {
    return (
        <main className="mx-auto w-full max-w-2xl px-4 py-20">
            <article className="prose prose-invert prose-neutral max-w-none">
                <RevealOnView intensity="soft">
                    <div className="space-y-6">
                        <p className="text-sm font-mono text-neutral-500 dark:text-white/40">
                            May 23, 2026
                        </p>

                        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                            Flagging Ingested Duplicates @gbrain
                        </h1>

                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider font-bold pt-2">
                            gbrain
                        </p>

                        <p>
                            Firstly,{" "}
                            <a
                                href="https://github.com/garrytan/gbrain"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
                            >
                                gbrain
                            </a>{" "}
                            is a repository which I stumbled on X while scrolling.It happens to be like a second - brain for an AI agent.In general agents when accessed start with zero context.gbrain solves this problem by giving it information for eg from meetings, calls, research, notes etc.gbrain also exposes MCP tools to the client LLMs to read and write back.
                        </p>

                        <p>
                            Gbrain has a CLI endpoint where ingestion happens and it is a manual step.We could trigger it by this command:
                        </p>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 my-4">
                            <code className="text-sm font-mono leading-relaxed block text-neutral-700 dark:text-neutral-300">
                                <span className="text-cyan-400">gbrain</span> ingest / path / to / vault /
                            </code>
                        </pre>

                        <p>
                            Other than ingestion there are three major actions performed which are retrieval, writing - back and enrichment.
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white">The system design of Gbrain.</h2>

                        <div className="my-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 animate-fade-in">
                            <Image
                                src="/gbrain_full_architecture_overview.svg"
                                alt="The system design of Gbrain"
                                width={1280}
                                height={720}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white">The database design</h2>

                        <div className="my-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 animate-fade-in">
                            <Image
                                src="/gbrain_db_simple.svg"
                                alt="The database design"
                                width={1280}
                                height={720}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>

                        <p>
                            This issue is regarding solving the problem of duplicates which arise due to ingestion of files due to the ambiguity of a directory and its subdirectory as slug value for both of them were same.Now the problem is gbrain solely uses slug value to distinguish between ingested files.Lets say the example of vault and vault / subdir, they will have the same file but will have different slug hence flagging the same file as duplicates.The major problem is the skewing of data inside eg the agent might summarize same content twice.
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white">The solution</h2>

                        <p>The logic of the code is in three steps.</p>

                        <div className="pl-4 space-y-1 font-mono text-sm text-neutral-600 dark:text-neutral-400">
                            <p>1.Ask the database if there is a page exist with exact content source ?</p>
                            <p className="pl-4">2.If yes and slug is different then its duplicate</p>
                            <p>3.Warn the user with ‘skipped’ and not adding a second copy</p>
                        </div>

                        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 mt-6">
                            <code className="text-sm font-mono leading-relaxed block">
                                <span className="text-neutral-500 block">// Check if a page with the same content hash already exists in this source under a different slug.</span>
                                <span className="text-red-400">const</span> <span className="text-cyan-400">duplicateRows</span> = <span className="text-red-400">await</span> <span className="text-cyan-400">engine</span>.<span className="text-purple-400">executeRaw</span>{"<"}{"{"} <span className="text-cyan-400">slug</span>: <span className="text-orange-400">string</span> {"}"}{">"}({"\n"}
                                {"    "}<span className="text-green-400">{"`SELECT slug FROM pages "}</span>{"\n"}
                                {"     "}<span className="text-green-400">{"WHERE source_id = $1 AND content_hash = $2 AND deleted_at IS NULL LIMIT 1`"}</span>,{"\n"}
                                {"    "}[<span className="text-cyan-400">sourceId</span> ?? <span className="text-green-400">'default'</span>, <span className="text-cyan-400">hash</span>]{"\n"}
                                );{"\n"}
                                <span className="text-red-400">const</span> <span className="text-cyan-400">existingDuplicate</span> = <span className="text-cyan-400">duplicateRows</span>?.[<span className="text-orange-400">0</span>];{"\n"}
                                {"\n"}
                                <span className="text-red-400">if</span> (<span className="text-cyan-400">existingDuplicate</span> && <span className="text-cyan-400">existingDuplicate</span>.<span className="text-cyan-400">slug</span> !== <span className="text-cyan-400">slug</span>) {"{\n"}
                                {"    "}<span className="text-cyan-400">console</span>.<span className="text-purple-400">warn</span>({"\n"}
                                {"        "}<span className="text-green-400">{"`[warning] \"${slug}\" is a duplicate of existing page \"${existingDuplicate.slug}\" (same content hash). Skipping.`"}</span>{"\n"}
                                {"    "});{"\n"}
                                {"    "}<span className="text-red-400">return</span> {"{"} <span className="text-cyan-400">slug</span>, <span className="text-cyan-400">status</span>: <span className="text-green-400">'skipped'</span>, <span className="text-cyan-400">chunks</span>: <span className="text-orange-400">0</span>, <span className="text-cyan-400">parsedPage</span> {"}"};{"\n"}
                                {"}"}
                            </code>
                        </pre>

                        <div className="pt-4">
                            <Link
                                href="https://github.com/garrytan/gbrain/issues/1309"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-mono text-neutral-500 underline decoration-neutral-800 underline-offset-4 transition-colors hover:text-neutral-200 hover:decoration-neutral-400"
                                aria-label="Link to GitHub Issue"
                            >
                                Link To Issue ↗
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
