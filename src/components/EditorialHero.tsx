"use client";
import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { NeuralNetwork3D } from "./NeuralNetwork3D";

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
  const [activeTab, setActiveTab] = useState<"about" | "skills" | "experience">("about");

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
              className="bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 rounded-lg mt-12 max-w-lg shadow-2xl overflow-hidden font-mono text-sm leading-relaxed"
            >
              {/* Window Controls & Tabs */}
              <div className="flex flex-col bg-black/40 border-b border-white/10">
                <div className="flex items-center px-4 py-3 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                {/* File Tabs */}
                <div className="flex text-xs px-2 pt-1 overflow-x-auto hide-scrollbar select-none">
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
                  <div 
                    onClick={() => setActiveTab("experience")}
                    className={`px-4 py-2 cursor-pointer flex items-center rounded-t-md transition-colors ${activeTab === "experience" ? "border-b-[2px] border-green-400 text-green-400 bg-white/5" : "text-gray-500 hover:text-gray-300"}`}
                  >
                    <span className="text-green-400 mr-2">$_</span> experience.sh
                  </div>
                </div>
              </div>

              {/* Dynamic Content Data */}
              <div className="p-6 text-gray-300 min-h-[260px]">
                
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

                {activeTab === "experience" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <div className="text-gray-500 italic">#!/bin/bash</div>
                    <div className="mt-2"><span className="text-green-400">echo</span> <span className="text-amber-200">"Loading Recent Work..."</span></div>
                    <div className="mt-2 text-gray-400 text-xs md:text-sm">
                      <span className="text-purple-400">&gt;</span> <span className="font-bold text-white">Music Hub Platform</span>
                      <br/>
                      <span className="pl-4 block border-l-2 border-gray-600 mt-1 mb-2">- Engineered hybrid ad-free streaming API</span>
                      <span className="pl-4 block border-l-2 border-gray-600 mb-2">- Built secure artist portal w/ Multer</span>
                      
                      <span className="text-purple-400 mt-2 inline-block">&gt;</span> <span className="font-bold text-white">Event Head @ Gyan Sagar</span>
                      <br/>
                      <span className="pl-4 block border-l-2 border-gray-600 mt-1">- Led NIT-CIT Computer Literacy Module</span>
                    </div>
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
            <div className="relative w-full max-w-[280px] md:max-w-[340px] aspect-[3/4] flex items-center justify-center">
              
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
        className="mt-auto w-full max-w-7xl mx-auto flex justify-between items-end px-6 md:px-12 pb-8 z-20"
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
