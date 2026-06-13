"use client";

import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { MapPin, Target, GitCommit, Trophy } from "lucide-react";

export function ModernAbout() {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 md:px-12 py-24 z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Item 1: The Focus (Wide - 2 columns) */}
        <SpotlightCard className="md:col-span-2 p-8 md:p-10 flex flex-col justify-between group">
          <div className="mb-6 flex items-center space-x-3 text-gray-400">
            <Target size={20} className="text-blue-500" />
            <h3 className="font-semibold text-white tracking-tight">The Focus</h3>
          </div>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            I bridge the gap between complex data structures and scalable backend architecture. Currently pursuing my B.Tech in CSE at NIT Silchar, with a deep focus on C++, Node.js, and integrating AI models into production environments.
          </p>
        </SpotlightCard>

        {/* Item 2: Location (Square - 1 column) */}
        <SpotlightCard className="p-8 md:p-10 flex flex-col items-center justify-center min-h-[300px]">
          <div className="absolute top-8 left-8 flex items-center space-x-3 text-gray-400">
            <MapPin size={20} className="text-blue-500" />
            <h3 className="font-semibold text-white tracking-tight">Location</h3>
          </div>
          
          <div className="relative w-full h-full flex items-center justify-center mt-8">
            {/* Abstract minimalist map placeholder */}
            <svg className="w-full h-full opacity-20" viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M40 100 L80 140 L120 80 L160 120" />
              <path d="M20 60 L60 20 L100 60" />
              <path d="M140 180 L180 140" />
            </svg>
            
            {/* Glowing Blue Dot representing Assam */}
            <div className="absolute top-[40%] right-[30%]">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></span>
              </span>
            </div>
            <div className="absolute top-[50%] right-[25%] text-xs text-white font-medium">Assam, India</div>
          </div>
        </SpotlightCard>

        {/* Item 3: Metrics (Square - 1 column) */}
        <SpotlightCard className="p-8 md:p-10 flex flex-col justify-between min-h-[300px]">
          <div className="flex items-center space-x-3 text-gray-400 mb-8">
            <GitCommit size={20} className="text-blue-500" />
            <h3 className="font-semibold text-white tracking-tight">Metrics</h3>
          </div>
          <div className="flex flex-col">
            <span className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-2">56+</span>
            <span className="text-gray-400 font-medium">GitHub Contributions this year</span>
          </div>
        </SpotlightCard>

        {/* Item 4: Milestones (Wide - 2 columns) */}
        <SpotlightCard className="md:col-span-2 p-8 md:p-10 flex flex-col">
          <div className="flex items-center space-x-3 text-gray-400 mb-8">
            <Trophy size={20} className="text-blue-500" />
            <h3 className="font-semibold text-white tracking-tight">Milestones</h3>
          </div>
          <ul className="flex flex-col space-y-6 flex-1 justify-center">
            <li className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-lg text-white font-medium">TechM CODE Round 2 Shortlist</span>
              <span className="text-blue-500 font-medium">Achieved</span>
            </li>
            <li className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-lg text-white font-medium">ZS Campus Beats Finalist</span>
              <span className="text-blue-500 font-medium">Finalist</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-lg text-white font-medium">ICPC Regionalist</span>
              <span className="text-blue-500 font-medium">Competed</span>
            </li>
          </ul>
        </SpotlightCard>

      </div>
    </section>
  );
}
