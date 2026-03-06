import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesHero() {
  return (
    <section className="bg-mist py-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          label="Hizmetler"
          title="Tek bir ekiple tasarla, üret, kur."
          description="Fuar standı projelerinde konsept tasarımdan saha kurulumuna kadar tüm süreci tek ekip olarak yürütürüz. Bu sayede hem tasarım dili hem de kalite standardı korunur."
        />
        <div className="relative">
          <Image
            src="/images/services-detail.jpeg"
            alt="Horeva üretim detayları"
            width={900}
            height={800}
            className="h-full w-full rounded-[32px] object-cover"
          />
          <div className="absolute -bottom-6 left-6 rounded-[20px] bg-background px-5 py-3 shadow-[0_20px_50px_-35px_rgba(67,43,32,0.55)]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Teslimat
            </p>
            <p className="text-sm font-semibold">Planlı kurulum</p>
          </div>
        </div>
      </div>
    </section>
  );
}


