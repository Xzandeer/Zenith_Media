"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function MissionVisionValuesSDG() {
  return (
    <section className="py-16 px-6 bg-[#e2a385]">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B5452E]">
          Our Mission, Vision, Values & Target SDGs
        </h2>
        <p className="text-[#6A4B3C] mt-2 text-sm md:text-base max-w-3xl mx-auto">
          The foundation that guides Zenith Media in creating meaningful and impactful learning materials.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* ===== MISSION ===== */}
        <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-[#E8D7CC] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-[#1F3E8A] mb-3">Mission</h3>
          <p className="text-sm leading-relaxed text-[#0B0F1A]">
            We engage and mobilize our stakeholders through effective learning resources crafted
            with the utmost coherence and conciseness, along with aesthetic value, thus offering
            learning quality to the highest point.
          </p>
        </div>

        {/* ===== VISION ===== */}
        <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-[#E8D7CC] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-[#1F3E8A] mb-3">Vision</h3>
          <p className="text-sm leading-relaxed text-[#0B0F1A]">
            To add to the body of knowledge by enhancing existing information through innovative,
            quality-made learning materials that target holistic learning, equipping our stakeholders
            with globally competitive learning competencies.
          </p>
        </div>

        {/* ===== VALUES ===== */}
        <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-[#E8D7CC] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-[#1F3E8A] mb-4">Values</h3>

          <ul className="space-y-2 text-sm text-[#0B0F1A]">
            <li><b>Z – Zealful:</b> We approach our work with passion and enthusiasm.</li>
            <li><b>E – Educating:</b> We create resources that guide learning and support growth.</li>
            <li><b>N – Noble:</b> We act with sincerity and respect for knowledge.</li>
            <li><b>I – Innovative:</b> We embrace creativity and modern approaches.</li>
            <li><b>T – Transformative:</b> We inspire growth and positive change.</li>
            <li><b>H – Holistic:</b> We nurture critical thinking, values, and lifelong skills.</li>
          </ul>
        </div>

        {/* ===== SDGs ===== */}
        <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-[#E8D7CC] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-[#1F3E8A] mb-4">
            Sustainable Development Goals
          </h3>

          <ul className="space-y-3 text-sm text-[#0B0F1A]">
            <li>
              <b>SDG 4 – Quality Education:</b>  
              We promote sustainable development by equipping citizens with essential media literacy skills.
            </li>

            <li>
              <b>SDG 10 – Reduced Inequalities:</b>  
              We aim to bridge information gaps and reduce inequalities in access to social media.
            </li>

            <li>
              <b>SDG 16 – Peace, Justice, and Strong Institutions:</b>  
              We foster informed citizenship, transparency, and critical engagement to protect individuals’ rights online.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
