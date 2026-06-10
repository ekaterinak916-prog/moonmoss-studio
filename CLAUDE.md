@AGENTS.md

# Moonmoss Studio — Project Reference

## What is Moonmoss Studio?

Moonmoss Studio is a small independent publisher founded by Kate Ranta that creates Spanish-language watercolor picture books for toddlers aged 1–4. The studio's tagline is *"Historias que acompañan a los más pequeños"*. The visual identity is soft and illustrated — warm cream backgrounds, watercolor blues and sky tones, Playfair Display (serif) paired with Lato (sans-serif).

---

## Book: Aventuras de Noah

| Field       | Value |
|-------------|-------|
| Title       | Aventuras de Noah |
| Subtitle    | El libro que acompaña a tu pequeño |
| Age range   | 1–4 años |
| Amazon (ES) | https://www.amazon.es/dp/B0H3V584T3 |
| ASIN        | B0H3V584T3 |
| Description | Noah aprende a usar el orinal, vestirse solo y dormirse tranquilo. Cada pequeño logro es una gran aventura. |
| Slug        | `aventuras-de-noah` |

**Book cover** is served from a Canva signed URL (design ID `DAHKw3eokS0`, page 1 thumbnail). **These URLs expire after ~24h.** When the cover image stops loading, use the Canva MCP tool `mcp__claude_ai_Canva__get-design-thumbnail` with design ID `DAHKw3eokS0` to fetch a fresh URL, then update `src/lib/books.ts`.

There is also a standalone landing page at `D:\Libro de Noah\index.html` (not part of the Next.js build) and a copy at `public/aventuras-de-noah.html` (served as static HTML via Netlify redirect).

---

## URLs & Accounts

| Resource    | Value |
|-------------|-------|
| Live site   | https://moonmoss-studio.netlify.app |
| GitHub repo | https://github.com/ekaterinak916-prog/moonmoss-studio |
| Instagram   | https://www.instagram.com/moonmoss_studio/ |
| Email       | studiomoonmoss@gmail.com |
| Author      | Kate Ranta |

---

## Tech Stack

| Layer          | Choice |
|----------------|--------|
| Framework      | Next.js 16.2.7 (App Router) |
| React          | 19 |
| Styling        | Tailwind CSS v4 (CSS-based config, no `tailwind.config.ts`) |
| Components     | shadcn/ui (Button, Card, Badge, Separator) |
| Animations     | AOS (Animate On Scroll) — client-side dynamic import |
| Fonts          | Google Fonts via `next/font/google` — Playfair Display + Lato |
| Images         | `next/image` + `unoptimized: true` for static export |
| Deployment     | Netlify — static export (`output: 'export'`, publish dir `out/`) |
| CI             | GitHub → Netlify auto-deploy on push to `main` |
| Image gen      | Sharp (Node.js) — `scripts/extract-moon-favicon.mjs` |

### Key config files

- **`next.config.ts`** — `output: 'export'`, `images.unoptimized: true`, remote pattern for `document-export.canva.com`
- **`netlify.toml`** — build command `npm run build`, publish `out/`, redirect `/libros/aventuras-de-noah` → `/aventuras-de-noah.html` (status 200)
- **`public/_redirects`** — Netlify fallback: `/libros/aventuras-de-noah → /aventuras-de-noah.html 307`
- **`src/app/globals.css`** — Tailwind v4 config lives here under `:root {}` (CSS vars) and `@theme inline {}` (Tailwind mappings)
- **`components.json`** — shadcn/ui config (manually created; `npx shadcn@latest init` was not used interactively)

---

## Color Palette & Design Decisions

All orange was removed early in development. The palette is derived from the book's watercolor illustrations.

### CSS variables (`:root` in `globals.css`)

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#f5f0e8` | Page background (warm cream) |
| `--foreground` | `#3a3228` | Body text (dark brown) |
| `--primary` | `#4a7c9e` | Brand blue — buttons, links, accents |
| `--primary-foreground` | `#ffffff` | Text on primary buttons |
| `--secondary` | `#e8f0f5` | Light blue tint — section backgrounds |
| `--card` | `#fdfaf6` | Card backgrounds |
| `--muted-foreground` | `#6b5d52` | Secondary text |
| `--accent` | `#c8dce8` | Sky blue — decorative elements |
| `--border` | `#d8d0c4` | Borders, inputs |
| `--radius` | `0.75rem` | Base border radius |

### Brand palette (`@theme inline`)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-cream` | `#f5f0e8` | Alias for background |
| `--color-primary-lt` | `#e8f0f5` | Light blue tint |
| `--color-primary-dk` | `#3a6a8e` | Hover state for primary |
| `--color-sky` | `#c8dce8` | Decorative sky blue |
| `--color-sky-lt` | `#e4eff7` | Very light sky |
| `--color-straw` | `#e8d898` | Warm yellow accent |
| `--color-brown` | `#c4956a` | Warm brown accent |
| `--color-lilac` | `#b8a8c8` | Lilac accent |

### Typography
- **Playfair Display** — headings, blockquotes, italic text. CSS var: `--font-playfair-next` → utility `font-playfair`
- **Lato** — body, nav, buttons, labels. CSS var: `--font-lato-next` → utility `font-lato`

---

## Project Structure

