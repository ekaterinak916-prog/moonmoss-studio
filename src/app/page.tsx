import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BookCard } from '@/components/BookCard'
import { books } from '@/lib/books'

export const metadata: Metadata = {
  title: 'Moonmoss Studio — Historias que acompañan a los más pequeños',
  description:
    'Moonmoss Studio crea libros ilustrados con acuarelas para los más pequeños. Historias llenas de ternura para niños de 1 a 4 años.',
}

function LeafDecor({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 80 80" fill="none">
      <path d="M40 70 C40 70 40 28 40 14" stroke="#4a7c9e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40 38 C30 30 16 33 13 45 C26 43 37 47 40 38Z" fill="#4a7c9e" fillOpacity=".35" />
      <path d="M40 54 C50 46 64 49 67 61 C54 59 43 63 40 54Z" fill="#4a7c9e" fillOpacity=".35" />
      <path d="M40 64 C34 57 24 58 22 66 C30 65 38 68 40 64Z" fill="#c8dce8" fillOpacity=".6" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: '#f5f0e8',
          backgroundImage: [
            'radial-gradient(ellipse 65% 55% at 5% 55%, rgba(122,171,202,.12) 0%, transparent 60%)',
            'radial-gradient(ellipse 55% 45% at 92% 20%, rgba(74,124,158,.10) 0%, transparent 60%)',
            'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(232,240,245,.65) 0%, transparent 55%)',
          ].join(','),
          minHeight: 'calc(100vh - 60px)',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 flex flex-col md:flex-row items-center gap-14 min-h-[calc(100vh-60px)]">

          {/* Text */}
          <div className="flex-1 text-center md:text-left" data-aos="fade-up">
            <span
              className="font-lato inline-block text-xs font-bold uppercase mb-5"
              style={{ color: '#4a7c9e', letterSpacing: '0.16em' }}
            >
              Moonmoss Studio
            </span>
            <h1
              className="font-playfair font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', color: '#3a3228' }}
            >
              Historias que<br />acompañan a los<br />
              <em style={{ color: '#4a7c9e' }}>más pequeños</em>
            </h1>
            <p className="font-lato text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0" style={{ color: '#6b5d52' }}>
              Libros ilustrados con acuarelas para niños de 1 a 4 años.
              Cada página, una nueva aventura llena de ternura.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                asChild size="lg"
                className="rounded-full font-lato font-bold text-base"
                style={{ backgroundColor: '#4a7c9e', color: '#fff', boxShadow: '0 4px 18px rgba(74,124,158,.35)' }}
              >
                <Link href="/libros">Ver libros</Link>
              </Button>
              <Button
                asChild size="lg" variant="outline"
                className="rounded-full font-lato font-bold text-base"
                style={{ borderColor: '#4a7c9e', color: '#4a7c9e' }}
              >
                <Link href="#mision">Sobre nosotros</Link>
              </Button>
            </div>
          </div>

          {/* Book cover */}
          <div className="flex-shrink-0 w-64 md:w-80 lg:w-96" data-aos="fade-up" data-aos-delay="200">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: 'rgba(74,124,158,.10)', transform: 'translate(12px, 12px)', borderRadius: '1.5rem' }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={books[0].coverUrl}
                alt="Portada del libro Aventuras de Noah"
                className="relative w-full rounded-2xl"
                style={{ boxShadow: '0 10px 40px rgba(58,50,40,.20)', display: 'block' }}
                loading="eager"
              />
            </div>
          </div>
        </div>

        <LeafDecor className="absolute right-8 bottom-12 w-16 opacity-25 hidden lg:block" />
      </section>

      {/* ── NUESTROS LIBROS ── */}
      <section
        id="libros"
        className="py-20 px-5"
        style={{
          backgroundColor: '#e8f0f5',
          backgroundImage: [
            'radial-gradient(ellipse 60% 50% at 85% 85%, rgba(245,240,232,.65) 0%, transparent 55%)',
            'radial-gradient(ellipse 45% 40% at 10% 10%, rgba(122,171,202,.07) 0%, transparent 55%)',
          ].join(','),
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="font-lato text-xs font-bold uppercase block mb-3" style={{ color: '#4a7c9e', letterSpacing: '0.15em' }}>
              Colección
            </span>
            <h2 className="font-playfair font-bold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#3a3228' }}>
              Nuestros libros
            </h2>
            <div className="mx-auto h-[3px] rounded-full" style={{ width: '4rem', background: 'linear-gradient(90deg, #4a7c9e, #7aabca)' }} />
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {books.map((book, i) => (
              <div key={book.id} data-aos="fade-up" data-aos-delay={String(i * 100 + 100)}>
                <BookCard book={book} featured={books.length === 1} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10" data-aos="fade-up">
            <Button asChild variant="outline" className="rounded-full font-lato font-bold" style={{ borderColor: '#4a7c9e', color: '#4a7c9e' }}>
              <Link href="/libros">Ver catálogo completo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── NUESTRA MISIÓN ── */}
      <section id="mision" className="py-20 px-5" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <LeafDecor className="w-14 mx-auto mb-8 opacity-70" />
          <span className="font-lato text-xs font-bold uppercase block mb-4" style={{ color: '#4a7c9e', letterSpacing: '0.15em' }}>
            Nuestra misión
          </span>
          <h2 className="font-playfair font-bold mb-8" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#3a3228' }}>
            Por qué creamos estos libros
          </h2>
          <Separator className="mx-auto mb-8" style={{ width: '4rem', backgroundColor: '#c8dce8', height: '3px' }} />
          <blockquote
            className="font-playfair italic leading-relaxed mb-8"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.3rem)', color: '#4a3e34' }}
          >
            Creemos que los momentos más cotidianos de la infancia — aprender
            a vestirse, dormir solito, dar los primeros pasos — merecen ser
            celebrados con ternura y belleza. Nuestros libros son compañeros
            suaves para esos primeros grandes logros.
          </blockquote>
          <p className="font-lato text-sm" style={{ color: '#8a7a6e' }}>— Kate Ranta, Moonmoss Studio</p>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-20 px-5" style={{ backgroundColor: '#e4eff7' }}>
        <div className="max-w-xl mx-auto text-center" data-aos="fade-up">
          <span className="font-lato text-xs font-bold uppercase block mb-4" style={{ color: '#4a7c9e', letterSpacing: '0.15em' }}>
            Contacto
          </span>
          <h2 className="font-playfair font-bold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#3a3228' }}>
            ¿Hablamos?
          </h2>
          <p className="font-lato text-base leading-relaxed mb-8" style={{ color: '#6b5d52' }}>
            Para colaboraciones, prensa o cualquier consulta, escríbenos por email
            o encuéntranos en Instagram.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild size="lg"
              className="rounded-full font-lato font-bold"
              style={{ backgroundColor: '#4a7c9e', color: '#fff', boxShadow: '0 4px 18px rgba(74,124,158,.30)' }}
            >
              <a href="mailto:studiomoonmoss@gmail.com">studiomoonmoss@gmail.com</a>
            </Button>
            <Button
              asChild size="lg" variant="outline"
              className="rounded-full font-lato font-bold flex items-center gap-2"
              style={{ borderColor: '#4a7c9e', color: '#4a7c9e' }}
            >
              <a
                href="https://www.instagram.com/moonmoss_studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Moonmoss Studio en Instagram"
              >
                <InstagramIcon />
                moonmoss_studio
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
