"use client";

import React from "react";
import { portfolioData } from "@/data";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export function EditorialEducation() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="mb-20 text-center md:text-left relative z-10">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
          <div className="p-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
            <GraduationCap className="text-[#D4AF37] w-6 h-6" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Academic <span className="text-[#D4AF37] italic">Credentials</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {portfolioData.academicHistory.map((edu, idx) => (
          <div 
            key={idx}
            className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-700 hover:border-white/10 hover:bg-[#0f0f0f]/90 hover:-translate-y-2 flex flex-col justify-between"
          >
            {/* Massive Watermark Icon */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none transform group-hover:scale-110">
              <Award size={240} className="text-[#D4AF37]" />
            </div>

            {/* Glowing Corner */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-[#D4AF37]/20 to-transparent blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full"></div>

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full border border-white/10 bg-black/40 text-xs uppercase tracking-widest text-gray-300 font-bold flex items-center gap-2">
                  <Calendar size={12} className="text-[#D4AF37]" />
                  {edu.duration}
                </span>
                {edu.degree === "High School" ? (
                  <span className="px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-xs uppercase tracking-widest text-red-400 font-bold">
                    Grade: 89.6%
                  </span>
                ) : (
                  <span className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs uppercase tracking-widest text-blue-400 font-bold">
                    B.Tech CSE
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 leading-tight">
                {edu.institution}
              </h3>
              
              <h4 className="font-mono text-[#D4AF37] text-sm mb-8">
                {edu.degree}
              </h4>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                {edu.description}
              </p>
            </div>

            {/* Connecting decorative bottom line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-[#D4AF37]/50 via-white/10 to-transparent mt-12"></div>
          </div>
        ))}
      </div>

    </section>
  );
}
