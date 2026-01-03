'use client'

import { useState, useEffect } from 'react'
import Preloader from './Pre'
import ScrollToTop from './ScrollToTop'

export default function ClientLayout({ children }) {
  const [load, updateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader load={load} />
      <div id={load ? "no-scroll" : "scroll"}>
        <ScrollToTop />
        {children}
      </div>
    </>
  )
}

