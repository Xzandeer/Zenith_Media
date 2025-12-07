"use client";

import Link from "next/link";
import { useState } from "react";

export default function ArtificialJoy() {
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
          The Artificial Joy Residing in our Home
        </h1>

        {/* Author Section */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow"></div>
          <div>
            <p className="text-sm font-medium">Kristel Reyes</p>
            <p className="text-xs text-gray-500">Oct 30, 2025 · 6 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/BLOG1.jpg"
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">

          {/* Drop Cap Paragraph */}
          <p className="text-[1.1rem] leading-relaxed">
            <span className="float-left text-6xl font-serif font-bold mr-3 -mt-1 text-[#b23b23]">
              W
            </span>
            ould you ask someone to get out of the pool while they’re having so much fun,
            even if they just jumped in a few minutes ago?
          </p>

          <p>
            <i>Would you let them enjoy the water or save them from its depths?</i>
          </p>

          <p>
            The same thing keeps happening in our family—my sister initiating the AI-assisted
            image generation, and my parents rejoicing every result fed to them, leaving me
            with the dilemma of whether to cut their happiness short or just let them be.
          </p>

          {/* Pull Quote */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “But blessed who, exactly?”
          </blockquote>

          <p>
            However, it’s getting out of hand—they use such scarily altered images as their
            display photos and brag about them in their profiles with a
            <b> #feelingblessed </b> caption.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4 leading-snug">
            Who benefits from these AI-generated images with real people’s faces plastered
            on a robot’s canvas, apart from our distorted perception of beauty?
          </h3>

          <p>
            This emerging technological epidemic, disguised as casual entertainment, reveals
            a gap in awareness about the real dangers of AI.
          </p>

          <p>
            According to Howarth (2025), AI usage increased by 84.58% in the last 12 months—
            ChatGPT alone accumulated 5.4 billion visits every month.
          </p>

          <p>
            Reyes (2025) reported that Filipinos are the top users of generative AI,
            producing 25.5 million images in just a few days.
          </p>

          <p>
            These AI tools don’t just contribute to environmental strain—they also risk
            exposing my family’s physical identities to potential misuse.
          </p>

          {/* Pull Quote #2 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Who would want that for the people they love?”
          </blockquote>

          <p>
            I tried starting small. I warned my sister about AI’s environmental impact.
            <i>Well, it didn’t work.</i> She laughed it off.
          </p>

          <p className="font-semibold">
            But conversations like this deserve deeper reflection and meaningful change.
          </p>

          <p>
            Let’s start with the people closest to us. Let’s begin the conversation, and more
            importantly, end it with compassion and purpose.
          </p>

          <h4 className="mt-10 font-semibold">References</h4>
          <p>
            <a href="https://share.google/M7Zg9Aj5WHf1ZUE9" className="text-green-700 underline">
              https://share.google/M7Zg9Aj5WHf1ZUE9
            </a>
            <br />
            <a href="https://share.google/7QSNGIHnM2PdrUoKFI" className="text-green-700 underline">
              https://share.google/7QSNGIHnM2PdrUoKFI
            </a>
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

        {/* More Stories Section */}
        <div className="mt-24 animate-fadeInSlow">
          <h2 className="text-xl font-semibold mb-6">More stories from Zenith Media</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Story Card 1 */}
            <Link href="/blogs/notposting" className="group">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
              <h3 className="font-semibold group-hover:underline">
                Not Posting Everything Anymore… I Guess?
              </h3>
              <p className="text-sm text-gray-500">Princess Czyrah Jubilo</p>
            </Link>

            {/* Story Card 2 */}
            <Link href="/blogs/granmaai" className="group">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
              <h3 className="font-semibold group-hover:underline">
                GrandmaAI — The New Age of Digital Nostalgia
              </h3>
              <p className="text-sm text-gray-500">Author</p>
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
