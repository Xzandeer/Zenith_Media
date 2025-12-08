"use client";

export function HeroSection({ onScrollDown }: { onScrollDown: () => void }) {
  return (
    <section
      className="w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/BACKGROUND.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* CENTER CONTENT */}
      <div
        className="relative"
        style={{
          width: "1600px",
          height: "700px",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "160px",
        }}
      >
        {/* LEFT — TEXT */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            marginTop: "145px",
            marginLeft: "70px",
          }}
        >
          <div style={{ position: "relative", width: "900px", height: "450px" }}>
            {/* WHAT’S */}
            <div
              style={{
                position: "absolute",
                top: "50px",
                left: "-20px",
                fontFamily: "Playfair Display, serif",
                fontSize: "110px",
                fontWeight: 600,
                color: "#1F3E8A",
                lineHeight: "0.85",
                zIndex: 1,
              }}
            >
              WHAT’S
            </div>

            {/* Zenith */}
            <div
              style={{
                position: "absolute",
                top: "60px",
                left: "65px",
                fontFamily: `"Playfair Display, serif, bold, italic"`,
                fontSize: "150px",
                fontWeight: "bold",
                fontStyle: "italic",
                color: "#B5452E",
                zIndex: 2,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Text shadow added
              }}
            >
              Zenith
            </div>

            {/* for you? */}
            <div
              style={{
                position: "absolute",
                top: "170px",
                left: "260px",
                fontFamily: "Playfair Display, serif",
                fontSize: "110px",
                fontWeight: 600,
                color: "#1F3E8A",
                transform: "skew(-5deg)",
                zIndex: 3,
              }}
            >
              for you?
            </div>

            {/* Slogan */}
            <div
              style={{
                position: "absolute",
                top: "325px", // Positioned below "for you?"
                left: "-20px",
                fontFamily: "Playfair Display, serif",
                fontSize: "40px",
                fontWeight: 500,
                color: "#1F3E8A",
                zIndex: 4,
                transform: "skew(-5deg)",
              }}
            >
              Delivering quality learning to the highest point!
            </div>

            {/* New Sentence Below the Slogan */}
            <p
              className="absolute top-[390px] left-[-20px] text-[#1F3E8A] text-sm font-medium z-5"
            >
              With the overwhelming social media-related issues today, more learning is a must. That is why we, Zenith Media, are here to help you better navigate the digital world by enhancing your social media literacy.
            </p>
          </div>

          {/* CONNECT BUTTON */}
          <button
            onClick={onScrollDown}
            style={{
              marginTop: "10px", // Adjusted to give more space below the slogan
              width: "240px",
              height: "55px",
              background: "linear-gradient(45deg, #B5452E, #1F3E8A)", // Gradient added here
              color: "white",
              borderRadius: "35px",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
            className="transition-transform transform hover:scale-105 hover:shadow-xl" // Refined hover effect with scale and shadow
          >
            connect with us
          </button>
        </div>

        {/* RIGHT — NOW USING YOUR REAL ASSETS */}
        <div
          style={{
            width: "580px",
            height: "700px",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr", // ⬅️ wider tall video
            gridTemplateRows: "repeat(3, 1fr)",
            gap: "30px",
            marginTop: "40px",
          }}
        >
          {/* TALL VIDEO (VERTICAL_VIDEO.mp4) */}
          <div
            style={{
              gridRow: "1 / span 3",
              borderRadius: "35px",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <video
              src="/VERTICAL_VIDEO.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>

          {/* TOP_SMALL_PHOTO */}
          <div
            style={{
              borderRadius: "35px",
              overflow: "hidden",
            }}
          >
            <img
              src="/TOP_PHOTO.png"
              className="w-full h-full object-cover"
            />
          </div>

          {/* MIDDLE_VIDEO */}
          <div
            style={{
              borderRadius: "35px",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <video
              src="/MIDDLE_VIDEO.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>

          {/* BOTTOM_SMALL_PHOTO */}
          <div
            style={{
              borderRadius: "35px",
              overflow: "hidden",
            }}
          >
            <img
              src="/BOTTOM_PHOTO.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SCROLL DOWN ARROW */}
      <button
        onClick={onScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white/80 text-[#1F3E8A] shadow-lg backdrop-blur hover:bg-white transition animate-bounce hover:shadow-xl hover:text-[#B5452E]"
      >
        <span className="text-3xl leading-none">↓</span>
      </button>

      {/* Smooth Scroll Effect */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
}
