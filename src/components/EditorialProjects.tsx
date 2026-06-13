import React from "react";
import { portfolioData } from "@/data";
import { ArrowRight } from "lucide-react";

export function EditorialProjects() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
      <div className="mb-20">
        <h2 className="font-serif text-4xl md:text-5xl text-white">
          Featured <span className="text-[#D4AF37] italic">Projects</span>
        </h2>
      </div>

      <div className="space-y-32">
        {portfolioData.projects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              
              {/* Visual Side (Mockup/Abstract Graphic) */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[4/3] bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden flex items-center justify-center group">
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Graphic Placeholder */}
                  <div className="w-3/4 h-3/4 border border-white/10 rounded-xl relative overflow-hidden bg-black flex items-center justify-center transition-transform duration-700 group-hover:scale-105 shadow-2xl">
                    <span className="text-gray-700 font-serif italic text-xl">Project Visual</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                <h3 className="font-serif text-3xl md:text-4xl text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 font-sans font-light leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-white/5 text-white text-xs font-sans tracking-widest uppercase rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-6 py-3 border border-[#D4AF37]/30 rounded-full flex items-center gap-2 hover:bg-[#D4AF37]/10 transition-colors"
                  >
                    <span className="text-white font-sans text-sm font-medium group-hover:text-[#D4AF37] transition-colors">
                      View Project
                    </span>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
