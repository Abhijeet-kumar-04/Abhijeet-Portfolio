import React from "react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand */}
        <div className="flex-shrink-0">
          <span className="text-white font-bold text-lg tracking-tight">A.K.</span>
        </div>

        {/* Right: Links & CTA */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            About
          </a>
          <a href="#skills" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Skills
          </a>
          <a href="#work" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Work
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-white border border-white/10 rounded-full hover:bg-white/5 transition-colors"
          >
            Contact
          </a>
        </div>
        
      </div>
    </nav>
  );
}
