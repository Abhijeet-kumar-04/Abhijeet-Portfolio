"use client";
import React from "react";

export function EditorialHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#050505] overflow-hidden px-6 md:px-12 lg:px-24 border-b border-white/5">
      
      {/* Subtle Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#D4AF37] opacity-[0.04] blur-[100px] rounded-full pointer-events-none"></div>

      {/* Top Navigation / Status Bar */}
      <div className="absolute top-8 left-0 w-full px-6 md:px-12 lg:px-24 flex justify-between items-center text-xs tracking-[0.2em] text-gray-500 font-sans uppercase">
        <span>Est. 2026</span>
        <span className="text-[#D4AF37] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
          Based in Assam
        </span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full mt-12">
        
        {/* Kicker / Role */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.3em] font-sans uppercase">
            Backend & AI Engineer
          </span>
        </div>

        {/* Massive Typographic Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8">
          Architecting <br className="hidden md:block"/>
          <span className="text-gray-500 italic">intelligent</span> systems.
        </h1>

        {/* Details & Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-12 md:mt-24 border-t border-white/10 pt-12">
          
          {/* Bio Column */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-serif text-white mb-4">Abhijeet Kumar</h2>
            <p className="text-gray-400 text-sm md:text-base font-sans leading-relaxed">
              Specializing in scalable architectures, C++, and integrating AI models into robust web applications. I bridge the gap between complex data structures and seamless digital experiences.
            </p>
          </div>

          {/* Spacer for layout */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* CTA Buttons Column */}
          <div className="md:col-span-5 flex flex-col sm:flex-row items-start md:items-center gap-4 md:gap-6">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-[#D4AF37] text-black font-sans text-xs md:text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/20 text-white font-sans text-xs md:text-sm tracking-widest uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
          </div>
          
        </div>
      </div>

    </section>
  );
}
