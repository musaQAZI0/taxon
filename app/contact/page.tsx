import { HeroFinanceBackdrop } from "../components/HeroFinanceBackdrop";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "../components/Container";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Taxon for tax and compliance support.",
};

export default function ContactPage() {
  return (
    <div className="bg-card">
      <section className="relative overflow-hidden bg-[#0C263F] text-white">
        <HeroFinanceBackdrop />

        <Container className="relative py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              <span
                className="font-extrabold"
                style={{
                  color: "#C4A45F",
                  WebkitTextStroke: "4px #C4A45F",
                  textShadow: "0 6px 0 rgba(0,0,0,0.22)",
                }}
              >
                Contact
              </span>{" "}
              <span className="font-extrabold text-white">Us</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
              Get in touch with our team for tax filing, registrations, and
              compliance support.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-card">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2F5] text-[#C4A45F]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
                          stroke="currentColor"
                          strokeWidth="2.4"
                        />
                        <path
                          d="M12 6v6l4 2"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="text-lg font-extrabold tracking-tight text-foreground">
                      Office Hours
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-foreground/80">
                    10:00 AM – 06:00 PM
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[#A88A4C]">
                    Chat Support 24/7
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2F5] text-[#C4A45F]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                          stroke="currentColor"
                          strokeWidth="2.4"
                        />
                      </svg>
                    </span>
                    <div className="text-lg font-extrabold tracking-tight text-foreground">
                      Our Offices
                    </div>
                  </div>
                  <div className="mt-4 space-y-4 text-sm text-foreground/80">
                    <div>
                      <div className="font-semibold text-foreground">Address</div>
                      <div className="mt-1 text-foreground/70">
                        Hamza Street, Firdous Market, Gulberg 3, Lahore
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <a
                        href="tel:+923001243094"
                        className="mt-1 inline-block text-foreground/70 transition hover:text-foreground"
                      >
                        0300 1243094
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-card p-6 shadow-sm">
                <div className="text-xl font-extrabold tracking-tight text-foreground">
                  Find Us on the Map
                </div>
                <div className="mt-4 grid gap-4">
                  {[
                    { city: "Lahore Office", q: "Hamza%20Street%2C%20Firdous%20Market%2C%20Gulberg%203%2C%20Lahore" },
                  ].map(({ city, q }) => (
                    <div
                      key={city}
                      className="overflow-hidden rounded-xl border border-white/10 bg-card"
                    >
                      <div className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-foreground">
                        {city}
                      </div>
                      <div className="aspect-[16/10] w-full">
                        <iframe
                          title={`Taxon ${city} map`}
                          className="h-full w-full"
                          src={`https://www.google.com/maps?q=${q}&output=embed`}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-card p-6 shadow-sm">
                <div className="text-xl font-extrabold tracking-tight text-foreground">
                  Send a Message
                </div>
                <div className="mt-2 text-sm text-foreground/70">
                  Share your situation and we’ll reply with the best next step.
                </div>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-card p-7 text-center shadow-sm">
              <div className="text-2xl font-extrabold tracking-tight text-foreground">
                Connect With Us
              </div>
              <div className="mt-2 text-sm text-foreground/70">
                Follow us and get in touch.
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  aria-label="Website"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#EEF2F5] text-[#C4A45F] transition hover:bg-[#DCE4EA]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    />
                    <path
                      d="M2 12h20"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 2c2.6 2.7 4 6.2 4 10s-1.4 7.3-4 10c-2.6-2.7-4-6.2-4-10s1.4-7.3 4-10Z"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  aria-label="WhatsApp"
                  href="https://wa.me/923001243094"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#EEF2F5] text-[#C4A45F] transition hover:bg-[#DCE4EA]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M20 12a8 8 0 0 1-12.1 6.9L4 20l1.2-3.6A8 8 0 1 1 20 12Z"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.2 9.7c.4 1.4 1.9 2.9 3.3 3.3l.8-.6c.3-.2.7-.2 1 0l1.2.8c.4.2.5.7.3 1.1-.3.7-1 1.2-1.8 1.2-3.5 0-6.8-3.3-6.8-6.8 0-.8.5-1.5 1.2-1.8.4-.2.9 0 1.1.3l.8 1.2c.2.3.2.7 0 1l-.6.8Z"
                      fill="currentColor"
                      opacity="0.85"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-7 shadow-sm">
              <div className="text-2xl font-extrabold tracking-tight text-foreground">
                Need Immediate Assistance?
              </div>
              <div className="mt-2 text-sm text-foreground/70">
                Contact us on WhatsApp for instant support.
              </div>
              <div className="mt-7">
                <a
                  href="https://wa.me/923001243094"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-[#C4A45F]/40 bg-card px-6 py-3 text-sm font-semibold text-[#C4A45F] transition hover:border-[#C4A45F] hover:bg-[#EEF2F5]"
                >
                  WhatsApp Us Now
                </a>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/services"
                  className="text-sm font-semibold text-[#A88A4C] hover:text-[#C4A45F]"
                >
                  View services
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
