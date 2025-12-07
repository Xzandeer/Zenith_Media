"use client";

import Link from "next/link";
import { useState } from "react";

export default function DadDoesNotListen() {
  const [likes, setLikes] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] px-5 pt-10 pb-32">

      {/* Fade-in Container */}
      <article className="max-w-3xl mx-auto animate-fadeIn">

        {/* Back Button */}
        <Link
          href="/blogs"
          className="text-sm text-gray-500 hover:text-black transition mb-6 inline-block"
        >
          ← Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
          My Dad Does Not Listen To Me — A Communication Student
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow" />
          <div>
            <p className="text-sm font-medium">Satur Boy Gawec</p>
            <p className="text-xs text-gray-500">November 2, 2025 · 6 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/satur.jpg"
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">

          {/* Drop Cap */}
          <p className="text-[1.1rem] leading-relaxed">
            <span className="float-left text-6xl font-serif font-bold mr-3 -mt-1 text-[#b23b23]">
              M
            </span>
            y eating schedule does not usually match with my dad’s. However, on days it does,
            he is usually on his phone, listening to gossip YouTubers, fake-news peddlers,
            and online scams. A lot of times, this annoys me and I end up arguing with him,
            telling him not to patronize these people since they are not reliable sources
            of information.
          </p>

          <p>
            Still, he chooses to disagree. A big reason for this is traditional beliefs,
            and the mindset many older people have — that everything they see online must
            be legitimate. Why wouldn’t it be? The videos are full of visuals, photos,
            and “evidence” that seem convincing. What they don’t realize is that these
            images are often copy-pasted, edited, or stolen from Google and other sources.
          </p>

          {/* Pull Quote */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “They cannot differentiate plastered, stolen, or AI-generated visuals from real information.”
          </blockquote>

          <p>
            One harmful type of video I always scold my dad about is fake health and
            medicine content. These videos often use AI-written scripts and AI-generated
            narrations. They start with dramatic symptoms, followed by herbal “solutions,”
            and end with unrealistic medical claims.
          </p>

          <p>
            The problem is, unlike real medicines or vitamins shown on TV — which always
            include disclaimers like “no approved therapeutic claims” — these Facebook
            videos completely skip that part. They market themselves as if they were
            legitimate medical treatments.
          </p>

          {/* Pull Quote 2 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “These scams strike what is most human — emotions.”
          </blockquote>

          <p>
            As frustrating as it is, I continue to share what I know about media and
            information literacy (MIL) with my dad. Sometimes he listens, sometimes he
            doesn't. These scams target the values, hopes, and fears that older people
            relate to — especially when it comes to health and aging.
          </p>

          <p>
            I believe MIL is a continuous cycle of teaching and learning. Even people with
            strong MIL skills can still fall for misinformation. As long as fake news exists,
            the fight for education and digital literacy must continue.
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

            {/* Story 1 */}
            <Link href="/blogs/artificial-joy" className="group">
              <div className="w-full h-40 overflow-hidden rounded-lg mb-3">
                <img src="/BLOG1.jpg" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                The Artificial Joy Residing in our Home
              </h3>
              <p className="text-sm text-gray-500">Kristel Reyes</p>
            </Link>

            {/* Story 2 */}
            <Link href="/blogs/notposting" className="group">
              <div className="w-full h-40 overflow-hidden rounded-lg mb-3">
                <img src="/princess.png" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                Not Posting Everything Anymore… I Guess?
              </h3>
              <p className="text-sm text-gray-500">Princess Czyrah Jubilo</p>
            </Link>

            {/* Story 3 */}
            <Link href="/blogs/granmaai" className="group">
              <div className="w-full h-40 overflow-hidden rounded-lg mb-3">
                <img src="/samblog.png" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                The Time I Tried (and Failed) to Explain AI Voices to Grandma
              </h3>
              <p className="text-sm text-gray-500">Samantha Nicole Borres</p>
            </Link>

            {/* Story 4 */}
            <Link href="/blogs/blog4" className="group">
              <div className="w-full h-40 overflow-hidden rounded-lg mb-3">
                <img src="/dawn.png" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                As Cliché as It Sounds, Think Before You Click
              </h3>
              <p className="text-sm text-gray-500">Dawn Faith Montefalco</p>
            </Link>

          </div>
        </div>

      </article>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-fadeInSlow { animation: fadeIn 1.2s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </main>
  );
}
