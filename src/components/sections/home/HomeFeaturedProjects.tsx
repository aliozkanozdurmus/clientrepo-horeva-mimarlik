import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import { projects } from "@/lib/content";
import { buttonStyles } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function HomeFeaturedProjects() {
  return (
    <section className="bg-sand py-20">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Projeler"
            title="Fuar sahnesinde sakin ama güçlü bir etki."
            description="Her marka için özel kurgulanan standlarımız, ziyaretçi akışını yavaşlatan ve hikayeyi yakından hissettiren bir mekansal deneyim sunar."
          />
          <Link
            href="/projeler"
            className={buttonStyles({ variant: "outline", size: "md" })}
          >
            Tüm projeler
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        </div>
      </Reveal>
    </section>
  );
}

