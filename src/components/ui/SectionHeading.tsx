import { cn } from "@/lib/utils";

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {label ? (
        <p className="text-xs uppercase tracking-[0.3em] text-muted">
          {label}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

