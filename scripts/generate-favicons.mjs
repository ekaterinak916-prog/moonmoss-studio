import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))
const root  = join(__dir, '..')
const src   = join(root, 'public', 'moonmoss_logo_transparent.png')
const pub   = join(root, 'public')

const transparent = { r: 0, g: 0, b: 0, alpha: 0 }

async function resizeContain(size) {
  return sharp(src)
    .resize(size, size, { fit: 'contain', background: transparent })
    .png()
    .toBuffer()
}

// Build a valid ICO file from a single PNG buffer.
// Format: ICONDIR (6 bytes) + ICONDIRENTRY (16 bytes) + PNG data.
function makeSinglePngIco(pngBuffer) {
  const size = 32
  const dataOffset = 6 + 16          // header + one directory entry
  const imgSize    = pngBuffer.length

  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)         // reserved
  header.writeUInt16LE(1, 2)         // type = 1 (icon)
  header.writeUInt16LE(1, 4)         // image count = 1

  const entry = Buffer.alloc(16)
  entry.writeUInt8(size,   0)        // width  (0 means 256, 32 = 0x20)
  entry.writeUInt8(size,   1)        // height
  entry.writeUInt8(0,      2)        // color count (0 = no palette)
  entry.writeUInt8(0,      3)        // reserved
  entry.writeUInt16LE(1,   4)        // color planes
  entry.writeUInt16LE(32,  6)        // bits per pixel
  entry.writeUInt32LE(imgSize,    8) // size of image data
  entry.writeUInt32LE(dataOffset, 12)// offset of image data

  return Buffer.concat([header, entry, pngBuffer])
}

async function main() {
  console.log('Generating favicons from', src)

  // favicon.png — large canonical icon (512×512)
  const png512 = await resizeContain(512)
  writeFileSync(join(pub, 'favicon.png'), png512)
  console.log('✓ favicon.png (512×512)')

  // favicon-16x16.png
  const png16 = await resizeContain(16)
  writeFileSync(join(pub, 'favicon-16x16.png'), png16)
  console.log('✓ favicon-16x16.png')

  // favicon-32x32.png
  const png32 = await resizeContain(32)
  writeFileSync(join(pub, 'favicon-32x32.png'), png32)
  console.log('✓ favicon-32x32.png')

  // apple-touch-icon.png — 180×180
  const png180 = await resizeContain(180)
  writeFileSync(join(pub, 'apple-touch-icon.png'), png180)
  console.log('✓ apple-touch-icon.png (180×180)')

  // favicon.ico — ICO wrapping the 32×32 PNG
  const ico = makeSinglePngIco(png32)
  writeFileSync(join(pub, 'favicon.ico'), ico)
  console.log('✓ favicon.ico (32×32 PNG-in-ICO)')

  console.log('\nAll favicons written to public/')
}

main().catch(err => { console.error(err); process.exit(1) })
