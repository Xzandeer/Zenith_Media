"use client";

import Link from "next/link";
import { useState } from "react";

export default function InaHeadlineBlog() {
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
          Growing Up Behind: The Digital World VS Traditional Filipino Family
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow"></div>
          <div>
            <p className="text-sm font-medium">Ina Serquina</p>
            <p className="text-xs text-gray-500">October 30, 2025 · 8 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/ina.png"
            alt="Digital World vs Traditional Family Thumbnail"
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
            n the diffusion of innovation model, there are five segments — the innovators, early adopters, early majority, late majority, and the laggards.
          </p>

          <p>
            I am a generation Z person who is also a digital native — someone who was born in a period in which advanced technology already exists. When it comes to the use of technology, I only hop back-and-forth between being an early adopter and a part of the early majority. However, I cannot say the same for my traditional family, as their liking in technology is as clear as a photo taken from a keypad mobile phone.
          </p>

          <blockquote className="text-2xl font-serif text-center my-10 text-[#6b3b3b] animate-fadeInSlow">
            “Only take, buy, and consume what's necessary.”
          </blockquote>

          <p>
            This quote is but the unofficial motto of my parents. Honestly, I agree a lot with the statement, because it teaches modesty and destroys the greediness of a family member. However, in navigating a world that continuously transforms into a digital one, this mindset gives me not just a headache but also anxiety, especially whenever I feel left behind.
          </p>

          <p>
            We had great and working appliances (not the most expensive ones, but they are working all right). My parents also provide me and my brother with our own gadgets, and they do not restrict us from using it as much as we need to. Everything they buy that could be plugged in before working — they have thought comprehensively about it.
          </p>

          <p>
            However, this causes one main problem with them — their <b>hesitation</b>. Caution is not a bad thing—but to hesitate to act on things that actually matter—is where the discussion goes south.
          </p>

          <p>
            Leaning onto technology used to be a negotiated topic. If you don't want to buy a personal computer, that is understandable. But now, if you say that you don't need a smartphone, people would take that as if you are missing out on everything, technically leaving the world behind.
          </p>

          <p>
            My parents never denied us access to gadgets and the internet. However, I remember my father only chose to grasp a smartphone in 2019. Before, he was overly patronizing his keypad phone, which was not really useful for his job. In the year 2023, his first smartphone was already breaking, and instead of buying a new one, he chose to wrap tape all over it. In his mind, he was just being thrifty, but as a Gen Z person who is aware of the fast-evolving technology, I was saddened by the fact that my father was not using his resources to upgrade for something that is worth the money.
          </p>

          <p>
            On the other hand, my mother seems to have a bit of technophobia. She owns various gadgets such as a smartphone, a tablet, and a laptop. However, she easily gives up when her gadgets request her to do something. For example, in the monitor, this question pops up, “Is this you? Click ‘Yes’ or ‘No’ to verify.” Instead of reading what's on the screen, she would panic and call for my name. I would give her the look and the sigh of a judging daughter. But if I start explaining what she should do the next time that situation happens, she would dismiss my help.
          </p>

          <p>
            So, what is the purpose of writing about my personal experience? It's not to badmouth my parents, but to give emphasis on how a guardian’s traditional mindset shapes and influences the life choices of their children.
          </p>

          <p>
            Because I was raised by my skeptical parents who are very fixated on their simple way of living, I was challenged to try new things that are a bit complex and complicated, specifically the “high-tech” stuff. The recent one that I can recall is using E-wallet and digital transactions. When most of my peers are already accustomed to navigating Gcash and online banking, I only warmed towards that idea this year. Did my parents know about it? They did… eventually, and the foremost thing they told me was to be cautious—which they've been doing their whole time.
          </p>

          <p>
            Honestly I agree with my parents—to reiterate, caution is not a bad thing. But learning how to be media and information literate is also a good thing, isn't it? Just like the popular quotation, “Experience is the best teacher.” Additionally, as the wise teacher of mine has stated before, “It is a sin to not teach yourself new skills given the resources that you have today.”
          </p>

          <p>
            Thus, let us lessen the skepticism and hesitation towards technology. Let us do our own research if we are challenged, but let us not turn our faces away from the reality that we are now living in a fast-evolving digital world.
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
