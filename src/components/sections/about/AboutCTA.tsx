import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";

export default function AboutCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-start gap-6 rounded-[32px] border border-line/70 bg-background px-8 py-12 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Horeva ile çalışmak
            </p>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Fuar takviminize uygun, net bir süreç kuralım.
            </h2>
            <p className="max-w-xl text-sm text-muted md:text-base">
              Zaman, alan ve hedeflerinizi paylaşın. Size özel bir konsept
              iş akışı çıkartalım.
            </p>
          </div>
          <Link
            href="/iletisim"
            className={buttonStyles({ variant: "primary", size: "lg" })}
          >
            Görüşme ayarla
          </Link>
        </div>
      </div>
    </section>
  );
}

