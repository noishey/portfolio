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
              May 21, 2026
            </p>

            <h1 className="article-header text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Vosk as a Local STT Provider
            </h1>

            <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider font-bold pt-2">
              Speech to Text
            </p>

            <p>
              When running agentic speech-to-text systems on edge devices like a 
              Raspberry Pi (4GB RAM), resource constraints quickly become a major bottleneck. 
              Running heavy local models such as <code>faster-whisper</code> alongside real-time video 
              streams often results in severe performance degradation and poor video frames.
            </p>

            <p>
              To address this, we integrated{" "}
              <a
                href="https://alphacephei.com/vosk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-white/20 hover:decoration-white"
              >
                Vosk
              </a>
              —a highly lightweight, offline speech recognition toolkit designed 
              specifically for mobile and edge platforms. By configuring Vosk as 
              a local Speech-To-Text (STT) provider, we established an ultra-efficient 
              speech processing pipeline that preserves high video quality and system responsiveness.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white">Implementation Architecture</h2>

            <p>
              The solution introduces native Vosk support into the transcription pipeline through 
              three key architectural areas:
            </p>

            <h3 className="text-lg font-medium text-neutral-800 dark:text-white/90">1. Configuration Interface</h3>
            <p>
              In <code>hermes_cli/config.py</code>, we added dedicated configuration blocks for 
              Vosk under the speech-to-text (<code>stt</code>) block. This allows users to easily customize 
              the model path, download lightweight language packs, and specify Vosk as their active provider.
            </p>

            <h3 className="text-lg font-medium text-neutral-800 dark:text-white/90">2. Highly Optimized Core Transcription</h3>
            <p>
              Inside <code>tools/transcription_tools.py</code>, we implemented the core logic. 
              To prevent heavy disk reads and reload latency on every voice request, we designed a model caching 
              singleton that holds the model structure in memory:
            </p>

            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
              <code className="text-sm font-mono leading-relaxed block">
                <span className="text-green-400 block"># Singleton for Vosk model caching</span>
                <span className="text-cyan-400">_vosk_model</span>: <span className="text-orange-400">Optional</span>[<span className="text-orange-400">object</span>] = <span className="text-red-400">None</span>{"\n"}
                <span className="text-cyan-400">_vosk_model_name</span>: <span className="text-orange-400">Optional</span>[<span className="text-orange-400">str</span>] = <span className="text-red-400">None</span>
              </code>
            </pre>

            <p>
              Vosk strictly requires incoming audio streams in a 16kHz mono WAV PCM format. 
              We integrated dedicated conversion safeguards in the preparation helper, feeding frame-by-frame 
              chunks directly to the <code>KaldiRecognizer</code> engine:
            </p>

            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
              <code className="text-sm font-mono leading-relaxed block">
                <span className="text-cyan-400">rec</span> = <span className="text-orange-400">KaldiRecognizer</span>(<span className="text-cyan-400">_vosk_model</span>, <span className="text-cyan-400">wf</span>.<span className="text-purple-400">getframerate()</span>){"\n"}
                <span className="text-cyan-400">rec</span>.<span className="text-purple-400">SetWords</span>(<span className="text-red-400">False</span>){"\n"}
                {"\n"}
                <span className="text-cyan-400">results</span> = []{"\n"}
                <span className="text-red-400">while</span> <span className="text-red-400">True</span>:{"\n"}
                {"    "}<span className="text-cyan-400">data</span> = <span className="text-cyan-400">wf</span>.<span className="text-purple-400">readframes</span>(<span className="text-orange-400">4000</span>){"\n"}
                {"    "}<span className="text-red-400">if</span> <span className="text-purple-400">len</span>(<span className="text-cyan-400">data</span>) == <span className="text-orange-400">0</span>:{"\n"}
                {"        "}<span className="text-red-400">break</span>{"\n"}
                {"    "}<span className="text-red-400">if</span> <span className="text-cyan-400">rec</span>.<span className="text-purple-400">AcceptWaveform</span>(<span className="text-cyan-400">data</span>):{"\n"}
                {"        "}<span className="text-cyan-400">part</span> = <span className="text-cyan-400">json</span>.<span className="text-purple-400">loads</span>(<span className="text-cyan-400">rec</span>.<span className="text-purple-400">Result()</span>){"\n"}
                {"        "}<span className="text-red-400">if</span> <span className="text-cyan-400">part</span>.<span className="text-purple-400">get</span>(<span className="text-green-400">"text"</span>):{"\n"}
                {"            "}<span className="text-cyan-400">results</span>.<span className="text-purple-400">append</span>(<span className="text-cyan-400">part</span>[<span className="text-green-400">"text"</span>])
              </code>
            </pre>

            <p>
              We also implemented a dynamic auto-detection fallback: if no other high-resource local or 
              remote provider is available, the runtime gracefully defaults to Vosk to maintain STT functionality.
            </p>

            <h3 className="text-lg font-medium text-neutral-800 dark:text-white/90">3. Verification and Unit Tests</h3>
            <p>
              To ensure reliability across edge configurations, comprehensive tests were added in 
              <code>tests/tools/test_transcription_tools.py</code>, covering package absence handling, 
              mocking successful Kaldi recognizer stream loops, and routing fallback scenarios.
            </p>

            <Link
              href="https://github.com/NousResearch/hermes-agent/issues/29688"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-mono text-neutral-500 underline decoration-neutral-800 underline-offset-4 transition-colors hover:text-neutral-200 hover:decoration-neutral-400"
              aria-label="Link to GitHub Issue"
            >
              Link To Issue ↗
            </Link>

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
