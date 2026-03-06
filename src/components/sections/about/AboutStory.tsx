import Reveal from "@/components/ui/Reveal";

export default function AboutStory() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Hikaye
            </p>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Mekanı sadece görünen değil, hissedilen bir hikayeye dönüştürürüz.
            </h2>
            <p className="text-base text-muted md:text-lg">
              Horeva, fuar sahasında markaların sesi olabilen mekanlar tasarlar.
              Bu yüzden her standımızı, ziyaretçiyi içeri alan, markanın doğal
              karakterini yavaş ama net bir ritimde anlatan bir sahne olarak ele
              alırız.
            </p>
            <p className="text-base text-muted md:text-lg">
              Tasarım, teknik ve uygulama ekiplerimiz aynı masanın etrafında
              çalışır. Bu sayede detaylar sade, süreç kontrollü ve teslim anları
              huzurlu olur.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                label: "Butik ekip",
                text: "Tasarımdan sahaya aynı ekip takip eder.",
              },
              {
                label: "Sade malzeme",
                text: "Ahşap, dokulu metal ve doğal kum tonları.",
              },
              {
                label: "Net takvim",
                text: "Kısa kararlar, hızlı onaylar, temiz kurulum.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-line/70 bg-sand p-5"
              >
                <p className="text-base font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
