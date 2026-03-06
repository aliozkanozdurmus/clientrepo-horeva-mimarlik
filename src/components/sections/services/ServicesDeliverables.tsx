import Reveal from "@/components/ui/Reveal";

const deliverables = [
  "Konsept moodboard + hikaye senaryosu",
  "Fotogerçekçi 3D görüntüler",
  "Teknik çizim ve üretim paketleri",
  "Malzeme ve işçilik spesifikasyonları",
  "Kurulum planı ve saha koordinasyonu",
  "Teslim sonrası detay kontrol listesi",
];

export default function ServicesDeliverables() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Teslimler
            </p>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Projenin her aşamasında ne aldığınız nettir.
            </h2>
            <p className="text-base text-muted md:text-lg">
              Teslim listemiz, hem tasarım onayını hem de uygulama sahasındaki
              kalitenin korunmasını sağlar.
            </p>
          </div>
          <div className="space-y-3 rounded-[28px] border border-line/70 bg-sand p-6">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
