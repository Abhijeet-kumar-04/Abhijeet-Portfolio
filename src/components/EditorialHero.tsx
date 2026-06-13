"use client";
import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { NeuralNetwork3D } from "./NeuralNetwork3D";
import { portfolioData } from "@/data";

const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let frameId: number;
    const chars = "0123456789ABCDEF";
    const duration = 1500; // 1.5 seconds
    const startTime = Date.now();

    const update = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const lockedCount = Math.floor(progress * text.length);
      let scrambled = "";

      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          scrambled += " ";
        } else if (i < lockedCount) {
          scrambled += text[i];
        } else {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(scrambled);

      if (progress < 1) {
        setTimeout(() => {
          frameId = requestAnimationFrame(update);
        }, 30);
      } else {
        setDisplayText(text);
      }
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [text]);

  return <span>{displayText}</span>;
};

export function EditorialHero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [activeTab, setActiveTab] = useState<"about" | "skills">("about");

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax tilt for the right column portrait area
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col bg-[#050505] overflow-hidden perspective-[1000px]"
    >
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent opacity-30 pointer-events-none z-10"></div>
      
      {/* 3D Neural Network Background */}
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
        <NeuralNetwork3D cameraDistance={10} />
      </div>
      {/* 1. Glassmorphic Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/5 h-16 flex items-center px-6 md:px-12 justify-between">
        <div className="text-white font-bold tracking-widest text-lg">A.K.</div>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4 border-l border-white/10 pl-8 ml-8">
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors group">
              <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors group">
              <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_rgba(10,102,194,0.5)] transition-all" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Main Hero Layout */}
      <div className="flex-1 flex flex-col relative pt-24 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-start flex-1 w-full mt-4 md:mt-8">
          
          {/* Left Column (Identity & Terminal) */}
          <div className="w-full lg:w-[55%] flex flex-col z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-mono lg:font-sans"
            >
              <ScrambleText text="Abhijeet Kumar" />
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
                    "A Computer Science Student",
                    "A Backend Developer",
                    "A Competitive Programmer",
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

            {/* Premium IDE Terminal Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 rounded-xl mt-12 w-full max-w-2xl shadow-2xl overflow-hidden font-mono text-base leading-relaxed"
            >
              {/* Window Controls & Tabs */}
              <div className="flex flex-col bg-black/40 border-b border-white/10">
                <div className="flex items-center px-4 py-3 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                {/* File Tabs */}
                <div className="flex text-sm px-2 pt-1 overflow-x-auto hide-scrollbar select-none">
                  <div 
                    onClick={() => setActiveTab("about")}
                    className={`px-4 py-2 cursor-pointer flex items-center rounded-t-md transition-colors ${activeTab === "about" ? "border-b-[2px] border-teal-400 text-teal-400 bg-white/5" : "text-gray-500 hover:text-gray-300"}`}
                  >
                    <span className="text-[#fbc02d] mr-2">{"{}"}</span> about.json
                  </div>
                  <div 
                    onClick={() => setActiveTab("skills")}
                    className={`px-4 py-2 cursor-pointer flex items-center rounded-t-md transition-colors ${activeTab === "skills" ? "border-b-[2px] border-blue-400 text-blue-400 bg-white/5" : "text-gray-500 hover:text-gray-300"}`}
                  >
                    <span className="text-blue-400 mr-2">TS</span> skills.ts
                  </div>
                </div>
              </div>

              {/* Dynamic Content Data */}
              <div className="p-6 md:p-8 text-gray-300 min-h-[300px]">
                
                {activeTab === "about" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <div><span className="text-gray-500">{"{"}</span></div>
                    
                    <div className="pl-4">
                      <div><span className="text-teal-400">"developer"</span><span className="text-gray-500">: </span><span className="text-amber-200">"Abhijeet Kumar"</span><span className="text-gray-500">,</span></div>
                      <div><span className="text-teal-400">"status"</span><span className="text-gray-500">: </span><span className="text-amber-200">"Active / CSE @ NIT Silchar (2027)"</span><span className="text-gray-500">,</span></div>
                      <div>
                        <span className="text-teal-400">"specialization"</span><span className="text-gray-500">: [</span>
                        <span className="text-amber-200">"Backend Architecture"</span><span className="text-gray-500">, </span>
                        <span className="text-amber-200">"Competitive Programming"</span>
                        <span className="text-gray-500">],</span>
                      </div>
                      <div>
                        <span className="text-teal-400">"core_stack"</span><span className="text-gray-500">: [</span>
                        <span className="text-amber-200">"C/C++"</span><span className="text-gray-500">, </span>
                        <span className="text-amber-200">"JavaScript"</span><span className="text-gray-500">, </span>
                        <span className="text-amber-200">"Node.js"</span><span className="text-gray-500">, </span>
                        <span className="text-amber-200">"MongoDB"</span>
                        <span className="text-gray-500">],</span>
                      </div>
                      <div><span className="text-teal-400">"dsa_problems_solved"</span><span className="text-gray-500">: </span><span className="text-indigo-400">800</span><span className="text-gray-500">,</span></div>
                      <div><span className="text-teal-400">"open_to_opportunities"</span><span className="text-gray-500">: </span><span className="text-indigo-400">true</span></div>
                    </div>

                    <div><span className="text-gray-500">{"}"}</span></div>
                  </motion.div>
                )}

                {activeTab === "skills" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <div><span className="text-purple-400">export const</span> <span className="text-blue-400">skills</span> <span className="text-gray-500">=</span> {'{'}</div>
                    <div className="pl-4">
                      <div><span className="text-blue-300">languages</span><span className="text-gray-500">:</span> [<span className="text-amber-200">'C/C++'</span>, <span className="text-amber-200">'Java'</span>, <span className="text-amber-200">'Python'</span>, <span className="text-amber-200">'JS'</span>, <span className="text-amber-200">'SQL'</span>],</div>
                      <div><span className="text-blue-300">backend</span><span className="text-gray-500">:</span> [<span className="text-amber-200">'Node.js'</span>, <span className="text-amber-200">'Express'</span>, <span className="text-amber-200">'REST APIs'</span>],</div>
                      <div><span className="text-blue-300">databases</span><span className="text-gray-500">:</span> [<span className="text-amber-200">'MongoDB'</span>],</div>
                      <div><span className="text-blue-300">tools</span><span className="text-gray-500">:</span> [<span className="text-amber-200">'Git'</span>, <span className="text-amber-200">'GitHub'</span>, <span className="text-amber-200">'Linux'</span>, <span className="text-amber-200">'Postman'</span>],</div>
                      <div><span className="text-blue-300">competitive_prog</span><span className="text-gray-500">:</span> <span className="text-amber-200">'Codeforces Pupil'</span></div>
                    </div>
                    <div>{'};'}</div>
                  </motion.div>
                )}

              </div>
            </motion.div>
          </div>

          {/* Right Column (Simple & Clean Minimalist Float) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center mt-12 lg:mt-0 z-10"
          >
            <div className="relative w-full max-w-[320px] md:max-w-[480px] aspect-[3/4] flex items-center justify-center">
              
              {/* Ultra-soft ambient glow behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-[#D4AF37]/10 blur-[80px] rounded-full transform -translate-y-4 pointer-events-none"></div>

              {/* The clean image container with a subtle CSS float & border beam */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[85%] h-[95%] rounded-[18px] p-[1px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10 group bg-[#0A0A0A]"
              >
                {/* Rotating Border Beam */}
                <div 
                  className="absolute inset-[-100%] z-0 pointer-events-none animate-[spin_6s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-700" 
                  style={{ background: 'conic-gradient(from 0deg, transparent 75%, rgba(45,212,191,0.4) 95%, rgba(212,175,55,0.4) 100%)' }} 
                />

                {/* Inner Image Container to hide the center of the conic gradient */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden z-10 bg-black">
                  <img 
                    src="/portrait-2.jpg" 
                    alt="Abhijeet Kumar" 
                    className="w-full h-full object-cover object-top filter brightness-[0.90] contrast-[1.1] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>

      {/* 3. Bottom Action Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-auto w-full max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 pb-8 z-20"
      >
        <a 
          href="https://github.com/Abhijeet-kumar-04?tab=repositories" 
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3 rounded-full border border-teal-500/50 bg-teal-500/10 text-teal-400 font-semibold hover:bg-teal-500 hover:text-black hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300 flex items-center gap-2 group text-sm md:text-base"
        >
          View Projects 
          <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform inline-block">↗</span>
        </a>

        <a 
          href="https://drive.google.com/drive/folders/1rpnD4o8jLZ3ErkE1BiYo3O2UI40KYeYH?usp=sharing" 
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center gap-2 group text-sm md:text-base"
        >
          Check CV
        </a>
      </motion.div>

    </section>
  );
}
