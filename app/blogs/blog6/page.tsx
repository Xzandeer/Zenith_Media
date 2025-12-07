"use client";

import Link from "next/link";
import { useState } from "react";

export default function GianHeadlineBlog() {
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
          Drowning in Headlines: When Floods and Falsehoods Collide in the Age of TikTok News
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow"></div>
          <div>
            <p className="text-sm font-medium">Gian Andres</p>
            <p className="text-xs text-gray-500">October 31, 2025 · 7 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/gian.png"
            alt="Flood News Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">

          {/* DROP CAP */}
          <p className="text-[1.1rem] leading-relaxed">
            <span className="float-left text-6xl font-serif font-bold mr-3 -mt-1 text-[#b23b23]">
              T
            </span>
            he rain begins to fall.
          </p>

          <p>
            At first, it is gentle—a soft rhythm on rooftops, puddles forming on the edges 
            of quiet streets. However, before long, it turns violent. Water rushes through 
            alleys, homes are swallowed whole, and the city drowns once again in its familiar 
            tragedy.
          </p>

          <p>
            Moreover, as floodwaters rise outside, another kind of flood surges online—one 
            made of content, noise, and headlines.
          </p>

          {/* Pull Quote */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Within seconds, TikTok becomes the newsroom— but who is anchoring the truth?”
          </blockquote>

          <p>
            In this new age, Gen Z does not always turn on the television to learn what is 
            happening—they open their phones. They scroll past dances, memes, and product reviews, 
            until suddenly, a face appears: a self-made “news anchor,” narrating calamity in 
            thirty seconds flat. The ring light replaces the studio lamp, and credibility is 
            measured not in sources but in shares.
          </p>

          <p>
            However, as the algorithm dictates what we see, truth struggles to stay afloat.
          </p>

          <p>
            During real floods, TikTok often becomes both savior and saboteur. Videos spread 
            faster than warnings. Calls for rescue go viral—but so do clips recycled from 
            disasters years ago. Captions scream “BREAKING NEWS” even when they are not. 
            Emotional music turns devastation into performance. The tragedy is real—but so, 
            too, is the distortion.
          </p>

          {/* Pull Quote #2 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “While we scroll for updates, someone is still waiting on a rooftop—surrounded by water and silence.”
          </blockquote>

          <p>
            Flood control, we often say, is about infrastructure—stronger dams, better drainage, 
            more thoughtful planning. 
          </p>

          <p>
            However, perhaps the real challenge now lies in something less visible: 
            <b>information control.</b>
          </p>

          <p>
            Not censorship, but discernment—the ability to filter through the debris of 
            misinformation the way canals filter the mud.
          </p>

          <p>
            Critical thinking has become our most vital form of flood defense.
          </p>

          <p>
            It asks us to pause before we share, to verify before we believe, to question 
            before we conclude.
          </p>

          <ul>
            <li>Who posted this?</li>
            <li>Where did it come from?</li>
            <li>What is missing from the frame?</li>
          </ul>

          <p>
            Because in an era where everyone can “report,” we must all learn how to anchor 
            ourselves to the truth.
          </p>

          <p>
            Being informed today is not about knowing everything—it is about knowing 
            <i>what not to believe.</i> It is choosing patience over panic, accuracy over 
            virality. Maybe the real TikTok news anchor we need is not the one who speaks 
            the fastest, but the one who dares to say, “Wait—let us confirm this first.”
          </p>

          <p>
            The floods will keep coming—on our streets, in our screens, and in our minds. 
            However, we do not have to be swept away.
          </p>

          <p>
            If we stay curious, cautious, and critical, then maybe—just maybe—we can rise 
            above both kinds of storms.
          </p>

          <p className="font-semibold">
            Because while floods may drown cities, only misinformation can drown the truth.
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

        {/* MORE STORIES */}
        <div className="mt-24 animate-fadeInSlow">
          <h2 className="text-xl font-semibold mb-6">More stories from Zenith Media</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <Link href="/blogs/artificial-joy" className="group">
              <div className="w-full h-40 rounded-lg overflow-hidden mb-3">
                <img src="/BLOG1.jpg" className="w-full h-full object-cover group-hover:opacity-90 transition" />
              </div>
              <h3 className="font-semibold group-hover:underline">The Artificial Joy Residing in our Home</h3>
              <p className="text-sm text-gray-500">Kristel Reyes</p>
            </Link>

            <Link href="/blogs/notposting" className="group">
              <div className="w-full h-40 rounded-lg overflow-hidden mb-3">
                <img src="/princess.png" className="w-full h-full object-cover group-hover:opacity-90 transition" />
              </div>
              <h3 className="font-semibold group-hover:underline">Not Posting Everything Anymore… I Guess?</h3>
              <p className="text-sm text-gray-500">Princess Czyrah Jubilo</p>
            </Link>

            <Link href="/blogs/granmaai" className="group">
              <div className="w-full h-40 rounded-lg overflow-hidden mb-3">
                <img src="/samblog.png" className="w-full h-full object-cover group-hover:opacity-90 transition" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                The Time I Tried (and Failed) to Explain AI Voices to Grandma
              </h3>
              <p className="text-sm text-gray-500">Samantha Nicole Borres</p>
            </Link>

            <Link href="/blogs/blog4" className="group">
              <div className="w-full h-40 rounded-lg overflow-hidden mb-3">
                <img src="/dawn.png" className="w-full h-full object-cover group-hover:opacity-90 transition" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                As Cliché as It Sounds, Think Before You Click
              </h3>
              <p className="text-sm text-gray-500">Dawn Faith Montefalco</p>
            </Link>

            <Link href="/blogs/blog5" className="group">
              <div className="w-full h-40 rounded-lg overflow-hidden mb-3">
                <img src="/satur.jpg" className="w-full h-full object-cover group-hover:opacity-90 transition" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                My Dad Does Not Listen To Me — A Communication Student
              </h3>
              <p className="text-sm text-gray-500">Satur Boy Gawec</p>
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
