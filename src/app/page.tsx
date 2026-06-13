import { Navbar } from "@/components/Navbar";
import { ModernHero } from "@/components/ModernHero";
import { ModernAbout } from "@/components/ModernAbout";
import { ModernSkills } from "@/components/ModernSkills";
import { ModernProjects } from "@/components/ModernProjects";
import { ModernFooter } from "@/components/ModernFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col items-center justify-start overflow-x-hidden">
        <ModernHero />
        <ModernAbout />
        <ModernSkills />
        <ModernProjects />
      </main>
      <ModernFooter />
    </>
  );
}
