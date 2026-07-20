export interface Film {
  title: string
  director: string
  publishedYear: number
  rating?: number
  coverUrl: string
  wikiUrl: string
  review?: string
  status?: string
}

export const films: Film[] = [
  {
    title: "The Holy Mountain",
    director: "Alejandro Jodorowsky",
    publishedYear: 1973,
    rating: 5,
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/c/c5/Holy_mountain_release_poster.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Holy_Mountain_(1973_film)",
    review: "An absolute masterclass in surrealism, alchemy, and spiritual rebirth."
  },
  {
    title: "Apocalypse Now",
    director: "Francis Ford Coppola",
    publishedYear: 1979,
    rating: 4.5,
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/c/c2/Apocalypse_Now_poster.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Apocalypse_Now",
    review: "A hypnotic, hallucinatory journey into the dark heart of human nature."
  },
  {
    title: "Into the Wild",
    director: "Sean Penn",
    publishedYear: 2007,
    rating: 4.5,
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/Into-the-wild-poster.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Into_the_Wild_(film)",
    review: "A beautiful, tragic exploration of absolute freedom, alienation, and connection."
  },
  {
    title: "2001: A Space Odyssey",
    director: "Stanley Kubrick",
    publishedYear: 1968,
    rating: 5,
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/a/a1/2001_A_Space_Odyssey_original_poster.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(film)",
    review: "A transcendent cinematic monument about consciousness, technology, and evolution."
  }
]
