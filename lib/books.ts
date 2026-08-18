export type BookStatus = "to-read" | "reading" | "read" | "paused"
export type BookCategory = "art" | "tech"

export interface Book {
  title: string
  author: string
  publishedYear: number
  rating?: number
  coverUrl: string
  wikiUrl: string
  review?: string
  status: BookStatus
  category: BookCategory
}

export const books: Book[] = [
  {
    title: "The Zahir",
    author: "Paulo Coelho",
    publishedYear: 2005,
    rating: 4,
    coverUrl: "/the-zahir.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Zahir_(novel)",
    review: "A gripping, fast-paced story from the mundanity of a European city to the steppes of Kazakhstan enriched with culture and spirit. The author takes us with him on a soul-seeking journey as the protagonist finds his wife missing one fine day. A mysterious young Kazakh guy is her only contact with her. I love how easy it is to read the book without searching for much of the words.",
    status: "read",
    category: "art"
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    publishedYear: 1939,
    rating: 4.5,
    coverUrl: "/grapes-of-wrath.webp",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Grapes_of_Wrath",
    review: "Depression in high definition and the perils of the Joad family, especially Tom. The story starts with him returning from prison after serving a sentence for a murder, and from there, Steinbeck unleashes his humanistic and socialistic lens towards the exploitation of the workers by big-shot farm owners and the highlighting of racism towards Okies. This period is presumably the onset towards the 'Going to California' dream. This has left a huge impact on my soul and has added a layer to my personality.",
    status: "read",
    category: "art"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    publishedYear: 2011,
    coverUrl: "/sapiens.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind",
    status: "paused",
    category: "art"
  },
  {
    title: "A Tour of C++ - Third Edition",
    author: "Bjarne Stroustrup",
    publishedYear: 2023,
    coverUrl: "/atourofc++.jpg",
    wikiUrl: "https://www.amazon.in/Tour-C-Bjarne-Stroustrup/dp/0136816487/ref=pd_lpo_d_sccl_1/522-1782241-7133133?pd_rd_w=yBInU&content-id=amzn1.sym.e0c8139c-1aa1-443c-af8a-145a0481f27c&pf_rd_p=e0c8139c-1aa1-443c-af8a-145a0481f27c&pf_rd_r=R5G3222EDRW7KWJ9PWKQ&pd_rd_wg=smq3m&pd_rd_r=811ac8f4-a01f-4aed-ab03-fe691ba16527&pd_rd_i=0136816487&psc=1",
    status: "reading",
    category: "tech"
  },
]
