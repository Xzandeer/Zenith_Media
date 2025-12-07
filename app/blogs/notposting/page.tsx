"use client";

import Link from "next/link";
import { useState } from "react";

export default function NotPosting() {
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
          Not Posting Everything Anymore.. I guess?
        </h1>

        {/* Author Section */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow"></div>
          <div>
            <p className="text-sm font-medium">Princess Czyrah Jubilo</p>
            <p className="text-xs text-gray-500">October 30, 2025 · 6 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/NOTPOSTING.jpg"
            alt="Not Posting Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">

          {/* Drop Cap */}
          <p className="text-[1.1rem] leading-relaxed">
            <span className="float-left text-6xl font-serif font-bold mr-3 -mt-1 text-[#b23b23]">
              B
            </span>
            ack in senior high school, I used to post everything. Every. Single. Thing.
            I posted about my quiz results, random selfies in class, screenshots of funny
            conversations, even my late-night thoughts when school got stressful...
          </p>

          <p>
            If you follow me on my social media, specifically my private account, you’d see
            over three thousand posts that basically tell the story of my life. Every scroll
            down feels like a time machine and a reminder of how open and expressive I used
            to be...
          </p>

          {/* Pull Quote */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Somewhere along the way, posting started to feel like a chore.”
          </blockquote>

          <p>
            What used to be fun slowly became tiring. I'd take photos or write captions and
            end up deleting them before posting. Not because I stopped caring — but because
            I learned not everything needs to be shared.
          </p>

          <p>
            Though, I’d be lying if I said I’ve completely stopped. There are days when I rant
            or overshare on my private account, especially when life gets too heavy...
          </p>

          {/* Pull Quote #2 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Maybe I'm not posting less — maybe I'm just posting differently now.”
          </blockquote>

          <p>
            So maybe I haven’t really stopped posting everything. Maybe I’m just posting
            differently now: less for attention, more for relief. Less for others, more for
            myself.
          </p>

          <p>
            Yes, I still post sometimes — rants, random thoughts, memories. But I do it on my
            own terms. I don’t feel the need to share everything anymore, and that’s okay.
            Even when I say I’m done sharing, there’s still a part of me that wants to be
            heard, even just a little.
          </p>
        </div>

        {/* Like + Comment Buttons */}
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

        {/* More Stories Section (With REAL Thumbnails) */}
        <div className="mt-24 animate-fadeInSlow">
          <h2 className="text-xl font-semibold mb-6">More stories from Zenith Media</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Story Card 1 */}
            <Link href="/blogs/artificial-joy" className="group">
              <div className="w-full h-40 overflow-hidden rounded-lg mb-3">
                <img
                  src="/BLOG1.jpg"
                  alt="Artificial Joy Thumbnail"
                  className="w-full h-full object-cover group-hover:opacity-90 transition"
                />
              </div>
              <h3 className="font-semibold group-hover:underline">
                The Artificial Joy Residing in our Home
              </h3>
              <p className="text-sm text-gray-500">Kristel Reyes</p>
            </Link>

            {/* Story Card 2 */}
            <Link href="/blogs/granmaai" className="group">
              <div className="w-full h-40 overflow-hidden rounded-lg mb-3">
                <img
                  src="/GRANDMAAI.jpg"
                  alt="Grandma AI Thumbnail"
                  className="w-full h-full object-cover group-hover:opacity-90 transition"
                />
              </div>
              <h3 className="font-semibold group-hover:underline">
                The Time I Tried (and Failed) to Explain AI Voices to Grandma
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
