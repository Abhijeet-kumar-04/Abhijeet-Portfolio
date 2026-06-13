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
    <div className="flex flex-col h-full w-full font-mono text-sm sm:text-base">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 bg-gray-900/80 rounded-t-2xl">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center text-gray-400 text-xs gap-2">
          <Terminal size={14} />
          <span>abhijeet@control-center:~</span>
        </div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>

      {/* Terminal Body */}
      <div className="flex-1 p-6 text-gray-300 overflow-y-auto custom-scrollbar">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-green-400">user@abhijeet:~$</span> run init_profile.sh<br/>')
              .pauseFor(500)
              .typeString('> Compiling background... <span class="text-green-400">[Success]</span><br/>')
              .pauseFor(300)
              .typeString('> Identity: Backend Developer & AI/ML Enthusiast<br/>')
              .pauseFor(300)
              .typeString('> Education: B.Tech CSE @ NIT Silchar<br/>')
              .pauseFor(300)
              .typeString('> Core_Stack: [C++, DSA, TypeScript, Node.js, Express, React]<br/>')
              .pauseFor(500)
              .typeString('<br/><span class="text-green-400">user@abhijeet:~$</span> ')
              .callFunction(() => {
                setIsTypingComplete(true);
              })
              .start();
          }}
          options={{
            delay: 40,
            cursor: "",
          }}
        />

        {/* Render Interactive Logs */}
        {isTypingComplete && (
          <div className="mt-2 space-y-2">
            {logs.map((log, idx) => (
              <div key={idx}>
                <div className="text-green-400">user@abhijeet:~$ {log.command}</div>
                <div className="text-gray-400">{log.output}</div>
              </div>
            ))}
            <div className="text-green-400 flex items-center">
              user@abhijeet:~$ <span className="animate-pulse ml-1">_</span>
            </div>
          </div>
        )}
        
        <div ref={bottomRef} />

        {/* Interactive Buttons - fade in after typing */}
        <div
          className={`mt-8 flex flex-wrap gap-3 transition-opacity duration-1000 ${
            isTypingComplete ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="https://github.com/Abhijeet-kumar-04"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCommand("ping github", "Pinging github.com... Reply from 140.82.113.3: bytes=32 time=14ms TTL=52. Opening profile...")}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-green-400 border border-gray-700 rounded transition-colors text-sm"
          >
            [ping github]
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCommand("cat linkedin.md", "Reading linkedin.md... Redirecting to LinkedIn profile...")}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-blue-400 border border-gray-700 rounded transition-colors text-sm"
          >
            [cat linkedin.md]
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCommand("cat resume.pdf", "Extracting resume.pdf... Initiating download/view...")}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-yellow-400 border border-gray-700 rounded transition-colors text-sm"
          >
            [cat resume.pdf]
          </a>
        </div>
      </div>
    </div>
  );
}
