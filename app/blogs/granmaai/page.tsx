"use client";

import Link from "next/link";
import { useState } from "react";

export default function GrandmaAI() {
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
          The Time I Tried (and Failed) to Explain AI Voices to Grandma
        </h1>

        {/* Author Section */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow"></div>
          <div>
            <p className="text-sm font-medium">Samantha Nicole Borres</p>
            <p className="text-xs text-gray-500">October 30, 2025 · 5 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/samblog.png"
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">

          {/* Drop Cap */}
          <p className="text-[1.1rem] leading-relaxed">
            <span className="float-left text-6xl font-serif font-bold mr-3 -mt-1 text-[#b23b23]">
              O
            </span>
            ne of my favorite weekly routines is spending time with my grandma in our family
            room. After a busy week at school, or on Sundays when I have no classes, I head
            upstairs to keep her company. She usually spends most of her day there doing
            cross-stitch, while I either bring my homework or just relax and watch Netflix
            with her.
          </p>

          <p>
            Grandma loves her stories, whether she's cross-stitching or just relaxing. Her
            favorite entertainment is "Eat Bulaga," but she's also a big fan of narrated
            stories on YouTube. These range from investigative reports to horror tales,
            though she mostly enjoys love stories. She even listens to them wherever we go,
            like at restaurants, patiently waiting for food with her earphones in (a very
            Gen Z move).
          </p>

          {/* Pull Quote */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Ano bang narrator niyo, mali-mali ng pagbasa.”
          </blockquote>

          <p>
            One day, my grandma complained about a new narrator. According to her, the
            pronunciation was all wrong, especially in the parts that were in Tagalog. She
            insisted that the narrator didn’t know how to read properly. When I listened, it
            became clear that the narrator was an AI voice, not a real person.
          </p>

          <p>
            I told her, “Grandma, that’s not a real person. That’s artificial intelligence.”
            However, she was convinced it was a human narrating. I tried to explain what AI
            is, even looking up the definition together. I mentioned that the YouTube channel
            might write the script but use AI to narrate because the videos are often long,
            sometimes an hour or more, and the pronunciation sounded artificial.
          </p>

          <p>
            Even though I showed her examples like Siri and how I can change voice settings,
            she held on to her belief. At one point, while using my YouTube account to avoid
            ads, she even commented on a video:
            <i> “Ano bang narrator niyo, mali-mali ng pagbasa.”</i>
          </p>

          {/* Pull Quote 2 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Was my explanation a failure? Maybe.”
          </blockquote>

          <p>
            On the bright side, I believe it opened her eyes to new technology. Now, whenever
            she sees a video, she asks me whether it was created by AI. I guess she’s becoming
            more meticulous about what she watches, although she still believes narrations are
            done by a human being. My new goal will be to continue explaining to her what AI is
            and how it can also be used in narration.
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
            <Link href="/blogs/artificial-joy" className="group">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
              <h3 className="font-semibold group-hover:underline">
                The Artificial Joy Residing in our Home
              </h3>
              <p className="text-sm text-gray-500">Kristel Reyes</p>
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

