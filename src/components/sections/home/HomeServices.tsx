import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function HomeServices() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          label="Hizmetler"
          title="Fuar standı için tek ekip, tek dil."
          description="Konsept, 3D tasarım, teknik detay ve kurulum sürecini tek elden yönetir, markanız için sakin ve tutarlı bir mekan kurarız."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col gap-5 rounded-[28px] border border-line/70 bg-background p-6 shadow-[0_30px_60px_-40px_rgba(67,43,32,0.45)]"
            >
              <div>
                <p className="text-xl font-semibold text-foreground">
                  {service.title}
                </p>
                <p className="mt-3 text-sm text-muted">{service.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-foreground/80">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      </Reveal>
    </section>
  );
}

