import { useEffect, useState } from 'react'

export const useInView = options => {
  const [ref, setRef] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, options)

    if (ref) observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref, options])

  return [setRef, visible]
}
