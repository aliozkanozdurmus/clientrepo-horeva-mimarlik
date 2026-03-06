import SectionHeading from "@/components/ui/SectionHeading";
import { videoShowcase } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

type VideoItem = {
  title: string;
  description: string;
  src: string;
};

function VideoCard({
  item,
  emphasis = false,
}: {
  item: VideoItem;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[32px] border border-line/70 ${
        emphasis ? "min-h-[360px] lg:min-h-[460px]" : "min-h-[220px]"
      }`}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={item.title}
      >
        <source src={item.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end gap-2 p-6 text-background">
        <p className="text-xs uppercase tracking-[0.3em] text-background/70">
          Video
        </p>
        <h3 className="text-xl font-semibold md:text-2xl">{item.title}</h3>
        <p className="max-w-md text-sm text-background/80">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function HomeVideoShowcase() {
  const [primary, ...secondary] = videoShowcase;

  return (
    <section className="bg-sand py-20">
      <Reveal>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <SectionHeading
            label="Video"
            title="Mekanın ritmini hareketle hissettiriyoruz."
            description="Kısa video döngüleriyle malzeme dokusunu, dolaşım akışını ve atmosferi daha net görünür kılıyoruz."
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {primary ? <VideoCard item={primary} emphasis /> : null}
            <div className="grid gap-6">
              {secondary.map((item) => (
                <VideoCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
