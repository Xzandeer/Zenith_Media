"use client";

import Link from "next/link";
import { useState } from "react";

export default function Blog11Page() {
  const [likes, setLikes] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] px-5 pt-10 pb-32">

      {/* Fade-in container */}
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
          Scrolling in Circles: How the Algorithm Knows Me Better Than I Know Myself
        </h1>

        {/* Author Section */}
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
              T
            </span>
            he algorithm knows me too well—and somehow, not at all.
            Every time I open my phone, it feels like my feed has already made
            decisions for me. What I want to see, what I should feel, what I
            might think next. It’s strange, really, how predictable I have become
            in the eyes of a machine I’ve never spoken to.
          </p>

          <p>
            A simple pause on a video is enough for it to say, <i>“Ah, so you like this,”</i>
            and suddenly my entire digital world rearranges itself to keep me scrolling.
            But how did it become this good at reading me?
          </p>

          {/* Pull Quote */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “The more personalized our world becomes, the smaller it quietly turns.”
          </blockquote>

          <p>
            In today’s attention economy, the algorithm is less of a tool and more
            of a mirror—one that reflects not who we are, but who we’ve been
            conditioned to be. It feeds us content based on impulses, not intentions.
            A two-second hesitation becomes a preference. A half-watched video becomes
            a pattern.
          </p>

          <p>
            Soon, our feed becomes a neatly packed box—one that fits our tastes so
            perfectly that there’s no room left for anything else.
          </p>

          {/* Pull Quote 2 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Awareness is the only way out of a loop designed to be invisible.”
          </blockquote>

          <p>
            There are days when I scroll and realize I’m seeing the same stories
            told by different people. The same opinions echoed in different voices.
            It stops feeling like browsing and starts feeling like being trapped
            in a loop—a curated echo chamber disguised as entertainment.
          </p>

          <p>
            As someone who studies media literacy, I’ve learned that critical
            thinking begins with acknowledging that what we see online isn’t neutral.
            It’s filtered, predicted, and packaged. Nothing is shown to us by accident.
          </p>

          <p>
            The solution isn’t to abandon social media; it’s too deeply embedded in
            our lives. Instead, we must become intentional: seeking out sources that
            challenge us, following creators outside our bubble, and consuming with
            curiosity rather than passivity.
          </p>

          <p>
            Because if the algorithm already knows us too well, maybe it’s time we
            start knowing ourselves better too.
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

            <Link href="/blogs/artificial-joy" className="group">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
              <h3 className="font-semibold group-hover:underline">
                The Artificial Joy Residing in our Home
              </h3>
              <p className="text-sm text-gray-500">Kristel Reyes</p>
            </Link>

            <Link href="/blogs/notposting" className="group">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
              <h3 className="font-semibold group-hover:underline">
                Not Posting Everything Anymore… I Guess?
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
