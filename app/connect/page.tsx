"use client"

import { Navigation } from "@/components/navigation"
import { FooterContact } from "@/components/footer-contact"
import { Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

// Custom TikTok Icon
function TikTokIcon({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="currentColor"
      className={className}
    >
      <path d="M33.5 13.2c-2-.9-3.4-2.5-4-4.6h-4.3v22.3c0 2.3-1.9 4.2-4.3 4.2s-4.3-1.9-4.3-4.2c0-2.3 1.9-4.2 4.3-4.2.7 0 1.3.1 1.9.4v-4.5c-.6-.1-1.3-.2-1.9-.2-4.8 0-8.7 3.8-8.7 8.5s3.9 8.5 8.7 8.5 8.7-3.8 8.7-8.5V17c1.5 1.4 3.6 2.3 5.9 2.3v-4.7z"/>
    </svg>
  )
}

export default function ConnectPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/BACKGROUND.png')" }}
    >
      <Navigation scrolled={false} />

      <div className="pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1F3E8A] mb-4">
            Connect With Us
          </h1>
          <p className="text-gray-700 text-lg">
            We’d love to hear from you. Get in touch with the Zenith Media team.
          </p>
        </div>

        {/* CONTACT GRID (PHONE REMOVED) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* EMAIL */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-[#1F3E8A] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#1F3E8A] mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Send us an email anytime.</p>
            <a
              href="mailto:zenithmedia@gmail.com"
              className="text-[#B5452E] font-semibold hover:underline"
            >
              zenithmedia@gmail.com
            </a>
          </div>

          {/* LOCATION */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-[#1F3E8A]" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#1F3E8A] mb-2">Location</h3>
            <p className="text-gray-600 leading-relaxed">
              Saint Louis University  
              <br />
              Baguio City, Philippines
            </p>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-[#1F3E8A] mb-8 text-center">Follow Us</h2>

          <div className="flex flex-wrap justify-center gap-6">
            
            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/share/19en1MXX7n/?mibextid=wwXIfr"
              target="_blank"
              className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center hover:text-blue-600 transition-all"
            >
              <Facebook size={28} />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/zenithmedia.ph?igsh=M3Z4NXp1ejlrd3ps"
              target="_blank"
              className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center hover:text-pink-600 transition-all"
            >
              <Instagram size={28} />
            </a>

            {/* TIKTOK */}
            <a
              href="https://www.tiktok.com/@zenithmedia.ph?_r=1&_t=ZS-921NxvYtoiT"
              target="_blank"
              className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center hover:text-black transition-all"
            >
              <TikTokIcon size={28} />
            </a>

            {/* YOUTUBE */}
            <a
              href="https://youtube.com/@zenithmediaorg?si=pN8uuh5fikNL3yHe"
              target="_blank"
              className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center hover:text-red-600 transition-all"
            >
              <Youtube size={28} />
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-[#1F3E8A] mb-8">Send us a Message</h2>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3E8A]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3E8A]"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3E8A]"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[#1F3E8A]"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1F3E8A] to-[#B5452E] text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <FooterContact />
    </main>
  )
}
