"use client"

import { useState } from "react"

const tabs = ["Infographics", "Posters", "Data Tools", "Art Cards"]

const visualsData: Record<string, string[]> = {
  Infographics: [
    "/Infographics_1.png",
    "/Infographics_2.png",
    "/Infographics_3.png",
    "/Infographics_4.png",
    "/Infographics_5.png",
  ],
  Posters: [
    "/Poster_1.png",
    "/Poster_2.png",
    "/Poster_3.png",
  ],
  "Data Tools": [
    "/data-visualization-dashboard.png",
    "/modern-infographic-design-blue-red.jpg",
    "/social-media-graphics-template.jpg",
  ],
  "Art Cards": [
    "/visual2.png",
    "/visual3.png",
    "/visual4.png",
    "/visual5.png",
    "/visual6.png",
    "/visual7.png",
    "/visual8.png",
    "/visual9.png",
    "/visual10.png",
    "/visual11.png",
    "/visual12.png",
    "/visual13.png",
    "/visual14.png",
    "/visual15.png",
    "/visual16.png",
  ],
}

export function VisualsSection() {
  const [activeTab, setActiveTab] = useState("Infographics")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const visuals = visualsData[activeTab]

  return (
    <section
      id="visuals"
      className="py-24 px-6 bg-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/BACKGROUND.png')" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-6xl font-bold text-[#1F3E8A] mb-12">Visuals</h2>

        <div className="flex gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#1F3E8A] text-white"
                  : "bg-gray-100 text-[#0B0F1A] hover:bg-gray-200"
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
              onClick={() => setSelectedImage(visual)}
            >
              <img
                src={visual || "/placeholder.svg"}
                alt={`${activeTab} Visual ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Expanded visual"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
          />
        </div>
      )}
    </section>
  )
}
