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

                        <hr className="my-8 border-neutral-200 dark:border-neutral-800" />

                        <p>
                            The output of the MLP is a list of two elements which are in the range of 0 to 1. The reason for this is the sigmoid function. A sigmoid function is any function that has a mathematical curve of "S" shape. 
                        </p>

                        <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl my-6">
                            <span className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-wider">Sigmoidal Function</span>
                            <math className="text-2xl text-neutral-900 dark:text-white font-serif" display="block">
                                <mi>S</mi>
                                <mo>(</mo>
                                <mi>x</mi>
                                <mo>)</mo>
                                <mo>=</mo>
                                <mfrac>
                                    <mn>1</mn>
                                    <mrow>
                                        <mn>1</mn>
                                        <mo>+</mo>
                                        <msup>
                                            <mi>e</mi>
                                            <mrow>
                                                <mo>-</mo>
                                                <mi>x</mi>
                                            </mrow>
                                        </msup>
                                    </mrow>
                                </mfrac>
                            </math>
                        </div>

                        <p>
                            Sigmoidal functions enable the model to perform non-linear classification of data that couldn't be classified by a simple straight line:
                        </p>

                        <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl my-6">
                            <span className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-wider">Linear Equation</span>
                            <math className="text-2xl text-neutral-900 dark:text-white font-serif" display="block">
                                <mi>y</mi>
                                <mo>=</mo>
                                <mi>m</mi>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mi>c</mi>
                            </math>
                        </div>

                        <p>
                            Since the exponential term <math className="font-serif"><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></math> is always positive, the denominator <math className="font-serif"><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></math> is always greater than 1, ensuring that the output <math className="font-serif"><mi>S</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> always stays between 0 and 1.
                        </p>

                        <h3 className="text-xl font-semibold text-neutral-900 pt-2 dark:text-white">
                            What does the output signify here if the data is audio?
                        </h3>

                        <p>
                            One simplistic yet practical application of the above code is: three inputs do signify three features of an audio and the two output maps if the audio is Speech or Music.
                        </p>

                        <p>
                            This is a classic example of Supervised Learning.
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
