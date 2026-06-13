"use client";

import React from "react";

export function ModernFooter() {
  return (
    <footer id="contact" className="w-full flex flex-col items-center justify-center pt-32 pb-12 px-6 md:px-12 z-10 relative border-t border-white/5 mt-32">
      
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Let's build something extraordinary.
        </h2>
        
        <a 
          href="mailto:abhijeet.kumar04@gmail.com" 
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 hover:opacity-80 transition-opacity duration-300 break-words max-w-full leading-none"
        >
          hello@abhijeet.dev
        </a>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-32 text-gray-500 text-sm font-medium">
        <div className="mb-4 md:mb-0">
          © 2026 Abhijeet Kumar
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/Abhijeet-kumar-04" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>

    </footer>
  );
}
