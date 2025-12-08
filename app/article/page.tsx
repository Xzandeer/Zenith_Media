"use client";

import Link from "next/link";
import { useState } from "react";

export default function ArticlePage() {
  const [likes, setLikes] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] px-5 pt-10 pb-32">
      {/* Article Section */}
      <article className="max-w-3xl mx-auto animate-fadeIn">

        {/* Return Button */}
        <Link 
          href="/services"
          className="text-sm text-gray-500 hover:text-black transition mb-6 inline-block"
        >
          ← Back to Services
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
          Zenith Media Showcases Quality Learning at MIL Summit 2025
        </h1>

        {/* Author Section */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-fadeInSlow"></div>
          <div>
            <p className="text-sm font-medium">Ina Jirah Serquiña</p>
            <p className="text-xs text-gray-500">Nov 21, 2025 · 5 min read</p>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg animate-fadeInSlow">
          <img
            src="/MIL_Summit.jpg"  // Update this image path as needed
            alt="MIL Summit"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">
          <p>
            Zenith Media officially launched their booth exhibit at the Baguio City Hall on November 21 for the Media and Information Literacy (MIL) Summit 2025.
          </p>

          <p>
            Public and private basic education teachers from various schools in Baguio—who were the primary guests for the event—were joined by students, interns, and public officials. They explored an array of Information, Education, and Communication (IEC) materials and Digital Learning Materials (DLM) from the educational and interactive booth of Zenith Media.
          </p>

          <p>
            They browsed brochures designed to enlighten teachers about social media literacy and how to use social media and content creation in providing more supplemental materials to their students. A literary MIL-themed zine was also displayed, catching the attention of many guests. Informational posters, infographics, and data visualization tools were showcased on a framed wall that was easily visible. Flyers were also given out to everyone who visited the booth. Guests were able to scan two QR codes—the first directing them to the website, and the second to a Google Drive containing all of Zenith Media’s IECs and DLMs.
          </p>

          <p>
            Moreover, guests enjoyed participating in a quiz game with categories on MIL, AI, and MIL-and-AI. Their prior knowledge of the topics was tested through five multiple-choice questions. All participants who joined the game were given stickers as prizes.
          </p>

          <p>
            A slideshow was also presented via tablet to showcase the other social media content prepared by Zenith Media.
          </p>

          <p className="italic">
            Aligned with the MIL Summit 2025 theme, <i>"Smart Citizens, Safe Communities: Strengthening MIL in Digital Spaces,"</i> Zenith Media remained committed to delivering quality learning to all guests—true to its tagline, <b>"Delivering quality learning to the highest point."</b>
          </p>

          <p>
            As the event concluded, Zenith Media reaffirmed its mission to continue developing and promoting resources that inform and empower not only educators but the public as well about media and information literacy.
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
