import { EditorialHero } from "@/components/EditorialHero";
import { EditorialJourney } from "@/components/EditorialJourney";
import { EditorialArsenal } from "@/components/EditorialArsenal";
import { EditorialProjects } from "@/components/EditorialProjects";
import { NeuralNetwork3D } from "@/components/NeuralNetwork3D";
import { RevealWrapper } from "@/components/RevealWrapper";
import { CodingProfiles } from "@/components/CodingProfiles";
import { EditorialEducation } from "@/components/EditorialEducation";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start overflow-x-hidden bg-black text-gray-300 font-sans selection:bg-[#D4AF37]/30 selection:text-black">
      
      {/* 0. Full-screen 3D Background */}
      <NeuralNetwork3D />

      {/* Foreground Content */}
      <div className="relative z-10 w-full">
        {/* 1. Hero Section (Cinematic Portrait V2) */}
        <RevealWrapper delay={0}>
          <EditorialHero />
        </RevealWrapper>

        {/* 2. The Journey / Developer Philosophy */}
        <RevealWrapper delay={0.2}>
          <EditorialJourney />
        </RevealWrapper>

        {/* 3. Technical Arsenal */}
        <RevealWrapper delay={0.2}>
          <EditorialArsenal />
        </RevealWrapper>

        {/* 4. Featured Projects */}
        <div id="projects">
          <RevealWrapper delay={0.2}>
            <EditorialProjects />
          </RevealWrapper>
        </div>

        {/* 5. Academic Credentials */}
        <RevealWrapper delay={0.2}>
          <EditorialEducation />
        </RevealWrapper>

        {/* 6. Coding Profiles & Interests */}
        <RevealWrapper delay={0.2}>
          <CodingProfiles />
        </RevealWrapper>
      </div>
      
    </main>
  );
}
