import Link from 'next/link'
import Image from 'next/image'

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
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

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: '#e4eff7',
        borderColor: 'rgba(58,50,40,.08)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href="/" aria-label="Moonmoss Studio — Inicio">
            <Image
              src="/moonmoss_logo_transparent.png"
              alt="Moonmoss Studio"
              width={140}
              height={36}
              className="h-8 w-auto"
            />
          </Link>
          <p className="font-lato text-sm text-center md:text-left" style={{ color: '#6b869e', maxWidth: '22rem' }}>
            Historias que acompañan a los más pequeños
          </p>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/moonmoss_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-lato text-sm font-semibold transition-colors duration-200"
            style={{ color: '#4a7c9e' }}
            aria-label="Moonmoss Studio en Instagram"
          >
            <InstagramIcon />
            moonmoss_studio
          </a>
        </div>

        {/* Links */}
        <nav className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-left" aria-label="Navegación del pie de página">
          <div>
            <p className="font-lato text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#4a7c9e' }}>
              Libros
            </p>
            <Link
              href="/libros/aventuras-de-noah"
              className="font-lato text-sm block hover:underline"
              style={{ color: '#6b5d52' }}
            >
              Aventuras de Noah
            </Link>
          </div>
          <div>
            <p className="font-lato text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#4a7c9e' }}>
              Estudio
            </p>
            <Link href="/#mision" className="font-lato text-sm block hover:underline" style={{ color: '#6b5d52' }}>
              Sobre nosotros
            </Link>
            <Link href="/#contacto" className="font-lato text-sm block hover:underline mt-2" style={{ color: '#6b5d52' }}>
              Contacto
            </Link>
          </div>
          <div>
            <p className="font-lato text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#4a7c9e' }}>
              Social
            </p>
            <a
              href="https://www.instagram.com/moonmoss_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-lato text-sm flex items-center gap-1.5 hover:underline"
              style={{ color: '#6b5d52' }}
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href="mailto:studiomoonmoss@gmail.com"
              className="font-lato text-sm block hover:underline mt-2"
              style={{ color: '#6b5d52' }}
            >
              studiomoonmoss@gmail.com
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-4 px-5 text-center"
        style={{ borderColor: 'rgba(58,50,40,.08)' }}
      >
        <p className="font-lato text-xs" style={{ color: '#8a7a6e' }}>
          © Moonmoss Studio 2025 · Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
