import SectionHeading from "@/components/ui/SectionHeading";
import { values } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function AboutValues() {
  return (
    <section className="bg-sand py-20">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <SectionHeading
            label="Değerler"
            title="Duygusal mekana, sade sofistikasyona ve güvenilir sürece inanırız."
            description="Her stand, markanın karakterini yansıtan bir hikaye olmalıdır. Bu hikaye, yalın ama detayları güçlü bir dil ile kurulur."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[28px] border border-line/70 bg-background p-6"
              >
                <p className="text-lg font-semibold text-foreground">
                  {value.title}
                </p>
                <p className="mt-3 text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

