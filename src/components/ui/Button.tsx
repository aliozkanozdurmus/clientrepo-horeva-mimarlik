import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "border-transparent bg-accent text-white shadow-[0_12px_30px_-18px_rgba(142,64,45,0.8)] hover:bg-accent-strong",
  outline:
    "border-foreground/20 bg-transparent text-foreground hover:border-foreground/40 hover:bg-sand",
  ghost: "border-transparent bg-transparent text-foreground hover:bg-sand",
  light:
    "border-white/40 bg-white/10 text-white hover:border-white/60 hover:bg-white/15",
};

const sizes = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return cn(baseStyles, variants[variant], sizes[size], className);
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}) {
  return (
    <button
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}

