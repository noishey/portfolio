"use client"

import Link from "next/link"

import RevealOnView from "@/components/reveal-on-view"

export default function ArticlePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-20">
      <article className="prose prose-invert prose-neutral max-w-none">
        <RevealOnView intensity="soft">
          <div className="space-y-6">
            <p className="text-sm font-mono text-white/40">
              May 19, 2026
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white">
              Aggregating Anthropic Streams in LangChain.js
            </h1>

            <p>
              This happens to be my first contribution to{" "}
              <a
                href="https://www.langchain.com/langchain"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
              >
                LangChain
              </a>.
            </p>

            <p>
              I chose the{" "}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
              >
                TypeScript
              </a>{" "}
              path because I want to stay deeply rooted in the web ecosystem
              while engineering with AI tools, learning about agents, and
              understanding orchestration systems at a lower level.
            </p>

            <p>
              The problem here was to prevent an interpretive failure introduced
              by a newer update that enforced stricter validation on streaming
              data frames.
            </p>

            <p>
              The data stream is processed through{" "}
              <a
                href="https://reference.langchain.com/javascript/langchain-core/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
              >
                <code>@langchain/core</code>
              </a>
              , which acts as the foundational orchestration layer for the
              broader LangChain ecosystem inside the local{" "}
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
              >
                Node.js
              </a>{" "}
              runtime.
            </p>

            <p>
              In <code>v1.1.46</code>, a stricter security/type guard was
              introduced.
            </p>

            <p>The initial stream frame emits JSON with:</p>

            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
              <code className="text-sm text-white/90">{`{
  "type": "tool_use"
}`}</code>
            </pre>

            <p>Subsequent delta frames emit:</p>

            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
              <code className="text-sm text-white/90">{`{
  "type": "input_json_delta"
}`}</code>
            </pre>

            <p>
              The issue originates in{" "}
              <code>getMergeableTypeBase()</code>.
            </p>

            <p>
              The function normalizes frame types by truncating the{" "}
              <code>_delta</code> suffix. As a result:
            </p>

            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
              <code className="text-sm text-white/90">{`input_json_delta → input_json`}</code>
            </pre>

            <p>
              That normalized value is then compared against{" "}
              <code>"tool_use"</code>.
            </p>

            <p>
              Because of the stricter validation introduced in the newer pull
              request, this mismatch gets flagged and throws an{" "}
              <code>OUTPUT_PARSING_FAILURE</code>.
            </p>

            <p>
              My fix was to update{" "}
              <code>getMergeableTypeBase()</code> so that both:
            </p>

            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
              <code className="text-sm text-white/90">{`input_json
input_json_delta`}</code>
            </pre>

            <p>correctly map to:</p>

            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
              <code className="text-sm text-white/90">{`tool_use`}</code>
            </pre>

            <p>
              I also integrated aggregation tests for this logic.
            </p>

            <p>
              Initially, I added the tests inside the{" "}
              <a
                href="https://reference.langchain.com/javascript/langchain-anthropic/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
              >
                <code>@langchain/anthropic</code>
              </a>{" "}
              provider package.
            </p>

            <p>
              After review feedback from{" "}
              <a
                href="https://x.com/bromann"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
              >
                Bromann
              </a>
              , who works on agentic workflows at LangChain, I moved the tests
              into the LangChain core workspace instead.
            </p>

            <p>
              I also handled formatting and styling updates to ensure the CI
              formatting checks passed successfully.
            </p>
            <Link
              href="https://github.com/langchain-ai/langchainjs/issues/..." // your issue link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-mono text-white/50 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
              aria-label="Link to GitHub Issue"
            >
              Link To Issue ↗
            </Link>

            <div className="pt-8">
              <Link
                href="/"
                className="text-sm text-white/50 transition-colors hover:text-white"
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