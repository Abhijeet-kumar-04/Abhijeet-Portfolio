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

              {/* The clean image container with a subtle CSS float */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[85%] h-[95%] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/5 z-10 group"
              >
                <img 
                  src="/portrait-2.jpg" 
                  alt="Abhijeet Kumar" 
                  className="w-full h-full object-cover object-top filter brightness-[0.90] contrast-[1.1] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" 
                />
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
