import React from "react";
import { portfolioData } from "@/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ProjectScreenshot = ({ src, alt }: { src: string, alt: string }) => (
  <div className="relative w-full h-full rounded-[2rem] p-[1px] md:p-[2px] group overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
    {/* Magic Rotating Border */}
    <div className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0a0a0a_0%,#D4AF37_50%,#0a0a0a_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
    
    {/* Main Content Box */}
    <div className="relative w-full h-full bg-[#0a0a0a] rounded-[calc(2rem-2px)] overflow-hidden z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none"></div>
      
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    </div>
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

      <div className="flex flex-col">
        {portfolioData.projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          const isLast = idx === portfolioData.projects.length - 1;

          return (
            <React.Fragment key={idx}>
              <div
                className={`relative flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-16 items-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden group/project transition-all duration-700 hover:border-white/10 hover:bg-[#0f0f0f]/90`}
            >
              {/* Subtle Ambient Glow for the entire unified card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${isEven ? 'from-[#D4AF37]/5 to-transparent' : 'from-transparent to-[#D4AF37]/5'} opacity-0 group-hover/project:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
              
              
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

            {/* Stylish Connecting Timeline Line (Between Projects) */}
            {!isLast && (
              <div className="flex justify-center items-center h-24 md:h-32 w-full relative opacity-80">
                <div className="w-[1px] md:w-[2px] h-full bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent relative">
                  {/* Glowing Golden Diamond Node in the center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rotate-45 border border-[#D4AF37] bg-[#0a0a0a] shadow-[0_0_15px_rgba(212,175,55,0.6)] z-10 flex items-center justify-center">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#D4AF37] rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
