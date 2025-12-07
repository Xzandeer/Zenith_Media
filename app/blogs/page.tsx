"use client";

import { Navigation } from "@/components/navigation";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

export default function BlogsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6); // infinite scroll batch size

  // BLOG DATABASE
  const blogs = [
    {
      title: "The Artificial Joy Residing in our Home",
      author: "Kristel Reyes",
      date: "30 October 2025",
      category: "AI",
      link: "/blogs/artificial-joy",
      image: "/BLOG1.jpg",
      avatar: "/avatar1.png",
    },
    {
      title: "Not Posting Everything Anymore.. I Guess?",
      author: "Princess Czyrah Jubilo",
      date: "30 October 2025",
      category: "Personal Story",
      link: "/blogs/notposting",
      image: "/princess.png",
      avatar: "/avatar2.png",
    },
    {
      title: "The Time I Tried (and Failed) to Explain AI Voices to Grandma",
      author: "Samantha Nicole Borres",
      date: "30 October 2025",
      category: "AI",
      link: "/blogs/granmaai",
      image: "/samblog.png",
      avatar: "/avatar3.png",
    },
    {
      title: "As Cliché as It Sounds, Think Before You Click",
      author: "Dawn Faith Montefalco",
      date: "06 November 2025",
      category: "Media Literacy",
      link: "/blogs/blog4",
      image: "/dawn.jpg",
      avatar: "/avatar4.png",
    },
    {
      title: "My Dad Does Not Listen To Me – A Communication Student",
      author: "Satur Boy Gawec",
      date: "02 November 2025",
      category: "Media Literacy",
      link: "/blogs/blog5",
      image: "/satur.jpg",
      avatar: "/avatar5.png",
    },
    {
      title: "Drowning in Headlines: When Floods and Falsehoods Collide",
      author: "Gian Andres",
      date: "31 October 2025",
      category: "Media Literacy",
      link: "/blogs/blog6",
      image: "/gian.png",
      avatar: "/avatar6.png",
    },
  ];

  // RANDOM FEATURED ARTICLE
  const featured = useMemo(() => {
    const index = Math.floor(Math.random() * blogs.length);
    return blogs[index];
  }, [blogs]);

  // FILTERED BLOGS
  const filteredBlogs = blogs.filter((b) => {
    const matchCategory = category === "all" || b.category === category;
    const matchQuery =
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.author.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchQuery;
  });

  // INFINITE SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        setVisibleCount((prev) => prev + 3); // load 3 more
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NAV BAR SCROLL EFFECT
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={`${dark ? "bg-[#111] text-white" : "bg-[#faf4ef] text-black"} min-h-screen transition`}>

      {/* NAVIGATION */}
      <Navigation scrolled={scrolled} />

      {/* HEADER SECTION WITH ANIMATED GRADIENT */}
      <div className="relative py-24 px-10 bg-gradient-to-r from-[#ff8050] via-[#ffb27a] to-[#ff4d4d] animate-gradientFlow text-white">
        <h1 className="text-6xl font-serif font-bold drop-shadow-lg">BLOGS</h1>

        {/* DARK MODE TOGGLE */}
        <button
          onClick={() => setDark(!dark)}
          className="absolute top-8 right-8 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm hover:bg-black/40 transition"
        >
          {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* FEATURED ARTICLE */}
      <section className="px-10 mt-10">
        <Link href={featured.link} className="block group">
          <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg">
            <img src={featured.image} className="w-full h-full object-cover group-hover:scale-105 transition" />
          </div>
          <h2 className="mt-4 text-3xl font-serif font-semibold group-hover:underline">
            {featured.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {featured.author} · {featured.date}
          </p>
        </Link>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="px-10 mt-10 flex flex-col md:flex-row md:items-center gap-5">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`px-4 py-3 rounded-xl w-full border ${dark ? "bg-[#222]" : "bg-white"} shadow`}
        />

        {/* CATEGORIES */}
        <div className="flex gap-3">
          {["all", "AI", "Media Literacy", "Personal Story"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition 
                ${category === cat ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {filteredBlogs.slice(0, visibleCount).map((blog, i) => (
          <Link
            key={i}
            href={blog.link}
            className={`rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition bg-white ${
              dark ? "!bg-[#222] text-white" : ""
            }`}
          >
            <img src={blog.image} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-7 h-7 rounded-full bg-gray-300 overflow-hidden">
                  <img src={blog.avatar} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs opacity-70">{blog.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientFlow {
          background-size: 200% 200%;
          animation: gradientFlow 15s ease infinite;
        }
      `}</style>
    </main>
  );
}
