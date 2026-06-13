import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export function ProjectCard({ title, description, techStack, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full relative p-6 glass rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:border-cyan-500/50"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <ArrowUpRight className="text-gray-500 group-hover:text-cyan-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" size={20} />
      </div>
      <p className="text-sm text-gray-400 mb-6 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
