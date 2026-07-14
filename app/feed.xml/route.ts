import { articles } from "@/lib/articles"

export async function GET() {
  const siteUrl = "https://neuralmanacle.blog"

  const rssItems = articles
    .filter((article) => article.href)
    .map((article) => {
      // Ensure date parsing is safe (e.g. "May 27, 2026")
      const parsedDate = new Date(article.date)
      const pubDate = isNaN(parsedDate.getTime()) ? new Date().toUTCString() : parsedDate.toUTCString()
      const url = `${siteUrl}${article.href}`

      return `    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${article.takeaway}]]></description>
    </item>`
    })
    .join("\n")

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>neural manacle</title>
    <link>${siteUrl}</link>
    <description>ai/web-apps</description>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  })
}
