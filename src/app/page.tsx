import { BentoCard } from "@/components/BentoCard";
import { NeuralNetwork3D } from "@/components/NeuralNetwork3D";
import { TerminalBio } from "@/components/TerminalBio";
import { ProjectCard } from "@/components/ProjectCard";
import { GithubStats } from "@/components/GithubStats";
import { AchievementsCard } from "@/components/AchievementsCard";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex items-center justify-center relative z-0 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />

      <div className="w-full max-w-7xl mx-auto relative">
        <header className="mb-8 pl-2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-md">Abhijeet Kumar</h1>
          <p className="text-[#888888] text-sm md:text-base tracking-[0.2em] uppercase font-medium">AI Control Center</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          
          {/* 3D Visualizer - Spans 2x2 */}
          <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 overflow-hidden !p-0 border-cyan-900/30">
            <NeuralNetwork3D />
          </BentoCard>

          {/* Terminal Bio - Spans 2x1 */}
          <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-1 !p-0 overflow-hidden border-gray-700/50">
            <TerminalBio />
          </BentoCard>

          {/* Project 1 */}
          <BentoCard className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 border-purple-900/30 hover:border-purple-500/50 transition-colors">
            <ProjectCard
              title="Compile-Hire"
              description="A scalable recruitment platform matching developers with top companies using smart algorithms."
              techStack={["TypeScript", "Node.js", "Express", "MongoDB"]}
              link="https://github.com/Abhijeet-kumar-04"
            />
          </BentoCard>

          {/* Project 2 */}
          <BentoCard className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 border-blue-900/30 hover:border-blue-500/50 transition-colors">
            <ProjectCard
              title="NoteBook"
              description="A secure and real-time collaborative note-taking application."
              techStack={["React", "Node.js", "WebSockets", "Redis"]}
              link="https://github.com/Abhijeet-kumar-04"
            />
          </BentoCard>

          {/* GitHub Stats */}
          <BentoCard className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 border-gray-700/50">
            <GithubStats />
          </BentoCard>

          {/* Achievements */}
          <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 border-yellow-900/30">
            <AchievementsCard />
          </BentoCard>

        </div>
      </div>
    </main>
  );
}
