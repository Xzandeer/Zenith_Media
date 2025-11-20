"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsLoading(true);

    try {
      // Try Firestore write but do NOT get stuck if it fails
      await Promise.race([
        addDoc(collection(db, "logins"), {
          name,
          timestamp: serverTimestamp(),
        }),
        new Promise((resolve) => setTimeout(resolve, 1500)), // fallback if Firestore is slow
      ]);

      // Save locally for session-based login
      sessionStorage.setItem("zenithName", name);

      // Always redirect after a short delay
      setTimeout(() => {
        router.push("/");
      }, 500);

    } catch (error) {
      console.error("Login error:", error);

      // Still log in the user locally even if Firestore fails
      sessionStorage.setItem("zenithName", name);

      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1F3E8A] via-[#2952B8] to-[#B5452E] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F7E9E9] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">

          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1F3E8A] mb-2">ZENITH</h1>
            <p className="text-[#B5452E] font-medium text-lg">MEDIA</p>
            <p className="text-gray-600 mt-4 text-sm">Welcome to the Zenith World</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Your Name
              </label>

              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                disabled={isLoading}
                className="w-full rounded-xl border-gray-300 focus:border-[#1F3E8A] focus:ring-[#1F3E8A]"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1F3E8A] hover:bg-[#2952B8] text-white font-semibold py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
            >
              {isLoading ? "Entering..." : "Enter"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>No password required — just your name.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
