import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function HomeCTA() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-start gap-6 rounded-[32px] bg-accent px-8 py-12 text-white md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Proje görüşmesi
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Fuar standınızı birlikte tasarlayalım.
              </h2>
              <p className="max-w-xl text-sm text-white/80 md:text-base">
                Kısa bir brif paylaşın, size özel konsepte ait ilk taslakları 7
                gün içinde hazırlayalım.
              </p>
            </div>
            <Link
              href="/iletisim"
              className={buttonStyles({ variant: "light", size: "lg" })}
            >
              İletişime geç
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

