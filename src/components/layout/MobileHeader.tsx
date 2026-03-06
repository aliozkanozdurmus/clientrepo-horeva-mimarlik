"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/site";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-base font-semibold tracking-wide">
            Horeva Mimarlık
          </span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted">
            Exhibition Studio
          </span>
        </Link>
        <button
          type="button"
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line/70 text-foreground transition-colors hover:text-foreground/80"
        >
          <span className="sr-only">
            {open ? "Menüyü kapat" : "Menüyü aç"}
          </span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="mx-auto w-full max-w-6xl border-t border-line/70 px-6 pb-5 pt-4 text-[11px] uppercase tracking-[0.25em] text-muted"
        >
          <div className="flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
