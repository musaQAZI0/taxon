import { HeroFinanceBackdrop } from "../components/HeroFinanceBackdrop";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "../components/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Taxon — our approach to fast, clear, and compliant tax services.",
};

const values = [
  {
    t: "Client-Centric",
    d: "Your success is our priority. We provide personalized solutions tailored to your needs.",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M16 11a4 4 0 1 0-8 0"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M4 21a8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M20 8.5a3.5 3.5 0 0 0-5.5-2.9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    t: "Accuracy",
    d: "Precision in every filing and registration, ensuring full compliance.",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M12 16a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M12 10v2l2 1"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    t: "Excellence",
    d: "Committed to delivering high-quality tax and consulting services.",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M12 2l3 7 7 .6-5.2 4.5 1.7 7.2L12 17.8 5.5 21.3l1.7-7.2L2 9.6 9 9 12 2Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    t: "Growth",
    d: "Helping individuals and businesses unlock their full financial potential.",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M4 17l6-6 4 4 6-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 9h6v6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-card">
      <section className="relative overflow-hidden bg-[#0C263F] text-white">
        <HeroFinanceBackdrop />

        <Container className="relative py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="inline-block text-white drop-shadow-[0_6px_0_rgba(0,0,0,0.14)]">
                About
              </span>{" "}
              <span className="inline-block text-[#C4A45F] [text-shadow:0_6px_0_rgba(0,0,0,0.55)]">
                Taxon
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
              Your trusted partner for clear checklists, accurate filing, and
              practical tax guidance across Pakistan.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-card px-7 py-3 text-sm font-semibold text-[#C4A45F] shadow-[0_14px_50px_rgba(0,0,0,0.18)] transition hover:bg-card/90"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-card/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-card/15"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-card">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-foreground/70">
              Taxon is built to streamline tax management for individuals and
              businesses. We simplify documentation, reduce confusion, and keep
              your compliance on track with a clear system.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-foreground/70">
              Say goodbye to tax-related stress and hello to a process that is
              fast, accurate, and transparent — with expert support when you need
              it.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-card">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Core Values
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.t}
                className="rounded-2xl border border-white/15 bg-card p-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:border-[#A88A4C] hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)]"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-card text-[#C4A45F]">
                  {v.icon}
                </div>
                <div className="mt-6 text-lg font-extrabold tracking-tight text-foreground">
                  {v.t}
                </div>
                <div className="mt-2 text-sm leading-6 text-foreground/70">
                  {v.d}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-card">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Expert Team
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-foreground/70">
              Our team consists of tax professionals and business consultants with
              hands-on experience in Pakistani tax regulations. We stay updated so
              you get accurate and timely guidance.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              { k: "10+", v: "Years Experience" },
              { k: "5000+", v: "Clients Served" },
              { k: "15+", v: "Services Offered" },
            ].map((s) => (
              <div key={s.v} className="text-center">
                <div className="text-4xl font-extrabold tracking-tight text-[#C4A45F]">
                  {s.k}
                </div>
                <div className="mt-2 text-sm font-semibold text-foreground/70">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-card">
        <div className="w-full bg-[#C4A45F] py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-4xl text-center text-white">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&rsquo;s Work Together
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/90">
                Contact us today to learn how we can help with your tax filing,
                registrations, and compliance needs.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-card px-7 py-3 text-sm font-semibold text-[#C4A45F] shadow-[0_14px_50px_rgba(0,0,0,0.18)] transition hover:bg-card/90"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
