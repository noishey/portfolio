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

            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-mono italic">
              Key takeaways and resources from the Kaggle & Google 5-Day AI Agents Intensive.
            </p>

            <div className="border-t border-neutral-200 dark:border-neutral-800 my-6" />

            <h2 className="text-xl font-semibold text-neutral-900 pt-4 dark:text-white font-mono">
              💡 The Angle: Why "Vibe Coding" is Dead (and "Agentic Engineering" is Born)
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 font-mono text-sm leading-relaxed">
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
              🗓️ Day-by-Day Technical Summary & Key Insights
            </h2>

            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 font-mono pt-2">
              🛠️ Day 1: Foundational Agentic Architectures
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 font-mono text-sm leading-relaxed">
              <li>Moving from simple RAG to autonomous planning loops (ReAct pattern).</li>
              <li>
                Understanding the <strong>Agent Development Kit (ADK)</strong>: Google's new open-source, code-first framework for scaling agent pipelines.
              </li>
              <li>
                Vibecoding is about solving engineering problems through natural language interface without strict constraints, which has major limitations. In contrast, Agentic Engineering is all about working in a controlled system and providing guardrails and harnesses for a more efficient engineering output.
              </li>
              <li>
                The fascinating metric of how AI has automated 80% of earlier engineering work to only leave 20% for human input.
              </li>
              <li>Stateful routing vs. linear execution.</li>
            </ul>

            <div className="pl-5 pt-1 space-y-1 font-mono text-xs">
              <span className="text-neutral-400 block">References:</span>
              <a
                href="https://www.youtube.com/watch?v=zTxvGzpfF-g"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200 block"
              >
                Whitepaper Companion Podcast - Introduction to Agents ↗
              </a>
              <a
                href="https://github.com/google/adk-python"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200 block"
              >
                Google's Agent Development Kit (ADK) Python Repo ↗
              </a>
            </div>

            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 font-mono pt-4">
              🔌 Day 2: Agent Tools & Interoperability (MCP)
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 font-mono text-sm leading-relaxed">
              <li>How agents transition from "thinking" to "acting" via tool calling.</li>
              <li>
                The <strong>Model Context Protocol (MCP)</strong>: A standard interface that allows LLMs to connect securely to local/remote data sources, file systems, and IDEs.
              </li>
              <li>Building secure execution sandboxes for untrusted tool outputs.</li>
            </ul>

            <div className="pl-5 pt-1 space-y-1 font-mono text-xs">
              <span className="text-neutral-400 block">References:</span>
              <a
                href="https://modelcontextprotocol.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200 block"
              >
                Model Context Protocol (MCP) Specification ↗
              </a>
              <a
                href="https://aistudio.google."
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200 block"
              >
                Google AI Studio API Keys Console ↗
              </a>
            </div>

            <h2 className="text-xl font-semibold text-neutral-900 pt-6 dark:text-white font-mono">
              🔗 Curated Reference Links for the Blog
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
              <div className="space-y-2">
                <span className="text-neutral-400 font-bold block">Official Portals</span>
                <a
                  href="https://www.kaggle.com/competitions/5-day-ai-agents-intensive-vibecoding-course-with-google/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline block text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200"
                >
                  Kaggle Course Overview ↗
                </a>
                <a
                  href="https://www.kaggle.com/learn-guide/5-day-agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline block text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200"
                >
                  Kaggle Learn Guide: 5-Day Agents ↗
                </a>
                <a
                  href="https://discord.com/invite/kaggle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline block text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200"
                >
                  Official Kaggle Discord ↗
                </a>
                <a
                  href="https://www.youtube.com/@Kaggle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline block text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200"
                >
                  Kaggle YouTube Channel ↗
                </a>
              </div>

              <div className="space-y-2">
                <span className="text-neutral-400 font-bold block">Core Tooling & Origins</span>
                <a
                  href="https://github.com/google/adk-python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline block text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200"
                >
                  Google ADK GitHub ↗
                </a>
                <a
                  href="https://modelcontextprotocol.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline block text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200"
                >
                  Model Context Protocol (MCP) ↗
                </a>
                <a
                  href="https://notebooklm.google/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline block text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200"
                >
                  Google NotebookLM ↗
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/Vibe_coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline block text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200"
                >
                  Wikipedia: Vibe Coding ↗
                </a>
              </div>
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
