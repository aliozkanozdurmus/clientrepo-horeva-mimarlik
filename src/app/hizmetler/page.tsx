import type { Metadata } from "next";
import ServicesCTA from "@/components/sections/services/ServicesCTA";
import ServicesDeliverables from "@/components/sections/services/ServicesDeliverables";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesList from "@/components/sections/services/ServicesList";
import ServicesSectorShowcase from "@/components/sections/services/ServicesSectorShowcase";
import ServicesWorkflow from "@/components/sections/services/ServicesWorkflow";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Horeva Mimarlık, fuar standı için konsept, 3D tasarım, teknik detay ve kurulum süreçlerini tek ekip olarak yürütür.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesSectorShowcase />
      <ServicesWorkflow />
      <ServicesDeliverables />
      <ServicesCTA />
    </>
  );
}

