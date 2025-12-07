"use client";

import Link from "next/link";
import { useState } from "react";

export default function Blog9() {
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
          Marhaba— I mean, Mabuhay!
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow"></div>
          <div>
            <p className="text-sm font-medium">Albeira Cruz</p>
            <p className="text-xs text-gray-500">November 2, 2025 · 8 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/albs.png"
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">

          {/* DROP CAP */}
          <p className="text-[1.1rem] leading-relaxed">
            <span className="float-left text-6xl font-serif font-bold mr-3 -mt-1 text-[#b23b23]">
              W
            </span>
            hen people ask me where I grew up, I never knew how to answer right away. I was
            born Filipino, but I’ve spent almost my entire life in Dubai. I moved there when
            I was just three years old, growing up among skyscrapers, desert heat, and the
            constant hum of cultures blending together.
          </p>

          <p>
            I studied in a Filipino school called The Philippine School, which felt like a
            small piece of home tucked away in the middle of the UAE. But outside those gates,
            life was Arab, diverse, and filled with lessons that quietly shaped how I see
            people and culture today.
          </p>

          {/* Pull Quote */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Respect was universal. No matter the culture, no matter the difference.”
          </blockquote>

          <p>
            Living in International City meant being surrounded by people from everywhere.
            I grew up hearing Tagalog, Arabic, Chinese, Hindi, and English echo through the
            hallways of our building. Despite the mix, the most constant lesson was respect.
            Whether it was the Emirati kiss-on-the-cheek greeting or the Filipino
            <i>mano po</i>, both cultures taught me one thing: impressions last a lifetime.
          </p>

          <p>
            As I grew older, I realized how similar the UAE and the Philippines are, despite
            their differences. Both value family deeply. In the Philippines,{" "}
            <i>pamilya muna</i> (family first) is a guiding principle. In the UAE, family is
            also the heart of life.
          </p>

          {/* Pull Quote 2 */}
          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Kindness transcends religion and language.”
          </blockquote>

          <p>
            Weekends in Dubai were filled with gatherings of kababayans sharing food, laughter,
            and karaoke. At the same time, Emirati households embraced hospitality with Arabic
            coffee and dates. Both cultures welcomed guests warmly—one with stories and food,
            the other with tradition and quiet grace.
          </p>

          <p>
            But the differences taught me just as much. The UAE taught me modesty,
            discipline, and respect for boundaries—things shaped by Islamic values. The
            Philippines, predominantly Christian, showed me openness, spontaneity, and loud,
            colorful joy. Dubai taught me silence; the Philippines taught me expression.
          </p>

          <p>
            Moving back to the Philippines was like seeing my own culture for the first time.
            I loved the noise, the color, the freedom—but I found myself missing Dubai’s
            orderliness. The punctual buses. The clean streets. The gentle rules that made
            harmony possible among so many nationalities.
          </p>

          <p>
            There were habits that stayed with me: speaking softly, dressing modestly, being
            mindful of cultural norms. Things that didn’t always align with Filipino humor,
            teasing, or loud laughter. I often feel like a quiet observer in a world that loves
            to talk.
          </p>

          <p>
            Despite the contrasts, I’ve learned to appreciate both homes. The UAE taught me
            tolerance, discipline, and quiet respect. The Philippines taught me warmth,
            resilience, and joy. In one country, I learned the beauty of silence; in the other,
            the freedom of expression.
          </p>

          <p>
            Sometimes I wonder if I truly belong to one place. Maybe I don’t have to. Maybe
            home isn’t a single country but the space between cultures—where I learned to
            understand others without losing myself.
          </p>

          <p>
            The UAE shaped how I see the world. The Philippines reminded me where my heart
            belongs. Home is where the heart is, and my home is both.
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
