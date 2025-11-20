"use client";

import { Navigation } from "@/components/navigation";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d64535] via-[#f7af90] to-[#af4913]">

      {/* NAVIGATION */}
      <Navigation scrolled={scrolled} />

      <div className="px-10 py-32">
        {/* PAGE HEADER */}
        <h1 className="text-6xl font-bold font-serif text-[#923232] mb-3">
          BLOGS
        </h1>

        <p className="text-[17px] text-[#923232]/70 mb-14 max-w-2xl"></p>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ---- BLOG 1 ---- */}
          <a
            href="/blogs/artificial-joy"
            className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-[1.02] transition-all duration-300"
          >
            <img src="/BLOG1.jpg" className="w-full h-56 object-cover" />
            <div className="bg-[#D7CBB2] p-5">
              <h2 className="text-lg font-semibold text-[#6A4B3C]">
                The Artificial Joy Residing in our Home
              </h2>
              <p className="text-xs text-[#6A4B3C]/70 mt-2">
                By Kristel Reyes <br />
                10 October 2025
              </p>
            </div>
          </a>

          {/* ---- BLOG 2 Placeholder ---- */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="w-full h-56 bg-gray-300"></div>
            <div className="bg-[#C25A5A] p-5 text-white">
              <h2 className="text-lg font-semibold">Coming Soon</h2>
              <p className="text-xs mt-2">More posts will be added soon.</p>
            </div>
          </div>

          {/* ---- BLOG 3 ---- */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="w-full h-56 bg-gray-300"></div>
            <div className="bg-[#C38A5B] p-5 text-white">
              <h2 className="text-lg font-semibold">Coming Soon</h2>
              <p className="text-xs mt-2">More posts will be added soon.</p>
            </div>
          </div>

          {/* ---- BLOG 4 ---- */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="w-full h-56 bg-gray-300"></div>
            <div className="bg-[#D7CBB2] p-5 text-[#6A4B3C]">
              <h2 className="text-lg font-semibold">Coming Soon</h2>
              <p className="text-xs mt-2">More posts will be added soon.</p>
            </div>
          </div>

          {/* ---- BLOG 5 ---- */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="w-full h-56 bg-gray-300"></div>
            <div className="bg-[#C25A5A] p-5 text-white">
              <h2 className="text-lg font-semibold">Coming Soon</h2>
              <p className="text-xs mt-2">More posts will be added soon.</p>
            </div>
          </div>

          {/* ---- BLOG 6 ---- */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="w-full h-56 bg-gray-300"></div>
            <div className="bg-[#C38A5B] p-5 text-white">
              <h2 className="text-lg font-semibold">Coming Soon</h2>
              <p className="text-xs mt-2">More posts will be added soon.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
