import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsHero() {
  return (
    <section className="bg-mist py-16">
      <Reveal>
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            label="Projeler"
            title="Her stand, markanın sahnedeki tavrını netleştiren bir hikaye."
            description="Horeva projeleri, ziyaretçiyi içeri alan organik hatlar, doğal malzemeler ve sakin bir ışık dili ile şekillenir."
          />
          <div className="relative">
            <Image
              src="/images/projects-hero.jpeg"
              alt="Fuar standı projesi"
              width={900}
              height={800}
              className="h-full w-full rounded-[32px] object-cover"
            />
            <div className="absolute -bottom-6 left-6 rounded-[20px] bg-background px-5 py-3 shadow-[0_20px_50px_-35px_rgba(67,43,32,0.55)]">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Portföy
              </p>
              <p className="text-sm font-semibold">2023-2025 Seçkisi</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


