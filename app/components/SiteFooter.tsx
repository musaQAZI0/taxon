import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/tools", label: "Tax Tools" },
  { href: "/blogs", label: "Blogs" },
];

function ClockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-900 text-white">
      <Container className="py-12 sm:py-14">
        <div className="grid grid-cols-3 gap-x-3 gap-y-10 sm:gap-x-8 md:gap-12 lg:grid-cols-4">
          <div className="col-span-3 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
            <Link href="/" className="inline-flex items-center rounded-2xl bg-white p-2 shadow-sm">
              <Image
                src="/taxon-logo-v2.png"
                alt="Taxon"
                width={1280}
                height={1280}
                sizes="112px"
                className="h-28 w-28 object-contain"
              />
            </Link>

            <div className="mt-6 max-w-md text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
              Trusted guidance for tax filing, registrations, and compliance.
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold sm:text-base">Quick Links</div>
            <ul className="mt-4 space-y-2 text-[11px] leading-5 text-white/85 sm:mt-5 sm:space-y-3 sm:text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold sm:text-base">Contact</div>
            <div className="mt-4 space-y-3 text-[10px] leading-5 text-white/90 sm:mt-5 sm:space-y-4 sm:text-sm sm:leading-6">
              <div>
                <a
                  href="tel:+923001243094"
                  className="font-semibold text-white transition hover:text-white/80"
                >
                  0300 1243094
                </a>
              </div>
              <div className="flex gap-1.5 sm:gap-3">
                <span className="mt-0.5 hidden text-white/80 sm:inline" aria-hidden>
                  <ClockIcon />
                </span>
                <div>
                  <div>10:00 AM – 06:00 PM</div>
                  <div className="font-semibold text-[#C4A45F]">
                    Chat Support 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold sm:text-base">Our Offices</div>
            <ul className="mt-4 space-y-3 text-[10px] text-white/90 sm:mt-5 sm:space-y-4 sm:text-sm">
              {[
                "Hamza Street, Firdous Market, Gulberg 3, Lahore",
              ].map((address) => (
                <li key={address} className="flex gap-1.5 sm:gap-3">
                  <span className="mt-0.5 hidden text-[#C4A45F] sm:inline" aria-hidden>
                    <PinIcon />
                  </span>
                  <span className="leading-6">{address}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 text-center text-sm text-white/80">
          © {year} Taxon. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
