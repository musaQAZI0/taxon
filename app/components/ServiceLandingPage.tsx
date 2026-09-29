import { HeroFinanceBackdrop } from "./HeroFinanceBackdrop";
import Link from "next/link";
import { Container } from "./Container";

function CheckBadge() {
  return (
    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#C4A45F] bg-[#EEF2F5] text-[#C4A45F]">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M20 7L10 17L4 11"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export type ServiceLandingPageProps = {
  title: string;
  description: string;
  overview: string;
  keyFeatures: string[];
  benefits: string[];
  processSteps: string[];
  requiredDocuments: string[];
  backHref?: string;
  backLabel?: string;
};

export function ServiceLandingPage({
  title,
  description,
  overview,
  keyFeatures,
  benefits,
  processSteps,
  requiredDocuments,
  backHref = "/services",
  backLabel = "Back to Services",
}: ServiceLandingPageProps) {
  return (
    <div className="bg-card">
      <section className="relative overflow-hidden bg-[#0C263F] text-white">
        <HeroFinanceBackdrop />

        <Container className="relative py-14 sm:py-20 lg:py-24">
          <div className="flex items-center justify-between">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
            >
              <span aria-hidden>←</span> {backLabel}
            </Link>
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              <span
                className="inline-block"
                style={{
                  color: "#C4A45F",
                  WebkitTextStroke: "4px #C4A45F",
                  textShadow: "0 10px 0 rgba(0,0,0,0.18)",
                }}
              >
                {title}
              </span>
            </h1>
            <p className="mt-5 text-base leading-7 text-white/90 sm:text-lg">
              {overview || description}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-card">
        <Container className="py-12 sm:py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Overview
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted sm:text-base">
            {overview || description}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/10 bg-card p-8 shadow-sm">
                <div className="text-2xl font-extrabold tracking-tight text-foreground">
                  Key Features
                </div>
                <ul className="mt-6 space-y-3 text-sm text-foreground/80 sm:text-base">
                  {keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckBadge />
                      <span className="leading-6">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/10 bg-card p-8 shadow-sm">
                <div className="text-2xl font-extrabold tracking-tight text-foreground">
                  Benefits
                </div>
                <ul className="mt-6 space-y-3 text-sm text-foreground/80 sm:text-base">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckBadge />
                      <span className="leading-6">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Process
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-5">
            {processSteps.slice(0, 5).map((step, i) => (
              <div key={step} className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C4A45F] text-sm font-bold text-white shadow-sm">
                  {i + 1}
                </div>
                <div className="pt-2 text-sm font-semibold text-foreground sm:text-base">
                  {step}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/923001243094"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#C4A45F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Contact us on WhatsApp
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-card">
        <Container className="py-12 sm:py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Required Documents
          </h2>
          <div className="mt-6 max-w-4xl rounded-[1.75rem] border border-white/10 bg-card p-6 shadow-sm sm:p-8">
            <ul className="space-y-3 text-sm text-foreground sm:text-base">
              {requiredDocuments.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF2F5] text-[#C4A45F]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M20 7L10 17L4 11"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="leading-6">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-[#C4A45F] text-white">
        <Container className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/90 sm:text-base">
              Contact us today to begin your process with expert guidance.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:+923001243094"
                className="inline-flex items-center justify-center rounded-full bg-card px-7 py-3 text-sm font-semibold text-[#C4A45F] transition hover:bg-card/90"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/923001243094"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-card/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-card/15"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

