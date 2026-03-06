import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function HomeTestimonials() {
  return (
    <section className="bg-mist py-20">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <SectionHeading
            label="Görüşler"
            title="Fuar sahasında sakin güven, geride kalan iz."
            description="Müşterilerimizle kurduğumuz süreç, sadece tasarım değil, aynı zamanda güven ve netlik üzerine kurulu."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="flex h-full flex-col justify-between gap-6 rounded-[28px] border border-line/70 bg-background p-6"
              >
                <p className="text-lg text-foreground">“{item.quote}”</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

