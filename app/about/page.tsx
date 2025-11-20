"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { MissionVisionValuesSDG } from "@/components/about-carousel"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main>
      <Navigation scrolled={scrolled} />

      <MissionVisionValuesSDG />

      <TeamSection />
    </main>
  )
}
