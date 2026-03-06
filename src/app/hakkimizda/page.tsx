import type { Metadata } from "next";
import AboutCTA from "@/components/sections/about/AboutCTA";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutValues from "@/components/sections/about/AboutValues";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Horeva Mimarlık, fuar standı tasarımında sakin, sofistike ve uygulamaya hazır mekanlar üreten butik bir stüdyodur.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </>
  );
}

