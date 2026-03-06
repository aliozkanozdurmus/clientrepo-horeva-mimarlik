import { contactInfo } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function ContactDetails() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Bilgiler
            </p>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Ulaşım detayları
            </h2>
            <p className="text-base text-muted md:text-lg">
              Fuar takviminiz yakınsa, 24 saat içinde geri dönüş sağlıyoruz.
            </p>
            <div className="space-y-2 text-sm text-foreground/80">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
              <p className="text-muted">{contactInfo.hours}</p>
            </div>
          </div>
          <div className="rounded-[28px] border border-line/70 bg-sand p-6">
            <p className="text-sm font-semibold text-foreground">
              Hızlı bilgi
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <p>• Ortalama konsept süreci: 7 gün</p>
              <p>• Üretim ve kurulum: 2-4 hafta</p>
              <p>• Uygulama bölgesi: Türkiye ve yakın Avrupa</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
