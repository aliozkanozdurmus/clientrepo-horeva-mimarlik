import type { Metadata } from "next";
import ReferencesHero from "@/components/sections/references/ReferencesHero";
import ReferencesGrid from "@/components/sections/references/ReferencesGrid";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description:
    "Horeva Mimarlık'ın fuar standı tasarım ve uygulama süreçlerinde birlikte çalıştığı markalar.",
};

export default function ReferencesPage() {
  return (
    <>
      <ReferencesHero />
      <ReferencesGrid />
    </>
  );
}
