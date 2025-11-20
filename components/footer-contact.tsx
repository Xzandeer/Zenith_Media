import { Facebook, Instagram, Youtube, Mail } from "lucide-react"
import Link from "next/link"

export function FooterContact() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1F3E8A] via-[#2952b8] to-[#1F3E8A] text-white py-6 px-6 overflow-hidden">
      {/* Starry background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-200" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - About */}
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold italic">WE ARE</h3>
            <h3 className="font-serif text-2xl font-bold italic">ZENITH MEDIA!</h3>
            <p className="text-white/80 leading-relaxed text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold italic">QUICKLINKS</h3>
            <nav className="flex flex-col gap-1">
              <Link href="/about" className="text-white/80 hover:text-white transition-colors text-xs">
                ABOUT US
              </Link>
              <Link href="/videos" className="text-white/80 hover:text-white transition-colors text-xs">
                VIDEOS
              </Link>
              <Link href="/blogs" className="text-white/80 hover:text-white transition-colors text-xs">
                BLOGS
              </Link>
              <Link href="/visuals" className="text-white/80 hover:text-white transition-colors text-xs">
                VISUALS
              </Link>
              <Link href="/entertainment" className="text-white/80 hover:text-white transition-colors text-xs">
                ENTERTAINMENT
              </Link>
              <Link href="/connect" className="text-white/80 hover:text-white transition-colors text-xs">
                CONNECT
              </Link>
            </nav>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold italic">CONTACT</h3>
            <h3 className="font-serif text-2xl font-bold italic">US</h3>
            <div className="flex flex-col gap-1">
              <a href="#" className="text-white/80 hover:text-white transition-colors text-xs flex items-center gap-2">
                <Facebook className="w-3 h-3" />
                FACEBOOK
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-xs flex items-center gap-2">
                <Instagram className="w-3 h-3" />
                INSTAGRAM
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-xs flex items-center gap-2">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                TIKTOK
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-xs flex items-center gap-2">
                <Youtube className="w-3 h-3" />
                YOUTUBE
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-xs flex items-center gap-2">
                <Mail className="w-3 h-3" />
                GMAIL
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
