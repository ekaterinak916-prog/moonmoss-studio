'use client'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Book } from '@/lib/books'

interface BookCardProps {
  book: Book
  featured?: boolean
}

export function BookCard({ book, featured = false }: BookCardProps) {
  return (
    <Card
      className="overflow-hidden border-0 transition-all duration-300 group"
      style={{
        backgroundColor: '#fdfaf6',
        boxShadow: '0 4px 20px rgba(58,50,40,.10)',
        borderRadius: '1.25rem',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 36px rgba(74,124,158,.18)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(58,50,40,.10)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Cover image */}
      <div
        className="overflow-hidden"
        style={{ aspectRatio: '1 / 1', backgroundColor: '#e8f0f5' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={book.coverUrl}
          alt={`Portada del libro ${book.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <CardContent className="p-5 flex flex-col gap-3">
        {/* Age badge */}
        <Badge
          variant="secondary"
          className="self-start text-xs font-bold font-lato rounded-full px-3"
          style={{ backgroundColor: '#e8f0f5', color: '#4a7c9e', border: 'none' }}
        >
          {book.ageRange}
        </Badge>

        {/* Title */}
        <h3
          className="font-playfair font-bold leading-tight"
          style={{ fontSize: featured ? '1.6rem' : '1.25rem', color: '#3a3228' }}
        >
          {book.title}
        </h3>

        {/* Subtitle */}
        <p className="font-lato text-sm" style={{ color: '#6b5d52' }}>
          {book.subtitle}
        </p>

        {/* Description */}
        <p className="font-lato text-sm leading-relaxed" style={{ color: '#8a7a6e' }}>
          {book.description}
        </p>

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-2">
          <Button
            asChild size="sm"
            className="rounded-full font-lato font-bold flex-1"
            style={{ backgroundColor: '#4a7c9e', color: '#fff' }}
          >
            <Link href={`/libros/${book.slug}`}>Ver libro</Link>
          </Button>
          <Button
            asChild size="sm" variant="outline"
            className="rounded-full font-lato font-bold flex-1"
            style={{ borderColor: '#4a7c9e', color: '#4a7c9e' }}
          >
            <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
              Comprar
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
