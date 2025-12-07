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
    "/DVT_1.png",
    "/DVT_2.png",
    "/DVT_3.png",
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
      className="relative py-24 px-6 bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/BACKGROUND.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="relative max-w-7xl mx-auto">
        <h2 className="font-serif text-6xl font-bold text-white mb-12">Visuals</h2>

        <div className="flex gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
