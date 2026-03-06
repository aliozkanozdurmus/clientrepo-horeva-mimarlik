import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const highlights = [
  {
    label: "25+",
    text: "Tamamlanan fuar standı",
  },
  {
    label: "8 yıl",
    text: "Üretim ve saha tecrübesi",
  },
  {
    label: "%100",
    text: "Tek ekip, tek süreç",
  },
];

export default function HomeHeroVisual() {
  return (
    <section className="bg-mist py-20">
      <Reveal>
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative">
            <Image
              src="/images/hero-stand.jpeg"
              alt="Horeva tasarımı organik hatlı fuar standı"
              width={1200}
              height={900}
              className="h-full w-full rounded-[32px] object-cover shadow-[0_40px_80px_-60px_rgba(67,43,32,0.7)]"
              priority
            />
            <div className="absolute -bottom-8 left-6 rounded-[24px] bg-background/90 px-6 py-4 shadow-[0_20px_50px_-30px_rgba(67,43,32,0.6)]">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Odak
              </p>
              <p className="text-base font-semibold">Fuar standı tasarımı</p>
            </div>
          </div>
          <div className="grid gap-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-line/70 bg-sand px-6 py-5"
              >
                <p className="text-2xl font-semibold text-foreground">
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
