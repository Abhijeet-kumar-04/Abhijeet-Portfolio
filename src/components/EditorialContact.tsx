"use client";

import React from "react";
import { portfolioData } from "@/data";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export function EditorialContact() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-white/5 relative" id="contact">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none rounded-t-[100%]"></div>

      <div className="flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
          Available for Opportunities
        </div>

        <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
          Let's Build Something <br className="hidden md:block" />
          <span className="text-[#D4AF37] italic">Extraordinary.</span>
        </h2>
        
        <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto mb-16">
          Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities and pushing the boundaries of web architecture.
        </p>

        {/* Massive Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-20">
          
          <a href={`mailto:${portfolioData.personalInfo.email}`} className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-[#D4AF37]/50 hover:bg-[#111] transition-all duration-500 overflow-hidden text-left flex flex-col justify-between min-h-[200px] shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-[40px] group-hover:bg-[#D4AF37]/10 transition-colors"></div>
            <Mail size={32} className="text-[#D4AF37] mb-6" />
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Email Me</h3>
              <p className="text-gray-500 text-sm">{portfolioData.personalInfo.email}</p>
            </div>
            <ArrowRight size={20} className="absolute bottom-8 right-8 text-gray-600 group-hover:text-[#D4AF37] transform group-hover:translate-x-2 transition-all duration-300" />
          </a>

          <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/20 hover:bg-[#111] transition-all duration-500 overflow-hidden text-left flex flex-col justify-between min-h-[200px] shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-colors"></div>
            <Github size={32} className="text-white mb-6" />
            <div>
              <h3 className="text-white font-bold text-xl mb-1">GitHub</h3>
              <p className="text-gray-500 text-sm">Explore my open-source work</p>
            </div>
            <ArrowRight size={20} className="absolute bottom-8 right-8 text-gray-600 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-300" />
          </a>

          <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-[#0A66C2]/50 hover:bg-[#111] transition-all duration-500 overflow-hidden text-left flex flex-col justify-between min-h-[200px] shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A66C2]/5 rounded-full blur-[40px] group-hover:bg-[#0A66C2]/10 transition-colors"></div>
            <Linkedin size={32} className="text-[#0A66C2] mb-6" />
            <div>
              <h3 className="text-white font-bold text-xl mb-1">LinkedIn</h3>
              <p className="text-gray-500 text-sm">Connect professionally</p>
            </div>
            <ArrowRight size={20} className="absolute bottom-8 right-8 text-gray-600 group-hover:text-[#0A66C2] transform group-hover:translate-x-2 transition-all duration-300" />
          </a>

        </div>

      </div>

      {/* Footer Minimal */}
      <div className="border-t border-white/5 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm relative z-10">
        <p>© {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Architected with <span className="text-[#D4AF37]">precision.</span></p>
      </div>

    </section>
  );
}
