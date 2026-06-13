import { EditorialHero } from "@/components/EditorialHero";
import { EditorialJourney } from "@/components/EditorialJourney";
import { EditorialArsenal } from "@/components/EditorialArsenal";
import { EditorialProjects } from "@/components/EditorialProjects";
import { RevealWrapper } from "@/components/RevealWrapper";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start overflow-x-hidden bg-black text-gray-300 font-sans selection:bg-[#D4AF37]/30 selection:text-black">
      
      {/* 1. Hero Section (Cinematic Portrait) */}
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
      <RevealWrapper delay={0.2}>
        <EditorialProjects />
      </RevealWrapper>
      
    </main>
  );
}
