import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function ServicesWorkflow() {
  return (
    <section className="bg-mist py-20">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <SectionHeading
            label="İş Akışı"
            title="Takvimi belli, sorumluluğu net bir süreç."
            description="Fuar tarihi yaklaştıkça kararların net olması gerekir. Bu nedenle süreci kısa adımlar ve net teslimlerle yürütürüz."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-[24px] border border-line/70 bg-background p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                  {index + 1}
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

