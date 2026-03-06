import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import { projects } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsGrid() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <SectionHeading
            label="Seçili İşler"
            title="Fuar standı tasarımlarımızdan bir kesit."
            description="Her proje, markanın hedef kitlesi, ürün dili ve fuar alanı ihtiyaçları dikkate alınarak özel olarak tasarlanır."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

