"use client";

import { Container } from "./Container";

function IconUsers() {
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
        d="M16 11a4 4 0 1 0-8 0"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M4 21a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M20 8.5a3.5 3.5 0 0 0-5.5-2.9"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBadge() {
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
        d="M12 2l3 1.5 3 1.5v5c0 4.4-2.8 8.4-6 10-3.2-1.6-6-5.6-6-10V5l3-1.5L12 2Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M10 12l1.6 1.6L14.8 10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDoc() {
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

function IconClock() {
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
        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const stats = [
  { k: "5000+", v: "Happy Clients", icon: <IconUsers /> },
  { k: "15+", v: "Years Experience", icon: <IconBadge /> },
  { k: "10000+", v: "Cases Handled", icon: <IconDoc /> },
  { k: "24/7", v: "Support Available", icon: <IconClock /> },
] as const;

export function HomeStatsSection() {
  return (
    <section className="bg-[#EEF2F5]">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-white/10 bg-card p-8 text-center shadow-sm"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-card text-[#C4A45F]">
                {s.icon}
              </div>
              <div className="mt-6 text-3xl font-extrabold tracking-tight text-foreground">
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
  );
}

