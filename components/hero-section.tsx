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
          <div style={{ position: "relative", width: "900px", height: "280px" }}>

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
                fontFamily: `"Playfair Display, serif, bold, italic`,
                fontSize: "150px",
                fontWeight: 700,
                fontStyle: "italic",
                color: "#B5452E",
                zIndex: 2,
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
          </div>

          {/* CONNECT BUTTON */}
          <button
            onClick={onScrollDown}
            style={{
              marginTop: "40px",
              width: "240px",
              height: "55px",
              backgroundColor: "#B5452E",
              color: "white",
              borderRadius: "35px",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
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
     gridTemplateColumns: "1.4fr 1fr",  // ⬅️ wider tall video
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
        className="
          absolute bottom-10 left-1/2 -translate-x-1/2 
          flex items-center justify-center
          w-14 h-14 rounded-full 
          bg-white/80 text-[#1F3E8A] 
          shadow-lg backdrop-blur
          hover:bg-white transition
          animate-bounce
        "
      >
        <span className="text-3xl leading-none">↓</span>
      </button>

    </section>
  );
}
