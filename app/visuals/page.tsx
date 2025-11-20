"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { VisualsSection } from "@/components/visuals-section"
import { FooterContact } from "@/components/footer-contact"

export default function VisualsPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation scrolled={scrolled} />
      <div className="pt-32">
        <VisualsSection />
      </div>
      <FooterContact />
    </main>
  )
}
