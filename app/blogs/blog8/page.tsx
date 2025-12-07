"use client";

import Link from "next/link";
import { useState } from "react";

export default function Blog8() {
  const [likes, setLikes] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] px-5 pt-10 pb-32">

      {/* Fade-in container */}
      <article className="max-w-3xl mx-auto animate-fadeIn">

        {/* Back button */}
        <Link
          href="/blogs"
          className="text-sm text-gray-500 hover:text-black transition mb-6 inline-block"
        >
          ← Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
          My for you page knows me too well and that’s where the problem starts…
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow"></div>
          <div>
            <p className="text-sm font-medium">Cearelle Joy Anolin</p>
            <p className="text-xs text-gray-500">November 1, 2025 · 6 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/ceablog.png"
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
            y “For you page” knows me too well, and that’s where the problem starts…
            Your For You page is made for you — exactly. And that's where the problem starts.
            You only see what you want to believe in, and over time, you stop hearing other
            perspectives, becoming biased without realizing it.
          </p>

          {/* Pull Quote */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “You scroll and scroll until you sink away from the truth.”
          </blockquote>

          <p>
            Rather than looking into the other side, you can’t break through the echo chamber;
            you scroll until you forget there’s another side to the story.
          </p>

          <p>
            How can we break through the echo chamber? In today’s digital age, our online
            experiences are shaped by algorithms. They show us what we like, what we reacted
            to, what we commented on — and in return, we rarely see anything that challenges
            our beliefs.
          </p>

          <p>
            I get it. Why seek another perspective when your bubble feels safe and familiar?
            But that bubble limits you. It boxes you in. It convinces you that what you see
            repeatedly must be true.
          </p>

          {/* Pull Quote #2 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Awareness is the first step to breaking the cycle.”
          </blockquote>

          <p>
            Many people don’t even realize they're inside an echo chamber. Awareness is the
            beginning — realizing that your feed is shaped by algorithms. Understanding that
            your online world is curated, filtered, and personalized to keep you comfortable.
          </p>

          <p>
            Breaking free requires intention. It requires seeking different sources, following
            people with contrasting views, and embracing discomfort as part of growth.
          </p>

          <p>
            It’s not easy, but it’s necessary. By taking baby steps toward diverse viewpoints,
            we build a more balanced and critical understanding of the world around us.
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

            <Link href="/blogs/notposting" className="group">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3">
                <img src="/princess.png" className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                Not Posting Everything Anymore.. I guess?
              </h3>
              <p className="text-sm text-gray-500">Princess Czyrah Jubilo</p>
            </Link>

            <Link href="/blogs/granmaai" className="group">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3">
                <img src="/samblog.png" className="w-full h-full object-cover rounded-lg" />
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

