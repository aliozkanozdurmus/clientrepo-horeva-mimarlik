import Reveal from "@/components/ui/Reveal";

export default function ContactCTA() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 rounded-[32px] border border-line/70 bg-sand p-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Sonraki adım
              </p>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                48 saat içinde ilk konsept taslağı.
              </h2>
              <p className="text-base text-muted">
                Brifiniz geldikten sonra, size özel konsept yönleri belirleyip
                48 saat içinde ilk taslakları paylaşırız.
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted">
              <p>• Konsept moodboard</p>
              <p>• Malzeme ve renk paleti</p>
              <p>• İlk mekan kurgusu</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
