import React from "react";
import { GitBranch, Users, BookOpen, Star } from "lucide-react";

export async function GithubStats() {
  let stats = {
    public_repos: 0,
    followers: 0,
    following: 0,
  };

  try {
    // Add next: { revalidate: 3600 } to cache the fetch and avoid rate limits
    const res = await fetch("https://api.github.com/users/Abhijeet-kumar-04", {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      stats = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch Github stats", error);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <GitBranch className="text-white" size={20} />
        <h3 className="text-lg font-bold text-white">GitHub Activity</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4 flex-grow">
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 flex flex-col justify-center items-center">
          <BookOpen className="text-cyan-400 mb-2" size={24} />
          <span className="text-2xl font-bold text-white">{stats.public_repos}</span>
          <span className="text-xs text-gray-400 mt-1">Repositories</span>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 flex flex-col justify-center items-center">
          <Users className="text-purple-400 mb-2" size={24} />
          <span className="text-2xl font-bold text-white">{stats.followers}</span>
          <span className="text-xs text-gray-400 mt-1">Followers</span>
        </div>
      </div>
      
      <a
        href="https://github.com/Abhijeet-kumar-04"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-sm text-center text-gray-400 hover:text-white transition-colors block"
      >
        View full profile →
      </a>
    </div>
  );
}
