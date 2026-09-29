"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Container } from "./Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "relative rounded-full px-3 py-2 text-sm font-semibold transition-colors",
        "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#C4A45F] after:transition-transform after:duration-300",
        "hover:after:scale-x-100",
        active
          ? "text-foreground after:scale-x-100"
          : "text-muted hover:text-foreground",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const activeHref = useMemo(() => {
    if (!pathname) return "/";
    return pathname === "/" ? "/" : `/${pathname.split("/").filter(Boolean)[0]}`;
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-brand-900/10 bg-white shadow-[0_8px_24px_rgba(16,43,71,0.10)] transition-transform duration-300 ${
        footerVisible ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/taxon-logo-v2.png"
              alt="Taxon"
              width={1280}
              height={1280}
              sizes="(max-width: 640px) 56px, 64px"
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
              preload
            />
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((l) => (
                <NavLink
                  key={l.href}
                  href={l.href}
                  label={l.label}
                  active={activeHref === l.href}
                />
              ))}
            </nav>

            <Link
              href="/contact"
              className="hidden rounded-full bg-[#C4A45F] px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm transition hover:bg-[#D1B574] md:inline-flex"
            >
              Get a Quote
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <div className="mt-3 rounded-2xl border border-border bg-card p-3 md:hidden">
            <div className="grid gap-1">
              {nav.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                    activeHref === l.href
                      ? "bg-[#EEF2F5] text-foreground"
                      : "text-muted hover:bg-[#EEF2F5] hover:text-foreground",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-1 rounded-xl bg-[#C4A45F] px-3 py-2 text-center text-sm font-semibold text-brand-900 transition hover:bg-[#D1B574]"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
