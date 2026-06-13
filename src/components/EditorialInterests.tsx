"use client";

import React from "react";
import { Sparkles, Database, Cloud } from "lucide-react";

export function EditorialInterests() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
      {/* Full-Width: Interests & Focus */}
      <div className="flex flex-col w-full">
        <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.8)] hover:border-white/10 hover:bg-[#0f0f0f]/90 transition-all duration-700 relative overflow-hidden group w-full">
          <div className="absolute inset-0 bg-gradient-to-tl from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]"></div>
          
          <div className="flex items-center space-x-3 mb-10 relative z-10">
            <div className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-300">
              <Sparkles size={20} />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-white">Interests & Focus</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 relative z-10">
            {/* Areas of Interest */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <Database size={16} className="text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-widest font-bold">Areas of Interest</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Full Stack Development", "Cloud Computing", "DevOps", "Scalable Systems"].map((tag, i) => (
                  <div key={i} className="px-5 py-3 rounded-full border border-white/10 bg-black/40 text-gray-300 text-sm hover:border-white/20 transition-colors cursor-default">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Exploring */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <Cloud size={16} className="text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-widest font-bold">Currently Exploring</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Kubernetes", "AWS", "System Design", "Production Architecture"].map((tag, i) => (
                  <div key={i} className="px-5 py-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-gray-200 text-sm hover:border-[#D4AF37]/40 transition-colors cursor-default flex items-center gap-2">
                    <span className="text-[#D4AF37] opacity-70">⬡</span>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
