import React from "react";
import { portfolioData } from "@/data";
import { ArrowRight, CheckCircle2, Layout, Database, Terminal, Shield, Lock, Search } from "lucide-react";

// Individual Visual Components for each project
const ProjectScreenshot = ({ src, alt }: { src: string, alt: string }) => (
  <div className="relative w-full h-full bg-[#111] rounded-[2rem] border border-white/10 overflow-hidden flex items-center justify-center group shadow-[0_0_40px_rgba(0,0,0,0.5)]">
    {/* Subtle Glow Behind Image */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
    
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
    />
  </div>
);

const getProjectVisual = (title: string) => {
  if (title === "Compile-Hire") return <ProjectScreenshot src="/compile-hire.png" alt="Compile-Hire Platform" />;
  if (title === "Music Hub") return <ProjectScreenshot src="/music-hub.png" alt="Music Hub Platform" />;
  if (title === "NoteBook") return <ProjectScreenshot src="/notebook.png" alt="NoteBook App" />;
  if (title === "Hackathon-Platform") return <ProjectScreenshot src="/hackathon.png" alt="Hackathon Platform" />;
  return null;
};

export function EditorialProjects() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
      <div className="mb-24 text-center md:text-left">
        <h2 className="font-serif text-4xl md:text-5xl text-white">
          Curated <span className="text-[#D4AF37] italic">Projects</span>
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
              } gap-12 lg:gap-20 items-center`}
            >
              
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 aspect-video">
                {getProjectVisual(project.title)}
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-[#D4AF37] font-serif italic text-lg md:text-xl">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                
                <p className="text-gray-400 font-sans font-light leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Features / Pills List */}
                {project.features && (
                  <div className="space-y-2 pt-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle2 size={18} className="text-[#D4AF37] mt-0.5 shrink-0" />
                        <span className="text-gray-300 font-sans text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-[#1a1a1a] text-white text-xs font-sans tracking-widest uppercase rounded-full border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {project.links && (
                  <div className="flex flex-wrap gap-4 pt-6">
                    {project.links.map((link, i) => {
                      if (link.disabled) {
                        return (
                          <div
                            key={i}
                            className="px-6 py-3 rounded-full flex items-center gap-2 border border-white/10 text-gray-500 cursor-not-allowed bg-white/5"
                          >
                            <span className="font-sans text-sm font-medium">
                              {link.label}
                            </span>
                          </div>
                        );
                      }
                      return (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                            i === 0 
                              ? "bg-white text-black hover:bg-[#D4AF37]" 
                              : "border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                          }`}
                        >
                          <span className="font-sans text-sm font-medium">
                            {link.label.replace(" ↗", "")}
                          </span>
                          <ArrowRight size={16} className={`${i === 0 ? "text-black" : "text-gray-400 group-hover:text-[#D4AF37]"} transition-all`} />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
