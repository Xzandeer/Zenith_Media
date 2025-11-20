"use client";

import Link from "next/link";

export function Navigation() {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50 h-20 flex items-center
        bg-transparent
      "
    >
      <div
        className="w-full flex items-center"
        style={{
          maxWidth: "1800px",
          margin: "0 auto",
          paddingLeft: "30px",
          paddingRight: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT — LOGO (Clickable Home Link) */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/Primary Logo.png"
            alt="Zenith Logo"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Link>

        {/* RIGHT — NAV LINKS */}
        <div
          className="flex items-center gap-14 font-semibold"
          style={{
            color: "#1F3E8A",
            fontSize: "15px",
          }}
        >
          <Link href="/about" className="hover:text-[#0d2a76] transition">
            ABOUT US
          </Link>
          <Link href="/videos" className="hover:text-[#0d2a76] transition">
            VIDEOS
          </Link>
          <Link href="/blogs" className="hover:text-[#0d2a76] transition">
            BLOGS
          </Link>
          <Link href="/visuals" className="hover:text-[#0d2a76] transition">
            VISUALS
          </Link>
          <Link href="/entertainment" className="hover:text-[#0d2a76] transition">
            ENTERTAINMENT
          </Link>
          <Link href="/connect" className="hover:text-[#0d2a76] transition">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
