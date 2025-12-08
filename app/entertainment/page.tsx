"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import QuizzesSection from "@/components/quizzes-section";
import ArchetypeSection from "@/components/archetype-section"; // Import archetype game section

export default function EntertainmentPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedGame, setSelectedGame] = useState("quiz"); // State to track selected game

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
            The entertainment section is a space where users will be met with Quiz and Game challenges, but will also be rewarded with a gift of knowledge.
          </p>
        </div>
      </div>

      {/* Game Selection Buttons */}
      <div className="flex justify-center mt-6 space-x-6">
        <button
          className="bg-[#1F3E8A] text-white px-6 py-4 rounded-xl shadow-lg hover:bg-[#B5452E] transition-all duration-300"
          onClick={() => setSelectedGame("quiz")}
        >
          Play the Quiz
        </button>
        <button
          className="bg-[#1F3E8A] text-white px-6 py-4 rounded-xl shadow-lg hover:bg-[#B5452E] transition-all duration-300"
          onClick={() => setSelectedGame("archetype")}
        >
          What is Your Archetype
        </button>
      </div>

      {/* Display selected game */}
      <div className="flex justify-center mt-6 pb-20">
        {selectedGame === "quiz" ? <QuizzesSection /> : <ArchetypeSection />} {/* Render based on selection */}
      </div>
    </main>
  );
}
