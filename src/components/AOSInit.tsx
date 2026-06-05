'use client'
import { useEffect } from 'react'

export function AOSInit() {
  useEffect(() => {
    import('aos').then((mod) => {
      mod.default.init({
        duration: 800,
        offset: 100,
        easing: 'ease-in-out',
        once: true,
      })
    })
  }, [])
  return null
}
