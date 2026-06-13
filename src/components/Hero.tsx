"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { portfolioData } from "@/data";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-16 text-center relative z-10">
      {/* Profile Photo with Glowing Ring */}
      <div className="relative mb-8 group">
        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full animate-spin-slow" style={{ animationDuration: '4s' }}></div>
        <div className="relative w-32 h-32 rounded-full bg-gray-900 border-4 border-gray-900 flex items-center justify-center overflow-hidden z-10 m-[2px]">
          {/* Fallback initials if no photo provided */}
          <span className="text-4xl font-bold text-gray-500">AK</span>
          {/* <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" /> */}
        </div>
      </div>

      {/* Headlines */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
        {portfolioData.personalInfo.name}
      </h1>
      
      <div className="h-8 text-xl md:text-2xl font-medium text-cyan-400 mb-8">
        <Typewriter
          options={{
            strings: [
              portfolioData.personalInfo.role,
              'Scalable Systems Architect',
              'Open Source Contributor'
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </div>

      {/* Premium Rainbow Gradient Button */}
      <a
        href={portfolioData.personalInfo.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex group"
      >
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <button className="relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-gray-800">
          Check CV
        </button>
      </a>
    </div>
  );
}
