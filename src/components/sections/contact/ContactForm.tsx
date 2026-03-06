import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function ContactForm() {
  return (
    <section className="bg-mist py-20">
      <Reveal>
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="rounded-[32px] border border-line/70 bg-background p-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Proje formu
              </p>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Kısa bir brif paylaşın.
              </h2>
              <p className="text-base text-muted">
                Stand alanınızı ve hedeflerinizi paylaşın, size en uygun yaklaşımı
                planlayalım.
              </p>
            </div>
            <form className="mt-8 grid gap-6">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-muted">
                  Ad Soyad
                  <input
                    type="text"
                    name="name"
                    className="h-11 rounded-full border border-line/70 bg-background px-4 text-sm text-foreground outline-none transition focus:border-accent"
                    placeholder="Adınız"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-muted">
                  Firma
                  <input
                    type="text"
                    name="company"
                    className="h-11 rounded-full border border-line/70 bg-background px-4 text-sm text-foreground outline-none transition focus:border-accent"
                    placeholder="Firma adı"
                  />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-muted">
                  E-posta
                  <input
                    type="email"
                    name="email"
                    className="h-11 rounded-full border border-line/70 bg-background px-4 text-sm text-foreground outline-none transition focus:border-accent"
                    placeholder="hello@firma.com"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-muted">
                  Fuar tarihi
                  <input
                    type="text"
                    name="date"
                    className="h-11 rounded-full border border-line/70 bg-background px-4 text-sm text-foreground outline-none transition focus:border-accent"
                    placeholder="Ekim 2026"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-muted">
                Stand alanı (m2)
                <input
                  type="text"
                  name="area"
                  className="h-11 rounded-full border border-line/70 bg-background px-4 text-sm text-foreground outline-none transition focus:border-accent"
                  placeholder="80 m2"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-muted">
                Proje notları
                <textarea
                  name="notes"
                  rows={4}
                  className="rounded-[20px] border border-line/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
                  placeholder="Hedefleriniz, ürünleriniz ve beklentileriniz..."
                />
              </label>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted">
                  Formu göndermeden önce size 24 saat içinde geri dönüş sağlarız.
                </p>
                <Button type="submit" size="lg">
                  Gönder
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
