export interface Book {
  title: string
  author: string
  publishedYear: number
  rating?: number
  coverUrl: string
  wikiUrl: string
  review?: string
  status?: string
}

export const books: Book[] = [
  {
    title: "The Zahir",
    author: "Paulo Coelho",
    publishedYear: 2005,
    rating: 4,
    coverUrl: "/the-zahir.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Zahir_(novel)",
    review: "A wonderful exploration of obsession, love, and self-discovery."
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    publishedYear: 1939,
    rating: 4.5,
    coverUrl: "/grapes-of-wrath.webp",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Grapes_of_Wrath",
    review: "An absolute masterpiece. Deeply moving portrayal of human resilience and social injustice."
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    publishedYear: 2011,
    coverUrl: "/sapiens.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind",
    status: "reading"
  }
]
