import { HeroFinanceBackdrop } from "./components/HeroFinanceBackdrop";
import Link from "next/link";
import { Container } from "./components/Container";
import { ClientTestimonialsSection } from "./components/ClientTestimonialsSection";
import { HomeServicesCardsSection } from "./components/HomeServicesCardsSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { HomeStatsSection } from "./components/HomeStatsSection";
import { ComprehensiveTaxSolutionsSection } from "./components/ComprehensiveTaxSolutionsSection";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <HeroFinanceBackdrop />

        <Container className="relative flex min-h-[70vh] items-center py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-[0_4px_0_rgba(0,0,0,0.16)] sm:text-6xl lg:text-7xl lg:whitespace-nowrap">
              Unlocking Your{" "}
              <span className="text-[#C4A45F] [text-shadow:0_4px_0_rgba(0,0,0,0.18)]">
                Tax Potential
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
              Taxon is your trusted partner for comprehensive tax management
              solutions in Pakistan. We simplify complex tax processes with
              accuracy and efficiency.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-[#C4A45F] bg-[#C4A45F] px-8 py-3 text-sm font-semibold text-[#0C263F] shadow-[0_10px_30px_rgba(196,164,95,0.2)] transition hover:bg-[#C4A45F]"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-[#C4A45F]/70 bg-transparent px-8 py-3 text-sm font-semibold text-[#C4A45F] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:bg-[#C4A45F]/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <HomeServicesCardsSection />
      <WhyChooseSection />
      <HomeStatsSection />

      <ClientTestimonialsSection />

      <ComprehensiveTaxSolutionsSection />

      <section className="bg-card">
        <div className="w-full bg-brand-800 px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-5xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Ready to{" "}
              <span className="text-accent">
                Get Started?
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
              Contact our expert team today for a free consultation and discover
              how we can help streamline your tax management.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:+923001243094"
                className="inline-flex items-center justify-center rounded-xl bg-card px-8 py-3 text-sm font-semibold text-[#C4A45F] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:bg-card/95"
              >
                Call 0300 1243094
              </a>
              <a
                href="https://wa.me/923001243094"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/70 bg-transparent px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition hover:bg-card/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
