import React from "react";
import { Code2, ExternalLink, Sparkles, Database, Cloud } from "lucide-react";

export function CodingProfiles() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
        
        {/* Left Column: Coding Profiles */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 rounded-full border border-white/10 bg-white/5 text-[#D4AF37]">
              <Code2 size={20} />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-[#D4AF37]">Coding Profiles</h2>
          </div>

          {/* LeetCode Card */}
          <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/10 transition-colors shadow-2xl relative overflow-hidden group">
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] pointer-events-none rounded-full"></div>
            
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#FFA116] text-xl font-bold border border-white/5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.396.702-1.863l4.332-4.363c.467-.467 1.111-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-7.22 0l-4.332 4.363a5.1 5.1 0 0 0 0 7.29l4.332 4.363a5.055 5.055 0 0 0 7.22 0l2.609-2.636c.514-.515.496-1.366-.039-1.901-.535-.535-1.386-.517-1.9.038zm-6.626-4.662h9.231c.712 0 1.291.579 1.291 1.291s-.579 1.291-1.291 1.291H9.476c-.712 0-1.291-.579-1.291-1.291s.579-1.291 1.291-1.291z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">LeetCode</h3>
                  <p className="text-[10px] md:text-xs text-[#D4AF37] uppercase tracking-wider font-medium">Competitive Programming & Problem Solving</p>
                </div>
              </div>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-4xl md:text-5xl font-serif text-white mb-1">131</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Problems Solved</div>
              </div>
              <div className="flex flex-col items-start md:items-end bg-black/40 px-4 py-2 rounded-xl border border-white/5">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Most Recent Badge</span>
                <span className="text-sm text-white font-medium flex items-center gap-2">
                  <span className="text-[#D4AF37]">🎖️</span> SQL Top 50
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-white">1414</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Contest Rating</span>
              </div>
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-white">78.31%</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Top Ranking</span>
              </div>
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-teal-400">95</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Easy</span>
              </div>
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-yellow-500">34</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Medium</span>
              </div>
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-red-500">2</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Hard</span>
              </div>
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-white">225+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Yearly Subs</span>
              </div>
            </div>
          </div>

          {/* SkillRack Card */}
          <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/10 transition-colors shadow-2xl relative overflow-hidden group">
             {/* Soft background glow */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] pointer-events-none rounded-full"></div>
             
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-300 font-mono border border-white/5">
                  &gt;_
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">SkillRack</h3>
                  <p className="text-[10px] md:text-xs text-[#D4AF37] uppercase tracking-wider font-medium">Top Coding Practice Platform</p>
                </div>
              </div>
              <a href="#" className="text-gray-500 hover:text-white transition-colors relative z-10">
                <ExternalLink size={20} />
              </a>
            </div>

            <div className="mb-8 relative z-10">
              <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-1">1164+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Programs Solved</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 relative z-10">
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-white">16700</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Current Rank</span>
              </div>
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-white">823</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Code Track</span>
              </div>
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-white">37</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Code Test</span>
              </div>
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-white">304</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Code Tutor</span>
              </div>
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-white">15</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Certificates</span>
              </div>
              <div className="bg-[#050505] rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className="text-lg font-bold text-[#CD7F32]">319</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Bronze Medals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interests & Focus */}
        <div className="flex flex-col">
          <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/10 transition-colors shadow-2xl relative h-full">
            <div className="flex items-center space-x-3 mb-10">
              <div className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-300">
                <Sparkles size={20} />
              </div>
              <h2 className="font-serif text-2xl text-white">Interests & Focus</h2>
            </div>

            <div className="space-y-10">
              {/* Areas of Interest */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <Database size={16} className="text-[#D4AF37]" />
                  <span className="text-xs uppercase tracking-widest font-bold">Areas of Interest</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Full Stack Development", "Cloud Computing", "DevOps", "Scalable Systems"].map((tag, i) => (
                    <div key={i} className="px-4 py-2 rounded-full border border-white/10 bg-black/40 text-gray-300 text-sm hover:border-white/20 transition-colors cursor-default">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Currently Exploring */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <Cloud size={16} className="text-[#D4AF37]" />
                  <span className="text-xs uppercase tracking-widest font-bold">Currently Exploring</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Kubernetes", "AWS", "System Design", "Production Architecture"].map((tag, i) => (
                    <div key={i} className="px-4 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-gray-200 text-sm hover:border-[#D4AF37]/40 transition-colors cursor-default flex items-center gap-2">
                      <span className="text-[#D4AF37] opacity-70">⬡</span>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
