"use client";
import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function EditorialHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Framer Motion values for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tilt effect
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse values into rotation angles (tilt)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  // Handle mouse movement over the section
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the container center (-0.5 to 0.5)
    const clientX = e.clientX;
    const clientY = e.clientY;
    
    const xPct = (clientX - rect.left) / rect.width - 0.5;
    const yPct = (clientY - rect.top) / rect.height - 0.5;
    
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
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 py-20 bg-black perspective-[1000px]"
    >
      
      {/* Global Mouse Spotlight (Jarvis/Apple effect) */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-10 opacity-30 mix-blend-screen transition-opacity duration-300"
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            ([x, y]) => {
              // Convert the -0.5 -> 0.5 range back to percentages for the radial gradient
              const pctX = ((x as number) + 0.5) * 100;
              const pctY = ((y as number) + 0.5) * 100;
              return `radial-gradient(800px circle at ${pctX}% ${pctY}%, rgba(212, 175, 55, 0.15), transparent 80%)`;
            }
          )
        }}
      />

      {/* Integrated Typography & Status */}
      <div className="relative z-20 w-full max-w-5xl mb-8 flex flex-col items-center pointer-events-none">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-[0.2em] md:tracking-[0.3em] uppercase text-center animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Abhijeet Kumar
        </h1>
        <div className="mt-6 text-xs md:text-sm text-gray-500 font-mono tracking-widest flex items-center gap-2">
          <span className="text-[#D4AF37] animate-pulse">_&gt;</span> abhijeet@control-center:~
        </div>
      </div>

      {/* Central Content Panel (Refined Glassmorphism + 3D Tilt) */}
      <motion.div 
        style={{ rotateX, rotateY }}
        className="relative z-20 w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-[0_0_50px_rgba(212,175,55,0.05)] flex flex-col lg:flex-row gap-12 items-center justify-between"
      >
        
        {/* Hover Spotlight specifically for the panel */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none rounded-[2rem] opacity-50"
          style={{
            background: useTransform(
              [smoothMouseX, smoothMouseY],
              ([x, y]) => {
                const pctX = ((x as number) + 0.5) * 100;
                const pctY = ((y as number) + 0.5) * 100;
                return `radial-gradient(600px circle at ${pctX}% ${pctY}%, rgba(255, 255, 255, 0.03), transparent 60%)`;
              }
            )
          }}
        />

        {/* Left Side: Interactive Terminal & Skills */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 relative z-10">
          
          {/* Terminal Output */}
          <div className="font-mono text-sm md:text-base text-gray-300 min-h-[120px] bg-black/60 p-4 rounded-xl border border-white/10 shadow-inner">
            <Typewriter
              options={{
                delay: 40,
                deleteSpeed: 20,
                cursor: '█',
                cursorClassName: 'text-[#D4AF37] animate-pulse',
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="text-[#D4AF37]">&gt;</span> run activate_profile.sh<br/>')
                  .pauseFor(300)
                  .typeString('<span class="text-[#D4AF37]">&gt;</span> Loading modules for user: <span class="text-white">Abhijeet-kumar-04</span><br/>')
                  .pauseFor(200)
                  .typeString('<span class="text-[#D4AF37]">&gt;</span> Name: Abhijeet Kumar<br/>')
                  .pauseFor(200)
                  .typeString('<span class="text-[#D4AF37]">&gt;</span> Status: <span class="text-white">ACTIVE</span><br/>')
                  .start();
              }}
            />
          </div>

          {/* Static Technical Details */}
          <div className="space-y-4 font-mono text-xs md:text-sm">
            <div className="flex flex-col space-y-1">
              <span className="text-gray-500">SYSTEM_STATUS:</span>
              <span className="text-white">Ready for opportunities.</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-gray-500">CORE_FOCUS:</span>
              <span className="text-white">Backend, AI/ML, Scalable Systems</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-gray-500">EDUCATION:</span>
              <span className="text-white">CSE @ NIT Silchar</span>
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <span className="text-gray-500">STACK_PILLS:</span>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Node.js", "C++", "Express", "Next.js"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/5 text-white rounded-md border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Luxury CTA Button */}
          <div className="pt-4">
            <a href="/resume.pdf" target="_blank" className="relative inline-flex group rounded-full p-[1px] transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/50 via-white/50 to-[#D4AF37]/50 rounded-full blur-sm group-hover:blur-md transition-all duration-500 opacity-70 group-hover:opacity-100"></span>
              <div className="relative bg-black px-8 py-3 rounded-full border border-white/20 flex items-center gap-2 group-hover:border-[#D4AF37]/50 transition-colors">
                <span className="font-sans font-medium text-xs tracking-widest uppercase text-white group-hover:text-[#D4AF37] transition-colors">Check CV</span>
              </div>
            </a>
          </div>

        </div>

        {/* Right Side: Premium Portrait Visual */}
        <div className="w-full lg:w-1/2 flex justify-center relative z-10 pointer-events-none">
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Dynamic Glowing Ring - Luxury Gold/White */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37] to-white/20 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
            
            {/* Portrait Frame */}
            <div className="relative w-full h-full rounded-full border border-[#D4AF37]/30 bg-[#0a0a0a] overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)] flex items-center justify-center">
              <div className="text-[#D4AF37] font-serif italic opacity-50">Portrait Photo</div>
            </div>

            {/* Technical Overlays */}
            <div className="absolute top-4 -right-4 bg-black/80 backdrop-blur-md border border-[#D4AF37]/20 px-3 py-1.5 rounded-md flex items-center gap-2 shadow-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
              <span className="text-[10px] text-white font-mono tracking-wider">UID: ABH-04</span>
            </div>
            
            <div className="absolute bottom-4 -left-4 bg-black/80 backdrop-blur-md border border-[#D4AF37]/20 px-3 py-1.5 rounded-md flex items-center gap-2 shadow-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></div>
              <span className="text-[10px] text-[#D4AF37] font-mono tracking-wider">STATUS: VERIFIED</span>
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}
