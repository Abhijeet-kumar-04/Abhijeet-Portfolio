import React from "react";
import { Trophy, Award, Code2 } from "lucide-react";

export function AchievementsCard() {
  const achievements = [
    {
      title: "ICPC Regionalist",
      description: "Competitive Programming Milestone",
      icon: <Trophy size={18} className="text-yellow-500" />,
      date: "2023",
    },
    {
      title: "TechM Assessment",
      description: "Top Performer",
      icon: <Award size={18} className="text-cyan-400" />,
      date: "2023",
    },
    {
      title: "ZS Campus Beats",
      description: "Finalist",
      icon: <Code2 size={18} className="text-purple-400" />,
      date: "2023",
    },
    {
      title: "Accenture Hackathon",
      description: "Innovation Award",
      icon: <Award size={18} className="text-green-400" />,
      date: "2024",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-bold text-white mb-4">Milestones & Achievements</h3>
      <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar space-y-4">
        {achievements.map((item, idx) => (
          <div key={idx} className="flex gap-4 items-start relative pb-4 border-b border-gray-800 last:border-0 last:pb-0">
            <div className="p-2 bg-gray-800 rounded-lg">
              {item.icon}
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">{item.title}</h4>
              <p className="text-gray-400 text-xs">{item.description}</p>
            </div>
            <div className="ml-auto text-xs text-gray-500">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
