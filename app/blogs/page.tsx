"use client";

import { Navigation } from "@/components/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // BLOG LIST WITH MULTI-CATEGORIES
  const blogs = [
    {
      title: "The Artificial Joy Residing in our Home",
      author: "Kristel Reyes",
      date: "30 October 2025",
      category: ["AI"],
      href: "/blogs/artificial-joy",
      img: "/BLOG1.jpg",
    },
    {
      title: "Not Posting Everything Anymore.. I guess?",
      author: "Princess Czyrah Jubilo",
      date: "30 October 2025",
      category: ["Personal"],
      href: "/blogs/notposting",
      img: "/princess.png",
    },
    {
      title: "The Time I Tried (and Failed) to Explain AI Voices to Grandma",
      author: "Samantha Nicole Borres",
      date: "30 October 2025",
      category: ["AI"],
      href: "/blogs/granmaai",
      img: "/samblog.png",
    },
    {
      title: "As Cliché as It Sounds, Think Before You Click",
      author: "Dawn Faith Montefalco",
      date: "06 November 2025",
      category: ["Media Literacy"],
      href: "/blogs/blog4",
      img: "/dawn.jpg",
    },
    {
      title: "My Dad Does Not Listen To Me – A Communication Student",
      author: "Satur Boy Gawec",
      date: "02 November 2025",
      category: ["Media Literacy"],
      href: "/blogs/blog5",
      img: "/satur.jpg",
    },
    {
      title: "Drowning in Headlines: When Floods & Falsehoods Collide",
      author: "Gian Andres",
      date: "31 October 2025",
      category: ["Media Literacy"],
      href: "/blogs/blog6",
      img: "/gian.png",
    },
    {
      title: "NO ORIGINAL THOUGHT",
      author: "Jeffrey Dones",
      date: "06 November 2025",
      category: ["Media Literacy"],
      href: "/blogs/blog7",
      img: "/jeff.png",
    },
    {
      title: "My for you page knows me too well and that’s where the problem starts…",
      author: "Cearelle Joy Anolin",
      date: "01 November 2025",
      category: ["Media Literacy", "Personal"],
      href: "/blogs/blog8",
      img: "/ceablog.png",
    },
  ];

  // FILTERED + SEARCHED LIST
  const filteredBlogs = blogs.filter((b) => {
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "All" || (Array.isArray(b.category) && b.category.includes(filter));
    return matchSearch && matchFilter;
  });

  // LOAD MORE
  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoadingMore(false);
    }, 700);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d64535] via-[#f7af90] to-[#af4913] pb-32">

      {/* NAVIGATION */}
      <Navigation scrolled={scrolled} />

      {/* MAGAZINE HEADER */}
      <div className="pt-32 px-10 text-center text-[#691f1f]">
        <h1 className="text-7xl font-serif font-bold mb-3 tracking-tight">
          Zenith Media Journal
        </h1>
        <p className="text-lg text-[#691f1f]/70 max-w-2xl mx-auto">
          Stories, reflections, and perspectives from the digital age.
        </p>

        {/* Centered Search */}
        <div className="flex justify-center mt-10">
          <input
            type="text"
            placeholder="Search blog titles..."
            className="w-full max-w-lg px-4 py-3 rounded-xl bg-white/80 backdrop-blur text-black shadow-md outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {["All", "AI", "Media Literacy", "Personal"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-4 py-1.5 rounded-full border text-sm transition
                ${
                  filter === cat
                    ? "bg-[#691f1f] text-white border-[#691f1f]"
                    : "bg-white/70 backdrop-blur border-[#691f1f]/40 text-[#691f1f] hover:bg-white"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* BLOGS GRID – PINTEREST STYLE */}
      <div className="px-10 mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

        {filteredBlogs.slice(0, visibleCount).map((b, i) => (
          <Link
            key={i}
            href={b.href}
            className="break-inside-avoid block transform transition hover:-translate-y-1 hover:scale-[1.02]"
          >
            <div className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition">
              <img src={b.img} className="w-full h-56 object-cover" />

              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-[#a3452d]">
                  {Array.isArray(b.category) ? b.category.join(" • ") : b.category}
                </p>

                <h2 className="text-lg font-semibold text-[#522015] mt-1">
                  {b.title}
                </h2>

                <p className="text-xs text-[#522015]/60 mt-2">
                  {b.author} <br /> {b.date}
                </p>
              </div>
            </div>
          </Link>
        ))}

        {/* Skeleton Loaders */}
        {loadingMore && (
          <>
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="break-inside-avoid w-full h-72 bg-white/50 backdrop-blur rounded-2xl shadow animate-pulse"
              />
            ))}
          </>
        )}
      </div>

      {/* LOAD MORE BUTTON */}
      {visibleCount < filteredBlogs.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            className="px-6 py-3 rounded-full bg-white text-[#691f1f] font-semibold shadow hover:scale-105 transition"
          >
            Load More
          </button>
        </div>
      )}

    </main>
  );
}
