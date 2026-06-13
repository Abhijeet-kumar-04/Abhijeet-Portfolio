import React from "react";
import { Code, BrainCircuit, ShieldCheck } from "lucide-react";

export function EditorialJourney() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: About Me */}
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            About <span className="text-[#D4AF37] italic">Me</span>
          </h2>
          
          <div className="space-y-6 text-gray-400 font-sans text-lg leading-relaxed font-light">
            <p>
              I am a software engineer deeply passionate about building the foundational architecture that powers modern web applications. My journey is rooted in a strong command of C++ and Data Structures, which has shaped my approach to solving complex problems efficiently.
            </p>
            <p>
              By bridging the gap between scalable backend systems and rigorous competitive programming, I aim to create solutions that don't just function, but truly perform under pressure. My code is my craft—minimalist, secure, and infinitely scalable.
            </p>
          </div>
        </div>

        {/* Right Column: Stats & Philosophy */}
        <div className="flex flex-col gap-6">
          
          {/* Top Row: Stats Blocks */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-[1.5rem] hover:bg-white/[0.04] transition-colors">
              <span className="text-3xl font-serif text-[#D4AF37] mb-2">800+</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider text-center">DSA Problems</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-[1.5rem] hover:bg-white/[0.04] transition-colors">
              <span className="text-3xl font-serif text-[#D4AF37] mb-2">Pupil</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider text-center">Codeforces</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-[1.5rem] hover:bg-white/[0.04] transition-colors">
              <span className="text-3xl font-serif text-[#D4AF37] mb-2">8.17</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider text-center">CGPA</span>
            </div>
          </div>

          {/* Bottom Row: Developer Philosophy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-4 p-6 bg-[#0a0a0a] border border-white/5 rounded-[1.5rem]">
              <div className="p-3 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                <Code size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg mb-1">Backend Architecture</h4>
                <p className="text-gray-500 text-sm font-sans font-light">Designing reliable, scalable APIs using Node.js and MongoDB.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-[#0a0a0a] border border-white/5 rounded-[1.5rem]">
              <div className="p-3 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                <BrainCircuit size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg mb-1">Algorithmic Design</h4>
                <p className="text-gray-500 text-sm font-sans font-light">Mastering advanced data structures to optimize time complexities.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] sm:col-span-2">
              <div className="p-3 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg mb-1">Problem Solver</h4>
                <p className="text-gray-500 text-sm font-sans font-light">Committed to writing secure, optimized code for high-stakes environments.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
