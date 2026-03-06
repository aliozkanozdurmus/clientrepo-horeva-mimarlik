import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsCTA() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-6 rounded-[32px] border border-line/70 bg-background px-8 py-12 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Yeni proje
              </p>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Markanız için yeni bir fuar sahnesi tasarlayalım.
              </h2>
              <p className="max-w-xl text-sm text-muted md:text-base">
                Proje takviminiz, hedefleriniz ve stand alanınızla ilgili kısa bir
                bilgi paylaşın, sizin için süreci planlayalım.
              </p>
            </div>
            <Link
              href="/iletisim"
              className={buttonStyles({ variant: "primary", size: "lg" })}
            >
              Teklif iste
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

