"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techStack = [
  { name: "C++", label: "C++", desc: "Core systems programming and DSA." },
  { name: "TS", label: "TypeScript", desc: "Type-safe scalable application logic." },
  { name: "Node", label: "Node.js", desc: "Scalable server-side JavaScript runtime." },
  { name: "Exp", label: "Express.js", desc: "Minimalist web framework for APIs." },
  { name: "Re", label: "React", desc: "Interactive frontend user interfaces." },
  { name: "MDB", label: "MongoDB", desc: "NoSQL document database." },
];

export function EditorialArsenal() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Technical <span className="text-[#D4AF37] italic">Arsenal</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* iOS Style Icon Container */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0a0a0a] border border-white/10 rounded-[1.25rem] md:rounded-[1.5rem] flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/30 group">
              <span className="text-white font-serif text-xl md:text-2xl font-semibold group-hover:text-[#D4AF37] transition-colors">
                {tech.name}
              </span>
            </div>

            {/* Glassmorphic Tooltip */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl pointer-events-none z-50 shadow-2xl"
                >
                  <h4 className="text-[#D4AF37] font-serif text-sm mb-1">{tech.label}</h4>
                  <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">
                    {tech.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
