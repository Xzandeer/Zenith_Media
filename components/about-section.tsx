export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-5xl font-bold text-[#1F3E8A]">Who is Zenith?</h2>
            <p className="text-lg text-[#0B0F1A] leading-relaxed">
              Zenith Media is a dynamic media organization dedicated to creating compelling content that resonates with
              audiences worldwide. We specialize in video production, digital storytelling, and innovative media
              solutions that push the boundaries of creativity.
            </p>
            <p className="text-lg text-[#0B0F1A] leading-relaxed">
              Our mission is to elevate voices, share stories, and connect communities through the power of media. From
              podcasts to visual content, we're committed to excellence in every project we undertake.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src="/modern-media-studio-team-collaboration.jpg" alt="Zenith Media Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
