"use client";

import React from "react";

const skills = [
  // Languages
  { name: "C++", category: "Language", colorClass: "text-blue-500", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)]" },
  { name: "TypeScript", category: "Language", colorClass: "text-blue-400", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(96,165,250,0.5)]" },
  { name: "JavaScript", category: "Language", colorClass: "text-yellow-400", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(250,204,21,0.5)]" },
  { name: "HTML/CSS", category: "Language", colorClass: "text-orange-500", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.5)]" },
  // Backend & DB
  { name: "Node.js", category: "Backend", colorClass: "text-green-500", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)]" },
  { name: "Express.js", category: "Backend", colorClass: "text-gray-300", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(209,213,219,0.5)]" },
  { name: "MongoDB", category: "Database", colorClass: "text-green-600", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(22,163,74,0.5)]" },
  { name: "Redis", category: "Database", colorClass: "text-red-500", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(239,68,68,0.5)]" },
  // Frontend & Tools
  { name: "React", category: "Frontend", colorClass: "text-cyan-400", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)]" },
  { name: "Next.js", category: "Frontend", colorClass: "text-white", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)]" },
  { name: "WebSockets", category: "Tool", colorClass: "text-indigo-400", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(129,140,248,0.5)]" },
  { name: "Git", category: "Tool", colorClass: "text-orange-600", shadowClass: "group-hover:shadow-[0_10px_30px_-10px_rgba(234,88,12,0.5)]" },
];

export function ModernSkills() {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-6 md:px-12 py-32 z-10 relative">
      
      <div className="mb-16">
        <h2 className="text-sm font-semibold text-gray-500 tracking-[0.2em] uppercase">Core Technologies</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-[#111827] border border-white/5 transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-[#1f2937] ${skill.shadowClass} grayscale hover:grayscale-0`}
          >
            <div className={`text-2xl font-bold mb-3 ${skill.colorClass}`}>
              {/* Fallback text icon if no actual SVG */}
              {skill.name.substring(0, 2).toUpperCase()}
            </div>
            <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
