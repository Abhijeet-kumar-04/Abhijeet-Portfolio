"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export function EditorialHero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#050505] overflow-hidden">
      
      {/* 1. Glassmorphic Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/5 h-16 flex items-center px-6 md:px-12 justify-between">
        <div className="text-white font-bold tracking-widest text-lg">A.K.</div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</a>
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Skills</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
        </div>
      </nav>

      {/* 2. Main Hero Layout */}
      <div className="flex-1 flex flex-col relative pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-start flex-1 w-full mt-8 md:mt-16">
          
          {/* Left Column (Identity & Terminal) */}
          <div className="w-full lg:w-[55%] flex flex-col z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-white uppercase"
            >
              Abhijeet Kumar
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-teal-400 font-mono text-xl md:text-2xl mt-4 h-8"
            >
              <Typewriter
                options={{
                  strings: [
                    "A Tech Enthusiast",
                    "A Machine Learning Explorer",
                    "A Backend Developer",
                    "A Problem Solver"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 50,
                  cursorClassName: "text-teal-400 animate-pulse"
                }}
              />
            </motion.div>

            {/* Terminal Box ("About Me") */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-[#111827]/60 backdrop-blur-md border border-white/10 rounded-lg p-6 mt-12 max-w-lg shadow-2xl"
            >
              <div className="flex items-center space-x-2 border-b border-white/10 pb-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs font-mono text-gray-500 flex items-center">
                  <span className="text-teal-400 mr-2">&gt;_</span> abhijeet@about-me:~
                </div>
              </div>
              <p className="font-mono text-gray-400 text-sm md:text-base leading-relaxed">
                Pursuing B.Tech in CSE at NIT Silchar. Passionate about building scalable backend architectures and integrating intelligent AI/ML models. Focused on C++, TypeScript, and Node.js.
              </p>
            </motion.div>
          </div>

          {/* Right Column (Portrait Area) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center mt-12 lg:mt-0 z-10"
          >
            <div className="relative aspect-square max-w-[320px] md:max-w-md w-full bg-transparent flex items-center justify-center group">
              
              {/* Subtle glowing ring background */}
              <div className="absolute inset-0 rounded-full border border-teal-500/10 bg-teal-500/5 blur-2xl group-hover:bg-teal-500/10 transition-colors duration-700"></div>
              
              {/* High-tech Corner Brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/50 transition-all duration-500 group-hover:border-teal-400 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50 transition-all duration-500 group-hover:border-teal-400 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/50 transition-all duration-500 group-hover:border-teal-400 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/50 transition-all duration-500 group-hover:border-teal-400 group-hover:w-12 group-hover:h-12"></div>
              
              {/* Image Placeholder */}
              <div className="relative w-[85%] h-[85%] rounded-sm overflow-hidden flex items-center justify-center border border-white/5 backdrop-blur-sm">
                <span className="font-serif italic text-gray-600 text-sm">Portrait Placeholder</span>
                {/* <img src="/portrait.png" alt="Abhijeet Kumar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" /> */}
              </div>

            </div>
          </motion.div>

        </div>

      </div>

      {/* 3. Bottom Action Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-auto w-full flex justify-between items-end px-6 md:px-16 pb-8 z-20"
      >
        <a 
          href="#projects" 
          className="text-white text-sm md:text-base font-medium flex items-center gap-2 group hover:text-teal-400 transition-colors"
        >
          View Projects 
          <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform inline-block">↗</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
        </a>

        <a 
          href="/resume.pdf" 
          target="_blank"
          className="bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 shadow-lg text-sm md:text-base"
        >
          Check CV
        </a>
      </motion.div>

    </section>
  );
}
