import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ReferencesHero() {
  return (
    <section className="bg-mist py-16">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <SectionHeading
            label="Referanslar"
            title="Fuar sahnesinde birlikte çalıştığımız markalar."
            description="Her iş birliği, markanın hikayesini mekana taşıyan sakin ve etkili bir üretim sürecini temsil eder."
          />
        </div>
      </Reveal>
    </section>
  );
}
