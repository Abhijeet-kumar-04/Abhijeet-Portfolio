"use client";
import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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

          {/* Right Column (Idea 4: Liquid Organic Morph FINAL with ALL Effects) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center mt-12 lg:mt-0 z-10 perspective-[1000px]"
          >
            {/* Custom Animations */}
            <style>
              {`
                @keyframes blobMorph {
                  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
                  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                }
                @keyframes glitchFlash {
                  0% { opacity: 0; }
                  10% { opacity: 0.8; }
                  20% { opacity: 0; }
                  40% { opacity: 0.8; transform: translate(4px, -4px); }
                  50% { opacity: 0; }
                  100% { opacity: 0; }
                }
                @keyframes auraPulse {
                  0% { transform: scale(1); opacity: 0.3; }
                  50% { transform: scale(1.3); opacity: 0.8; }
                  100% { transform: scale(1); opacity: 0.3; }
                }
              `}
            </style>

            {/* Parallax Container */}
            <motion.div 
              style={{ rotateX, rotateY }}
              className="relative aspect-[3/4] max-w-[320px] md:max-w-[380px] w-full bg-transparent flex items-center justify-center group preserve-3d"
            >
              
              {/* Option 4: Overclocked Aura Behind Blob */}
              <div 
                className="absolute inset-2 bg-teal-500/20 blur-[50px] opacity-60 transition-all duration-700 group-hover:bg-[#D4AF37]/30 translate-z-[-30px] group-hover:scale-125"
                style={{ animation: 'blobMorph 8s ease-in-out infinite alternate' }}
              >
                {/* Internal pulse ring */}
                <div className="absolute inset-0 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 group-hover:animate-[auraPulse_1.5s_infinite]" />
              </div>

              {/* The Morphing Blob Frame */}
              <div 
                className="relative w-[90%] h-[90%] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(45,212,191,0.15)] transition-transform duration-700 group-hover:scale-[1.03] bg-[#0A0A0A] translate-z-10 group-hover:border-[#D4AF37]/40 group-hover:shadow-[0_0_80px_rgba(212,175,55,0.2)]"
                style={{ animation: 'blobMorph 12s ease-in-out infinite' }}
              >
                {/* Option 3: Internal Parallax (Reverse Scale & Translation) */}
                <div className="w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-1">
                  
                  {/* Base Image */}
                  <img 
                    src="/portrait-2.jpg" 
                    alt="Abhijeet Kumar" 
                    className="w-full h-full object-cover object-top grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  />

                  {/* Option 2: Digital Dissolve Glitch (Red/Cyan) */}
                  <img 
                    src="/portrait-2.jpg" 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover object-top mix-blend-screen -translate-x-2 translate-y-2 opacity-0 group-hover:animate-[glitchFlash_0.5s_ease-out_forwards]"
                    style={{ filter: "brightness(1) sepia(1) hue-rotate(300deg) saturate(5)" }}
                  />
                  <img 
                    src="/portrait-2.jpg" 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover object-top mix-blend-screen translate-x-2 -translate-y-2 opacity-0 group-hover:animate-[glitchFlash_0.6s_ease-out_forwards]"
                    style={{ filter: "brightness(1) sepia(1) hue-rotate(150deg) saturate(5)" }}
                  />
                  
                  {/* Option 1: Liquid Glass Sweep */}
                  <div className="absolute inset-0 z-30 pointer-events-none">
                    <div className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] -skew-x-[30deg] transition-transform duration-[1.2s] ease-in-out group-hover:translate-x-[100%]" />
                  </div>

                </div>
              </div>

              {/* Minimal floating accent particles */}
              <div className="absolute top-[10%] right-[5%] w-3 h-3 rounded-full bg-[#D4AF37]/60 blur-[2px] animate-pulse translate-z-20"></div>
              <div className="absolute bottom-[15%] left-[5%] w-2 h-2 rounded-full bg-teal-400/60 blur-[1px] animate-pulse translate-z-20" style={{ animationDelay: '1s' }}></div>

            </motion.div>
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
