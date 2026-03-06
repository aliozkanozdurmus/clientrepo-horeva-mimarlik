import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { sectorShowcase } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function ServicesSectorShowcase() {
  return (
    <section className="bg-mist py-20">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <SectionHeading
            label="Sektörler"
            title="Nonwoven, tekstil ve halı markaları için rafine standlar."
            description="Teknik malzeme, dokulu yüzey ve ürün sergileme gereksinimlerini tek dilde birleştiriyor, sakin ama güçlü bir fuar sahnesi kuruyoruz."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {sectorShowcase.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col overflow-hidden rounded-[28px] border border-line/70 bg-background"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={`${item.title} için fuar standı örneği`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, 90vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
