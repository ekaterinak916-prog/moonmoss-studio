import type { Metadata } from 'next'
import { BookCard } from '@/components/BookCard'
import { books } from '@/lib/books'

export const metadata: Metadata = {
  title: 'Catálogo de libros',
  description:
    'Explora todos los libros ilustrados de Moonmoss Studio. Historias con acuarelas para niños de 1 a 4 años.',
}

export default function LibrosPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-16 px-5 text-center"
        style={{
          backgroundColor: '#f5f0e8',
          backgroundImage: [
            'radial-gradient(ellipse 60% 50% at 85% 20%, rgba(122,171,202,.10) 0%, transparent 55%)',
            'radial-gradient(ellipse 50% 40% at 10% 80%, rgba(74,124,158,.08) 0%, transparent 55%)',
          ].join(','),
        }}
      >
        <div className="max-w-2xl mx-auto">
          <span
            className="font-lato text-xs font-bold uppercase block mb-3"
            style={{ color: '#4a7c9e', letterSpacing: '0.15em' }}
          >
            Moonmoss Studio
          </span>
          <h1
            className="font-playfair font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#3a3228' }}
          >
            Nuestros libros
          </h1>
          <div
            className="mx-auto h-[3px] rounded-full mb-6"
            style={{ width: '4rem', background: 'linear-gradient(90deg, #4a7c9e, #7aabca)' }}
          />
          <p className="font-lato text-base leading-relaxed" style={{ color: '#6b5d52' }}>
            Libros ilustrados con acuarelas para acompañar a los más pequeños
            en sus primeras grandes aventuras.
          </p>
        </div>
      </section>

      {/* Books grid */}
      <section
        className="py-16 px-5"
        style={{
          backgroundColor: '#e8f0f5',
          backgroundImage: 'radial-gradient(ellipse 60% 50% at 90% 90%, rgba(245,240,232,.65) 0%, transparent 55%)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          {books.length === 0 ? (
            <p className="text-center font-lato text-base py-12" style={{ color: '#8a7a6e' }}>
              Próximamente más libros…
            </p>
          ) : (
            <div
              className="grid gap-6"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
            >
              {books.map((book, i) => (
                <div
                  key={book.id}
                  data-aos="fade-up"
                  data-aos-delay={String(i * 100 + 100)}
                >
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
