import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AOSInit } from '@/components/AOSInit'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-next',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato-next',
  weight: ['300', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Moonmoss Studio',
    default: 'Moonmoss Studio — Historias que acompañan a los más pequeños',
  },
  description:
    'Moonmoss Studio crea libros ilustrados con acuarelas para los más pequeños. Historias llenas de ternura para niños de 1 a 4 años.',
  openGraph: {
    siteName: 'Moonmoss Studio',
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.png',       sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple:    '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${lato.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <AOSInit />
        <Header />
        <main className="flex-1 pt-[60px]">{children}</main>
        <Footer />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
