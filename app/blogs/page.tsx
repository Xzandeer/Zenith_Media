"use client";

import { Navigation } from "@/components/navigation";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const timer = setTimeout(() => setLoading(false), 1200); // skeleton duration

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d64535] via-[#f7af90] to-[#af4913]">
      <Navigation scrolled={scrolled} />

      <div className="px-10 py-32">
        <h1 className="text-6xl font-bold font-serif text-[#923232] mb-3">
          BLOGS
        </h1>

        <p className="text-[17px] text-[#923232]/70 mb-14 max-w-2xl"></p>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* If loading → Show skeleton cards */}
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              {/* BLOG 1 */}
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
                    30 October 2025
                  </p>
                </div>
              </a>

              {/* BLOG 2 */}
              <a
                href="/blogs/notposting"
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-[1.02] transition-all duration-300"
              >
                <img src="/princess.png" className="w-full h-56 object-cover" />
                <div className="bg-[#C38A5B] p-5 text-white">
                  <h2 className="text-lg font-semibold">
                    Not Posting Everything Anymore.. I guess?
                  </h2>
                  <p className="text-xs mt-2">
                    By Princess Czyrah Jubilo <br />
                    30 October 2025
                  </p>
                </div>
              </a>

              {/* BLOG 3 */}
              <a
                href="/blogs/granmaai"
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-[1.02] transition-all duration-300"
              >
                <img src="/samblog.png" className="w-full h-56 object-cover" />
                <div className="bg-[#D7CBB2] p-5">
                  <h2 className="text-lg font-semibold text-[#6A4B3C]">
                    The Time I Tried (and Failed) to Explain AI Voices to Grandma
                  </h2>
                  <p className="text-xs text-[#6A4B3C]/70 mt-2">
                    By Samantha Nicole Borres <br />
                    30 October 2025
                  </p>
                </div>
              </a>

              {/* BLOG 4 */}
              <a
                href="/blogs/blog4"
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-[1.02] transition-all duration-300"
              >
                <img src="/dawn.jpg" className="w-full h-56 object-cover" />
                <div className="bg-[#C25A5A] p-5 text-white">
                  <h2 className="text-lg font-semibold">
                    As Cliché as It Sounds, Think Before You Click
                  </h2>
                  <p className="text-xs mt-2">
                    By Dawn Faith Montefalco <br />
                    06 November 2025
                  </p>
                </div>
              </a>

              {/* BLOG 5 */}
              <a
                href="/blogs/blog5"
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-[1.02] transition-all duration-300"
              >
                <img src="/satur.jpg" className="w-full h-56 object-cover" />
                <div className="bg-[#D7CBB2] p-5">
                  <h2 className="text-lg font-semibold text-[#6A4B3C]">
                    My Dad Does Not Listen To Me – A Communication Student
                  </h2>
                  <p className="text-xs text-[#6A4B3C]/70 mt-2">
                    By Satur Boy Gawec <br />
                    02 November 2025
                  </p>
                </div>
              </a>

              {/* BLOG 6 */}
              <a
                href="/blogs/blog6"
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-[1.02] transition-all duration-300"
              >
                <img src="/gian.png" className="w-full h-56 object-cover" />
                <div className="bg-[#C38A5B] p-5 text-white">
                  <h2 className="text-lg font-semibold">
                    Drowning in Headlines: When Floods and Falsehoods Collide
                  </h2>
                  <p className="text-xs mt-2">
                    By Gian Andres <br />
                    31 October 2025
                  </p>
                </div>
              </a>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .skeleton {
          background: linear-gradient(
            90deg,
            #e0e0e0 25%,
            #f0f0f0 50%,
            #e0e0e0 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.2s infinite;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </main>
  );
}


/* Skeleton Card Component */
function SkeletonCard() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="w-full h-56 skeleton"></div>
      <div className="p-5 space-y-3">
        <div className="h-4 w-3/4 skeleton rounded"></div>
        <div className="h-3 w-1/2 skeleton rounded"></div>
      </div>
    </div>
  );
}
