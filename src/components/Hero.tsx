"use client";

import React from "react";
import Typewriter from "typewriter-effect";

export function Hero() {
  return (
    <section className="relative w-full max-w-6xl mx-auto pt-24 pb-16 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
      
      {/* Left Side: Content & Embedded Terminal */}
      <div className="flex-1 flex flex-col space-y-6 text-center md:text-left">
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Abhijeet</span>
        </h1>

        {/* Sub-heading (Typewriter 1) */}
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

        {/* Embedded Terminal (Typewriter 2) */}
        <div className="bg-[#0d1117]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl mt-6 mb-8 max-w-2xl text-left overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-[#161b22]/90 border-b border-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"></div>
            </div>
            <div className="mx-auto text-xs text-gray-500 tracking-wider font-mono">
              &gt;_ hero@control-center:~
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-4 md:p-6 font-mono text-sm md:text-base text-gray-300 min-h-[200px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(20)
                  .typeString('<span class="text-green-400">user@abhijeet:~$</span> ./fetch_profile.sh<br/><br/>')
                  .pauseFor(400)
                  .typeString('<span class="text-teal-400">Loading modules... [OK]</span><br/><br/>')
                  .pauseFor(200)
                  .typeString('1. Pursuing B.Tech in Computer Science & Engineering at NIT Silchar.<br/><br/>')
                  .pauseFor(300)
                  .typeString('2. Passionate about building scalable architectures and intelligent systems.<br/><br/>')
                  .pauseFor(300)
                  .typeString('3. Specializing in C++, TypeScript, Node.js, and modern web frameworks.<br/><br/>')
                  .pauseFor(300)
                  .typeString('4. Constantly exploring the intersection of robust backend logic and AI.<br/><br/>')
                  .pauseFor(500)
                  .typeString('<span class="text-green-400">user@abhijeet:~$</span> ')
                  .start();
              }}
              options={{
                cursor: '█',
                cursorClassName: 'text-gray-500 animate-pulse',
              }}
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2 flex justify-center md:justify-start">
           <a href="#projects" className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-black font-bold transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]">
             View My Work
           </a>
        </div>
      </div>

      {/* Right Column (Visual) */}
      <div className="relative flex-shrink-0 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 bg-gray-900 overflow-hidden shadow-2xl flex items-center justify-center">
          <div className="text-gray-500 text-2xl font-bold tracking-widest">
            AK
          </div>
        </div>
      </div>

    </section>
  );
}
