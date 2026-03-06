import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileHeader from "@/components/layout/MobileHeader";
import MobileFooter from "@/components/layout/MobileFooter";

const displayFont = Inter({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Horeva Mimarlık",
    template: "%s | Horeva Mimarlık",
  },
  description:
    "Horeva Mimarlık, fuar standı tasarımı ve uygulamasında doğal, zarif ve etkileyici mekanlar üreten bir stüdyodur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen bg-background">
          <div className="hidden md:block">
            <Header />
          </div>
          <div className="md:hidden">
            <MobileHeader />
          </div>
          <main>{children}</main>
          <div className="hidden md:block">
            <Footer />
          </div>
          <div className="md:hidden">
            <MobileFooter />
          </div>
        </div>
      </body>
    </html>
  );
}

