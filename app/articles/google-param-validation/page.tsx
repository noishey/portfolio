"use client"

import Link from "next/link"

import RevealOnView from "@/components/reveal-on-view"

export default function ArticlePage() {
    return (
        <main className="mx-auto w-full max-w-2xl px-4 py-20">
            <article className="prose prose-invert prose-neutral max-w-none">
                <RevealOnView intensity="soft">
                    <div className="space-y-6">
                        <p className="text-sm font-mono text-neutral-500 dark:text-white/40">
                            June 7, 2026
                        </p>
                        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                            Chat Model Parameter Validation - Vertex AI(GCP)
                        </h1>

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
{`get computedEndpoint(): string {
  if (this.location === "global") {
    return "aiplatform.googleapis.com";
  } else if (this.location === "eu") {
    return "aiplatform.eu.rep.googleapis.com";
  } else {
    return \`\${this.location}-aiplatform.googleapis.com\`;
  }
}`}
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
{`// Declares a unit test named "platform endpoint - gcp eu location" using an asynchronous execution block
test("platform endpoint - gcp eu location", async () => {
  
  // Creates an empty object to act as a data spy; the mock auth client will record outbound request metrics here
  const record: Record<string, any> = {};
  
  // Generates a mock, randomized Google Cloud project ID string to simulate a valid workspace target
  const projectId = mockId();
  
  // Assembles the mock authentication context config, linking the spy object, project ID, and static mock response payload
  const authOptions: MockClientAuthInfo = {
    record,
    projectId,
    resultFile: "chat-1-mock.json",
  };
  
  // Initializes a new ChatGoogle instance explicitly configured for Vertex AI (gcp) and targets the "eu" region
  const model = new ChatGoogle({
    authOptions,
    platformType: "gcp",
    location: "eu",
  });
  
  // Constructs a standard sequence of LangChain base message objects to mimic an ongoing multi-turn conversation
  const messages: BaseMessageLike[] = [
    new HumanMessage("Flip a coin and tell me H for heads and T for tails"),
    new AIMessage("H"),
    new HumanMessage("Flip it again"),
  ];
  
  // Triggers the execution pipeline, forcing the class to build its internal request structures and call the mock wrapper
  await model.invoke(messages);

  // Asserts that the captured HTTP request URL matches the specialized GCP EU endpoint structure implemented in your fix
  expect(record?.opts.url).toEqual(
    \`https://aiplatform.eu.rep.googleapis.com/v1/projects/\${projectId}/locations/eu/publishers/google/models/gemini-pro:generateContent\`
  );
});`}
                            </code>
                        </pre>

                        <h2 className="text-2xl font-semibold text-neutral-900 pt-4 dark:text-white underline underline-offset-8 decoration-white/20">Concepts Learned</h2>

                        <p>
                            JavaScript/TypeScript concepts - Structural Typing, Object References and Asynchronous Execution
                        </p>

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
