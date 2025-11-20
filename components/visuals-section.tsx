"use client"

import { useState } from "react"

const tabs = ["Infographics", "Posters", "Data Tools"]

const visuals = [
  "/modern-infographic-design-blue-red.jpg",
  "/creative-poster-design-media.jpg",
  "/data-visualization-dashboard.png",
  "/social-media-graphics-template.jpg",
  "/brand-identity-elements.png",
  "/digital-marketing-collage.png",
]

export function VisualsSection() {
  const [activeTab, setActiveTab] = useState("Infographics")

  return (
    <section id="visuals" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-6xl font-bold text-[#1F3E8A] mb-12">Visuals</h2>

        <div className="flex gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab ? "bg-[#1F3E8A] text-white" : "bg-gray-100 text-[#0B0F1A] hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visuals.map((visual, index) => (
            <div
              key={index}
              className="aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <img
                src={visual || "/placeholder.svg"}
                alt={`Visual ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
