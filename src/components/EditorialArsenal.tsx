"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techStack = [
  { 
    name: "C++", 
    color: "#3b82f6", // blue-500
    icon: <span className="text-4xl font-bold font-serif text-[#3b82f6]">C++</span>,
    desc: "Versatile language for core systems programming, competitive programming, and high-performance algorithms."
  },
  { 
    name: "JavaScript", 
    color: "#eab308", // yellow-500
    icon: <span className="text-4xl font-bold bg-[#eab308] text-black px-2 py-1 rounded">JS</span>,
    desc: "The language of the web, powering dynamic and interactive user interfaces."
  },
  { 
    name: "Python", 
    color: "#eab308", // yellow-500
    icon: <span className="text-5xl font-serif text-[#eab308]">py</span>,
    desc: "Versatile language for backend logic, data analysis, and scripting."
  },
  { 
    name: "Node.js", 
    color: "#22c55e", // green-500
    icon: <span className="text-3xl font-bold text-[#22c55e]">Node</span>,
    desc: "Scalable server-side JavaScript runtime for building fast network applications."
  },
  { 
    name: "Express.js", 
    color: "#ffffff", 
    icon: <span className="text-5xl font-light tracking-tighter text-white">ex</span>,
    desc: "Fast, unopinionated, minimalist web framework for Node.js APIs."
  },
  { 
    name: "MongoDB", 
    color: "#22c55e", // green-500
    icon: <span className="text-5xl font-serif italic text-[#22c55e]">M</span>,
    desc: "NoSQL document database for scalable, flexible data storage."
  },
  { 
    name: "MySQL", 
    color: "#38bdf8", // sky-400
    icon: <span className="text-4xl font-bold text-[#38bdf8]">SQL</span>,
    desc: "Relational database management system for structured data storage."
  },
  { 
    name: "Git", 
    color: "#f97316", // orange-500
    icon: <span className="text-4xl font-bold text-[#f97316]">Git</span>,
    desc: "Distributed version control system for tracking changes in source code."
  },
  { 
    name: "Java", 
    color: "#ef4444", // red-500
    icon: <span className="text-4xl font-serif text-[#ef4444] italic">Java</span>,
    desc: "Object-oriented programming language for enterprise-scale backend systems."
  },
  { 
    name: "HTML/CSS", 
    color: "#38bdf8", // sky-400
    icon: <span className="text-3xl font-bold text-[#38bdf8] tracking-widest">&lt;/&gt;</span>,
    desc: "The fundamental building blocks for web structure and modern styling."
  },
  { 
    name: "Postman", 
    color: "#f97316", // orange-500
    icon: <span className="text-3xl font-bold text-[#f97316]">API</span>,
    desc: "API development and testing platform for rigorous endpoint validation."
  },
  { 
    name: "Linux", 
    color: "#facc15", // yellow-400
    icon: <span className="text-4xl font-mono text-[#facc15]">~/</span>,
    desc: "Core operating system environment for deployment and server management."
  },
];

export function EditorialArsenal() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full max-w-screen-xl mx-auto px-6 md:px-12 py-32 border-t border-white/5 overflow-hidden">
      
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Technical <span className="text-[#D4AF37] italic">Arsenal</span>
        </h2>
      </div>

      <div className="relative w-full py-20">
        {/* Draggable container to match the "left to right" scrolling request */}
        <motion.div 
          ref={containerRef}
          className="flex items-center gap-10 md:gap-16 cursor-grab active:cursor-grabbing px-10 md:px-32"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
        >
          {techStack.map((tech, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={idx}
                className="relative flex flex-col items-center shrink-0 group"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  y: isHovered ? -15 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* The Tech Box */}
                <motion.div
                  className="w-28 h-28 md:w-32 md:h-32 bg-[#111111] rounded-[2rem] flex items-center justify-center transition-all duration-300 relative z-10"
                  animate={{
                    borderColor: isHovered ? tech.color : "rgba(255,255,255,0.05)",
                    borderWidth: isHovered ? "2px" : "1px",
                    boxShadow: isHovered ? `0 0 40px ${tech.color}40, inset 0 0 20px ${tech.color}10` : "0 0 0px rgba(0,0,0,0)",
                    scale: isHovered ? 1.05 : 1
                  }}
                >
                  {tech.icon}
                </motion.div>

                {/* Tech Label below */}
                <span 
                  className="mt-6 text-sm font-medium transition-colors duration-300"
                  style={{ color: isHovered ? tech.color : "#9ca3af" }}
                >
                  {tech.name}
                </span>

                {/* Glassmorphic Tooltip Above */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute bottom-full mb-6 w-64 p-5 bg-[#1a1a1a]/95 backdrop-blur-xl border rounded-2xl pointer-events-none z-50 shadow-2xl"
                      style={{ borderColor: `${tech.color}30` }}
                    >
                      <h4 className="font-serif text-lg mb-2" style={{ color: tech.color }}>{tech.name}</h4>
                      <p className="text-gray-300 text-sm font-sans font-light leading-relaxed">
                        {tech.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Scroll Instruction Hint */}
        <div className="absolute -bottom-10 left-0 w-full flex justify-center pointer-events-none">
          <span className="text-xs text-gray-600 uppercase tracking-widest flex items-center gap-2">
            <span className="inline-block animate-pulse">&larr;</span> 
            Drag to scroll 
            <span className="inline-block animate-pulse">&rarr;</span>
          </span>
        </div>

      </div>
    </section>
  );
}
