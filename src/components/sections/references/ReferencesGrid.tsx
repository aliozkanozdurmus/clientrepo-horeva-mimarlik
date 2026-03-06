import Reveal from "@/components/ui/Reveal";
import { references } from "@/lib/content";

export default function ReferencesGrid() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {references.map((item) => (
              <div
                key={item.name}
                className="flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-[24px] border border-line/70 bg-background px-6 py-8 text-center"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-muted">
                  {item.category}
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
