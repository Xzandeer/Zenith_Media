"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

// FIXED IMPORTS
import { Navigation } from "@/components/navigation";
import WelcomeScreen from "@/components/welcome-screen";
import { HeroSection } from "@/components/hero-section";
import ServicesSection from "@/components/services-section"; // ✅ FIXED

export default function HomePage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const servicesRef = useRef<HTMLDivElement | null>(null);

  // LOGIN PROTECTION
  useEffect(() => {
    setTimeout(() => {
      const name = sessionStorage.getItem("zenithName");

      if (!name) {
        router.replace("/login");
      } else {
        setReady(true);
      }
    }, 300);
  }, []);

  // AUTO-HIDE WELCOME POPUP
  useEffect(() => {
    if (ready) {
      setTimeout(() => setShowWelcome(false), 2500);
    }
  }, [ready]);

  // SCROLL HANDLER FOR ARROW
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // LOADING SCREEN
  if (!ready) {
    return (
      <main className="w-full h-screen flex items-center justify-center text-white bg-black">
        <div className="animate-pulse text-xl">Loading...</div>
      </main>
    );
  }

  return (
    <main className="relative w-full min-h-screen bg-white text-black overflow-x-hidden">

      {/* NAVIGATION */}
      <Navigation scrolled={false} />

      {/* WELCOME SCREEN */}
      {showWelcome && <WelcomeScreen />}

      {/* HERO SECTION */}
      <HeroSection onScrollDown={scrollToServices} />

      {/* WHAT WE DO SECTION */}
      <div ref={servicesRef}>
        <ServicesSection />
      </div>

    </main>
  );
}
