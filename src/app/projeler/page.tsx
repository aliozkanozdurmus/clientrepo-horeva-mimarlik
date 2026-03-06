import type { Metadata } from "next";
import ProjectsApproach from "@/components/sections/projects/ProjectsApproach";
import ProjectsCTA from "@/components/sections/projects/ProjectsCTA";
import ProjectsGrid from "@/components/sections/projects/ProjectsGrid";
import ProjectsHero from "@/components/sections/projects/ProjectsHero";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Horeva Mimarlık'ın fuar standı projelerinden seçili örnekler ve tasarım yaklaşımı.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsApproach />
      <ProjectsCTA />
    </>
  );
}

