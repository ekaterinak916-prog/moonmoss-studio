import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))
const root  = join(__dir, '..')
const src   = join(root, 'public', 'moonmoss_logo_transparent.png')
const pub   = join(root, 'public')

// ── Step 1: find the right edge of the moon icon ─────────────────────────────
// The logo is landscape (4396×560). The moon icon is on the left; text follows
// after a transparent gap. We scan columns from left to right and find the
// last non-empty column before that gap, staying within the leftmost 20%.

const image  = sharp(src)
const { width, height } = await image.metadata()
console.log(`Source: ${width}×${height}`)

const raw = await image.raw().toBuffer()  // RGBA interleaved

function colIsEmpty(x, alphaThreshold = 8) {
  for (let y = 0; y < height; y++) {
    const idx = (y * width + x) * 4
    if (raw[idx + 3] > alphaThreshold) return false
  }
  return true
}

// Search the left 30% of the image. Strategy:
//   1. skip leading transparent padding
//   2. once content starts, find the first gap of ≥ GAP_MIN empty columns
//      — that gap is the space between the icon and the "M" of the text
const searchLimit = Math.floor(width * 0.30)
const GAP_MIN = 15

// Phase 1 — skip leading empty cols
let x = 0
while (x < searchLimit && colIsEmpty(x)) x++
const contentStart = x
console.log(`Content starts at x=${contentStart}`)

// Phase 2 — walk through content until a real gap appears
let iconRight = contentStart
x = contentStart
while (x < searchLimit) {
  if (!colIsEmpty(x)) {
    iconRight = x
    x++
  } else {
    // measure the empty run
    let runLen = 0
    while (x + runLen < searchLimit && colIsEmpty(x + runLen)) runLen++
    if (runLen >= GAP_MIN) break   // this is the gap before the text
    // small gap inside the icon (e.g. inside the crescent) — keep going
    x += runLen
  }
}

// The icon occupies columns 0..iconRight
const iconWidth  = iconRight + 1
const iconHeight = height

console.log(`Icon region detected: x=0..${iconRight}  (${iconWidth}×${iconHeight})`)

// ── Step 2: crop the icon region ──────────────────────────────────────────────
const iconBuf = await sharp(src)
  .extract({ left: 0, top: 0, width: iconWidth, height: iconHeight })
  .toBuffer()

// ── Step 3: trim transparent edges tightly ────────────────────────────────────
const trimmed = await sharp(iconBuf)
  .trim({ threshold: 6 })
  .toBuffer()

const { width: tw, height: th } = await sharp(trimmed).metadata()
console.log(`Trimmed icon: ${tw}×${th}`)

// ── Step 4: centre in a square canvas with 10% padding ────────────────────────
async function makeSquare(inputBuf, outputSize) {
  const { width: iw, height: ih } = await sharp(inputBuf).metadata()
  const padFraction = 0.10               // 10% padding on each side
  const inner = Math.floor(outputSize * (1 - padFraction * 2))
  const scale  = Math.min(inner / iw, inner / ih)
  const rw = Math.round(iw * scale)
  const rh = Math.round(ih * scale)

  const resized = await sharp(inputBuf)
    .resize(rw, rh, { fit: 'fill', kernel: 'lanczos3' })
    .toBuffer()

  return sharp({
    create: {
      width:      outputSize,
      height:     outputSize,
      channels:   4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    }
  })
    .composite([{
      input:      resized,
      left:  Math.round((outputSize - rw) / 2),
      top:   Math.round((outputSize - rh) / 2),
    }])
    .png()
    .toBuffer()
}

// ── Step 5: write all sizes ───────────────────────────────────────────────────
const png512 = await makeSquare(trimmed, 512)
writeFileSync(join(pub, 'favicon.png'), png512)
console.log('✓ favicon.png  (512×512)')

const png180 = await makeSquare(trimmed, 180)
writeFileSync(join(pub, 'apple-touch-icon.png'), png180)
console.log('✓ apple-touch-icon.png  (180×180)')

const png32  = await makeSquare(trimmed, 32)
writeFileSync(join(pub, 'favicon-32x32.png'), png32)
console.log('✓ favicon-32x32.png')

const png16  = await makeSquare(trimmed, 16)
writeFileSync(join(pub, 'favicon-16x16.png'), png16)
console.log('✓ favicon-16x16.png')

// ICO = single 32×32 PNG wrapped in ICO binary format
function makeSinglePngIco(pngBuf) {
  const dataOffset = 6 + 16
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(1, 4)
  const entry = Buffer.alloc(16)
  entry.writeUInt8(32,  0)
  entry.writeUInt8(32,  1)
  entry.writeUInt8(0,   2)
  entry.writeUInt8(0,   3)
  entry.writeUInt16LE(1,  4)
  entry.writeUInt16LE(32, 6)
  entry.writeUInt32LE(pngBuf.length, 8)
  entry.writeUInt32LE(dataOffset,   12)
  return Buffer.concat([header, entry, pngBuf])
}

writeFileSync(join(pub, 'favicon.ico'), makeSinglePngIco(png32))
console.log('✓ favicon.ico  (32×32 PNG-in-ICO)')

console.log('\nAll moon favicons written to public/')
