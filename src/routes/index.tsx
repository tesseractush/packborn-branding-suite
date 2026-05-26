import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { WhyPackborn } from "@/components/site/WhyPackborn";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { Pricing } from "@/components/site/Pricing";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/components/site/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Industries />
        <WhyPackborn />
        <Portfolio />
        <About />
        <Pricing />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
