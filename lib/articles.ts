export interface Article {
  date: string
  title: string
  href: string
  takeaway: string
}

export const articles: Article[] = [
  {
    date: "June 7, 2026",
    title: "Google Vertex AI Custom Endpoint Fix",
    href: "/articles/google-param-validation",
    takeaway: "fixed Google Vertex AI multi-region endpoint resolution logic in langchainjs to prevent connection errors.",
  },
  {
    date: "May 31, 2026",
    title: "Supporting Big Int Type",
    href: "/articles/supporting-big-int-type",
    takeaway: "solved web assembly FFI boundary serialization problem in deepagentjs quickjs provider.",
  },
  {
    date: "May 27, 2026",
    title: "Adding Kimi Code Support to CodeGraph: Deep Dive into Local MCP Semantic Indexing",
    href: "/articles/kimi-agent",
    takeaway: "integrated Kimi CLI targets into the CodeGraph MCP server semantic indexing and installer targets.",
  },
  {
    date: "May 25, 2026",
    title: "Scoped Agent Isolation @agentmemory",
    href: "/articles/scoped-agent-isolation",
    takeaway: "implemented dual-pass search filtering and agent state isolation boundaries to mitigate contextual token pollution.",
  },
  {
    date: "May 23, 2026",
    title: "Flagging Ingested Duplicates @gbrain",
    href: "/articles/ingesting-overlapping-duplicates",
    takeaway: "resolved duplicate page ingestion bugs in gbrain CLI using content hash checks and unique slug validations.",
  },
  {
    date: "May 22, 2026",
    title: "Historical Profiles for Nuclear Site Layers",
    href: "/articles/historical-profiles",
    takeaway: "added rich operational metadata and details accordions inside map tooltips with optimized dismiss timings.",
  },
  {
    date: "May 21, 2026",
    title: "Vosk as a Local STT Provider",
    href: "/articles/vosk-stt-provider",
    takeaway: "built an offline, lightweight speech-to-text pipeline utilizing Kaldi stream processing to preserve edge memory footprints.",
  },
  {
    date: "May 19, 2026",
    title: "Aggregating Anthropic Streams in LangChain.js",
    href: "/articles/aggregating-anthropic-streams",
    takeaway: "resolved streaming frame type validation errors by standardizing mergeable base delta mappings in core.",
  },
  {
    date: "May 17, 2026",
    title: "Streaming Byte Cap to Prevent Resource Exhaustion",
    href: "/articles/streaming-byte-cap",
    takeaway: "implemented programmatic chunk-size boundaries on HTTPX streams to mitigate Node.js heap exhaustion vectors.",
  },
]
