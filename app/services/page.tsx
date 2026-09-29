import { HeroFinanceBackdrop } from "../components/HeroFinanceBackdrop";
import type { Metadata } from "next";
import { Container } from "../components/Container";
import { ServicesGridSection } from "../components/ServicesGridSection";

export const metadata: Metadata = {
  title: "Services",
  description: "Taxon services — tax filing, registrations, and advisory.",
};

export default function ServicesPage() {
  return (
    <div className="bg-card">
      <section className="relative overflow-hidden bg-[#0C263F] text-white">
        <HeroFinanceBackdrop />

        <Container className="relative py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">
              <span className="inline-block text-white drop-shadow-[0_6px_0_rgba(0,0,0,0.14)]">
                Our
              </span>{" "}
              <span className="inline-block text-[#C4A45F] [text-shadow:0_6px_0_rgba(0,0,0,0.55)]">
                Services
              </span>
            </h1>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg">
              Comprehensive tax and business solutions tailored to your needs.
            </p>
          </div>
        </Container>
      </section>

      <ServicesGridSection showIntro={false} />
    </div>
  );
}
