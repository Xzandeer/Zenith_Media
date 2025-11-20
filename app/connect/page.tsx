"use client"

import { Navigation } from "@/components/navigation"
import { FooterContact } from "@/components/footer-contact"
import { Mail, Phone, MapPin, Facebook, Instagram, TicketIcon as TikTok, Youtube } from "lucide-react"

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation scrolled={false} />

      <div className="pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1F3E8A] mb-4">Connect With Us</h1>
          <p className="text-gray-600 text-lg">We'd love to hear from you. Get in touch with the Zenith Media team.</p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-[#1F3E8A] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#1F3E8A] mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Send us an email and we'll respond as soon as possible.</p>
            <a href="mailto:contact@zenithmedia.com" className="text-[#B5452E] font-semibold hover:underline">
              contact@zenithmedia.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-[#B5452E] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#1F3E8A] mb-2">Phone</h3>
            <p className="text-gray-600 mb-4">Call us during business hours to speak with our team.</p>
            <a href="tel:+1234567890" className="text-[#B5452E] font-semibold hover:underline">
              +1 (234) 567-890
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-[#F7E9E9] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-[#1F3E8A]" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#1F3E8A] mb-2">Location</h3>
            <p className="text-gray-600">
              123 Media Street
              <br />
              New York, NY 10001
              <br />
              USA
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white rounded-2xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-[#1F3E8A] mb-8 text-center">Follow Us</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Facebook, name: "Facebook", color: "hover:text-blue-600" },
              { icon: Instagram, name: "Instagram", color: "hover:text-pink-600" },
              { icon: TikTok, name: "TikTok", color: "hover:text-black" },
              { icon: Youtube, name: "YouTube", color: "hover:text-red-600" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center transition-all ${social.color}`}
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-[#1F3E8A] mb-8">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3E8A]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3E8A]"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3E8A]"
                placeholder="Message subject"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3E8A] resize-none"
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
