import Link from "next/link";
import { Container } from "./Container";

function CheckBadgeIcon({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#C4A45F]/40 bg-[#C4A45F]/10 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="#C4A45F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

function ServiceItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-3">
      <CheckBadgeIcon className="mt-0.5 shrink-0" />
      <div>
        <p className="font-semibold text-[#102B47]">{title}</p>
        <p className="mt-1 text-sm leading-6 text-[#66717D]">{description}</p>
      </div>
    </li>
  );
}

function ServicesCard({
  title,
  items,
  ctaLabel,
  ctaHref,
  emphasizedBorder = false,
}: {
  title: string;
  items: { title: string; description: string }[];
  ctaLabel: string;
  ctaHref: string;
  emphasizedBorder?: boolean;
}) {
  return (
    <div
      className={[
        "flex h-full flex-col rounded-2xl bg-card p-6 shadow-sm sm:p-8",
        emphasizedBorder
          ? "border-2 border-[#C4A45F]/55"
          : "border border-[#102B47]/10",
      ].join(" ")}
    >
      <h3 className="text-xl font-semibold tracking-tight text-[#102B47] sm:text-2xl">
        {title}
      </h3>
      <ul className="mt-6 flex-1 space-y-5">
        {items.map((item) => (
          <ServiceItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
      <div className="mt-8 pt-2">
        <Link
          href={ctaHref}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#C4A45F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C4A45F]/25"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

export function ComprehensiveTaxSolutionsSection() {
  return (
    <section className="bg-[#0C263F] py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Comprehensive<br className="sm:hidden" />{" "}
            <span className="text-[#D6B96F]">
              Tax Solutions
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85">
            From registration to filing, we handle all your tax and business
            needs with expertise and dedication
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-10">
          <ServicesCard
            emphasizedBorder
            title="Business Registration Services"
            ctaLabel="Explore Registration Services"
            ctaHref="/services"
            items={[
              {
                title: "NTN Registration",
                description:
                  "Quick National Tax Number registration for individuals and businesses",
              },
              {
                title: "Company Registration",
                description:
                  "SECP registration for sole proprietors, AOP firms, and private limited companies",
              },
              {
                title: "Import & Export License",
                description:
                  "Complete documentation and licensing for international trade",
              },
            ]}
          />

          <ServicesCard
            title="Tax Filing & Compliance"
            ctaLabel="View Tax Services"
            ctaHref="/services"
            items={[
              {
                title: "Income Tax Returns",
                description:
                  "Professional tax return filing ensuring FBR compliance and accuracy",
              },
              {
                title: "GST & Sales Tax",
                description:
                  "Complete sales tax registration and monthly/quarterly filing services",
              },
              {
                title: "Tax Audit Support",
                description:
                  "Expert assistance with FBR audits and refund cases",
              },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
