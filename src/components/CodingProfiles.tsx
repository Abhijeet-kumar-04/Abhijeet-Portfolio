"use client";

import React, { useEffect, useState } from "react";
import { Code2, ExternalLink, Sparkles, Database, Cloud, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface LeetCodeStats {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  contestRating: number;
  topRanking: number;
  globalRanking: number;
  badgeName: string;
}

export function CodingProfiles() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeetCodeData() {
      try {
        const username = "Abhijeet_004";
        // Fetch solved stats
        const solvedRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
        const solvedData = await solvedRes.json();
        
        // Fetch contest stats
        const contestRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`);
        const contestData = await contestRes.json();
        
        // Fetch badges
        const badgesRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/badges`);
        const badgesData = await badgesRes.json();

        // Fetch ranking
        const profileRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}`);
        const profileData = await profileRes.json();

        setStats({
          solvedProblem: solvedData.solvedProblem || 131,
          easySolved: solvedData.easySolved || 95,
          mediumSolved: solvedData.mediumSolved || 34,
          hardSolved: solvedData.hardSolved || 2,
          contestRating: Math.round(contestData.contestRating || 1414),
          topRanking: contestData.contestTopPercentage || 78.31,
          globalRanking: profileData.ranking || 359910,
          badgeName: badgesData?.activeBadge?.displayName || "SQL Top 50"
        });
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
        // Fallback data
        setStats({
          solvedProblem: 131,
          easySolved: 95,
          mediumSolved: 34,
          hardSolved: 2,
          contestRating: 1414,
          topRanking: 78.31,
          globalRanking: 359910,
          badgeName: "SQL Top 50"
        });
      } finally {
        setLoading(false);
      }
    }

    fetchLeetCodeData();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="flex flex-col space-y-12">
        
        {/* Full-Width: Coding Profiles */}
        <div className="flex flex-col space-y-6 w-full">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 rounded-full border border-white/10 bg-white/5 text-[#D4AF37]">
              <Code2 size={20} />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-[#D4AF37]">Coding Profiles</h2>
          </div>

          {/* Massive LeetCode Card */}
          <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.8)] hover:border-white/10 hover:bg-[#0f0f0f]/90 transition-all duration-700 relative overflow-hidden group w-full">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#FFA116] text-xl font-bold border border-white/5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.396.702-1.863l4.332-4.363c.467-.467 1.111-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-7.22 0l-4.332 4.363a5.1 5.1 0 0 0 0 7.29l4.332 4.363a5.055 5.055 0 0 0 7.22 0l2.609-2.636c.514-.515.496-1.366-.039-1.901-.535-.535-1.386-.517-1.9.038zm-6.626-4.662h9.231c.712 0 1.291.579 1.291 1.291s-.579 1.291-1.291 1.291H9.476c-.712 0-1.291-.579-1.291-1.291s.579-1.291 1.291-1.291z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">LeetCode</h3>
                  <p className="text-[10px] md:text-xs text-[#D4AF37] uppercase tracking-wider font-medium">Competitive Programming & Problem Solving</p>
                </div>
              </div>
              <a href="https://leetcode.com/u/Abhijeet_004/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors relative z-10">
                <ExternalLink size={20} />
              </a>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-8 h-8 text-[#D4AF37] animate-spin mb-4" />
                <p className="text-sm text-gray-500 uppercase tracking-widest font-mono">Fetching Live Data...</p>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 relative z-10">
                  <div>
                    <div className="text-4xl md:text-6xl font-serif text-white mb-1">{stats?.solvedProblem}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Total Problems Solved</div>
                  </div>
                  <div className="flex flex-col items-start md:items-end bg-black/40 px-4 py-2 rounded-xl border border-white/5">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Most Recent Badge</span>
                    <span className="text-sm text-white font-medium flex items-center gap-2">
                      <span className="text-[#D4AF37]">🎖️</span> {stats?.badgeName}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
                  <div className="bg-[#050505] rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5 hover:bg-[#111] transition-colors">
                    <span className="text-xl md:text-2xl font-bold text-white">{stats?.contestRating}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-2 text-center">Contest Rating</span>
                  </div>
                  <div className="bg-[#050505] rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5 hover:bg-[#111] transition-colors">
                    <span className="text-xl md:text-2xl font-bold text-white">{stats?.topRanking}%</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-2 text-center">Top Ranking</span>
                  </div>
                  <div className="bg-[#050505] rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5 hover:bg-[#111] transition-colors">
                    <span className="text-xl md:text-2xl font-bold text-teal-400">{stats?.easySolved}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-2 text-center">Easy</span>
                  </div>
                  <div className="bg-[#050505] rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5 hover:bg-[#111] transition-colors">
                    <span className="text-xl md:text-2xl font-bold text-yellow-500">{stats?.mediumSolved}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-2 text-center">Medium</span>
                  </div>
                  <div className="bg-[#050505] rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5 hover:bg-[#111] transition-colors">
                    <span className="text-xl md:text-2xl font-bold text-red-500">{stats?.hardSolved}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-2 text-center">Hard</span>
                  </div>
                  <div className="bg-[#050505] rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5 hover:bg-[#111] transition-colors">
                    <span className="text-xl md:text-2xl font-bold text-white">{stats?.globalRanking?.toLocaleString()}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-2 text-center">Global Rank</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Full-Width: Interests & Focus */}
        <div className="flex flex-col w-full">
          <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.8)] hover:border-white/10 hover:bg-[#0f0f0f]/90 transition-all duration-700 relative overflow-hidden group w-full">
            <div className="absolute inset-0 bg-gradient-to-tl from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]"></div>
            
            <div className="flex items-center space-x-3 mb-10 relative z-10">
              <div className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-300">
                <Sparkles size={20} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-white">Interests & Focus</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              {/* Areas of Interest */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <Database size={16} className="text-[#D4AF37]" />
                  <span className="text-xs uppercase tracking-widest font-bold">Areas of Interest</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Full Stack Development", "Cloud Computing", "DevOps", "Scalable Systems"].map((tag, i) => (
                    <div key={i} className="px-5 py-3 rounded-full border border-white/10 bg-black/40 text-gray-300 text-sm hover:border-white/20 transition-colors cursor-default">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Currently Exploring */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <Cloud size={16} className="text-[#D4AF37]" />
                  <span className="text-xs uppercase tracking-widest font-bold">Currently Exploring</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Kubernetes", "AWS", "System Design", "Production Architecture"].map((tag, i) => (
                    <div key={i} className="px-5 py-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-gray-200 text-sm hover:border-[#D4AF37]/40 transition-colors cursor-default flex items-center gap-2">
                      <span className="text-[#D4AF37] opacity-70">⬡</span>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
