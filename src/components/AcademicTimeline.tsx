import React from "react";
import { portfolioData } from "@/data";

export function AcademicTimeline() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-20 mb-20">
      <h2 className="text-3xl font-extrabold text-white mb-10 text-center tracking-tight">Academic History</h2>
      
      <div className="relative border-l-2 border-transparent [border-image:linear-gradient(to_bottom,#d946ef,#a855f7)_1] ml-4 md:ml-6 space-y-12">
        {portfolioData.academicHistory.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot/Logo Placeholder */}
            <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full ${item.logoColor} border-4 border-black flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform`}>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            {/* Content */}
            <div className="glass p-6 rounded-2xl group-hover:border-white/20 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                <span className="text-sm font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full w-fit">
                  {item.duration}
                </span>
              </div>
              <h4 className="text-lg text-gray-300 font-medium mb-3">{item.degree}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
