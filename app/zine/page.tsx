"use client"; // This ensures that this component only runs on the client-side

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ZinePage = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Client-side check to prevent issues with Next.js SSR
  useEffect(() => {
    setIsClient(true); // This ensures code only runs on the client
  }, []);

  // Function to handle the return button click
  const handleReturn = () => {
    if (router) {
      router.push("/services"); // Redirect to the services page
    }
  };

  if (!isClient) {
    // Show loading screen or fallback UI until the page is mounted on the client
    return <div>Loading...</div>;
  }

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/BACKGROUND.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full px-8 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1F3E8A] mb-10">
          Zenith & Out Zine
        </h2>

        {/* Embed Zine from Heyzine */}
        <div className="flex justify-center mt-10 mb-6">
          <iframe
            src="https://heyzine.com/flip-book/8550490900.html"
            width="100%"
            height="800px"
            frameBorder="0"
            allowFullScreen
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Description Below the Zine */}
        <p className="text-lg font-medium text-[#1F3E8A] mb-12 max-w-2xl mx-auto">
          A creative collection that breaks down the chaos of the online world into stories, insights, and reflections you can relate to.
        </p>

        {/* Return Button */}
        <button
          onClick={handleReturn}
          className="bg-[#1F3E8A] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#B5452E] transition-all duration-300"
        >
          Return to Services
        </button>
      </div>
    </section>
  );
};

export default ZinePage;
