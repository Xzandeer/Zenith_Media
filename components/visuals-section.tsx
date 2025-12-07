"use client"

export function VisualsSection() {
  const visuals = [
    "/modern-infographic-design-blue-red.jpg",
    "/creative-poster-design-media.jpg",
    "/data-visualization-dashboard.png",
    "/social-media-graphics-template.jpg",
    "/brand-identity-elements.png",
    "/digital-marketing-collage.png",
  ]

  const artCards = Array.from({ length: 16 }, (_, i) => `/visual${i + 1}.png`)

  return (
    <section id="visuals" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-6xl font-bold text-[#1F3E8A] mb-20">Visuals</h2>

        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1F3E8A] mb-8">Infographics</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {visuals.map((visual, index) => (
              <div
                key={index}
                className="aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={visual}
                  alt={`Infographic ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1F3E8A] mb-8">Posters</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {visuals.map((visual, index) => (
              <div
                key={index}
                className="aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={visual}
                  alt={`Poster ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1F3E8A] mb-8">Data Tools</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {visuals.map((visual, index) => (
              <div
                key={index}
                className="aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={visual}
                  alt={`Data Tool ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-[#1F3E8A] mb-8">Art Cards</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {artCards.map((art, index) => (
              <div
                key={index}
                className="aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={art}
                  alt={`Art Card ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
