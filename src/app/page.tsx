import HomeCTA from "@/components/sections/home/HomeCTA";
import HomeFeaturedProjects from "@/components/sections/home/HomeFeaturedProjects";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeHeroVisual from "@/components/sections/home/HomeHeroVisual";
import HomeProcess from "@/components/sections/home/HomeProcess";
import HomeServices from "@/components/sections/home/HomeServices";
import HomeTestimonials from "@/components/sections/home/HomeTestimonials";
import HomeVideoShowcase from "@/components/sections/home/HomeVideoShowcase";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeHeroVisual />
      <HomeServices />
      <HomeFeaturedProjects />
      <HomeVideoShowcase />
      <HomeProcess />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
}

