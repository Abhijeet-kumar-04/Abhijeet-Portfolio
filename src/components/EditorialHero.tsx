"use client";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FileText } from "lucide-react";

export function EditorialHero() {
  const [activeTab, setActiveTab] = React.useState('about.json');

  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden font-sans">

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent border-b border-white/5 h-14 md:h-16 flex items-center px-6 md:px-12 justify-between">
        <div className="text-white font-bold tracking-widest text-xl font-serif">A.K.</div>
        <div className="flex items-center space-x-6 md:space-x-10">
          <div className="hidden md:flex space-x-8">
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-[#c69b52] transition-colors text-[11px] font-semibold tracking-[0.2em] uppercase">About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-[#c69b52] transition-colors text-[11px] font-semibold tracking-[0.2em] uppercase">Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-[#c69b52] transition-colors text-[11px] font-semibold tracking-[0.2em] uppercase">Contact</a>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6 border-l border-white/10 pl-4 md:pl-6">
            <a href="https://github.com/Abhijeet-kumar-04" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.5-3.8 5.2 5.2 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.2 5.2 0 0 0-.1 3.8A5.1 5.1 0 0 0 3.4 9.5c0 5.6 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.02V22" /><path d="M9 20c-5 1.5-5-2.5-7-3" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/abhijeet-kumar-2a280b2a3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://drive.google.com/drive/folders/1rpnD4o8jLZ3ErkE1BiYo3O2UI40KYeYH?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 hover:bg-[#c69b52] text-gray-300 hover:text-black border border-white/10 hover:border-[#c69b52] transition-all text-[9px] md:text-[10px] font-bold tracking-widest uppercase rounded-sm">
              <FileText className="w-3 h-3 md:w-3.5 md:h-3.5" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Top Name */}
      <div className="absolute top-12 md:top-16 left-0 w-full flex justify-center z-30">
        <h2 className="text-[#c69b52] tracking-wider text-4xl md:text-6xl font-bold font-serif italic drop-shadow-[0_5px_15px_rgba(198,155,82,0.3)]">
          Abhijeet Kumar
        </h2>
      </div>

      {/* Layer 1: Background Solid Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none mt-24 md:mt-32">
        <h1 className="text-[#e2e2e2] font-bold text-[14vw] leading-none tracking-tight select-none">
          PORTFOLIO
        </h1>
      </div>

      {/* Layer 2: Person Image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-2xl h-[85vh] pointer-events-none translate-y-12 md:translate-y-20">
        <img
          src="/my-new-potrait.jpeg"
          alt="Abhijeet Kumar"
          className="w-full h-full object-contain object-bottom origin-bottom scale-[1.05] md:scale-[1.15]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
          }}
        />
      </div>

      {/* Layer 3: Foreground Outline Text */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mt-24 md:mt-32">
        <h1 className="font-bold text-[14vw] leading-none tracking-tight select-none flex">
          <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)' }}>PO</span>
          <span className="text-[#e2e2e2]">R</span>
          <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)' }}>TFOLIO</span>
        </h1>
      </div>

      {/* Left Content Area - Typewriter */}
      <div className="absolute left-6 md:left-12 bottom-12 md:bottom-20 z-30 flex flex-col gap-2">
        <h3 className="text-[#c69b52] font-bold tracking-widest text-sm md:text-lg uppercase font-serif">
          I am a
        </h3>
        <div className="text-gray-200 text-xl md:text-3xl font-bold font-sans tracking-wide drop-shadow-md">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer.",
                "Tech Enthusiast.",
                "Competitive Programmer.",
                "Backend Architect."
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
            }}
          />
        </div>
      </div>

      {/* Right Bottom Content Area - Mini Terminal */}
      <div className="absolute right-6 md:right-12 bottom-4 md:bottom-6 z-30 bg-[#0d1117]/90 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300">
        <div className="flex items-center px-3 h-8 border-b border-white/5 bg-black/40">
          <div className="flex gap-1.5 self-center">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="ml-3 flex h-full">
            <button
              onClick={() => setActiveTab('about.json')}
              className={`flex items-center px-3 h-full text-[10px] font-mono transition-colors cursor-pointer ${activeTab === 'about.json' ? 'border-b-[1.5px] border-teal-400 bg-white/5 text-teal-400' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
            >
              <span className="text-yellow-500 mr-1.5">{'{ }'}</span> about.json
            </button>
            <button
              onClick={() => setActiveTab('skills.ts')}
              className={`flex items-center px-3 h-full text-[10px] font-mono transition-colors cursor-pointer ${activeTab === 'skills.ts' ? 'border-b-[1.5px] border-teal-400 bg-white/5 text-teal-400' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
            >
              <span className="text-blue-400 mr-1.5">TS</span> skills.ts
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="px-4 py-3 font-mono text-[10px] md:text-[11px] leading-relaxed text-gray-300 whitespace-nowrap min-h-[80px]">
          {activeTab === 'about.json' ? (
            <>
              <div>{'{'}</div>
              <div className="pl-4">
                <span className="text-teal-400">"developer"</span>: <span className="text-yellow-300">"Abhijeet Kumar"</span>,
              </div>
              <div className="pl-4">
                <span className="text-teal-400">"status"</span>: <span className="text-yellow-300">"Active / CSE @ NIT Silchar (2027)"</span>,
              </div>
              <div className="pl-4">
                <span className="text-teal-400">"openForOpportunities"</span>: <span className="text-[#ffbd2e]">true</span>
              </div>
              <div>{'}'}</div>
            </>
          ) : (
            <>
              <div><span className="text-purple-400">export const</span> <span className="text-blue-400">skills</span> = {'{'}</div>
              <div className="pl-4">
                <span className="text-blue-300">languages</span>: [<span className="text-yellow-300">'C/C++'</span>, <span className="text-yellow-300">'Java'</span>, <span className="text-yellow-300">'Python'</span>, <span className="text-yellow-300">'JS'</span>, <span className="text-yellow-300">'SQL'</span>],
              </div>
              <div className="pl-4">
                <span className="text-blue-300">backend</span>: [<span className="text-yellow-300">'Node.js'</span>, <span className="text-yellow-300">'Express'</span>, <span className="text-yellow-300">'REST APIs'</span>],
              </div>
              <div className="pl-4">
                <span className="text-blue-300">tools</span>: [<span className="text-yellow-300">'Git'</span>, <span className="text-yellow-300">'GitHub'</span>, <span className="text-yellow-300">'Linux'</span>, <span className="text-yellow-300">'Postman'</span>]
              </div>
              <div>{'};'}</div>
            </>
          )}
        </div>
      </div>

    </section>
  );
}
