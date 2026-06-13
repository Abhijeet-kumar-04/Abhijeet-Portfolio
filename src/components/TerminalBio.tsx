"use client";

import React, { useState, useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Terminal } from "lucide-react";

export function TerminalBio() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [logs, setLogs] = useState<{ command: string; output: string }[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new logs are added
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (command: string, output: string) => {
    setLogs((prev) => [...prev, { command, output }]);
  };

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto rounded-xl bg-[#0d1117]/80 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden font-mono text-sm sm:text-base text-gray-300">
      
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-[#161b22]/90 border-b border-white/5 shrink-0">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"></div>
        </div>
        <div className="mx-auto text-xs text-gray-500 tracking-wider flex items-center gap-2">
          <Terminal size={14} />
          &gt;_ abhijeet@control-center:~
        </div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>

      {/* Terminal Body */}
      <div className="flex-1 p-6 md:p-8 space-y-4 overflow-y-auto custom-scrollbar">
        
        {/* Animated Typing Section */}
        <div className="text-gray-300 leading-relaxed">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(30)
                // Simulate running a command
                .typeString('<span class="text-green-400">user@abhijeet:~$</span> ./fetch_profile.sh<br/><br/>')
                .pauseFor(400)
                
                // Outputting the 4 lines
                .typeString('<span class="text-teal-400">Loading modules... [OK]</span><br/>')
                .pauseFor(200)
                .typeString('1. Pursuing B.Tech in Computer Science & Engineering at NIT Silchar.<br/><br/>')
                .pauseFor(300)
                .typeString('2. Passionate about building scalable architectures and intelligent systems.<br/><br/>')
                .pauseFor(300)
                .typeString('3. Specializing in C++, TypeScript, Node.js, and modern web frameworks.<br/><br/>')
                .pauseFor(300)
                .typeString('4. Constantly exploring the intersection of robust backend logic and AI.<br/><br/>')
                .pauseFor(500)
                
                .callFunction(() => setIsTypingComplete(true))
                .start();
            }}
            options={{
              cursor: '█',
              cursorClassName: 'text-gray-500 animate-pulse',
            }}
          />
        </div>

        {/* Render Interactive Logs */}
        {isTypingComplete && (
          <div className="mt-2 space-y-2">
            {logs.map((log, idx) => (
              <div key={idx}>
                <div className="text-green-400">user@abhijeet:~$ {log.command}</div>
                <div className="text-gray-400">{log.output}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Static Prompt & Action Buttons (Appears after typing finishes) */}
        <div 
          className={`transition-opacity duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0 hidden'}`}
        >
          <div className="mt-2 mb-6 text-green-400 flex items-center">
            user@abhijeet:~$ <span className="text-gray-500 animate-pulse ml-1">█</span>
          </div>

          {/* Action Buttons styled as terminal inputs */}
          <div className="flex flex-wrap gap-4 border-t border-white/5 pt-6 mt-4">
            <a 
              href="#projects" 
              onClick={(e) => {
                // Let the anchor work for scrolling, but also log it
                handleCommand("./execute view_work", "Executing view_work... Scrolling to projects section.");
              }}
              className="px-5 py-2.5 bg-teal-500/10 border border-teal-500/30 rounded-md text-teal-400 hover:bg-teal-500/20 hover:border-teal-400 transition-all cursor-pointer font-semibold shadow-[0_0_15px_rgba(45,212,191,0.1)]"
            >
              [execute view_work]
            </a>
            <a 
              href="https://github.com/Abhijeet-kumar-04" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleCommand("ping github", "Pinging github.com... Reply from 140.82.113.3: bytes=32 time=14ms TTL=52. Opening profile...")}
              className="px-5 py-2.5 border border-white/10 rounded-md text-green-400 hover:bg-green-400/10 hover:border-green-400/50 transition-all cursor-pointer"
            >
              [ping github]
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              onClick={() => handleCommand("cat resume.pdf", "Extracting resume.pdf... Initiating download/view...")}
              className="px-5 py-2.5 border border-white/10 rounded-md text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/50 transition-all cursor-pointer"
            >
              [cat resume.pdf]
            </a>
          </div>
        </div>
        
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
