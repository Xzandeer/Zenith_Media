"use client";

import React from "react";

const ZinePage = () => {
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
      <div className="relative w-full px-8 py-20">
        <h2 className="text-center text-4xl font-bold text-[#1F3E8A] mb-10">
          Zenith & Out Zine
        </h2>

        {/* Embed Zine from Heyzine */}
        <div className="flex justify-center mt-10">
          <iframe
            src="https://heyzine.com/flip-book/8550490900.html" // Your Heyzine Zine link
            width="100%"
            height="800px"
            frameBorder="0"
            allowFullScreen
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ZinePage;