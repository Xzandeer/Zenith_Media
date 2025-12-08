"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import QuizzesSection from "@/components/quizzes-section";
import ArchetypeGame from "@/components/ArchetypeGame";

export default function EntertainmentPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGameSelect = (game: string) => {
    setSelectedGame(game);
  };

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
            The entertainment section is a space where users will be met with Quiz
            and Game challenges, but will also be rewarded with a gift of knowledge.
          </p>
        </div>
      </div>

      {/* Game Selection Section */}
      <div className="flex justify-center mt-6 pb-20 space-x-4">
        <button
          onClick={() => handleGameSelect("quiz")}
          className="w-32 py-2 bg-[#1F3E8A] text-white rounded-lg shadow-lg hover:bg-[#B5452E] transition-all duration-300"
        >
          Quiz
        </button>
        <button
          onClick={() => handleGameSelect("archetype")}
          className="w-32 py-2 bg-[#1F3E8A] text-white rounded-lg shadow-lg hover:bg-[#B5452E] transition-all duration-300"
        >
          Archetype
        </button>
      </div>

      {/* Show Selected Game */}
      {selectedGame === "quiz" && (
        <div className="flex justify-center mt-6 pb-20">
          <QuizzesSection />
        </div>
      )}

      {selectedGame === "archetype" && (
        <div className="flex justify-center mt-6 pb-20">
          <ArchetypeGame />
        </div>
      )}
    </main>
  );
}
