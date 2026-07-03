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
                            July 2, 2026
                        </p>
                        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                            Deep Learning (for Audio) with Python Course Notes
                        </h1>

                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider font-bold pt-2">
                            Deep Learning
                        </p>

                        <p>
                            This resource is from <a href="https://valeriovelardo.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400 transition-colors">valeriovelardo.com</a>
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">
                            <a href="https://www.youtube.com/watch?v=0oWnheK-gGk" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Video 6</a>
                        </h2>

                        <p>
                            The below code snippet creates a basic Multilayer Perceptron Class.
                        </p>

                        <h3 className="text-xl font-semibold text-neutral-900 pt-2 dark:text-white">What is an MLP?</h3>

                        <p>
                            A multi-layer perceptron is a foundational type of Feedforward Artificial Neural Network (NN). There are several types of NN's and the feedforward NN passes data linearly in one direction to generate output from a certain set of inputs and they have no loops.
                        </p>

                        <p>
                            The below code is a basic implementation of the functioning of an MLP.
                        </p>

                        <p>
                            The <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400 transition-colors">NumPy library</a>, which is the prominent library for scientific computing especially in ML, is imported.
                        </p>

                        <p>
                            A class containing three functions is written serving the network's construction, activation, and feedforward pass.
                        </p>

                        <div className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/5 space-y-3 font-mono text-sm my-6">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                                    Source Code Reference
                                </span>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400 font-sans">
                                To save space, the complete object-oriented implementation utilizing key NumPy operations like <a href="https://numpy.org/doc/stable/reference/generated/numpy.dot.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400 transition-colors">np.dot</a> and <a href="https://numpy.org/doc/stable/reference/random/generated/numpy.random.randn.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400 transition-colors">np.random.randn</a> can be found on GitHub:
                            </p>
                            <div className="pt-2">
                                <a 
                                    href="https://github.com/musikalkemist/DeepLearningForAudioWithPython/blob/bb763f64e88c858007d6aebb10af874045acfb13/06%20-%20Implementing%20a%20neural%20network%20from%20scratch/code/mlp.py" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-block text-cyan-600 dark:text-cyan-400 underline hover:text-cyan-500 font-semibold"
                                >
                                    Implementing a neural network from scratch: mlp.py
                                </a>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-neutral-900 pt-6 dark:text-white">Mathematical Foundation: Sigmoidal Functions</h3>

                        <p>
                            A <strong>sigmoid function</strong> refers to any mathematical function that produces a characteristic "S"-shaped curve. In neural networks, sigmoidal functions act as activation functions to introduce non-linearity into the model, allowing it to learn complex patterns.
                        </p>

                        <p>
                            The general mathematical equation for the most common type of sigmoid—the <strong>logistic function</strong>—is:
                        </p>

                        <div className="flex justify-center py-4 bg-neutral-100/50 dark:bg-white/5 rounded-xl border border-neutral-200 dark:border-white/10 my-4">
                            <math display="block" className="text-lg">
                                <mi>f</mi>
                                <mo stretchy="false">(</mo>
                                <mi>x</mi>
                                <mo stretchy="false">)</mo>
                                <mo>=</mo>
                                <mfrac>
                                    <mi>L</mi>
                                    <mrow>
                                        <mn>1</mn>
                                        <mo>+</mo>
                                        <msup>
                                            <mi>e</mi>
                                            <mrow>
                                                <mo>&minus;</mo>
                                                <mi>k</mi>
                                                <mo stretchy="false">(</mo>
                                                <mi>x</mi>
                                                <mo>&minus;</mo>
                                                <msub>
                                                    <mi>x</mi>
                                                    <mn>0</mn>
                                                </msub>
                                                <mo stretchy="false">)</mo>
                                            </mrow>
                                        </msup>
                                    </mrow>
                                </mfrac>
                            </math>
                        </div>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Where:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                            <li><strong>L</strong>: The curve&apos;s maximum value (upper asymptote).</li>
                            <li><strong>k</strong>: The steepness or logistic growth rate of the curve.</li>
                            <li><strong>x&apos;0</strong>: The midpoint value along the x-axis.</li>
                            <li><strong>e</strong>: Euler&apos;s number (&approx; 2.71828).</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-neutral-900 pt-4 dark:text-white">The Standard Sigmoid Function</h4>
                        <p>
                            In standard feedforward networks, we typically use the simplified form of this equation where <code className="text-xs px-1 bg-white/5 border border-white/10 rounded">L = 1</code>, <code className="text-xs px-1 bg-white/5 border border-white/10 rounded">k = 1</code>, and <code className="text-xs px-1 bg-white/5 border border-white/10 rounded">x&apos;0 = 0</code>:
                        </p>

                        <div className="flex justify-center py-4 bg-neutral-100/50 dark:bg-white/5 rounded-xl border border-neutral-200 dark:border-white/10 my-4">
                            <math display="block" className="text-lg">
                                <mi>&sigma;</mi>
                                <mo stretchy="false">(</mo>
                                <mi>x</mi>
                                <mo stretchy="false">)</mo>
                                <mo>=</mo>
                                <mfrac>
                                    <mn>1</mn>
                                    <mrow>
                                        <mn>1</mn>
                                        <mo>+</mo>
                                        <msup>
                                            <mi>e</mi>
                                            <mrow>
                                                <mo>&minus;</mo>
                                                <mi>x</mi>
                                            </mrow>
                                        </msup>
                                    </mrow>
                                </mfrac>
                            </math>
                        </div>

                        <p>
                            This function maps any input value to a bounded activation level between <strong>0</strong> (completely inactive) and <strong>1</strong> (fully active).
                        </p>

                        <h4 className="text-lg font-semibold text-neutral-900 pt-4 dark:text-white">Other Sigmoidal Curves</h4>
                        <p>
                            There are other mathematical functions that share this same S-shape but map to different ranges:
                        </p>

                        <ul className="space-y-4">
                            <li className="space-y-2">
                                <strong>1. Hyperbolic Tangent (tanh)</strong> - Maps inputs to a range between <strong>-1</strong> and <strong>1</strong>:
                                <div className="flex justify-center py-3 bg-neutral-100/50 dark:bg-white/5 rounded-xl border border-neutral-200 dark:border-white/10">
                                    <math display="block">
                                        <mi>tanh</mi>
                                        <mo stretchy="false">(</mo>
                                        <mi>x</mi>
                                        <mo stretchy="false">)</mo>
                                        <mo>=</mo>
                                        <mfrac>
                                            <mrow>
                                                <msup>
                                                    <mi>e</mi>
                                                    <mi>x</mi>
                                                </msup>
                                                <mo>&minus;</mo>
                                                <msup>
                                                    <mi>e</mi>
                                                    <mrow>
                                                        <mo>&minus;</mo>
                                                        <mi>x</mi>
                                                    </mrow>
                                                </msup>
                                            </mrow>
                                            <mrow>
                                                <msup>
                                                    <mi>e</mi>
                                                    <mi>x</mi>
                                                </msup>
                                                <mo>+</mo>
                                                <msup>
                                                    <mi>e</mi>
                                                    <mrow>
                                                        <mo>&minus;</mo>
                                                        <mi>x</mi>
                                                    </mrow>
                                                </msup>
                                            </mrow>
                                        </mfrac>
                                    </math>
                                </div>
                            </li>
                            <li className="space-y-2">
                                <strong>2. Arctangent (arctan)</strong> - Maps inputs to a range between <strong>-&pi;/2</strong> and <strong>&pi;/2</strong>:
                                <div className="flex justify-center py-3 bg-neutral-100/50 dark:bg-white/5 rounded-xl border border-neutral-200 dark:border-white/10">
                                    <math display="block">
                                        <mi>f</mi>
                                        <mo stretchy="false">(</mo>
                                        <mi>x</mi>
                                        <mo stretchy="false">)</mo>
                                        <mo>=</mo>
                                        <mi>arctan</mi>
                                        <mo stretchy="false">(</mo>
                                        <mi>x</mi>
                                        <mo stretchy="false">)</mo>
                                    </math>
                                </div>
                            </li>
                        </ul>

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
