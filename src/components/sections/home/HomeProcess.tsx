import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function HomeProcess() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          label="Süreç"
          title="Sakin, planlı ve tek akışta ilerleyen bir iş takvimi."
          description="Fuar takviminin hızlı ritmini, kontrollü bir sürece çevirerek hem tasarım hem de uygulamada netlik sağlarız."
        />
        <div className="grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex h-full flex-col gap-3 rounded-[24px] border border-line/70 bg-background p-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                0{index + 1}
              </p>
              <p className="text-base font-semibold text-foreground">
                {step.title}
              </p>
              <p className="text-sm text-muted">{step.detail}</p>
            </div>
          ))}
        </div>
        </div>
      </Reveal>
    </section>
  );
}

