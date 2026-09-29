"use client";

import Link from "next/link";
import { Container } from "./Container";
import { SERVICES_BY_SLUG } from "./servicesData";

function DocIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v4a2 2 0 0 0 2 2h4"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 13h8M8 17h6"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScalesIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 3v18"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M7 6h10"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M7 6l-4 7h8L7 6Zm10 0l-4 7h8l-4-7Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 21h8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path
        d="M8 7h8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M8 11h3M13 11h3M8 15h3M13 15h3"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 4h10a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 8h8M8 12h8M8 16h6"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const featured = [
  {
    slug: "ntn-registration",
    title: "NTN Registration",
    description:
      "Quick and hassle-free National Tax Number registration for individuals and businesses.",
    icon: <DocIcon />,
    highlight: false,
  },
  {
    slug: "bookkeeping-services",
    title: "Bookkeeping Services",
    description:
      "Clean books with monthly reporting — bookkeeping, reconciliation, and finance ops support.",
    icon: <BookIcon />,
    highlight: false,
  },
  {
    slug: "income-tax-returns",
    title: "Tax Returns",
    description:
      "Professional income tax return filing services ensuring accuracy and compliance.",
    icon: <ScalesIcon />,
    highlight: false,
  },
  {
    slug: "sales-tax-returns",
    title: "GST & Sales Tax",
    description:
      "Monthly/periodic sales tax return filing with reconciliation and a clear compliance workflow.",
    icon: <CalculatorIcon />,
    highlight: false,
  },
] as const;

export function HomeServicesCardsSection() {
  const cards = featured.map((f) => {
    const s = SERVICES_BY_SLUG[f.slug];
    return {
      ...f,
      href: s ? (s.href ?? `/services/${s.slug}`) : "/services",
    };
  });

  return (
    <section className="bg-[#0C263F]">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            <span className="text-white">Our</span>{" "}
            <span
              style={{
                color: "#C4A45F",
              }}
            >
              Services
            </span>
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.slug}
              className={[
                "flex min-w-0 flex-col rounded-2xl border bg-card p-7 shadow-sm",
                c.highlight
                  ? "border-[#C4A45F] shadow-[0_16px_44px_rgba(0,0,0,0.10)]"
                  : "border-white/15",
                "transition hover:-translate-y-0.5 hover:border-[#C4A45F] hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)]",
              ].join(" ")}
            >
              <div className="text-[#C4A45F]">{c.icon}</div>
              <div className="mt-6 text-xl font-extrabold tracking-tight text-foreground">
                {c.title}
              </div>
              <div className="mt-3 text-sm leading-6 text-foreground/70">
                {c.description}
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#A88A4C] transition hover:text-[#C4A45F]"
                >
                  Learn More <span aria-hidden>{"\u2192"}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-[#C4A45F] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Explore all services
          </Link>
        </div>
      </Container>
    </section>
  );
}
