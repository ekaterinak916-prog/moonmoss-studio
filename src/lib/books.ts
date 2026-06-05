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
    // Canva signed URL — re-fetch via Canva MCP if expired
    coverUrl:
      'https://document-export.canva.com/eokS0/DAHKw3eokS0/7/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWEOTUD6Q%2F20260603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260603T035000Z&X-Amz-Expires=71630&X-Amz-Signature=5bdcfb04ac817f65875fe63d143c16814adff04ed8cb1132f465b8099fafc9ad&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2003%20Jun%202026%2023%3A43%3A50%20GMT',
    ageRange: '1–4 años',
    description:
      'Noah aprende a usar el orinal, vestirse solo y dormirse tranquilo. Cada pequeño logro es una gran aventura.',
    amazonUrl: 'https://www.amazon.es/dp/B0H3V584T3',
  },
]
