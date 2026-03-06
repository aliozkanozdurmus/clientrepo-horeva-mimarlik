import Link from "next/link";
import { contactInfo, navigation, socialLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line/70 bg-mist">
      <div className="mx-auto w-full max-w-6xl gap-10 px-6 py-12 md:grid md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="text-lg font-semibold">Horeva Mimarlık</p>
          <p className="text-sm text-muted">
            Fuar standı tasarımı ve uygulamasında, markaların hikayesini sakin
            ve etkileyici mekanlara dönüştüren butik mimarlık ekibi.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted">
            Sayfalar
          </p>
          <div className="flex flex-col gap-2 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted">
            İletişim
          </p>
          <div className="space-y-2 text-sm">
            <p>{contactInfo.address}</p>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.email}</p>
            <p className="text-muted">{contactInfo.hours}</p>
          </div>
          <div className="flex gap-4 pt-2 text-sm text-muted">
            {socialLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line/60 px-6 py-4 text-xs text-muted">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Horeva Mimarlık. Tüm hakları saklıdır.</span>
          <span>Fuar standı tasarımı ve uygulaması.</span>
        </div>
        <div className="mx-auto mt-2 w-full max-w-6xl">
          <span>
            Bu websitesi Veni AI yapay zeka teknolojileri tarafından
            geliştirilmiştir.{" "}
            <a
              href="https://veniplatform.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              veniplatform.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
