export interface Book {
  id: string
  slug: string
  title: string
  subtitle: string
  coverUrl: string
  ageRange: string
  description: string
  amazonUrl: string
}

export const books: Book[] = [
  {
    id: '1',
    slug: 'aventuras-de-noah',
    title: 'Aventuras de Noah',
    subtitle: 'El libro que acompaña a tu pequeño',
    coverUrl: '/cover-aventuras-de-noah.png',
    ageRange: '1–4 años',
    description:
      'Noah aprende a usar el orinal, vestirse solo y dormirse tranquilo. Cada pequeño logro es una gran aventura.',
    amazonUrl: 'https://www.amazon.es/dp/B0H3V584T3',
  },
]
