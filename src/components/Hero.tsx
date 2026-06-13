"use client";

import React from "react";
import Typewriter from "typewriter-effect";

export function Hero() {
  return (
    <section className="relative w-full max-w-6xl mx-auto pt-24 pb-16 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
      
      {/* Left Side: Text Content */}
      <div className="flex-1 flex flex-col space-y-6 text-center md:text-left">
        
        {/* Name Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Abhijeet</span>
        </h1>

        {/* Typewriter Effect */}
        <div className="text-xl md:text-3xl font-mono font-medium text-teal-400 h-10">
          <Typewriter
            options={{
              strings: [
                'A Tech Enthusiast',
                'A Backend Developer',
                'An AI/ML Explorer',
                'A Problem Solver'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
            }}
          />
        </div>


        {/* Optional Action Buttons */}
        <div className="pt-4 flex justify-center md:justify-start gap-4">
           <a href="#projects" className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-black font-semibold transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)]">
             View My Work
           </a>
        </div>
      </div>

      {/* Right Side: Photo Container */}
      <div className="relative flex-shrink-0 group">
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
        
        {/* Profile Image Wrapper */}
        <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full border-2 border-white/10 bg-gray-900 overflow-hidden shadow-2xl flex items-center justify-center">
          
          <div className="text-gray-500 text-2xl font-bold tracking-widest">
            AK
          </div>

        </div>
      </div>

    </section>
  );
}
