"use client";

import React from "react";
import { portfolioData } from "@/data";
import { GraduationCap, School, BookOpen } from "lucide-react";

export function EditorialEducation() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5 relative" id="education">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="text-center relative z-10 mb-20">
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">
          Academic <span className="text-[#D4AF37]">Background</span>
        </h2>
        <p className="text-gray-400 font-light text-lg">My educational qualifications.</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* The Central Glowing Golden Timeline Line */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/80 to-[#D4AF37]/0 md:-translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>

        <div className="flex flex-col space-y-16 md:space-y-24">
          {portfolioData.academicHistory.map((edu, idx) => {
            const isEven = idx % 2 === 0;
            
            // Choose icon based on index
            let Icon = GraduationCap;
            if (idx === 1) Icon = School;
            if (idx === 2) Icon = BookOpen;

            return (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* The Glowing Node */}
                <div className="absolute left-4 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full border-2 border-[#D4AF37] bg-[#0a0a0a] z-10 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.8)]">
                  <Icon size={20} className="text-white" />
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block md:w-[45%]"></div>

                {/* The Content Card */}
                <div className="w-full pl-24 md:pl-0 md:w-[45%]">
                  <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 hover:border-[#D4AF37]/30 transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.6)] group">
                    
                    {/* Inner Card Layout */}
                    <div className="flex items-start gap-4 md:gap-6">
                      
                      {/* Placeholder Logo / Avatar */}
                      <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-white flex-items-center justify-center border-2 border-white/10 overflow-hidden relative">
                         {/* We can place an actual image here, but a nice geometric pattern or initial works too */}
                         <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-lg font-serif bg-gradient-to-br from-gray-200 to-gray-400">
                           {edu.institution.charAt(0)}
                         </div>
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm mb-1 font-mono tracking-wider">{edu.duration}</p>
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-1 leading-tight">{edu.institution}</h3>
                        <p className="text-[#D4AF37] text-sm md:text-base font-medium mb-1">{edu.degree}</p>
                        <p className="text-gray-300 text-sm font-semibold mb-4">{edu.grade}</p>
                        
                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
