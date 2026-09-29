import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

export function QuickChecklistSection() {
  return (
    <section id="quick-checklist" className="bg-card">
      <Container className="py-12 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold tracking-wider text-[#C4A45F]">
              Quick Checklist
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Everything stays clear from day one.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              A simple checklist + review step so your filing stays accurate and
              stress‑free.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-white/10 bg-card p-6 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <Image
                  src="/taxon-logo-v2.png"
                  alt="Taxon"
                  width={1280}
                  height={1280}
                  className="h-36 w-36 max-w-full object-contain"
                />
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  "Clear checklist of required documents",
                  "Review call before submission",
                  "Monthly compliance reminders",
                  "Secure document handling",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-card px-4 py-3"
                  >
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
                    <div className="text-sm leading-6 text-foreground">{t}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#0C263F] p-5">
                <div className="text-sm font-semibold tracking-tight text-white">
                  Need help choosing a service?
                </div>
                <div className="mt-1 text-sm text-white/70">
                  Tell us your situation and we’ll recommend the best next step.
                </div>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#C4A45F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Message Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
