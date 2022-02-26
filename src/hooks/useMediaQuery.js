import { useEffect, useState } from 'react'

export const useMediaQuery = query => {
  const mediaQuery = window.matchMedia(query)
  const [match, setMatch] = useState(!!mediaQuery.matches)

  useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches)
    mediaQuery.addListener(handler, false)
    return () => mediaQuery.removeListener(handler)
  }, [])

  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return false

  return !!match
}
