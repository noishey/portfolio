import { NextRequest, NextResponse } from "next/server"

// Helper to fetch with timeout
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 3000): Promise<Response> {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    })
    clearTimeout(id)
    return response
  } catch (error) {
    clearTimeout(id)
    throw error
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const bookTitle = searchParams.get("book_title")
  const authorName = searchParams.get("author_name")
  const isbn = searchParams.get("isbn")
  const imageSize = searchParams.get("image_size") || "large"

  // 1. Try w3slley's bookcover-api first
  let apiUrl = ""
  if (isbn) {
    apiUrl = `https://bookcover.longitood.com/bookcover?isbn=${encodeURIComponent(isbn)}&image_size=${imageSize}`
  } else if (bookTitle && authorName) {
    apiUrl = `https://bookcover.longitood.com/bookcover?book_title=${encodeURIComponent(bookTitle)}&author_name=${encodeURIComponent(authorName)}&image_size=${imageSize}`
  } else if (bookTitle) {
    apiUrl = `https://bookcover.longitood.com/bookcover?book_title=${encodeURIComponent(bookTitle)}&image_size=${imageSize}`
  }

  if (apiUrl) {
    try {
      const response = await fetchWithTimeout(apiUrl, {}, 3000)
      if (response.ok) {
        const data = await response.json()
        if (data && data.url) {
          // Successfully fetched cover URL from bookcover-api, redirecting client to it
          return NextResponse.redirect(data.url, 307)
        }
      }
    } catch (e) {
      console.warn("Failed to fetch cover from bookcover-api, falling back to Open Library:", e)
    }
  }

  // 2. Fallback to Open Library
  try {
    if (isbn) {
      // If we have an ISBN, use Open Library Covers API directly
      const formattedIsbn = isbn.replace(/-/g, "")
      const sizeLetter = imageSize === "small" ? "S" : imageSize === "medium" ? "M" : "L"
      return NextResponse.redirect(`https://covers.openlibrary.org/b/isbn/${formattedIsbn}-${sizeLetter}.jpg`, 307)
    } else if (bookTitle) {
      // If we only have title/author, search Open Library by title and author
      const queryParams = new URLSearchParams()
      queryParams.set("title", bookTitle)
      if (authorName) {
        queryParams.set("author", authorName)
      }
      queryParams.set("fields", "cover_i")
      queryParams.set("limit", "1")

      const searchUrl = `https://openlibrary.org/search.json?${queryParams.toString()}`
      const searchResponse = await fetchWithTimeout(searchUrl, {}, 4000)
      
      if (searchResponse.ok) {
        const searchData = await searchResponse.json()
        const coverId = searchData.docs?.[0]?.cover_i
        if (coverId) {
          const sizeLetter = imageSize === "small" ? "S" : imageSize === "medium" ? "M" : "L"
          return NextResponse.redirect(`https://covers.openlibrary.org/b/id/${coverId}-${sizeLetter}.jpg`, 307)
        }
      }
    }
  } catch (e) {
    console.error("Open Library fallback failed:", e)
  }

  // 3. Ultimate placeholder fallback
  return NextResponse.redirect(new URL("/placeholder.jpg", request.url).toString(), 307)
}
