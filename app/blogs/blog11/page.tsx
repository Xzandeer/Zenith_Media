"use client";

import Link from "next/link";
import { useState } from "react";

export default function InaBlog() {
  const [likes, setLikes] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] px-5 pt-10 pb-32">

      {/* Fade-in Container */}
      <article className="max-w-3xl mx-auto animate-fadeIn">

        {/* Return Button */}
        <Link
          href="/blogs"
          className="text-sm text-gray-500 hover:text-black transition mb-6 inline-block"
        >
          ← Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
          You Generate
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow"></div>
          <div>
            <p className="text-sm font-medium">Ina Serquina</p>
            <p className="text-xs text-gray-500">October 30, 2025 · 6 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/ina.jpg"
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">

          {/* Drop Cap */}
          <p className="text-[1.1rem] leading-relaxed">
            <span className="float-left text-6xl font-serif font-bold mr-3 -mt-1 text-[#b23b23]">
              Y
            </span>
            ou generate
          </p>

          {/* Full Content */}
          <p>
            You generate.
          </p>

        </div>

        {/* Like + Comment */}
        <div className="mt-16 flex items-center gap-6 animate-fadeInSlow">
          <button
            onClick={() => setLikes(likes + 1)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
          >
            ❤️ Like <span className="text-sm text-gray-600">{likes}</span>
          </button>

          <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
            💬 Comment
          </button>
        </div>

        {/* More Stories */}
        <div className="mt-24 animate-fadeInSlow">
          <h2 className="text-xl font-semibold mb-6">More stories from Zenith Media</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* EXAMPLE LINKS */}
            <Link href="/blogs/notposting" className="group">
              <div className="w-full h-40 rounded-lg bg-gray-200 mb-3"></div>
              <h3 className="font-semibold group-hover:underline">
                Not Posting Everything Anymore… I Guess?
              </h3>
              <p className="text-sm text-gray-500">Princess Czyrah Jubilo</p>
            </Link>

            <Link href="/blogs/granmaai" className="group">
              <div className="w-full h-40 rounded-lg bg-gray-200 mb-3"></div>
              <h3 className="font-semibold group-hover:underline">
                The Time I Tried to Explain AI Voices to Grandma
              </h3>
              <p className="text-sm text-gray-500">Samantha Nicole Borres</p>
            </Link>

          </div>
        </div>
      </article>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-fadeInSlow {
          animation: fadeIn 1.2s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
