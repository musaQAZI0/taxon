"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

export type TimelineItem = {
  title: string;
  description: string;
  href?: string;
};

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

function ServiceIcon({ index }: { index: number }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  const strokeWidth = 2.5;

  switch (index % 6) {
    case 0:
      // Document
      return (
        <svg {...common}>
          <path
            d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M14 3v4a2 2 0 0 0 2 2h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M8 13h8M8 17h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      );
    case 1:
      // Files
      return (
        <svg {...common}>
          <path
            d="M8 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M4 15V7a2 2 0 0 1 2-2h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9 12h8M9 16h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      );
    case 2:
      // Scales
      return (
        <svg {...common}>
          <path
            d="M12 3v18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7 6h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7 6l-4 7h8L7 6Zm10 0l-4 7h8l-4-7Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M8 21h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      );
    case 3:
      // Calculator
      return (
        <svg {...common}>
          <path
            d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M8 7h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 11h3M13 11h3M8 15h3M13 15h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      );
    case 4:
      // Shield
      return (
        <svg {...common}>
          <path
            d="M12 3l8 4v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V7l8-4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.5l1.8 1.8 3.8-3.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      // Headset (support)
      return (
        <svg {...common}>
          <path
            d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 13v4a2 2 0 0 0 2 2h1v-8H8a2 2 0 0 0-2 2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M18 13v4a2 2 0 0 1-2 2h-1v-8h1a2 2 0 0 1 2 2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function VerticalScrollProgressTimeline({
  id,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  items,
  headerAlign = "left",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: TimelineItem[];
  headerAlign?: "left" | "center";
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rawThresholdsRef = useRef<number[]>(Array(items.length).fill(1));
  const normalizedThresholdsRef = useRef<number[]>(Array(items.length).fill(1));
  const lastScrollYRef = useRef(0);

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(() =>
    Array(items.length).fill(false),
  );
  const [scrollDir, setScrollDir] = useState<"down" | "up">("down");

  const cssVars = useMemo(() => {
    const fill = `${Math.round(progress * 1000) / 10}%`;
    return {
      ["--tv-fill" as never]: fill,
    } as import("react").CSSProperties;
  }, [progress]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;

    const measure = () => {
      const rect = section.getBoundingClientRect();
      const height = Math.max(1, rect.height);

      const raw = itemRefs.current.map((node) => {
        if (!node) return 1;
        const r = node.getBoundingClientRect();
        const centerY = r.top + r.height / 2;
        const normalized = clamp01((centerY - rect.top) / height);
        return normalized;
      });

      rawThresholdsRef.current = raw;

      const first = raw[0] ?? 0;
      const last = raw[Math.max(0, raw.length - 1)] ?? 1;
      const denom = Math.max(1e-6, last - first);
      const norm = raw.map((v) => clamp01((v - first) / denom));
      normalizedThresholdsRef.current = norm;
    };

      const update = () => {
        const rect = section.getBoundingClientRect();
        const viewport = Math.max(1, window.innerHeight);
        const height = Math.max(1, rect.height);

      // Progress advances as a focus-line moves through the section.
      // Normalized to the first/last step so Step 1 appears immediately.
      const focusY = viewport * 0.32;
      const rawProgress = clamp01((focusY - rect.top) / height);

      const raw = rawThresholdsRef.current;
      const first = raw[0] ?? 0;
      const last = raw[Math.max(0, raw.length - 1)] ?? 1;
      const denom = Math.max(1e-6, last - first);
        const p = clamp01((rawProgress - first) / denom);

        setProgress(p);
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollYRef.current) {
          setScrollDir("down");
        } else if (currentScrollY < lastScrollYRef.current) {
          setScrollDir("up");
        }
        lastScrollYRef.current = currentScrollY;

        setVisible((prev) => {
          let changed = false;
          const next = prev.slice();
        const thresholds = normalizedThresholdsRef.current;
        for (let i = 0; i < next.length; i++) {
          const hit = p >= (thresholds[i] ?? 1) - 0.1;
          // Once a card is revealed, keep it visible (no disappearing on scroll up).
          if (!next[i] && hit) {
            next[i] = true;
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        update();
      });
    };

    const onResize = () => {
      measure();
      onScrollOrResize();
    };

    measure();
    update();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onResize);
    };
  }, [items.length]);

  return (
    <section
      id={id}
      ref={(n) => {
        sectionRef.current = n;
      }}
      style={cssVars}
      className="relative overflow-hidden border-y border-border bg-card text-foreground"
    >
      <div className="pointer-events-none absolute inset-0" />

      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
        <div
          className={[
            "max-w-2xl",
            headerAlign === "center" ? "mx-auto text-center" : "",
          ].join(" ")}
        >
          {eyebrow ? (
            <div className="text-xs font-semibold tracking-wider text-brand-700">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-3 text-[clamp(34px,4.5vw,52px)] font-extrabold tracking-tight">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              {description}
            </p>
          ) : null}
          {ctaLabel && ctaHref ? (
            <a
              href={ctaHref}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
            >
              {ctaLabel} <span aria-hidden>→</span>
            </a>
          ) : null}
        </div>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 bottom-0 w-[4px] border border-[#C4A45F] bg-transparent md:left-1/2 md:-translate-x-1/2">
            <div
              className={[
                "absolute left-0 right-0 bg-[#C4A45F] transition-[height] duration-300 ease-out will-change-[height]",
                scrollDir === "down" ? "top-0" : "bottom-0",
              ].join(" ")}
              style={{ height: "var(--tv-fill)" }}
            />
          </div>

          <div className="grid gap-6 md:gap-8">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;
              const cardVisible = visible[index] ?? false;

              return (
                <div
                  key={item.title}
                  ref={(n) => {
                    itemRefs.current[index] = n;
                  }}
                  className="relative"
                >
                  <div className="grid items-start md:grid-cols-12">
                    <div
                      className={[
                        "pl-10 md:pl-0 md:col-span-5",
                        isLeft ? "md:pr-10" : "md:col-start-8 md:pl-10",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "relative min-w-0 rounded-[1.75rem] border border-border bg-card p-5 shadow-sm",
                          "transition-colors duration-200 hover:border-[#C4A45F]/60",
                          cardVisible
                            ? "translate-y-0 opacity-100 shadow-[0_16px_50px_rgba(0,0,0,0.12)]"
                            : "translate-y-3 opacity-0",
                        ].join(" ")}
                      >
                        <div className="flex items-center gap-3">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EEF2F5] text-[#C4A45F] ring-1 ring-black/5">
                            <ServiceIcon index={index} />
                          </div>
                          <div className="text-base font-semibold tracking-tight">
                            {item.title}
                          </div>
                        </div>
                        <div className="mt-3 text-sm leading-6 text-muted">
                          {item.description}
                        </div>
                        <a
                          href={item.href ?? "/services"}
                          className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#C4A45F] transition-colors hover:text-[#A88A4C]"
                        >
                          Learn More <span aria-hidden>{"\u2192"}</span>
                        </a>
                      </div>
                    </div>

                    <div className="relative hidden md:col-span-2 md:block" aria-hidden="true" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
