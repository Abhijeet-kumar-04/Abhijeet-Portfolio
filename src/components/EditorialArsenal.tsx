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
  { 
    name: "React", 
    color: "#61dafb",
    icon: <span className="text-4xl font-bold text-[#61dafb]">Re</span>,
    desc: "Component-based library for building highly interactive user interfaces."
  },
  { 
    name: "Next.js", 
    color: "#ffffff",
    icon: <span className="text-4xl font-black tracking-tighter text-white">N.</span>,
    desc: "The React framework for production, enabling lightning-fast server-side rendering."
  },
  { 
    name: "TypeScript", 
    color: "#3178c6",
    icon: <span className="text-4xl font-bold bg-[#3178c6] text-white px-2 rounded">TS</span>,
    desc: "Strongly typed programming language that builds on JavaScript for robust, scalable apps."
  },
  { 
    name: "Tailwind CSS", 
    color: "#38bdf8",
    icon: <span className="text-4xl font-bold text-[#38bdf8] italic">tw</span>,
    desc: "Utility-first CSS framework for rapid UI development and stunning, pixel-perfect designs."
  },
  { 
    name: "VS Code", 
    color: "#007acc",
    icon: <span className="text-4xl font-serif text-[#007acc]">VS</span>,
    desc: "Powerful, highly extensible code editor for streamlined and productive development."
  },
  { 
    name: "GitHub", 
    color: "#ffffff",
    icon: <span className="text-4xl font-bold font-serif text-white italic">gh</span>,
    desc: "Collaborative platform for hosting, reviewing, and managing software development projects."
  },
];

export function EditorialArsenal() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full max-w-screen-xl mx-auto px-6 md:px-12 py-32 border-t border-white/5 overflow-hidden">
      
      <div className="mb-24 text-center md:text-left">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
          Technical <span className="text-[#D4AF37] italic">Arsenal</span>
        </h2>
        <p className="text-gray-400 font-light text-lg">
          The technologies, frameworks, and tools I use to build modern digital experiences.
        </p>
      </div>

      <div className="relative w-full py-20 overflow-visible" ref={containerRef}>
        <motion.div 
          className="flex items-center gap-6 md:gap-10 cursor-grab active:cursor-grabbing w-max pr-[30vw] pl-12 lg:pl-48"
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.05}
          dragTransition={{ bounceStiffness: 400, bounceDamping: 40 }}
        >
          {techStack.map((tech, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                className="relative flex flex-col items-center shrink-0 group"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* The Tech Box */}
                <motion.div
                  className={`w-20 h-20 md:w-24 md:h-24 bg-[#111111] rounded-3xl flex items-center justify-center transition-all duration-300 relative z-10 ${!isHovered ? 'animate-float' : ''}`}
                  style={{ animationDelay: `${(idx % 12) * 0.2}s` }}
                  animate={{
                    y: isHovered ? -20 : 0,
                    rotate: isHovered ? (idx % 2 === 0 ? 5 : -5) : 0,
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
                      initial={{ opacity: 0, y: 20, scale: 0.9, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                      exit={{ opacity: 0, y: 10, scale: 0.9, x: "-50%" }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute bottom-full left-1/2 mb-6 w-64 p-5 bg-[#1a1a1a]/95 backdrop-blur-xl border rounded-2xl pointer-events-none z-50 shadow-2xl"
                      style={{ borderColor: `${tech.color}30` }}
                    >
                      <h4 className="font-serif text-lg mb-2" style={{ color: tech.color }}>{tech.name}</h4>
                      <p className="text-gray-300 text-sm font-sans font-light leading-relaxed">
                        {tech.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
