"use client";

import { Navigation } from "@/components/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BlogsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // BLOG LIST
  const blogs = [
    {
      title: "The Artificial Joy Residing in our Home",
      author: "Kristel Reyes",
      date: "30 October 2025",
      category: "AI",
      href: "/blogs/artificial-joy",
      img: "/BLOG1.jpg",
    },
    {
      title: "Not Posting Everything Anymore.. I guess?",
      author: "Princess Czyrah Jubilo",
      date: "30 October 2025",
      category: "Personal",
      href: "/blogs/notposting",
      img: "/princess.png",
    },
    {
      title: "The Time I Tried (and Failed) to Explain AI Voices to Grandma",
      author: "Samantha Nicole Borres",
      date: "30 October 2025",
      category: "AI",
      href: "/blogs/granmaai",
      img: "/samblog.png",
    },
    {
      title: "As Cliché as It Sounds, Think Before You Click",
      author: "Dawn Faith Montefalco",
      date: "06 November 2025",
      category: "Media Literacy",
      href: "/blogs/blog4",
      img: "/dawn.jpg",
    },
    {
      title: "My Dad Does Not Listen To Me– A Communication Student",
      author: "Satur Boy Gawec",
      date: "02 November 2025",
      category: "Media Literacy",
      href: "/blogs/blog5",
      img: "/satur.jpg",
    },
    {
    title: "NO ORIGINAL THOUGHT",
    author: "Jeffrey Dones",
    date: "06 November 2025",
    category: "Media Literacy",
    href: "/blogs/blog7",
    img: "/jeff.png",
    },
    {
      title: "Drowning in Headlines: When Floods & Falsehoods Collide",
      author: "Gian Andres",
      date: "31 October 2025",
      category: "Media Literacy",
      href: "/blogs/blog6",
      img: "/gian.png",
    },
  ];

  // FILTER SYSTEM
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || blog.category === category;
    return matchesSearch && matchesCategory;
  });

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d64535] via-[#f7af90] to-[#af4913]">

      {/* NAVIGATION */}
      <Navigation scrolled={scrolled} />

      {/* MAGAZINE HEADER */}
      <header className="pt-40 pb-10 text-center">
        <h1 className="text-7xl font-serif font-bold text-white drop-shadow-lg tracking-tight">
          Zenith Media Blogs
        </h1>
        <p className="text-white/90 mt-4 text-lg tracking-wide">
          Stories • Perspectives • Digital Voices
        </p>
      </header>

      {/* SEARCH + FILTERS */}
      <div className="max-w-5xl mx-auto mt-10 px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search blog titles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-5 py-3 rounded-xl bg-white/60 backdrop-blur border border-white/40 shadow-sm focus:outline-none"
          />

          {/* Category Filters */}
          <div className="flex gap-3 overflow-x-auto">
            {["All", "AI", "Media Literacy", "Personal"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-white text-[#923232] shadow"
                    : "bg-white/40 text-white hover:bg-white/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PINTEREST GRID */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 px-8 mt-16 pb-32">
        
        {visibleBlogs.map((blog, i) => (
          <a
            key={i}
            href={blog.href}
            className="group block mb-8 break-inside-avoid rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:rotate-[0.5deg]"
          >
            {/* Lazy Load Image */}
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover transition-all duration-700 blur-sm group-hover:blur-0 scale-110 group-hover:scale-100"
              />
            </div>

            {/* Info */}
            <div className="p-5">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                {blog.category}
              </p>
              <h2 className="text-lg font-semibold text-[#6A4B3C] leading-tight">
                {blog.title}
              </h2>
              <p className="text-xs text-gray-500 mt-2">
                {blog.author} <br /> {blog.date}
              </p>
            </div>
          </a>
        ))}

      </div>

      {/* LOAD MORE BUTTON */}
      {visibleCount < filteredBlogs.length && (
        <div className="text-center pb-20">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="px-6 py-3 bg-white/80 rounded-full font-medium text-[#923232] shadow hover:bg-white transition"
          >
            Load More
          </button>
        </div>
      )}

    </main>
  );
}
