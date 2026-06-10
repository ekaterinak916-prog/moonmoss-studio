import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Ponte en contacto con Moonmoss Studio. Escríbenos por email, síguenos en Instagram o reserva una reunión con nosotras.',
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

function MailIcon() {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export default function ContactoPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="py-20 px-5" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-xl mx-auto text-center" data-aos="fade-up">
          <span
            className="font-lato text-xs font-bold uppercase block mb-4"
            style={{ color: '#4a7c9e', letterSpacing: '0.15em' }}
          >
            Moonmoss Studio
          </span>
          <h1
            className="font-playfair font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#3a3228' }}
          >
            Contacto
          </h1>
          <Separator
            className="mx-auto mb-8"
            style={{ width: '4rem', backgroundColor: '#c8dce8', height: '3px' }}
          />
          <p
            className="font-lato text-base leading-relaxed mb-10"
            style={{ color: '#6b5d52' }}
          >
            Para colaboraciones, prensa o cualquier consulta, escríbenos por email
            o encuéntranos en Instagram. También puedes reservar una reunión directamente.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild size="lg"
              className="rounded-full font-lato font-bold flex items-center gap-2"
              style={{
                backgroundColor: '#4a7c9e',
                color: '#fff',
                boxShadow: '0 4px 18px rgba(74,124,158,.30)',
              }}
            >
              <a href="mailto:studiomoonmoss@gmail.com">
                <MailIcon />
                studiomoonmoss@gmail.com
              </a>
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

      {/* ── BOOKING ── */}
      <section className="py-20 px-5" style={{ backgroundColor: '#e4eff7' }}>
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <span
            className="font-lato text-xs font-bold uppercase block mb-4"
            style={{ color: '#4a7c9e', letterSpacing: '0.15em' }}
          >
            Reserva
          </span>
          <h2
            className="font-playfair font-bold mb-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#3a3228' }}
          >
            ¿Hablamos?
          </h2>
          <p className="font-lato font-semibold text-base mb-5" style={{ color: '#4a7c9e' }}>
            Reserva una reunión con Moonmoss Studio
          </p>
          <p
            className="font-lato text-base leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ color: '#6b5d52' }}
          >
            Si tienes alguna pregunta sobre nuestros libros, colaboraciones o proyectos editoriales,
            estaremos encantadas de hablar contigo.
          </p>
          <Button
            asChild size="lg"
            className="rounded-full font-lato font-bold mb-12"
            style={{
              backgroundColor: '#4a7c9e',
              color: '#fff',
              boxShadow: '0 4px 18px rgba(74,124,158,.30)',
            }}
          >
            <a
              href="https://calendly.com/studiomoonmoss/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar una reunión
            </a>
          </Button>
          <div
            className="calendly-inline-widget mx-auto"
            data-url="https://calendly.com/studiomoonmoss/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </section>
    </>
  )
}
