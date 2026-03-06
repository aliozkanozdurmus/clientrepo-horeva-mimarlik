import Reveal from "@/components/ui/Reveal";

const team = [
  "Kurucu / Tasarım Direktörü",
  "Üretim ve Saha Yönetimi",
  "3D ve Proje Koordinasyonu",
];

export default function AboutTeam() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Ekip</p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
            Tasarım, üretim ve saha aynı masada.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
            Horeva, her projede aynı ekibin sorumluluk aldığı butik bir yapıdır.
            Bu sayede süreç boyunca iletişim hızlı, kararlar net, uygulama
            güvenlidir.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((role, index) => (
            <div
              key={role}
              className="flex flex-col gap-3 rounded-[28px] border border-line/70 bg-sand p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line/70 text-sm font-semibold text-muted">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="text-sm text-muted">Ekip Rolü</p>
                <p className="text-base font-semibold text-foreground">
                  {role}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </Reveal>
    </section>
  );
}
