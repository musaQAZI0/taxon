import { Container } from "./Container";
import { ServicesGridClient } from "./ServicesGridClient";
import { SERVICES } from "./servicesData";

export function ServicesGridSection({
  showIntro = true,
}: {
  showIntro?: boolean;
}) {
  return (
    <section className="bg-card">
      <Container className="py-12 sm:py-16 lg:py-20">
        {showIntro ? (
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold tracking-wider text-[#C4A45F]">
              Our Services
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Comprehensive solutions tailored to your needs.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              Warm neutral &amp; teal theme — clean cards, clear copy,
              and mobile-first layout.
            </p>
          </div>
        ) : null}

        <div className={showIntro ? "mt-10" : ""}>
          <ServicesGridClient services={SERVICES} />
        </div>
      </Container>

      <div className="w-full bg-[#C4A45F] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto w-full max-w-5xl text-center">
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Need Expert Guidance?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Contact our team for personalized consultation and service
            recommendations.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+923001243094"
              className="inline-flex items-center justify-center rounded-xl bg-card px-10 py-3 text-sm font-semibold text-[#C4A45F] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:bg-card/95"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/923001243094"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/80 bg-transparent px-10 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition hover:bg-card/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