```
moonmoss-studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — fonts, metadata, icons
│   │   ├── page.tsx            # Home page (Hero, Libros, Misión, Contacto)
│   │   ├── globals.css         # Tailwind v4 config + brand tokens
│   │   ├── favicon.ico         # 32×32 PNG-in-ICO (App Router auto-detect)
│   │   ├── icon.png            # 512×512 moon icon (App Router auto-detect)
│   │   └── libros/
│   │       └── page.tsx        # Books catalogue page
│   ├── components/
│   │   ├── Header.tsx          # Sticky header, mobile hamburger ('use client')
│   │   ├── Footer.tsx          # Logo, links, Instagram, email
│   │   ├── BookCard.tsx        # Book card with hover ('use client')
│   │   ├── AOSInit.tsx         # AOS initializer (dynamic import, 'use client')
│   │   └── ui/                 # shadcn/ui components
│   └── lib/
│       └── books.ts            # Book data + types (single source of truth)
├── public/
│   ├── aventuras-de-noah.html  # Standalone book landing page (UTF-8, no BOM)
│   ├── moonmoss_logo_transparent.png
│   ├── foto_autora.jpg
│   ├── favicon.png             # 512×512 moon icon
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── apple-touch-icon.png    # 180×180
│   ├── favicon.ico             # 32×32 PNG-in-ICO
│   └── _redirects              # Netlify redirect fallback
├── scripts/
│   ├── extract-moon-favicon.mjs  # Extracts moon icon from landscape logo
│   └── generate-favicons.mjs     # Earlier favicon generator (superseded)
├── next.config.ts
├── netlify.toml
├── components.json             # shadcn/ui config
└── CLAUDE.md                   # This file
```

---

## Favicon Setup

Favicons are generated by `scripts/extract-moon-favicon.mjs` using Sharp. The script:
1. Scans the landscape logo (`moonmoss_logo_transparent.png`, 4396×560) column by column
2. Skips leading transparent padding (Phase 1)
3. Walks content left-to-right until finding a gap of ≥15 consecutive empty columns (Phase 2) — this is the separator between the moon icon and the "M" letterform
4. Crops the icon region, trims transparent edges, and centers in a square with 10% padding
5. Outputs: `favicon.png` (512), `apple-touch-icon.png` (180), `favicon-32x32.png`, `favicon-16x16.png`, `favicon.ico`

The App Router picks up `src/app/favicon.ico` and `src/app/icon.png` automatically (copies of the generated files). The `metadata.icons` array in `layout.tsx` adds additional `<link>` tags for all sizes.

---

## Standalone Landing Page

`D:\Libro de Noah\index.html` — a single-file HTML landing page (not part of Next.js). Uses Tailwind CDN, AOS, Google Fonts. Sections: header, hero with cover, illustrations grid (6 Canva thumbnails from design `DAHKxkc690Q`), synopsis blockquote, author section, purchase CTA.

A copy lives at `public/aventuras-de-noah.html` with asset paths rewritten to absolute (`/moonmoss_logo_transparent.png`, `/foto_autora.jpg`). This file is saved as UTF-8 without BOM — always use `[System.IO.File]::ReadAllText/WriteAllText` with `System.Text.Encoding.UTF8` when editing via PowerShell to avoid Spanish character corruption (`ñ`, `é`, `á` etc.).

---

## Work Completed

1. **Initial Next.js site** — scaffold with App Router, Tailwind v4, shadcn/ui, AOS, Playfair + Lato fonts
2. **Home page** — Hero, Nuestros Libros, Nuestra Misión, Contacto sections with AOS animations
3. **Books catalogue** — `/libros` page with `BookCard` component
4. **Book detail redirect** — `/libros/aventuras-de-noah` → `aventuras-de-noah.html` via Netlify
5. **Color redesign** — replaced all greens (`#3B6D11`, `#7a9e7e`) with blue `#4a7c9e` palette
6. **Contact info** — email `studiomoonmoss@gmail.com`, Instagram `@moonmoss_studio`
7. **Static export** — `output: 'export'`, `netlify.toml`, `_redirects`
8. **UTF-8 fix** — re-saved `aventuras-de-noah.html` with explicit UTF-8 encoding (no BOM)
9. **Git + GitHub** — initialized repo, connected to `ekaterinak916-prog/moonmoss-studio`, configured local identity
10. **Netlify deploy** — `netlify.toml` wired, auto-deploy from GitHub `main`
11. **Favicon generation** — moon icon extracted from landscape logo, all sizes generated
12. **Favicon display fix** — `src/app/favicon.ico` and `src/app/icon.png` added for App Router auto-detection

---

## Known Issues & Gotchas

- **Canva cover URL expires ~24h** — `books[0].coverUrl` in `src/lib/books.ts` will break. Re-fetch with Canva MCP (`get-design-thumbnail`, design `DAHKw3eokS0`) and update the URL.
- **Tailwind v4 has no `tailwind.config.ts`** — all custom tokens go in `globals.css`. Do not create a config file.
- **`output: 'export'` does not support `redirects()` in `next.config.ts`** — use `netlify.toml` and `public/_redirects` instead.
- **PowerShell encoding** — always use `[System.IO.File]::ReadAllText/WriteAllText` with `System.Text.Encoding.UTF8` for HTML files containing Spanish characters. `Get-Content` without `-Encoding UTF8` will corrupt them.
- **shadcn components** — added individually with `npx shadcn@latest add`. Do not re-run `npx shadcn@latest init` interactively.

---

## Pending Tasks

- [ ] Refresh Canva book cover URL in `src/lib/books.ts` (expires every ~24h)
- [ ] Add more books to `src/lib/books.ts` when new titles are published
- [ ] Individual book detail pages (currently a redirect to static HTML)
- [ ] SEO: add `sitemap.xml` and `robots.txt` to `public/`
- [ ] Open Graph image for social sharing
