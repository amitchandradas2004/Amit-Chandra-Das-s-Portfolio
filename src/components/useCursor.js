import { useEffect, useRef } from 'react'

export default function useCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const rx = useRef(0)
  const ry = useRef(0)
  const mx = useRef(0)
  const my = useRef(0)
  const animId = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    const move = e => {
      mx.current = e.clientX
      my.current = e.clientY
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.13
      ry.current += (my.current - ry.current) * 0.13
      ring.style.left = rx.current + 'px'
      ring.style.top = ry.current + 'px'
      animId.current = requestAnimationFrame(animate)
    }

    const addHover = () => {
      cursor.classList.add('hovered')
      ring.classList.add('hovered')
    }
    const removeHover = () => {
      cursor.classList.remove('hovered')
      ring.classList.remove('hovered')
    }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, .project-card, .skill-item, .social-link').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    animId.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(animId.current)
    }
  }, [])

  return { cursorRef, ringRef }
}
