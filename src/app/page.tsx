import { BentoCard } from "@/components/BentoCard";
import { NeuralNetwork3D } from "@/components/NeuralNetwork3D";
import { TerminalBio } from "@/components/TerminalBio";
import { ProjectCard } from "@/components/ProjectCard";
import { GithubStats } from "@/components/GithubStats";
import { AchievementsCard } from "@/components/AchievementsCard";
import { Hero } from "@/components/Hero";
import { AcademicTimeline } from "@/components/AcademicTimeline";
import { portfolioData } from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-start relative z-0 overflow-x-hidden">
      {/* Full Page 3D Background */}
      <NeuralNetwork3D />

      {/* Ambient Glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="fixed top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <Hero />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] mt-10">
          
          {/* Terminal Bio - Spans 2 cols */}
          <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 !p-0 overflow-hidden border-gray-700/50">
            <TerminalBio />
          </BentoCard>

          {/* Project 1 */}
          <BentoCard className={`col-span-1 border-purple-900/30 transition-colors`}>
            <ProjectCard
              title={portfolioData.projects[0].title}
              description={portfolioData.projects[0].description}
              techStack={portfolioData.projects[0].techStack}
              link={portfolioData.projects[0].link}
            />
          </BentoCard>

          {/* Project 2 */}
          <BentoCard className={`col-span-1 border-blue-900/30 transition-colors`}>
            <ProjectCard
              title={portfolioData.projects[1].title}
              description={portfolioData.projects[1].description}
              techStack={portfolioData.projects[1].techStack}
              link={portfolioData.projects[1].link}
            />
          </BentoCard>

          {/* GitHub Stats */}
          <BentoCard className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 border-gray-700/50">
            <GithubStats />
          </BentoCard>

          {/* Achievements - Spans 2 cols on md/lg */}
          <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 border-yellow-900/30">
            <AchievementsCard />
          </BentoCard>

        </div>

        {/* Academic Timeline Section */}
        <AcademicTimeline />
        
      </div>
    </main>
  );
}
