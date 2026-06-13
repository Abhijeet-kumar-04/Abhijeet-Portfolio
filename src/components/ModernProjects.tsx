"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function ModernProjects() {
  return (
    <section id="work" className="w-full max-w-5xl mx-auto px-6 md:px-12 py-32 z-10 relative">
      
      <div className="mb-16">
        <h2 className="text-sm font-semibold text-gray-500 tracking-[0.2em] uppercase">Selected Work</h2>
      </div>

      <div className="flex flex-col space-y-24">
        
        {/* Project 1: Compile-Hire */}
        <div className="flex flex-col rounded-[2rem] bg-[#111827] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] group">
          
          {/* Visual Area (60%) */}
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-blue-900/40 via-[#111827] to-[#111827] border-b border-white/5 flex items-center justify-center p-8 overflow-hidden">
            <div className="w-[120%] md:w-[90%] h-[120%] md:h-[110%] mt-20 md:mt-32 rounded-t-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden group-hover:-translate-y-4 transition-transform duration-700 ease-out flex flex-col">
              {/* MacOS Header */}
              <div className="h-8 bg-[#1f2937] border-b border-white/5 flex items-center px-4 space-x-2 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <div className="mx-auto bg-black/50 text-gray-400 text-[10px] px-8 py-0.5 rounded-md">compile-hire.dev</div>
              </div>
              {/* UI Mockup Content */}
              <div className="flex-1 flex p-4 gap-4">
                <div className="w-1/4 bg-white/5 rounded-lg"></div>
                <div className="w-3/4 flex flex-col gap-4">
                  <div className="h-20 bg-blue-500/10 border border-blue-500/20 rounded-lg"></div>
                  <div className="flex-1 bg-white/5 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area (40%) */}
          <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-bold text-white tracking-tight">Compile-Hire</h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                Transform the technical hiring process with an intelligent platform featuring unified dashboards, post-interview evaluation, and smart candidate matching.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["TypeScript", "Node.js", "Express", "MongoDB"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-black text-gray-300 text-xs font-medium rounded-md border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex shrink-0 gap-4 mt-4 md:mt-0">
              <a href="#" className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                Live Demo <ArrowUpRight size={16} />
              </a>
              <a href="https://github.com/Abhijeet-kumar-04" className="flex items-center gap-1 text-sm font-medium text-white hover:text-gray-300 transition-colors">
                GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Project 2: NoteBook */}
        <div className="flex flex-col rounded-[2rem] bg-[#111827] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] group">
          
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-indigo-900/40 via-[#111827] to-[#111827] border-b border-white/5 flex items-center justify-center overflow-hidden perspective-[1000px]">
            <div className="w-[80%] h-[80%] border border-white/10 rounded-2xl bg-[#0A0A0A] shadow-2xl transform rotate-x-[15deg] rotate-y-[-10deg] rotate-z-[2deg] group-hover:rotate-x-[10deg] group-hover:rotate-y-[-5deg] group-hover:rotate-z-[1deg] transition-transform duration-700 ease-out flex p-4 gap-4">
               <div className="w-1/3 bg-white/5 rounded-lg space-y-2 p-2">
                 <div className="w-full h-4 bg-white/10 rounded"></div>
                 <div className="w-3/4 h-4 bg-white/10 rounded"></div>
                 <div className="w-1/2 h-4 bg-white/10 rounded"></div>
               </div>
               <div className="w-2/3 grid grid-cols-2 gap-2">
                 <div className="bg-white/5 rounded-lg border border-white/10"></div>
                 <div className="bg-white/5 rounded-lg border border-white/10"></div>
                 <div className="bg-white/5 rounded-lg border border-white/10 col-span-2"></div>
               </div>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-bold text-white tracking-tight">NoteBook</h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                A collaborative workspace for teams facilitating instant information sharing, featuring tag-based filtering and real-time updates via WebSockets.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["React", "Node.js", "WebSockets", "Redis"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-black text-gray-300 text-xs font-medium rounded-md border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 gap-4 mt-4 md:mt-0">
              <a href="#" className="flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                Live Demo <ArrowUpRight size={16} />
              </a>
              <a href="https://github.com/Abhijeet-kumar-04" className="flex items-center gap-1 text-sm font-medium text-white hover:text-gray-300 transition-colors">
                GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Project 3: Hackathon Management Suite */}
        <div className="flex flex-col rounded-[2rem] bg-[#111827] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] group">
          
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-emerald-900/30 via-[#111827] to-[#111827] border-b border-white/5 flex items-center justify-center p-12 overflow-hidden">
             <div className="w-full h-full bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col p-6 group-hover:scale-[1.02] transition-transform duration-700 ease-out">
               <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                 <div className="w-32 h-6 bg-white/10 rounded"></div>
                 <div className="w-24 h-6 bg-emerald-500/20 border border-emerald-500/30 rounded-full"></div>
               </div>
               <div className="flex-1 grid grid-cols-3 gap-4">
                 <div className="bg-white/5 rounded-lg border border-white/5"></div>
                 <div className="bg-white/5 rounded-lg border border-white/5"></div>
                 <div className="bg-white/5 rounded-lg border border-white/5"></div>
               </div>
             </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-bold text-white tracking-tight">Hackathon Management Suite</h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                End-to-end management from ideation to submission. Implements dynamic content discovery and real-time data updates for a seamless user experience.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["React", "Node.js", "WebSockets"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-black text-gray-300 text-xs font-medium rounded-md border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 gap-4 mt-4 md:mt-0">
              <a href="#" className="flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                Live Demo <ArrowUpRight size={16} />
              </a>
              <a href="https://github.com/Abhijeet-kumar-04" className="flex items-center gap-1 text-sm font-medium text-white hover:text-gray-300 transition-colors">
                GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
