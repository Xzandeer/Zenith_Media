"use client"

import { useEffect, useState } from "react"

interface WelcomeScreenProps {
  userName?: string
}

export default function WelcomeScreen({ userName }: WelcomeScreenProps) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade out after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1F3E8A] via-[#2952B8] to-[#B5452E] transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F7E9E9] rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1
          className={`font-serif text-6xl md:text-8xl font-bold text-white mb-4 transition-all duration-1000 ${
            fadeOut ? "scale-110 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          Welcome to
        </h1>
        <h2
          className={`font-serif text-7xl md:text-9xl font-bold text-[#F7E9E9] transition-all duration-1000 delay-200 ${
            fadeOut ? "scale-110 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          ZENITH
        </h2>
        <p
          className={`text-white/90 text-xl md:text-2xl mt-6 transition-all duration-1000 delay-300 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          Welcome, {userName}!
        </p>
      </div>
    </div>
  )
}
