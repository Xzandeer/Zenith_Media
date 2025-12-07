"use client";

import Link from "next/link";
import { useState } from "react";

export default function Blog10() {
  const [likes, setLikes] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] px-5 pt-10 pb-32">

      {/* Fade-in Wrapper */}
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
          Why Does My Feed Keep Showing Me Sad Content?  
          <br />
          <span className="text-[22px] font-light">
            Learning How Engagement Beats Mental Health.
          </span>
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow"></div>
          <div>
            <p className="text-sm font-medium">Kasheem Siborboro</p>
            <p className="text-xs text-gray-500">November 10, 2025 · 7 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] rounded-lg overflow-hidden mb-12 animate-fadeInSlow">
          <img
            src="/kash.png"
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Body */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">

          {/* Drop Cap */}
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
            Algorithms track every pause, click, share, and comment—every micro-interaction
            you make.
          </p>

          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Your horror looks identical to your joy. To the algorithm, engagement is engagement.”
          </blockquote>

          <p>
            Negative content tends to generate more engagement. When you pause on sad or
            upsetting posts, the algorithm interprets it as interest—not discomfort. It
            doesn't know you're distressed; it only knows you stopped scrolling.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Why We Can't Look Away</h2>

          <p>
            Our brains are wired for threat detection. For thousands of years, paying
            attention to danger kept humans alive. Social media exploits this instinct.
            Tragic or alarming content triggers stronger emotional reactions, making it
            difficult to scroll past.
          </p>

          <p>
            Leaked internal research from Facebook revealed the company knew its algorithms
            pushed divisive and negative content because it drove engagement. Profit won
            over wellbeing.
          </p>

          <h2 className="text-2xl font-semibold mt-8">The Spiral Effect</h2>

          <p>
            Once the algorithm notices your engagement, it starts amplifying it. More sad
            content appears. You interact again—sometimes unintentionally. The cycle
            repeats.
          </p>

          <p>
            Recommendation rabbit holes form quickly. What begins as a single sad post can
            turn your feed into a storm of negativity.
          </p>

          <h2 className="text-2xl font-semibold mt-8">The Mental Health Cost</h2>

          <p>
            Research consistently links excessive social media use with anxiety, depression,
            and heightened stress. When your feed becomes a curated gallery of tragedy,
            your view of the world warps. You start believing everything is falling apart.
          </p>

          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b]">
            “The algorithm isn’t considering your wellbeing—only your retention.”
          </blockquote>

          <h2 className="text-2xl font-semibold mt-8">Breaking the Cycle</h2>

          <ul>
            <li><b>Curate your feed intentionally.</b> Unfollow pages that drain you emotionally.</li>
            <li><b>Limit your engagement.</b> Scroll past upsetting content without clicking.</li>
            <li><b>Use platform tools.</b> Mark posts as “Not Interested.”</li>
            <li><b>Set boundaries.</b> App timers and scheduled breaks help reduce algorithmic influence.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">The Bigger Picture</h2>

          <p>
            Until platforms prioritize wellbeing over profit, algorithms will continue to
            exploit emotional triggers. But awareness gives you power. Understanding how the
            system works allows you to take control and reclaim your mental space.
          </p>

          <p className="font-semibold mt-6">
            Your mental health is worth more than any company’s engagement metrics.
          </p>

          <p>
            The next time you find yourself spiraling through sad content, remember: your
            feed is showing you this because it works—not because you need to see it. You
            can break the cycle.
          </p>

        </div>

        {/* Like + Comment */}
        <div className="mt-16 flex items-center gap-6 animate-fadeInSlow">
          <button
            onClick={() => setLikes(likes + 1)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full
            hover:bg-gray-100 transition"
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

            <Link href="/blogs/blog6" className="group">
              <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-200 mb-3">
                <img src="/gian.png" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                Drowning in Headlines
              </h3>
              <p className="text-sm text-gray-500">Gian Andres</p>
            </Link>

            <Link href="/blogs/blog8" className="group">
              <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-200 mb-3">
                <img src="/ceablog.png" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold group-hover:underline">
                My For You Page Knows Me Too Well
              </h3>
              <p className="text-sm text-gray-500">Cearelle Joy Anolin</p>
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
