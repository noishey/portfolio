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

export const films: Film[] = []
