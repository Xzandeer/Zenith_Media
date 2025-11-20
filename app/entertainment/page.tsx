"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import QuizzesSection from "@/components/quizzes-section";

export default function EntertainmentPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage: "url('/BACKGROUND.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Navigation scrolled={scrolled} />

      {/* ====== TOP HEADER SECTION ====== */}
      <div className="pt-28 pb-6">
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Page Title */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1F3E8A] mb-3 drop-shadow-md">
            Entertainment
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#0B0F1A]/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Explore our interactive quizzes and entertainment content designed to engage and inform.
          </p>
        </div>
      </div>

      {/* ====== QUIZ SECTION (Centered) ====== */}
      <div className="flex justify-center mt-6 pb-20">
        <QuizzesSection />
      </div>
    </main>
  );
}
