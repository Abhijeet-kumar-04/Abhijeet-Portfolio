import React from "react";
import { portfolioData } from "@/data";
import { ArrowRight, CheckCircle2, Layout, Database, Terminal, Shield, Lock, Search } from "lucide-react";

// Individual Visual Components for each project
const CompileHireVisual = () => (
  <div className="relative w-full h-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden flex items-center justify-center p-6 group">
    <div className="w-full h-full border border-white/10 rounded-xl bg-[#111] overflow-hidden flex flex-col shadow-2xl transition-transform duration-700 group-hover:scale-105">
      {/* MacOS Window Header */}
      <div className="h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 space-x-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        <div className="mx-auto bg-[#222] text-gray-500 text-[10px] px-8 py-0.5 rounded-md flex items-center space-x-2">
          <Lock size={8} /> <span>compile-hire.dev</span>
        </div>
      </div>
      {/* Split Dashboard View */}
      <div className="flex-1 flex">
        {/* Sidebar/Dashboard */}
        <div className="w-1/3 border-r border-white/5 bg-[#0f0f0f] p-4 space-y-4">
          <div className="h-4 w-24 bg-white/10 rounded"></div>
          <div className="space-y-2">
            <div className="h-6 w-full bg-[#D4AF37]/10 rounded flex items-center px-2"><span className="text-[10px] text-[#D4AF37]">Search Candidates</span></div>
            <div className="h-6 w-full bg-white/5 rounded flex items-center px-2"><span className="text-[10px] text-gray-500">Evaluate a Job</span></div>
            <div className="h-6 w-full bg-white/5 rounded"></div>
          </div>
        </div>
        {/* Landing Page Content */}
        <div className="w-2/3 p-6 flex flex-col justify-center items-center text-center space-y-4 bg-gradient-to-br from-[#111] to-[#0a0a0a]">
          <h3 className="font-serif text-white text-lg">Find Your Tech Dream Team with Compile-Hire!</h3>
          <p className="text-[8px] text-gray-500">Intelligent matching algorithms powered by advanced analytics.</p>
          <div className="h-6 w-24 bg-[#D4AF37] rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  </div>
);

const NoteBookVisual = () => (
  <div className="relative w-full h-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden flex items-center justify-center p-8 group perspective-[1000px]">
    {/* Isometric 3D Board */}
    <div className="w-[120%] h-[120%] border border-white/10 rounded-2xl bg-[#111] shadow-2xl transition-transform duration-700 group-hover:scale-105 transform rotate-x-[20deg] rotate-y-[-15deg] rotate-z-[5deg] p-4 flex gap-4">
      {/* Sidebar */}
      <div className="w-1/4 h-full bg-white/5 rounded-lg p-3 space-y-3">
        <div className="w-full h-3 bg-white/20 rounded"></div>
        <div className="w-3/4 h-3 bg-white/10 rounded"></div>
        <div className="w-1/2 h-3 bg-white/10 rounded"></div>
        <div className="mt-8">
          <div className="text-[8px] text-[#D4AF37] uppercase tracking-widest mb-2">Tags</div>
          <div className="flex gap-1 flex-wrap">
            <div className="w-8 h-3 bg-blue-500/20 rounded-full"></div>
            <div className="w-10 h-3 bg-green-500/20 rounded-full"></div>
            <div className="w-6 h-3 bg-red-500/20 rounded-full"></div>
          </div>
        </div>
      </div>
      {/* Main Board */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-lg p-3 space-y-2">
          <div className="text-[10px] text-white">Inbox</div>
          <div className="w-full h-12 bg-white/10 rounded border border-white/5"></div>
          <div className="w-full h-16 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/20"></div>
        </div>
        <div className="bg-white/5 rounded-lg p-3 space-y-2">
          <div className="text-[10px] text-white">Today</div>
          <div className="w-full h-20 bg-white/10 rounded border border-white/5"></div>
        </div>
      </div>
    </div>
  </div>
);

const HackathonVisual = () => (
  <div className="relative w-full h-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden flex items-center justify-center group">
    {/* Blurred Login Background */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 blur-sm mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000]/80 z-0"></div>
    
    {/* Modal UI */}
    <div className="relative z-10 w-5/6 h-5/6 bg-[#161616]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="text-white font-serif text-sm">Active Hackathons</div>
        <div className="w-16 h-4 bg-white/10 rounded-full flex items-center px-1"><Search size={8} className="text-gray-400"/></div>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/5 rounded-lg p-2 flex flex-col justify-between">
           <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><Terminal size={10} className="text-indigo-300"/></div>
           <div className="h-2 w-1/2 bg-white/20 rounded mt-2"></div>
        </div>
        <div className="bg-gradient-to-br from-rose-900/40 to-orange-900/40 border border-white/5 rounded-lg p-2 flex flex-col justify-between">
           <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center"><Layout size={10} className="text-rose-300"/></div>
           <div className="h-2 w-2/3 bg-white/20 rounded mt-2"></div>
        </div>
        <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-white/5 rounded-lg p-2 flex flex-col justify-between col-span-2">
           <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"><Database size={10} className="text-emerald-300"/></div>
           <div className="h-2 w-1/3 bg-white/20 rounded mt-2"></div>
        </div>
      </div>
    </div>
  </div>
);

const SignUpVisual = () => (
  <div className="relative w-full h-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden flex items-center justify-center group p-8">
    {/* Large Monogram */}
    <div className="absolute inset-0 flex items-center justify-center opacity-5">
      <span className="font-serif text-[15rem] font-bold text-white tracking-tighter">SP</span>
    </div>
    
    {/* Floating Auth Window */}
    <div className="relative z-10 w-2/3 max-w-[200px] bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2 flex flex-col overflow-hidden">
      <div className="h-6 bg-[#1a1a1a] border-b border-white/5 flex items-center px-3 space-x-1.5">
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
      </div>
      <div className="p-5 flex flex-col items-center space-y-4">
        <Shield size={24} className="text-white mb-2" />
        <div className="w-full py-2 px-3 bg-white rounded flex items-center justify-center space-x-2">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          <span className="text-[#111] text-[9px] font-bold">Continue with Google</span>
        </div>
      </div>
    </div>
  </div>
);

const getProjectVisual = (title: string) => {
  if (title === "Compile-Hire") return <CompileHireVisual />;
  if (title === "NoteBook") return <NoteBookVisual />;
  if (title === "Hackathon-Platform") return <HackathonVisual />;
  if (title === "SignUp_project") return <SignUpVisual />;
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
              <div className="w-full lg:w-1/2 aspect-[4/3]">
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
                    {project.links.map((link, i) => (
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
                    ))}
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
