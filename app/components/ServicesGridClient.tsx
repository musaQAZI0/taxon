"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Service } from "./servicesData";

function normalize(text: string) {
  return text.trim().toLowerCase();
}

export function ServicesGridClient({ services }: { services: Service[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return services;
    return services.filter((s) => {
      const hay = `${s.title} ${s.description}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query, services]);

  return (
    <div>
      <div className="mx-auto max-w-2xl">
        <div className="rounded-[1.25rem] border border-white/10 bg-card px-4 py-3 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF2F5] text-[#C4A45F]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.3-4.3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services..."
              className="h-10 w-full bg-transparent text-sm text-[#102B47] outline-none placeholder:text-foreground/50"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <div
            key={s.title}
            className="flex min-w-0 flex-col rounded-2xl border border-white/15 bg-card p-7 text-[#102B47] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)]"
          >
            <div className="text-xl font-extrabold tracking-tight text-foreground">
              {s.title}
            </div>
            <div className="mt-2 text-sm leading-6 text-foreground/70">
              {s.overview ?? s.description}
            </div>
            <div className="mt-auto pt-7">
              <Link
                href={s.href ?? `/services/${s.slug}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C4A45F] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition hover:bg-brand-700 hover:shadow-[0_18px_52px_rgba(0,0,0,0.25)]"
              >
                Learn More <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
