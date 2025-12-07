"use client";

import { Navigation } from "@/components/navigation";
import { useEffect, useState, useRef } from "react";

export default function BlogsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // BLOG DATABASE
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

  // FILTER LOGIC
  const filteredBlogs = blogs.filter((b) => {
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || b.category === category;
    return matchSearch && matchCategory;
  });

  // Infinite scroll handler
  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  // Page scroll listener + loading skeleton
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const timer = setTimeout(() => setLoading(false), 1200);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d64535] via-[#f7af90] to-[#af4913] pb-32">
      <Navigation scrolled={scrolled} />

      <div className="px-10 pt-40">

        {/* PAGE TITLE */}
        <h1 className="text-6xl font-bold font-serif text-[#923232] text-center">
          BLOGS
        </h1>

        {/* 🔍 SEARCH BAR */}
        <div className="flex justify-center mt-10 mb-10">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl px-6 py-3 rounded-full shadow-md border border-gray-300 focus:outline-none focus:border-[#923232] text-gray-700 text-lg"
          />
        </div>

        {/* 🏷 CATEGORY FILTERS */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {["All", "AI", "Media Literacy", "Personal"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm transition 
                ${
                  category === cat
                    ? "bg-[#923232] text-white border-[#923232]"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🖼 PINTEREST MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

          {/* Skeleton Loader */}
          {loading &&
            [...Array(6)].map((_, i) => <SkeletonCard key={i} />)}

          {/* Blog Cards */}
          {!loading &&
            filteredBlogs.slice(0, visibleCount).map((blog, i) => (
              <a
                key={i}
                href={blog.link}
                className="block break-inside-avoid rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 tilt"
              >
                <LazyImage src={blog.image} alt={blog.title} />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-[#6A4B3C]">{blog.title}</h2>
                  <p className="text-xs text-[#6A4B3C]/70 mt-2">
                    By {blog.author} <br /> {blog.date}
                  </p>
                </div>
              </a>
            ))}

        </div>

        {/* INFINITE SCROLL BUTTON */}
        {!loading && visibleCount < filteredBlogs.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-white rounded-full shadow-md border hover:bg-gray-100 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* SHIMMER + TILT + LAZY LOAD CSS */}
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

/* 🖼 LAZY IMAGE COMPONENT */
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

/* ⏳ SKELETON CARD */
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
