import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";

export default function ServicesCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 rounded-[32px] bg-accent px-8 py-12 text-white md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              Teklif al
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Stand ihtiyacınızı anlatalım.
            </h2>
            <p className="max-w-xl text-sm text-white/80 md:text-base">
              Fuar tarihi, alan büyüklüğü ve hedefinizi paylaşın. Size uygun bir
              tasarım takvimi çıkartalım.
            </p>
          </div>
          <Link
            href="/iletisim"
            className={buttonStyles({ variant: "light", size: "lg" })}
          >
            Hemen yaz
          </Link>
        </div>
      </div>
    </section>
  );
}

