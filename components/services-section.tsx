"use client";

import { useState, useEffect } from "react";

const items = [
  {
    title: "Informative Content",
    description:
      "Educational, well-researched, and accessible media content crafted for students and educators.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
  {
    title: "Podcast Production",
    description:
      "Professional podcast creation with high-quality audio, editing, and storytelling.",
    image: "https://images.pexels.com/photos/7651392/pexels-photo-7651392.jpeg",
  },
  {
    title: "Educational Videos",
    description:
      "Engaging and interactive video content designed to support modern learning.",
    image: "https://images.pexels.com/photos/4145355/pexels-photo-4145355.jpeg",
  },
];

export default function ServicesSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % items.length);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, []);

  const left = (index - 1 + items.length) % items.length;
  const right = (index + 1) % items.length;

  return (
    <section
      className="w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/BACKGROUND.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* LEFT CARD */}
      <div
        className="
          absolute left-[-40%] 
          w-[1080px] h-[680px] 
          rounded-3xl overflow-hidden
          opacity-70 scale-95 blur-[1px]
          shadow-xl transition-all duration-700 ease-in-out
        "
      >
        <img
          src={items[left].image}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      {/* RIGHT CARD */}
      <div
        className="
          absolute right-[-40%] 
          w-[1080px] h-[680px] 
          rounded-3xl overflow-hidden
          opacity-70 scale-95 blur-[1px]
          shadow-xl transition-all duration-700 ease-in-out
        "
      >
        <img
          src={items[right].image}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      {/* CENTER CARD */}
      <div
        className="
          relative z-10 
          w-[1020px] h-[680px] 
          rounded-3xl overflow-hidden 
          shadow-2xl scale-110
          transition-all duration-700 ease-in-out
        "
      >
        <img
          src={items[index].image}
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* TEXT */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
          <h1 className="text-white text-3xl font-extrabold drop-shadow-md">
            WHAT WE DO
          </h1>
          <h2 className="text-white text-xl mt-2 drop-shadow">
            {items[index].title}
          </h2>
          <p className="text-gray-200 mt-3 text-sm leading-relaxed drop-shadow">
            {items[index].description}
          </p>
        </div>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-10 flex gap-4 z-30">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-4 h-4 rounded-full transition-all duration-300 
              ${i === index ? "bg-[#1F3E8A] w-8" : "bg-white/70"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
