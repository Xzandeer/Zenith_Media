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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1F3E8A] mb-3 drop-shadow-md">
            Entertainment
          </h1>
          <p className="text-base md:text-lg text-[#0B0F1A]/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            The entertainment section is a space where users will be met with Quiz
            and Game challenges, but will also be rewarded with a gift of knowledge.
          </p>
        </div>
      </div>

      {/* Game Selection Section */}
      <div
        className={`transition-opacity duration-700 ${selectedGame ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="flex justify-center mt-6 pb-20 space-x-12">
          <button
            onClick={() => handleGameSelect("quiz")}
            className="relative w-[60vw] max-w-[420px] h-[60vw] max-h-[420px] bg-white rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-[#1F3E8A] overflow-hidden"
          >
            <img src="/quiz.jpg" alt="Quiz Thumbnail" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-3 text-center">
              <span className="text-white font-bold text-xl tracking-wide drop-shadow">Quiz</span>
            </div>
          </button>

          <button
            onClick={() => handleGameSelect("archetype")}
            className="relative w-[60vw] max-w-[420px] h-[60vw] max-h-[420px] bg-white rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-[#1F3E8A] overflow-hidden"
          >
            <img src="/archetype.jpg" alt="Archetype Thumbnail" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-3 text-center">
              <span className="text-white font-bold text-xl tracking-wide drop-shadow">Archetype</span>
            </div>
          </button>
        </div>
      </div>

      {/* Show Selected Game */}
      <div className={`transition-opacity duration-700 ${selectedGame ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
      </div>
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
