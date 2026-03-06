import Link from "next/link";
import { contactInfo, navigation, socialLinks } from "@/lib/site";

export default function MobileFooter() {
  return (
    <footer className="mt-20 border-t border-line/70 bg-mist">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
        <div className="space-y-3">
          <p className="text-lg font-semibold">Horeva Mimarlık</p>
          <p className="text-sm text-muted">
            Fuar standı tasarımı ve uygulamasında, markaların hikayesini sakin
            ve etkileyici mekanlara dönüştüren butik mimarlık ekibi.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Sayfalar
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            İletişim
          </p>
          <div className="mt-3 space-y-2 text-sm">
            <p>{contactInfo.address}</p>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.email}</p>
            <p className="text-muted">{contactInfo.hours}</p>
          </div>
          <div className="flex flex-wrap gap-3 pt-3 text-xs text-muted">
            {socialLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line/60 px-6 py-4 text-xs text-muted">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2">
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
