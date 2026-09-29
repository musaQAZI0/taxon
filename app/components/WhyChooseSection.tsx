"use client";

import Link from "next/link";
import { Container } from "./Container";

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 7L10 17L4 11"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const points = [
  "Expert Tax Consultants",
  "24/7 Chat Support",
  "Competitive Pricing",
  "FBR Compliance",
  "Clear Documentation Checklist",
  "Fast Processing",
] as const;

export function WhyChooseSection() {
  return (
    <section className="bg-[#071C30]">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Why Choose{" "}
              <span className="text-[#C4A45F]">Taxon</span>?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              With years of experience and a team of tax professionals, we
              provide reliable support for tax management and business
              registrations across Pakistan.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-[#C4A45F] bg-[#EEF2F5] text-[#C4A45F]">
                    <CheckIcon />
                  </span>
                  <span className="text-sm font-semibold text-white">{p}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl bg-[#C4A45F] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="rounded-2xl border border-white/10 bg-[#0C263F] p-8">
              <div className="text-lg font-extrabold tracking-tight text-white">
                Fast. Clear. Compliant.
              </div>
              <div className="mt-3 text-sm leading-7 text-white/70">
                We keep the process simple: checklist first, review before
                submission, and clear updates until completion.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
