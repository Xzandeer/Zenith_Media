"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Youtube, Mail } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-6xl font-bold text-[#1F3E8A] mb-16 text-center">Connect with us.</h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-bold text-[#1F3E8A] mb-4">Get in Touch</h3>
              <p className="text-[#0B0F1A] leading-relaxed mb-6">
                Have a project in mind? Want to collaborate? We'd love to hear from you. Reach out through any of our
                social channels or send us a message.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-[#0B0F1A] mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#1F3E8A] flex items-center justify-center hover:bg-[#1F3E8A]/90 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#B5452E] flex items-center justify-center hover:bg-[#B5452E]/90 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#1F3E8A] flex items-center justify-center hover:bg-[#1F3E8A]/90 transition-colors"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#B5452E] flex items-center justify-center hover:bg-[#B5452E]/90 transition-colors"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-2xl border-2 border-gray-200 px-6 py-6 text-lg"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-2xl border-2 border-gray-200 px-6 py-6 text-lg"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="rounded-2xl border-2 border-gray-200 px-6 py-4 text-lg resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#1F3E8A] hover:bg-[#1F3E8A]/90 text-white rounded-full py-6 text-lg"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-200 text-center">
          <p className="text-[#0B0F1A]">© 2025 Zenith Media — All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
