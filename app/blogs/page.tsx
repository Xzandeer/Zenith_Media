"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const blogs = [
    {
      title: "The Artificial Joy Residing in our Home",
      author: "Kristel Reyes",
      date: "October 30, 2025",
      img: "/BLOG1.jpg",
      href: "/blogs/artificial-joy",
      category: "AI",
    },
    {
      title: "Not Posting Everything Anymore.. I guess?",
      author: "Princess Czyrah Jubilo",
      date: "October 30, 2025",
      img: "/princess.png",
      href: "/blogs/notposting",
      category: "Personal",
    },
    {
      title: "The Time I Tried (and Failed) to Explain AI Voices to Grandma",
      author: "Samantha Nicole Borres",
      date: "October 30, 2025",
      img: "/samblog.png",
      href: "/blogs/granmaai",
      category: "AI",
    },
    {
      title: "As Cliché as It Sounds, Think Before You Click",
      author: "Dawn Faith Montefalco",
      date: "November 6, 2025",
      img: "/dawn.jpg",
      href: "/blogs/blog4",
      category: "Media Literacy",
    },
    {
      title: "My Dad Does Not Listen To Me– A Communication Student",
      author: "Satur Boy Gawec",
      date: "November 2, 2025",
      img: "/satur.jpg",
      href: "/blogs/blog5",
      category: "Media Literacy",
    },
    {
      title: "Drowning in Headlines",
      author: "Gian Andres",
      date: "October 31, 2025",
      img: "/gian.png",
      href: "/blogs/blog6",
      category: "Media Literacy",
    },
    {
      title: "My For You Page Knows Me Too Well",
      author: "Cearelle Joy Anolin",
      date: "November 1, 2025",
      img: "/ceablog.png",
      href: "/blogs/blog7",
      category: "Media Literacy",
    },
    {
      title: "Marhaba— I mean, Mabuhay!",
      author: "Albeira Cruz",
      date: "November 2, 2025",
      img: "/albs.png",
      href: "/blogs/blog9",
      category: "Personal",
    },
    {
      title: "Why Does My Feed Keep Showing Me Sad Content?",
      author: "Kasheem Siborboro",
      date: "November 10, 2025",
      img: "/kash.png",
      href: "/blogs/blog10",
      category: "Media Literacy",
    },
    {
      title: "Growing Up Behind: The Digital World vs Traditional Filipino Family",
      author: "Ina Serquina",
      date: "October 30, 2025",
      img: "/ina.png",
      href: "/blogs/blog11",
      category: "Media Literacy",
    },
    {
      title: "No Original Thought",
      author: "Jeffrey Dones",
      date: "November 6, 2025",
      img: "/jeff.png",
      href: "/blogs/no-original-thought", // Adjust the link
      category: "Personal",
    }
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || blog.category === category;
    return matchesSearch && matchesCategory;
  });

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoadingMore(false);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#f6f3ef] pb-20">

      {/* 🔥 TOP NAVIGATION BAR */}
      <nav
        className={`
          fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between transition-all
          ${scrolled ? "backdrop-blur-md bg-white/70 shadow-sm" : "bg-transparent"}
        `}
      >
        <Link href="/">
          <Image
            src="/Logo Mark.png"
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        <div className="hidden sm:flex gap-6 font-medium text-[#6A4B3C]">
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/visuals">Visuals</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* MAIN HEADER */}
      <header
        className={`w-full mt-28 transition-all duration-300 ${
          scrolled ? "pt-4" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col items-center">
          <h1 className="text-5xl font-serif tracking-wide text-[#7a3a2f]">
            Zenith Media Journal
          </h1>

          <input
            type="text"
            placeholder="Search blog titles..."
            className="mt-5 px-5 py-2 w-full max-w-xl rounded-full border border-gray-300 text-sm shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex gap-4 mt-4">
            {["All", "AI", "Media Literacy", "Personal"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm transition ${
                  category === cat
                    ? "bg-[#7a3a2f] text-white"
                    : "bg-white border shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-10 mt-14">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {visibleBlogs.map((blog, index) => (
            <Link
              key={index}
              href={blog.href}
              className="block break-inside-avoid rounded-xl bg-white shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <img src={blog.img} className="w-full h-auto object-cover" />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-[#6A4B3C]">{blog.title}</h2>
                <p className="text-xs text-gray-500 mt-1">
                  {blog.author} • {blog.date}
                </p>
                <span className="text-[11px] mt-2 inline-block px-2 py-1 bg-[#7a3a2f]/10 text-[#7a3a2f] rounded-full">
                  {blog.category}
                </span>
              </div>
            </Link>
          ))}

          {loadingMore &&
            [...Array(3)].map((_, i) => (
              <div key={i} className="w-full h-56 bg-gray-200 animate-pulse rounded-xl" />
            ))}
        </div>

        {visibleCount < filteredBlogs.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-[#7a3a2f] text-white rounded-full shadow-md hover:scale-105 transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>

    </main>
  );
}
