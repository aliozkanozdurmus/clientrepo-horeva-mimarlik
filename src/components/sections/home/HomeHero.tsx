import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";

export default function HomeHero() {
  return (
    <section className="hero-minimal">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-20">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">
          Horeva Mimarlık
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-5xl">
          Fuar standlarını, markanın doğal ritmini anlatan sakin mekanlara
          dönüştürüyoruz.
        </h1>
        <p className="max-w-2xl text-base text-muted md:text-lg">
          Konseptten kuruluma uzanan tam servis yaklaşımımızla, ziyaretçiyi içeri
          alan, akılda kalan ve sofistike bir deneyim tasarlarız.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/iletisim"
            className={buttonStyles({ variant: "primary", size: "lg" })}
          >
            Proje baslatalim
          </Link>
          <Link
            href="/projeler"
            className={buttonStyles({ variant: "outline", size: "lg" })}
          >
            Projeleri incele
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-muted">
          <span className="rounded-full border border-line/70 px-4 py-2">
            Fuar standı tasarımı
          </span>
          <span className="rounded-full border border-line/70 px-4 py-2">
            Tek ekip üretim
          </span>
          <span className="rounded-full border border-line/70 px-4 py-2">
            Sakin deneyim
          </span>
        </div>
      </div>
    </section>
  );
}
