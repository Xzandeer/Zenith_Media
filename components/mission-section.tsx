const items = [
  {
    title: "Mission",
    content:
      "To empower voices and connect communities through innovative media solutions that inspire, educate, and entertain. We strive to create content that makes a meaningful impact in the world.",
  },
  {
    title: "Vision",
    content:
      "To be the leading media organization recognized for excellence in storytelling, creativity, and social impact. We envision a world where every story matters and every voice is heard.",
  },
  {
    title: "Values",
    content:
      "Creativity, Integrity, Excellence, Collaboration, and Innovation. These core values guide everything we do and shape our approach to media production and client relationships.",
  },
  {
    title: "Target SDGs",
    content:
      "We align our work with UN Sustainable Development Goals, particularly SDG 4 (Quality Education), SDG 10 (Reduced Inequalities), and SDG 17 (Partnerships for the Goals).",
  },
]

export function MissionSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#F7E9E9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-3xl font-bold text-[#1F3E8A] mb-4">{item.title}</h3>
              <p className="text-[#0B0F1A] leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
