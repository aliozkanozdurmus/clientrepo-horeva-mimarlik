import Image from "next/image";

export default function ProjectCard({
  title,
  location,
  area,
  year,
  image,
  description,
  tags,
}: {
  title: string;
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-line/70 bg-background">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 30vw, 90vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">{year}</p>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-muted">
          <span className="rounded-full border border-line/70 px-3 py-1">
            {location}
          </span>
          <span className="rounded-full border border-line/70 px-3 py-1">
            {area}
          </span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line/70 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

