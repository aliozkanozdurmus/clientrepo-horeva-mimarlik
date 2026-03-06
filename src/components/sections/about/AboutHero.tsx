import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutHero() {
  return (
    <section className="bg-mist py-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          label="Hakkımızda"
          title="Fuar standlarını, markanın doğal sesini anlatan sakin bir dile çevirmeyi seviyoruz."
          description="Horeva Mimarlık, butik bir tasarım ve uygulama ekibi olarak fuar standlarında duygusal etkiyi, yalın ama sofistike bir tasarım diliyle birleştirir."
        />
        <div className="relative">
          <Image
            src="/images/about-studio.jpeg"
            alt="Horeva tasarım stüdyosu"
            width={900}
            height={800}
            className="h-full w-full rounded-[32px] object-cover"
          />
          <div className="absolute -bottom-6 right-6 rounded-[20px] bg-background px-5 py-3 shadow-[0_20px_50px_-35px_rgba(67,43,32,0.55)]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Odak
            </p>
            <p className="text-sm font-semibold">Fuar standı tasarımı</p>
          </div>
        </div>
      </div>
    </section>
  );
}


