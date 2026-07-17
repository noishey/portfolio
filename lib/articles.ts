export interface Article {
  date: string
  title: string
  href: string
  takeaway: string
  tags?: string[]
  content?: string
}

export const articles: Article[] = [
  {
    date: "July 17, 2026",
    title: "Diamond",
    href: "",
    takeaway: "She wept in silence with a sigh, blaming the fault in her stars.",
    tags: ["poetry"],
    content: `She wept in silence with a sigh
blaming the fault in her stars
Wearing the blood red chains of control
as she prayed to the divine feminine`,
  },
  {
    date: "July 17, 2026",
    title: "Witches vs Patriarchy",
    href: "/articles/witches-vs-patriarchy",
    takeaway: "There are only two sides one could pick: either that of the witch or that of the dreaded patriarchy.",
    tags: ["writing", "ethics", "spirituality", "yoga"],
  },
  {
    date: "July 17, 2026",
    title: "Remnants of My Desires",
    href: "",
    takeaway: "Remnants of my desires lay flat for the withered rain to take me away.",
    tags: ["poetry"],
    content: `Remnants of my desires lay flat
for the withered rain to take me away
The slow song of a distant bird
has no way but to enter my soul
As I lay flat losing my breath
seldom did I realize that I must
I must only listen to the beats of my heart`,
  },
  {
    date: "July 17, 2026",
    title: "A Fleeting Glance",
    href: "",
    takeaway: "A fleeting glance upon your Shakti energy, crafted shockwaves of my serpent energy.",
    tags: ["poetry"],
    content: `A fleeting glance upon your Shakti energy
Crafted shockwaves of my serpent energy
The sky of the dawn and the shadows at night
remains still as I look into your past`,
  },
  {
    date: "July 14, 2026",
    title: "These Are The Times",
    href: "",
    takeaway: "These are the times of struggle, periods of estrangement.",
    tags: ["poetry"],
    content: `These are the times.
the times of struggle
periods of estrangement
strangled by strings
the strings woven by fate
the keen and the meek
the wise and the miser
streets of rebellion
coated with stains of time
These are the times
These are the times`,
  },
  {
    date: "July 14, 2026",
    title: "Churned Are The Masses",
    href: "",
    takeaway: "Oblique are the upcoming times, maybe now is the precursor to a war.",
    tags: ["poetry"],
    content: `churned are the masses
into objects and machines
only to have a fate of ending soon.
for they have already been dead,
when they decided to not think,
when they were denied
from their own freedom of thought.
oblique are the upcoming times
maybe now is the precursor to a war
the power has been misused
by those who are powerless
to their own selves`,
  },
  {
    date: "July 13, 2026",
    title: "All The Judgement is Inside You Baby.",
    href: "/articles/judgement",
    takeaway: "Oh come on!! ft Chandler.",
    tags: ["writing", "spirituality", "yoga"],
  },
  {
    date: "July 13, 2026",
    title: "I live in India but I'm English.",
    href: "/articles/on-being-english",
    takeaway: "This is the postcolonial cognitive dissonance.",
    tags: ["writing", "spirituality", "ethics"],
  },
  {
    date: "July 13, 2026",
    title: "Ego Dissolution Through Carnatic Vocal Training",
    href: "/articles/ego-dissolution",
    takeaway: "At the age of nearly 26, I crushed my ego by starting Carnatic vocal training.",
    tags: ["writing", "spirituality", "yoga", "focus"],
  },
  {
    date: "July 11, 2026",
    title: "Destroy Patriarchy, Not The Planet.",
    href: "/articles/destory-patriarchy",
    takeaway: "What are man and woman? What are Shiva and Shakti? What are feminine and masculine?",
    tags: ["writing", "ethics", "focus", "manhood", "spirituality", "yoga"],
  },
  {
    date: "July 5, 2026",
    title: "Aren't you tired of this night cardio?",
    href: "/articles/quit-porn",
    takeaway: "The below are my personal opinions, and not everything is scientifically backed.",
    tags: ["writing", "ethics", "focus", "manhood", "rehabilitation", "spirituality", "yoga"],
  },
  {
    date: "July 4, 2026",
    title: "Post-Meta Effect",
    href: "/articles/leaving-meta",
    takeaway: "A month or two ago I decided to permanently remove myself from Meta. The results of this exit are staggering.",
    tags: ["writing", "ethics", "focus", "quit-social-media", "manhood"],
  },
  {
    date: "July 2, 2026",
    title: "Deep Learning (for Audio) with Python Course Notes",
    href: "/articles/dl-audio-py",
    takeaway: "Notes and implementation of a basic Multilayer Perceptron from scratch using NumPy.",
    tags: ["tech", "deep-learning", "python", "neural-networks"],
  },
  {
    date: "June 22, 2026",
    title: "AI is a Buzzword: Why?",
    href: "/articles/ai-buzzword-why",
    takeaway: "An exploration of AI as a dystopian sales gimmick and the shift to agent-driven computing.",
    tags: ["futurism", "writing", "ethics", "socio-economic"],
  },
  {
    date: "June 7, 2026",
    title: "Google Vertex AI Custom Endpoint Fix",
    href: "/articles/google-param-validation",
    takeaway: "fixed Google Vertex AI multi-region endpoint resolution logic in langchainjs to prevent connection errors.",
    tags: ["archives", "langchain", "vertex-ai"],
  },
  {
    date: "May 31, 2026",
    title: "Supporting Big Int Type",
    href: "/articles/supporting-big-int-type",
    takeaway: "solved web assembly FFI boundary serialization problem in deepagentjs quickjs provider.",
    tags: ["archives", "wasm", "typescript"],
  },
  {
    date: "May 27, 2026",
    title: "Adding Kimi Code Support to CodeGraph: Deep Dive into Local MCP Semantic Indexing",
    href: "/articles/kimi-agent",
    takeaway: "integrated Kimi CLI targets into the CodeGraph MCP server semantic indexing and installer targets.",
    tags: ["archives", "mcp", "semantic-indexing"],
  },
  {
    date: "May 25, 2026",
    title: "Scoped Agent Isolation @agentmemory",
    href: "/articles/scoped-agent-isolation",
    takeaway: "implemented dual-pass search filtering and agent state isolation boundaries to mitigate contextual token pollution.",
    tags: ["archives", "agent-memory", "context-isolation"],
  },
  {
    date: "May 23, 2026",
    title: "Flagging Ingested Duplicates @gbrain",
    href: "/articles/ingesting-overlapping-duplicates",
    takeaway: "resolved duplicate page ingestion bugs in gbrain CLI using content hash checks and unique slug validations.",
    tags: ["archives", "cli", "hashing"],
  },
  {
    date: "May 22, 2026",
    title: "Historical Profiles for Nuclear Site Layers",
    href: "/articles/historical-profiles",
    takeaway: "added rich operational metadata and details accordions inside map tooltips with optimized dismiss timings.",
    tags: ["gis", "map-visualization", "ui-ux"],
  },
  {
    date: "May 21, 2026",
    title: "Vosk as a Local STT Provider",
    href: "/articles/vosk-stt-provider",
    takeaway: "built an offline, lightweight speech-to-text pipeline utilizing Kaldi stream processing to preserve edge memory footprints.",
    tags: ["tech", "speech-to-text", "kaldi", "edge-computing"],
  },
  {
    date: "May 19, 2026",
    title: "Aggregating Anthropic Streams in LangChain.js",
    href: "/articles/aggregating-anthropic-streams",
    takeaway: "resolved streaming frame type validation errors by standardizing mergeable base delta mappings in core.",
    tags: ["archives", "langchain", "streaming"],
  },
  {
    date: "May 17, 2026",
    title: "Streaming Byte Cap to Prevent Resource Exhaustion",
    href: "/articles/streaming-byte-cap",
    takeaway: "implemented programmatic chunk-size boundaries on HTTPX streams to mitigate Node.js heap exhaustion vectors.",
    tags: ["node-js", "security", "streaming"],
  },
]

