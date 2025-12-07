"use client";

import Link from "next/link";
import { useState } from "react";

export default function NoOriginalThought() {
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
          NO ORIGINAL THOUGHT
        </h1>

        {/* Author Section */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow"></div>
          <div>
            <p className="text-sm font-medium">Jeffrey Dones</p>
            <p className="text-xs text-gray-500">November 6, 2025 · 6 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/jeff.png"
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">

          {/* Drop Cap */}
          <p className="text-[1.1rem] leading-relaxed">
            <span className="float-left text-6xl font-serif font-bold mr-3 -mt-1 text-[#b23b23]">
              I
            </span>
            have no original thought. This is a common comment I've seen on TikTok,
            usually on posts talking about seemingly odd experiences. Instances like
            forgetting how to breathe or pretending I'm on the eighth stop of my shower
            world tour feel unique—but turn out to be shared by thousands. What we think
            are isolated quirks are often collective human habits.
          </p>

          <p>
            In the same way, some argue that themes and stories in modern media are not
            “original thoughts” at all, and that any idea you come up with has likely
            been done decades ago.
          </p>

          {/* Pull Quote */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “People say nothing is original—but maybe originality is not about being first, but being different.”
          </blockquote>

          <p>
            I understand why people say this. After all, how many works follow the
            “boy/girl meets world” format? The “enemies to lovers” trope? Love at first sight?
            If originality were a requirement, we wouldn’t have hundreds of Romeo and Juliet
            retellings.
          </p>

          <p>
            But I beg to differ.
          </p>

          <p>
            Yes, some plot twists are predictable, and some tropes feel repetitive. But it is
            always fascinating to see someone put a unique twist on something familiar.
            Retellings and adaptations aren't inherently unoriginal—they often contain a fresh
            perspective buried within the familiar setup.
          </p>

          {/* Pull Quote 2 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Maybe originality isn’t disappearing—maybe it’s evolving.”
          </blockquote>

          <p>
            Romeo and Juliet has existed for centuries, yet we’ve seen it retold through
            gnomes, gangs in New York, and even 1990s Leonardo DiCaprio. These ideas were not
            recycled—they expanded upon existing narratives.
          </p>

          <p>
            I don’t believe in the idea of not having an “original thought,” because there is
            so much room to build upon a single concept. What you did on a Monday, someone
            else may do on a Friday—but the way you experience it is uniquely yours.
          </p>

          <p>
            It’s just a matter of how we own it. Someone may share the same idea as me, but
            only I can explain it in a way that sounds like me.
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

        {/* More Stories */}
        <div className="mt-24 animate-fadeInSlow">
          <h2 className="text-xl font-semibold mb-6">More stories from Zenith Media</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <Link href="/blogs/artificial-joy" className="group">
              <div className="w-full h-40 rounded-lg mb-3 overflow-hidden">
                <img src="/BLOG1.jpg" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                The Artificial Joy Residing in our Home
              </h3>
              <p className="text-sm text-gray-500">Kristel Reyes</p>
            </Link>

            <Link href="/blogs/notposting" className="group">
              <div className="w-full h-40 rounded-lg mb-3 overflow-hidden">
                <img src="/princess.png" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                Not Posting Everything Anymore... I Guess?
              </h3>
              <p className="text-sm text-gray-500">Princess Czyrah Jubilo</p>
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
