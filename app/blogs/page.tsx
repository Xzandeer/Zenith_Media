"use client";

import { Navigation } from "@/components/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

// Blog Data
const BLOGS = [
  {
    title: "The Artificial Joy Residing in our Home",
    author: "Kristel Reyes",
    date: "30 October 2025",
    thumbnail: "/BLOG1.jpg",
    href: "/blogs/artificial-joy",
    category: "AI",
  },
  {
    title: "Not Posting Everything Anymore.. I guess?",
    author: "Princess Czyrah Jubilo",
    date: "30 October 2025",
    thumbnail: "/princess.png",
    href: "/blogs/notposting",
    category: "Personal",
  },
  {
    title: "The Time I Tried (and Failed) to Explain AI Voices to Grandma",
    author: "Samantha Nicole Borres",
    date: "30 October 2025",
    thumbnail: "/samblog.png",
    href: "/blogs/granmaai",
    category: "AI",
  },
  {
    title: "As Cliché as It Sounds, Think Before You Click",
    author: "Dawn Faith Montefalco",
    date: "06 November 2025",
    thumbnail: "/dawn.jpg",
    href: "/blogs/blog4",
    category: "Media Literacy",
  },
  {
    title: "My Dad Does Not Listen To Me – A Communication Student",
    author: "Satur Boy Gawec",
    date: "02 November 2025",
    thumbnail: "/satur.jpg",
    href: "/blogs/blog5",
    category: "Media Literacy",
  },
  {
    title: "Drowning in Headlines: Floods & Falsehoods",
    author: "Gian Andres",
    date: "31 October 2025",
    thumbnail: "/gian.png",
    href: "/blogs/blog6",
    category: "Media Literacy",
  },
  {
    title: "NO ORIGINAL THOUGHT",
    author: "Jeffrey Dones",
    date: "06 November 2025",
    thumbnail: "/jeff.png",
    href: "/blogs/blog7",
    category: "Personal",
  },
  {
    title: "My For You Page Knows Me Too Well...",
    author: "Cearelle Joy Anolin",
    date: "01 November 2025",
    thumbnail: "/ceablog.png",
    href: "/blogs/blog8",
    category: "Media Literacy",
  },
  {
    title: "Marhaba— I Mean, Mabuhay!",
    author: "Albeira Cruz",
    date: "02 November 2025",
    thumbnail: "/albs.png",
    href: "/blogs/blog9",
    category: "Personal",
  },
  {
    title: "Why does my feed keep showing me sad content?",
    author: "Kasheem Siborboro",
    date: "10 November 2025",
    thumbnail: "/kash.png",
    href: "/blogs/blog10",
    category: "Media Literacy",
  },
];

const CATEGORIES = ["All", "AI", "Media Literacy", "Personal"];

export default function BlogsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // infinite load

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Filtering
  const filtered = BLOGS.filter((b) => {
    const matchTitle = b.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || b.category === category;
    return matchTitle && matchCategory;
  });

  const visibleBlogs = filtered.slice(0, visibleCount);

  // Infinite scroll trigger
  const loadMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d64535] via-[#f7af90] to-[#af4913]">

      {/* NAVIGATION */}
      <Navigation scrolled={scrolled} />

      <div className="px-10 py-24">

        {/* MAGAZINE HEADER */}
        <h1 className="text-[70px] font-serif font-bold text-[#923232] text-center tracking-tight">
          ZENITH <span className="text-[#7a1f1f]">MEDIA</span>
        </h1>
        <p className="text-center text-[#923232]/70 text-lg -mt-4 mb-12">
          Stories. Voices. Perspectives.
        </p>

        {/* SEARCH BAR */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full max-w-lg px-5 py-3 rounded-full shadow-md border border-[#923232]/40 
              focus:ring-2 focus:ring-[#923232] outline-none
            "
          />
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`
                px-5 py-2 rounded-full border transition 
                ${category === cat 
                  ? "bg-[#923232] text-white" 
                  : "border-[#923232] text-[#923232] hover:bg-[#923232]/10"}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BLOG GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {visibleBlogs.map((blog, i) => (
            <Link
              key={i}
              href={blog.href}
              className="block break-inside-avoid rounded-xl overflow-hidden bg-white shadow-xl 
                hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={blog.thumbnail}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h2 className="text-lg font-semibold text-[#6A4B3C]">
                  {blog.title}
                </h2>

                <p className="text-xs text-[#6A4B3C]/70 mt-2">
                  By {blog.author} <br />
                  {blog.date}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-[#923232] text-white rounded-full shadow-lg hover:bg-[#7a1f1f] transition"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
