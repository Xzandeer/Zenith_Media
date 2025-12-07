"use client";

import { Navigation } from "@/components/navigation";
import { useEffect, useState, useRef } from "react";

export default function BlogsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  /* ---------------------- BLOG DATA ---------------------- */
  const blogs = [
    {
      title: "The Artificial Joy Residing in our Home",
      author: "Kristel Reyes",
      date: "30 October 2025",
      image: "/BLOG1.jpg",
      category: "AI",
      link: "/blogs/artificial-joy",
    },
    {
      title: "Not Posting Everything Anymore.. I guess?",
      author: "Princess Czyrah Jubilo",
      date: "30 October 2025",
      image: "/princess.png",
      category: "Personal",
      link: "/blogs/notposting",
    },
    {
      title: "The Time I Tried (and Failed) to Explain AI Voices to Grandma",
      author: "Samantha Nicole Borres",
      date: "30 October 2025",
      image: "/samblog.png",
      category: "AI",
      link: "/blogs/granmaai",
    },
    {
      title: "As Cliché as It Sounds, Think Before You Click",
      author: "Dawn Faith Montefalco",
      date: "06 November 2025",
      image: "/dawn.jpg",
      category: "Media Literacy",
      link: "/blogs/blog4",
    },
    {
      title: "My Dad Does Not Listen To Me – A Communication Student",
      author: "Satur Boy Gawec",
      date: "02 November 2025",
      image: "/satur.jpg",
      category: "Media Literacy",
      link: "/blogs/blog5",
    },
    {
      title: "Drowning in Headlines: When Floods and Falsehoods Collide",
      author: "Gian Andres",
      date: "31 October 2025",
      image: "/gian.png",
      category: "Media Literacy",
      link: "/blogs/blog6",
    },
  ];

  /* ---------------------- FILTER + SEARCH ---------------------- */
  const filteredBlogs = blogs.filter((b) => {
    const matchTitle = b.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || b.category === category;
    return matchTitle && matchCategory;
  });

  /* ---------------------- LOAD MORE ---------------------- */
  const loadMore = () => setVisibleCount((prev) => prev + 3);

  /* ---------------------- INITIAL EFFECTS ---------------------- */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setLoading(false), 1200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d64535] via-[#f7af90] to-[#af4913] pb-32">

      {/* NAVIGATION */}
      <Navigation scrolled={scrolled} />

      {/* THIN NAVBAR DIVIDER */}
      <div className="border-b border-white/40 backdrop-blur-xl"></div>

      {/* HERO BANNER */}
      <section className="text-center mt-20 mb-16 px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-md">
          ZENITH MEDIA BLOGS
        </h1>
        <p className="text-white/90 text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
          A collection of narratives, reflections, and digital-age storytelling.
        </p>
      </section>

      {/* SEARCH BAR */}
      <div className="flex justify-center mt-5 mb-12">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl px-6 py-3 rounded-full shadow-md border border-gray-300 
            focus:outline-none focus:border-[#923232] text-gray-700 text-lg"
        />
      </div>

      {/* CATEGORY FILTERS */}
      <div className="flex justify-center gap-3 mb-16 flex-wrap">
        {["All", "AI", "Media Literacy", "Personal"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm transition 
              ${
                category === cat
                  ? "bg-[#923232] text-white border-[#923232]"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PINTEREST GRID */}
      <div className="px-10 columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

        {loading &&
          [...Array(6)].map((_, i) => <SkeletonCard key={i} />)}

        {!loading &&
          filteredBlogs.slice(0, visibleCount).map((b, i) => (
            <a
              key={i}
              href={b.link}
              className="block break-inside-avoid rounded-xl overflow-hidden bg-white shadow-md 
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 tilt"
            >
              <LazyImage src={b.image} alt={b.title} />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-[#6A4B3C]">{b.title}</h2>
                <p className="text-xs text-[#6A4B3C]/70 mt-2">
                  By {b.author} <br /> {b.date}
                </p>
              </div>
            </a>
          ))}

      </div>

      {/* LOAD MORE BUTTON */}
      {!loading && visibleCount < filteredBlogs.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-white rounded-full shadow-md border hover:bg-gray-100 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        .skeleton {
          background: linear-gradient(
            90deg,
            #e0e0e0 25%,
            #f3f3f3 50%,
            #e0e0e0 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.3s infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .tilt:hover {
          transform: perspective(700px) rotateX(2deg) rotateY(-2deg);
        }
      `}</style>
    </main>
  );
}

/* ---------------------- LAZY LOADED IMAGE ---------------------- */
function LazyImage({ src, alt }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`w-full h-auto object-cover transition 
        ${loaded ? "blur-0" : "blur-md scale-105"} duration-300`}
    />
  );
}

/* ---------------------- SKELETON CARD ---------------------- */
function SkeletonCard() {
  return (
    <div className="break-inside-avoid rounded-xl overflow-hidden bg-white shadow-md">
      <div className="w-full h-56 skeleton"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 skeleton rounded"></div>
        <div className="h-3 w-1/2 skeleton rounded"></div>
      </div>
    </div>
  );
}
