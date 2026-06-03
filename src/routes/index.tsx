import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Designs } from "@/components/site/Designs";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AQ Studio — Premium Tattoo Artistry" },
      { name: "description", content: "AQ Studio is a premium tattoo atelier blending craft, hygiene, and individuality. Book a custom design in Mumbai." },
      { property: "og:title", content: "AQ Studio — Premium Tattoo Artistry" },
      { property: "og:description", content: "Premium tattoo artistry where creativity, hygiene, and individuality come together." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#050505] text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Designs />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
