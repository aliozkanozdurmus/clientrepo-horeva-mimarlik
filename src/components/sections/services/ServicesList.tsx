import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function ServicesList() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <SectionHeading
            label="Hizmet Paketi"
            title="Marka hikayenizi tek akışta fuara taşıyoruz."
            description="İster yeni bir lansman, ister sürekli katıldığınız bir fuar olsun, standınızı daha sakin, daha net ve daha dikkat çekici bir dile taşıyoruz."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[28px] border border-line/70 bg-sand p-6"
              >
                <p className="text-lg font-semibold text-foreground">
                  {service.title}
                </p>
                <p className="mt-3 text-sm text-muted">{service.description}</p>
                <div className="mt-5 space-y-2 text-sm text-foreground/80">
                  {service.points.map((point) => (
                    <p key={point}>• {point}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

