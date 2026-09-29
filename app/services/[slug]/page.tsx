import { HeroFinanceBackdrop } from "../../components/HeroFinanceBackdrop";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "../../components/Container";
import { SERVICES, SERVICES_BY_SLUG } from "../../components/servicesData";

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

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = SERVICES_BY_SLUG[params.slug];
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.overview ?? service.description,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES_BY_SLUG[params.slug];
  if (!service) return notFound();

  const keyFeatures =
    service.keyFeatures?.length
      ? service.keyFeatures
      : [
          "Fast processing with clear updates",
          "Complete documentation assistance",
          "FBR-compliant submission",
          "Digital delivery and support",
        ];

  const benefits =
    service.benefits?.length
      ? service.benefits
      : [
          "Stay compliant and reduce risk",
          "Avoid common mistakes and penalties",
          "Save time with a clear checklist",
          "Support for follow-ups when needed",
        ];

  const process = service.processSteps?.length
    ? service.processSteps
    : [
        "Document collection and verification",
        "Online application / submission",
        "Processing and review",
        "Submission / filing confirmation",
        "Digital delivery & support",
      ];

  const docs = service.requiredDocuments?.length
    ? service.requiredDocuments
    : ["CNIC copy", "Contact information", "Proof of address"];

  return (
    <div className="bg-card">
      <section className="relative overflow-hidden bg-[#0C263F] text-white">
        <HeroFinanceBackdrop />

        <Container className="relative py-14 sm:py-20 lg:py-24">
          <div className="flex items-center justify-between">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
            >
              <span aria-hidden>←</span> Back to Services
            </Link>
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <h1
              className="text-4xl font-semibold tracking-tight sm:text-6xl"
              style={{
                textShadow: "0 6px 0 rgba(0,0,0,0.65)",
              }}
            >
              {service.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-white/90 sm:text-lg">
              {service.overview ?? service.description}
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
            {service.overview ?? service.description} We keep the process clear,
            documentation focused, and timelines realistic.
          </p>
        </Container>
      </section>

      <section className="bg-[#0C263F]">
        <Container className="py-12 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
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
            {process.slice(0, 5).map((step, i) => (
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
              {docs.map((d) => (
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
