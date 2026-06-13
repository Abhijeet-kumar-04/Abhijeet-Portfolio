"use client";

import React from "react";

export function EditorialHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black selection:bg-[#D4AF37]/30">
      
      {/* Elegant Header */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full text-center z-20 px-4">
        <h2 className="text-[#D4AF37] font-serif tracking-[0.3em] text-sm md:text-lg">
          A B H I J E E T &nbsp; K U M A R
        </h2>
      </div>

      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden select-none">
        <h1 className="text-[15vw] font-black text-white/[0.03] tracking-tighter leading-none text-center">
          ENGINEER
        </h1>
      </div>

      {/* Central Portrait Placeholder */}
      <div className="relative z-10 w-64 h-80 md:w-80 md:h-[400px] lg:w-[400px] lg:h-[500px] group">
        <div className="absolute inset-0 border border-white/5 bg-[#0a0a0a] rounded-[2rem] overflow-hidden flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02] shadow-2xl">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>
          
          <div className="text-gray-600 font-serif italic text-lg opacity-50">
            Portrait
          </div>
        </div>
      </div>

      {/* Floating Details - Bottom Left */}
      <div className="absolute bottom-12 left-6 md:left-12 max-w-xs z-20">
        <h3 className="text-white font-serif text-lg md:text-xl mb-2">BACKEND & AI ENGINEER</h3>
        <p className="text-gray-400 text-sm leading-relaxed font-sans font-light">
          Architecting scalable systems and intelligent applications with clean code.
        </p>
      </div>

      {/* Floating Details - Bottom Right */}
      <div className="absolute bottom-12 right-6 md:right-12 text-right z-20">
        <p className="text-[#D4AF37] font-sans text-xs tracking-widest uppercase">
          BASED IN ASSAM / EST. 2026
        </p>
      </div>

    </section>
  );
}
