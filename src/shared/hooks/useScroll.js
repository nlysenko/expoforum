/**
 *
 * useScroll
 *
 */

import { useState, useEffect } from 'react'

export default function useScroll() {
  const [pageYOffset, setPageYOffset] = useState(null)

  useEffect(() => {
    // Handler to call on window resize
    function handleScroll() {
      // Set window pageYOffset to state
      setPageYOffset(window.pageYOffset)
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll)

    // Call handler right away so state gets updated with initial window pageYOffset
    handleScroll()

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // Empty array ensures that effect is only run on mount

  return pageYOffset
}
