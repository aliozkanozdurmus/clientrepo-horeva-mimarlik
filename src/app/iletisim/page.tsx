import type { Metadata } from "next";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import ContactDetails from "@/components/sections/contact/ContactDetails";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactHero from "@/components/sections/contact/ContactHero";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Fuar standı projeniz için Horeva Mimarlık ekibiyle görüşmek için iletişim formu ve detaylar.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <ContactCTA />
    </>
  );
}

