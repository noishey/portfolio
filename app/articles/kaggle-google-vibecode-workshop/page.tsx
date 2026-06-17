"use client"

import Link from "next/link"
import RevealOnView from "@/components/reveal-on-view"

export default function ArticlePage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-20">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <RevealOnView intensity="soft">
          <div className="space-y-6">
            <p className="text-sm font-mono text-neutral-500 dark:text-white/40">
              June 16, 2026
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white font-mono">
              5-Day AI Agents: Intensive Vibe Coding Course With Google - Logs
            </h1>

            <p className="text-base text-neutral-500 dark:text-neutral-400 font-mono italic">
              Key takeaways and resources from the Kaggle & Google 5-Day AI Agents Intensive.
            </p>

            <div className="border-t border-neutral-200 dark:border-neutral-800 my-6" />

            <h2 className="text-xl font-semibold text-neutral-900 pt-4 dark:text-white font-mono">
              The Angle: Why Vibe Coding is Dead (and Agentic Engineering is Born)
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 font-mono text-base leading-relaxed">
              <li>
                <strong>The Hook:</strong> In early 2025, Andrej Karpathy coined the term <em>"Vibe Coding"</em>—a hands-off development style where you prompt an LLM and let it manifest the code. In 2026, the paradigm has shifted. Vibe coding is great for zero-to-one prototyping, but it falls short in production.
              </li>
              <li>
                <strong>The Shift:</strong> The Google & Kaggle Intensive was less about "vibing" and more about <strong>Agentic Engineering</strong>—the disciplined coordination of stateful, multi-agent systems using structured APIs, memory protocols, and formal evaluation loops.
              </li>
              <li>
                <strong>Target Audience:</strong> Intermediate-to-advanced developers looking to move beyond simple chat wrappers to production-grade agents.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-neutral-900 pt-6 dark:text-white font-mono">
              Day-by-Day Technical Summary and Key Insights
            </h2>

            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 font-mono pt-2">
              Day 1: Foundational Agentic Architectures
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 font-mono text-base leading-relaxed">
              <li>Moving from simple RAG to autonomous planning loops (ReAct pattern).</li>
              <li>
                Understanding the <strong>Agent Development Kit (ADK)</strong>: Google's new open-source, code-first framework for scaling agent pipelines.
              </li>
              <li>
                Vibecoding is about solving engineering problems through natural language interface without strict constraints and this has limitations. In contrast, Agentic Engineering is all about working in a controlled system and providing guardrails and harnesses for a more efficient engineering output.
              </li>
              <li>
                The fascinating metric of how AI has automated 80% of earlier engineering work to only leave 20% for human input.
              </li>
              <li>Stateful routing vs. linear execution.</li>
            </ul>

            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 font-mono pt-4">
              Day 2: Agent Tools and Interoperability (MCP)
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 font-mono text-base leading-relaxed">
              <li>How agents transition from "thinking" to "acting" via tool calling.</li>
              <li>
                The <strong>Model Context Protocol (MCP)</strong>: A standard interface that allows LLMs to connect securely to local/remote data sources, file systems, and IDEs.
              </li>
              <li>Building secure execution sandboxes for untrusted tool outputs.</li>
              <li>
                How Google Developer Knowledge (GDK) MCP helps an engineer to access Google resources accurately, reducing hallucinations and assumptions, and enhancing synthetic{" "}
                <a
                  href="https://cloud.google.com/use-cases/retrieval-augmented-generation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200"
                >
                  Retrieval-Augmented Generation (RAG)
                </a>.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-neutral-900 pt-6 dark:text-white font-mono">
              Curated Reference Links
            </h2>

            <div className="grid grid-cols-1 gap-4 pt-2">
              <a
                href="https://cloud.google.com/use-cases/retrieval-augmented-generation"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all font-mono group bg-neutral-50/50 dark:bg-neutral-900/30"
              >
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:underline block">
                  Google Cloud - Retrieval-Augmented Generation (RAG) Use Cases
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  https://cloud.google.com/use-cases/retrieval-augmented-generation
                </span>
              </a>

              <a
                href="https://www.youtube.com/watch?v=zTxvGzpfF-g"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all font-mono group bg-neutral-50/50 dark:bg-neutral-900/30"
              >
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:underline block">
                  Whitepaper Companion Podcast - Introduction to Agents
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  https://www.youtube.com/watch?v=zTxvGzpfF-g
                </span>
              </a>

              <a
                href="https://github.com/google/adk-python"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all font-mono group bg-neutral-50/50 dark:bg-neutral-900/30"
              >
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:underline block">
                  Google's Agent Development Kit (ADK) Python Repository
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  https://github.com/google/adk-python
                </span>
              </a>

              <a
                href="https://modelcontextprotocol.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all font-mono group bg-neutral-50/50 dark:bg-neutral-900/30"
              >
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:underline block">
                  Model Context Protocol (MCP) Specification
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  https://modelcontextprotocol.io/
                </span>
              </a>

              <a
                href="https://aistudio.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all font-mono group bg-neutral-50/50 dark:bg-neutral-900/30"
              >
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:underline block">
                  Google AI Studio Console
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  https://aistudio.google.com/
                </span>
              </a>

              <a
                href="https://www.kaggle.com/competitions/5-day-ai-agents-intensive-vibecoding-course-with-google/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all font-mono group bg-neutral-50/50 dark:bg-neutral-900/30"
              >
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:underline block">
                  Kaggle 5-Day AI Agents Course Overview
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  https://www.kaggle.com/competitions/5-day-ai-agents-intensive-vibecoding-course-with-google/overview
                </span>
              </a>

              <a
                href="https://www.kaggle.com/learn-guide/5-day-agents"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all font-mono group bg-neutral-50/50 dark:bg-neutral-900/30"
              >
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:underline block">
                  Kaggle Learn Guide: 5-Day Agents
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  https://www.kaggle.com/learn-guide/5-day-agents
                </span>
              </a>

              <a
                href="https://discord.com/invite/kaggle"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all font-mono group bg-neutral-50/50 dark:bg-neutral-900/30"
              >
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:underline block">
                  Official Kaggle Discord Server
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  https://discord.com/invite/kaggle
                </span>
              </a>

              <a
                href="https://www.youtube.com/@Kaggle"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all font-mono group bg-neutral-50/50 dark:bg-neutral-900/30"
              >
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:underline block">
                  Kaggle YouTube Channel Walkthrough Streams
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  https://www.youtube.com/@Kaggle
                </span>
              </a>

              <a
                href="https://notebooklm.google/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all font-mono group bg-neutral-50/50 dark:bg-neutral-900/30"
              >
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:underline block">
                  Google NotebookLM
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  https://notebooklm.google/
                </span>
              </a>

              <a
                href="https://en.wikipedia.org/wiki/Vibe_coding"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all font-mono group bg-neutral-50/50 dark:bg-neutral-900/30"
              >
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50 group-hover:underline block">
                  Wikipedia - Vibe Coding
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  https://en.wikipedia.org/wiki/Vibe_coding
                </span>
              </a>
            </div>

            <div className="pt-12 border-t border-neutral-200 dark:border-neutral-800">
              <Link
                href="/"
                className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors font-mono"
              >
                ← Back to Index
              </Link>
            </div>
          </div>
        </RevealOnView>
      </article>
    </main>
  )
}
