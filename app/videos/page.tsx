"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { VideosSection } from "@/components/videos-section"

export default function VideosPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="h-screen overflow-hidden flex flex-col">
      <Navigation scrolled={scrolled} />
      <div className="flex-1 overflow-hidden">
        <VideosSection />
      </div>
    </main>
  )
}
