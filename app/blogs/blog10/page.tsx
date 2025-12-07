"use client";

import Link from "next/link";
import { useState } from "react";

export default function Blog10() {
  const [likes, setLikes] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] px-5 pt-10 pb-32">

      {/* Wrapper */}
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
          Why Does My Feed Keep Showing Me Sad Content?  
          <br />
          <span className="text-[22px] font-light">
            Learning How Engagement Beats Mental Health.
          </span>
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <p className="text-sm font-medium">Kasheem Siborboro</p>
            <p className="text-xs text-gray-500">November 10, 2025 · 7 min read</p>
          </div>
        </div>

        {/* Thumbnail */}
        <div className="w-full h-[380px] md:h-[460px] rounded-lg overflow-hidden mb-12">
          <img
            src="/kash.png"
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Body */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">

          <p className="text-[1.1rem] leading-relaxed">
            <span className="float-left text-6xl font-serif font-bold mr-3 -mt-1 text-[#b23b23]">
              H
            </span>
            ave you ever noticed that the saddest, most upsetting posts dominate your social
            media feed? You pause on a heartbreaking story or watch a distressing video, and
            suddenly your entire feed transforms into an endless scroll of similar content.
            You're not imagining it. Your feed is doing exactly what it was designed to do.
          </p>

          <h2 className="text-2xl font-semibold mt-8">The Algorithm Doesn't Care How You Feel</h2>

          <p>
            Social media platforms operate on a simple principle: keep you scrolling. The
            longer you stay, the more ads you see, and the more money the company makes.
          </p>

          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b]">
            “Your horror looks identical to your joy. To the algorithm, engagement is engagement.”
          </blockquote>

          <p>
            Negative content tends to generate more engagement. When you pause on sad or
            upsetting posts, the algorithm interprets it as interest—not discomfort.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Why We Can't Look Away</h2>

          <p>
            Our brains are wired for threat detection. Tragic content triggers stronger
            reactions, making it hard to ignore.
          </p>

          <p>
            Leaked internal research revealed companies knew this and kept promoting such
            posts because it increased engagement.
          </p>

          <h2 className="text-2xl font-semibold mt-8">The Spiral Effect</h2>

          <p>
            Once the algorithm notices your engagement, it starts showing even more sad
            content. The cycle repeats.
          </p>

          <h2 className="text-2xl font-semibold mt-8">The Mental Health Cost</h2>

          <p>
            Excessive exposure to negative posts is linked to anxiety, depression, and
            emotional fatigue.
          </p>

          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b]">
            “The algorithm isn’t considering your wellbeing—only your retention.”
          </blockquote>

          <h2 className="text-2xl font-semibold mt-8">Breaking the Cycle</h2>

          <ul>
            <li><b>Curate intentionally.</b> Unfollow emotionally draining pages.</li>
            <li><b>Avoid interacting</b> with upsetting content.</li>
            <li><b>Use “Not Interested.”</b></li>
            <li><b>Set boundaries.</b> Reduce app usage.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">The Bigger Picture</h2>

          <p>
            Platforms won’t prioritize mental health unless forced. But being aware gives you
            power over your feed and your attention.
          </p>

          <p className="font-semibold mt-6">
            Your mental health is worth more than any engagement metric.
          </p>
        </div>

        {/* Like + Comment */}
        <div className="mt-16 flex items-center gap-6">
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
        <div className="mt-24">
          <h2 className="text-xl font-semibold mb-6">More stories from Zenith Media</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/blogs/blog6" className="group">
              <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-200 mb-3">
                <img src="/gian.png" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold group-hover:underline">Drowning in Headlines</h3>
              <p className="text-sm text-gray-500">Gian Andres</p>
            </Link>

            <Link href="/blogs/blog8" className="group">
              <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-200 mb-3">
                <img src="/ceablog.png" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold group-hover:underline">My For You Page Knows Me Too Well</h3>
              <p className="text-sm text-gray-500">Cearelle Joy Anolin</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
