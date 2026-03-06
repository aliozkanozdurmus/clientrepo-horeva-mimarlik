import Link from "next/link";
import { navigation } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-semibold tracking-wide">
            Horeva Mimarlık
          </span>
          <span className="text-xs uppercase tracking-[0.28em] text-muted">
            Exhibition Studio
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-foreground/80">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
