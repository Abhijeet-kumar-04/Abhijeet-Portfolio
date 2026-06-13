"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export function EditorialHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 py-20">
      
      {/* Integrated Typography & Status */}
      <div className="relative z-20 w-full max-w-5xl mb-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#D4AF37] tracking-[0.2em] md:tracking-[0.3em] uppercase text-center animate-pulse drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          Abhijeet Kumar
        </h1>
        <div className="mt-6 text-xs md:text-sm text-gray-500 font-mono tracking-widest flex items-center gap-2">
          <span className="text-[#2dd4bf] animate-pulse">_&gt;</span> abhijeet@control-center:~
        </div>
      </div>

      {/* Central Content Panel (Refined Glassmorphism) */}
      <div className="relative z-20 w-full max-w-5xl bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl flex flex-col lg:flex-row gap-12 items-center justify-between">
        
        {/* Left Side: Interactive Terminal & Skills */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8">
          
          {/* Terminal Output */}
          <div className="font-mono text-sm md:text-base text-gray-300 min-h-[120px] bg-black/40 p-4 rounded-xl border border-white/5 shadow-inner">
            <Typewriter
              options={{
                delay: 40,
                deleteSpeed: 20,
                cursor: '█',
                cursorClassName: 'text-gray-500 animate-pulse',
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="text-[#2dd4bf]">&gt;</span> run activate_profile.sh<br/>')
                  .pauseFor(300)
                  .typeString('<span class="text-[#2dd4bf]">&gt;</span> Loading modules for user: <span class="text-white">Abhijeet-kumar-04</span><br/>')
                  .pauseFor(200)
                  .typeString('<span class="text-[#2dd4bf]">&gt;</span> Name: Abhijeet Kumar<br/>')
                  .pauseFor(200)
                  .typeString('<span class="text-[#2dd4bf]">&gt;</span> Status: <span class="text-green-400">ACTIVE</span><br/>')
                  .start();
              }}
            />
          </div>

          {/* Static Technical Details */}
          <div className="space-y-4 font-mono text-xs md:text-sm">
            <div className="flex flex-col space-y-1">
              <span className="text-gray-500">SYSTEM_STATUS:</span>
              <span className="text-green-400">Ready for opportunities.</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-gray-500">CORE_FOCUS:</span>
              <span className="text-white">Backend, AI/ML, Scalable Systems</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-gray-500">EDUCATION:</span>
              <span className="text-white">CSE @ NIT Silchar</span>
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <span className="text-gray-500">STACK_PILLS:</span>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Node.js", "C++", "Express", "Next.js"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#2dd4bf]/10 text-[#2dd4bf] rounded-md border border-[#2dd4bf]/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Rainbow CTA Button */}
          <div className="pt-4">
            <a href="/resume.pdf" target="_blank" className="relative inline-flex group rounded-full p-[2px] transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full blur-sm group-hover:blur-md transition-all duration-300 animate-pulse"></span>
              <div className="relative bg-black px-8 py-3 rounded-full border border-white/10 flex items-center gap-2">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Check CV</span>
              </div>
            </a>
          </div>

        </div>

        {/* Right Side: Premium Portrait Visual */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Dynamic Glowing Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#2dd4bf] to-blue-600 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            
            {/* Portrait Frame */}
            <div className="relative w-full h-full rounded-full border-4 border-[#0a0a0a] bg-black overflow-hidden shadow-[0_0_50px_rgba(45,212,191,0.2)] flex items-center justify-center">
              <div className="text-gray-600 font-serif italic">Portrait Photo</div>
            </div>

            {/* Technical Overlays */}
            <div className="absolute top-4 -right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 shadow-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-ping"></div>
              <span className="text-[10px] text-white font-mono tracking-wider">UID: ABH-04</span>
            </div>
            
            <div className="absolute bottom-4 -left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 shadow-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-[10px] text-white font-mono tracking-wider">STATUS: VERIFIED</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
