"use client";

import Link from "next/link";
import { useState } from "react";

export default function ThinkBeforeYouClick() {
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
          As Cliché as It Sounds, Think Before You Click
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow" />
          <div>
            <p className="text-sm font-medium">Dawn Faith Montefalco</p>
            <p className="text-xs text-gray-500">November 6, 2025 · 6 min read</p>
          </div>
        </div>

        {/* Header Image - TEMP placeholder (you can update file) */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/dawn.png"
            alt="Think Before You Click Thumbnail"
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
            n today’s world, where we spend hours glued to our screens, connected to the
            internet, and express ourselves freely in the digital world, we forget that we
            carry responsibilities just like we do in the real world...
          </p>

          <p>
            We forget that behind every username is a real person with emotions, beliefs,
            and boundaries — that words, even typed casually, can have lasting effects.
          </p>

          {/* Pull Quote */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Misinformation spreads faster than we realize — and the damage is often done before the truth catches up.”
          </blockquote>

          <p>
            There have been moments when I’ve seen people, even family members, share false
            information because it seemed convincing or entertaining. Sometimes it’s
            unintentional, but the consequences can still be serious.
          </p>

          <p>
            It’s easy to forget that our words or actions can have an impact. We overshare
            in the name of freedom of expression — but freedom of expression is not freedom
            from consequences.
          </p>

          {/* Pull Quote 2 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Deleting a post doesn’t mean it’s gone. Someone may have already seen, shared, or screenshotted it.”
          </blockquote>

          <p>
            Mindfulness online isn’t just about avoiding mistakes — it’s about taking
            ownership. Our digital footprints last longer than we think.
          </p>

          <p>
            One of the biggest challenges of our generation is learning to slow down in a
            space that moves unbelievably fast. The internet rewards speed — post now,
            react now, go viral now. But responsibility requires reflection.
          </p>

          <p>
            I’ve caught myself wanting to post something in frustration or impulse, only to
            pause and ask, “Will this help or hurt someone?” That pause — that moment of
            mindfulness — is something we all need to practice more often.
          </p>

          {/* Pull Quote 3 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “My voice online carries weight. What I share shapes conversations and communities.”
          </blockquote>

          <p>
            So the next time I’m about to hit “post,” I’ll try to remember: my voice online
            carries weight. What I share shapes the conversations and communities I’m part
            of. Being mindful and accountable isn’t about avoiding harm — it’s about making
            the digital world a better reflection of who we truly are.
          </p>

          <p>
            Because at the end of the day, digital citizenship isn’t just about being online.
            It’s about being human online.
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

            {/* Story 1 – Artificial Joy */}
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

            {/* Story 2 – Not Posting */}
            <Link href="/blogs/notposting" className="group">
              <div className="w-full h-40 overflow-hidden rounded-lg mb-3">
                <img
                  src="/princess.png"
                  alt="Not Posting Thumbnail"
                  className="w-full h-full object-cover group-hover:opacity-90 transition"
                />
              </div>
              <h3 className="font-semibold group-hover:underline">
                Not Posting Everything Anymore… I Guess?
              </h3>
              <p className="text-sm text-gray-500">Princess Czyrah Jubilo</p>
            </Link>

            {/* Story 3 – GrandmaAI */}
            <Link href="/blogs/granmaai" className="group">
              <div className="w-full h-40 overflow-hidden rounded-lg mb-3">
                <img
                  src="/samblog.png"
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

