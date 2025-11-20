"use client"

import { useState, useEffect } from "react"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"

const heroVideos = [
  { id: "52CWBXWReZc", title: "Lorem Ipsum" },
  { id: "einZlTcUxzw", title: "Lorem Ipsum" },
  { id: "pdLEHfkwgV8", title: "Lorem Ipsum" },
]

const moreVideos = [
  { id: "YFtHAHARbJA", title: "Lorem Ipsum" },
  { id: "xpjs6DKbY0E", title: "Lorem Ipsum" },
  { id: "WBOtQvqWpcg", title: "Lorem Ipsum" },
  { id: "52CWBXWReZc", title: "Lorem Ipsum" },
]

const podcasts = [
  { id: "2caQ4j9oohE", title: "Lorem Ipsum" },
  { id: "8VVtMnK9nPI", title: "Lorem Ipsum" },
]

export function VideosSection() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState<string | null>(null)

  useEffect(() => {
    const auto = setInterval(() => {
      setIndex((i) => (i + 1) % heroVideos.length)
    }, 4000)
    return () => clearInterval(auto)
  }, [])

  const next = () => setIndex((i) => (i + 1) % heroVideos.length)
  const prev = () => setIndex((i) => (i - 1 + heroVideos.length) % heroVideos.length)

  const vid = heroVideos[index]

  return (
    <section className="w-full h-full flex flex-col bg-white">

      {/* HERO SECTION */}
      <div className="relative h-[50vh] min-h-[0px] w-full overflow-hidden items-center justify-center">

        {/* Background image */}
        <img
          src={`https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-white/90" />

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
        >
          <ChevronLeft className="text-[#1F3E8A]" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
        >
          <ChevronRight className="text-[#1F3E8A]" />
        </button>

        {/* CENTER TEXT */}
        <div className="absolute left-10 top-1/3 text-white max-w-md">
          <h1 className="text-5xl font-serif font-bold mb-3">LOREM IPSUM</h1>
          <p className="text-sm max-w-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

        {/* PLAY BUTTON */}
        <button
          onClick={() => setPlaying(vid.id)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-20 h-20 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-xl">
            <Play className="w-10 h-10 text-[#1F3E8A] ml-1" />
          </div>
        </button>

        {/* DOTS */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {heroVideos.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-[#1F3E8A]" : "w-2 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* LOWER CONTENT */}
      <div className="w-full bg-white px-16 py-6">
        <div className="grid grid-cols-2 gap-10">

          {/* MORE VIDEOS */}
          <div>
            <h2 className="text-xl font-serif font-bold text-[#1F3E8A] mb-3">More Videos:</h2>
            <div className="grid grid-cols-2 gap-4">
              {moreVideos.map((v) => (
                <div
                  key={v.id}
                  className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer"
                  onClick={() => setPlaying(v.id)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-2 left-2 text-xs text-white font-semibold">
                    {v.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PODCASTS */}
          <div>
            <h2 className="text-xl font-serif font-bold text-[#1F3E8A] mb-3">Podcasts:</h2>
            <div className="grid grid-cols-2 gap-4">
              {podcasts.map((p) => (
                <div
                  key={p.id}
                  className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer"
                  style={{ height: "240px" }}
                  onClick={() => setPlaying(p.id)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${p.id}/mqdefault.jpg`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-2 left-2 text-xs text-white font-semibold">
                    {p.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* VIDEO MODAL */}
      {playing && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="w-3/4 max-w-4xl bg-black rounded-xl overflow-hidden shadow-xl relative">
            <iframe
              src={`https://www.youtube.com/embed/${playing}?autoplay=1`}
              className="w-full h-[500px]"
              allowFullScreen
            />
            <button
              onClick={() => setPlaying(null)}
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
