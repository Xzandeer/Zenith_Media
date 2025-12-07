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
            alt="Blog Thumbnail"
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
            conversations, even my late-night thoughts when school got stressful. My feed
            used to be a timeline of my everyday life. I didn’t think too much about it
            because posting just felt natural to me. Maybe I liked the feeling of being
            seen, or maybe it was my way of documenting memories I didn’t want to forget.
          </p>

          <p>
            If you follow me on my social media, specifically my private account, you’d see
            over three thousand posts that basically tell the story of my life. Every scroll
            down feels like a time machine and a reminder of how open and expressive I used
            to be. But then you’d also notice that my last post was months ago. Because
            somewhere along the way, posting started to feel like a chore.
          </p>

          {/* Pull Quote */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “I stopped posting not because I have less to say, but because I learned not everything needs to be shared.”
          </blockquote>

          <p>
            What used to be fun slowly became tiring. I’d take photos or write captions and
            end up deleting them before I even hit the post button. It's not that I stopped
            caring, I just stopped feeling the need to show everything. These days, I only
            post when I need to clear up my phone storage—like literally just to make space.
            I realized I stopped posting not because I had less to say, but because I learned
            that not everything needs to be shared.
          </p>

          <p>
            Though, I’d be lying if I said I’ve completely stopped. There are days when I
            rant or overshare on my private account, especially when life gets too heavy.
            I can’t always keep it to myself because sometimes posting feels like the only
            way to breathe. But even then, I know those posts don’t define me. You can scroll
            through all my words and still not really know who I am outside the screen.
          </p>

          {/* Pull Quote 2 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Maybe I'm not posting less — maybe I'm just posting differently now.”
          </blockquote>

          <p>
            So maybe I haven’t really stopped posting everything. Maybe I’m just posting
            differently now, less for attention, more for relief. Less for others, more
            for myself. It’s funny, really. I keep saying I’m done with posting, but somehow,
            I always find my way back.
          </p>

          <p>
            So yes, I still post sometimes—my rants, random thoughts, and memories. But I do
            it on my own terms. I no longer feel the need to share everything, and that’s okay.
            I guess that’s what makes this title make sense… or not? I’m not posting everything
            anymore... I guess? Because even when I say I’m done sharing, there’s still a part
            of me that wants to be heard, even just a little.
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
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
              <h3 className="font-semibold group-hover:underline">
                The Artificial Joy Residing in our Home
              </h3>
              <p className="text-sm text-gray-500">Kristel Reyes</p>
            </Link>

            <Link href="/blogs/granmaai" className="group">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
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
