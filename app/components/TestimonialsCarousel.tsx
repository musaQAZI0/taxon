"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = {
  text: string;
  author: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    text: "Fast, professional, and super clear about documents and deadlines. Filing was smooth.",
    author: "Ayesha K.",
  },
  {
    text: "Our monthly compliance used to be stressful. Now it’s on schedule with clean reporting.",
    author: "Usman A.",
  },
  {
    text: "Very responsive team. They shared a checklist and guided me step-by-step.",
    author: "Hassan R.",
  },
  {
    text: "Clear advice and transparent pricing. I knew exactly what to expect.",
    author: "Sana M.",
  },
  {
    text: "They handled a notice professionally and kept me updated throughout.",
    author: "Bilal S.",
  },
  {
    text: "Bookkeeping is finally organized. Reports are clean and easy to understand.",
    author: "Fatima A.",
  },
  {
    text: "NTN registration process was smooth and quick. Highly recommended.",
    author: "Ali H.",
  },
  {
    text: "Professional, punctual, and supportive. Great overall experience.",
    author: "Zain U.",
  },
];

function StarIcon({
  style,
}: {
  style?: React.CSSProperties & { ["--delay"]?: string };
}) {
  return (
    <svg
      className="star"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      style={style}
      aria-hidden
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TestimonialsCarousel({
  subtitle = "People consistently appreciate our clarity, professionalism, and timely support — from registration to filing and ongoing compliance.",
  sourceLabel = "Source: clients",
  items = DEFAULT_TESTIMONIALS,
}: {
  subtitle?: string;
  sourceLabel?: string;
  items?: Testimonial[];
}) {
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const [sidePadding, setSidePadding] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardWidthRef = useRef(0);
  const containerWidthRef = useRef(0);
  const currentRef = useRef(0);

  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHoveredRef = useRef(false);
  const isSlidingRef = useRef(false);

  const pauseMs = 3000;
  const slideMs = 400;
  const resumeDelayMs = 500;

  const clearTimers = () => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const clearAutoTimers = () => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const computeOffset = () => {
    const cardWidth = cardWidthRef.current;
    const containerWidth = containerWidthRef.current;
    if (!cardWidth || !containerWidth) return;

    const gap = 20;
    const padding = Math.max(0, (containerWidth - cardWidth) / 2);
    const totalWidth = items.length * cardWidth + (items.length - 1) * gap + padding * 2;
    const baseOffset = currentRef.current * (cardWidth + gap);
    const centerOffset = baseOffset - (containerWidth / 2 - cardWidth / 2) + padding;
    const maxOffset = Math.max(0, totalWidth - containerWidth);
    const clamped = Math.min(Math.max(centerOffset, 0), maxOffset);

    setOffset(clamped);
    setSidePadding(padding);
  };

  const schedulePause = () => {
    if (isHoveredRef.current) return;
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => startSlide(1), pauseMs);
  };

  const startSlide = (direction: 1 | -1) => {
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    isSlidingRef.current = true;

    setCurrent((p) => {
      if (direction === -1) return p === 0 ? items.length - 1 : p - 1;
      return (p + 1) % items.length;
    });

    slideTimerRef.current = setTimeout(() => {
      isSlidingRef.current = false;
      if (!isHoveredRef.current) schedulePause();
    }, slideMs);
  };

  const prev = () => {
    clearTimers();
    startSlide(-1);
  };

  const next = () => {
    clearTimers();
    startSlide(1);
  };

  useEffect(() => {
    currentRef.current = current;
    computeOffset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === container) {
          containerWidthRef.current = entry.contentRect.width;
        } else {
          cardWidthRef.current = entry.contentRect.width;
        }
      }
      computeOffset();
    });

    observer.observe(container);
    const firstCard = cardRefs.current[0];
    if (firstCard) observer.observe(firstCard);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    schedulePause();
    return () => clearTimers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isHovered) return;
    clearAutoTimers();
  }, [isHovered]);

  return (
    <section className="tv-testimonials" aria-label="Testimonials">
      <div className="tv-container">
        <h2 className="tv-title">
          What <span className="tv-accent">clients</span> say about Taxon
        </h2>
        <p className="tv-subtitle">{subtitle}</p>

        <div
          className={`tv-row ${isHovered ? "is-hovered" : ""}`}
          ref={containerRef}
          onMouseEnter={() => {
            clearAutoTimers();
            setIsHovered(true);
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            isHoveredRef.current = false;
            if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
            resumeTimerRef.current = setTimeout(() => {
              if (!isSlidingRef.current && !isHoveredRef.current) schedulePause();
            }, resumeDelayMs);
          }}
        >
          <div
            className="tv-track"
            style={{
              transform: `translateX(-${offset}px)`,
              paddingLeft: `${sidePadding}px`,
              paddingRight: `${sidePadding}px`,
            }}
          >
            {items.map((item, idx) => {
              const isActive = idx === current;
              return (
                <div
                  key={`${item.author}-${idx}`}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className={`tv-card ${isActive ? "active" : "faded"}`}
                >
                  <div className="tv-stars" aria-hidden>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} style={{ ["--delay"]: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <p className="tv-text">
                    “ {item.text} ”
                    <span className="tv-source">{sourceLabel}</span>
                  </p>
                  <div className="tv-author">
                    <div className="tv-avatar">{item.author?.[0] ?? "C"}</div>
                    <span className="tv-name">{item.author}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="tv-controls">
          <button type="button" className="tv-btn" onClick={prev} aria-label="Previous testimonial">
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="tv-btn tv-btnPrimary"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <style jsx>{`
        .tv-testimonials {
          padding: 140px 24px 120px;
          background: #0C263F;
          color: #102B47;
          position: relative;
          overflow: hidden;
        }

        .tv-testimonials::before {
          content: none;
        }

        .tv-container {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .tv-label {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
          margin-bottom: 18px;
          color: #C4A45F;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .tv-line {
          flex: 1;
          max-width: 360px;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #C4A45F 50%, transparent 100%);
          opacity: 0.9;
        }

        .tv-title {
          margin: 0;
          font-size: clamp(30px, 4.2vw, 48px);
          font-weight: 800;
          letter-spacing: 0.02em;
          color: #102B47;
        }

        .tv-accent {
          color: #C4A45F;
        }

        .tv-subtitle {
          margin: 12px auto 36px;
          max-width: 900px;
          color: rgba(244,235,221, 0.72);
          line-height: 1.7;
          font-size: 18px;
          font-weight: 400;
        }

        .tv-row {
          position: relative;
          overflow: hidden;
          margin-bottom: 40px;
          padding: 0 20px;
          height: 100%;
        }

        .tv-track {
          display: flex;
          gap: 20px;
          align-items: stretch;
          transition: transform 0.4s ease-in-out;
          will-change: transform;
        }

        .tv-card {
          background: #FFFFFF;
          border: 1px solid rgba(196,164,95, 0.45);
          padding: 32px 28px 34px;
          min-height: 260px;
          display: grid;
          grid-template-rows: auto 1fr auto;
          gap: 16px;
          box-shadow: none;
          flex: 0 0 360px;
          color: #102B47;
          transform: scale(0.95);
          transition: background 0.3s ease-in-out, color 0.3s ease-in-out,
            transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
            border-color 0.3s ease-in-out;
        }

        .tv-card.active {
          background: #C4A45F;
          color: #0C263F;
          border-color: #A88A4C;
          box-shadow: 0 14px 44px rgba(0,0,0, 0.22);
          transform: scale(1);
          z-index: 2;
        }

        .tv-card.faded {
          opacity: 0.82;
        }

        .tv-row.is-hovered .tv-card.active {
          transform: translateY(-5px) scale(1);
          box-shadow: 0 18px 56px rgba(0,0,0, 0.18);
        }

        .tv-stars {
          display: flex;
          gap: 6px;
          justify-content: center;
          color: #C4A45F;
        }

        .tv-card.active .tv-stars {
          color: #0C263F;
        }

        .star {
          opacity: 1;
          transform: scale(0.82);
          transform-origin: center;
        }

        .tv-card.active .star {
          animation: starPop 0.2s ease forwards;
          animation-delay: var(--delay, 0s);
        }

        .tv-text {
          margin: 0;
          line-height: 1.6;
          font-size: 18px;
          color: currentColor;
          align-self: center;
        }

        .tv-source {
          display: block;
          margin-top: 10px;
          font-size: 13px;
          opacity: 0.7;
        }

        .tv-card.active .tv-source {
          opacity: 0.85;
        }

        .tv-author {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          margin-top: auto;
        }

        .tv-avatar {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #EEF2F5;
          color: #C4A45F;
          display: grid;
          place-items: center;
          font-weight: 800;
          letter-spacing: 0.02em;
          border: 1px solid rgba(0,0,0, 0.28);
        }

        .tv-card.active .tv-avatar {
          background: rgba(255, 255, 255, 0.22);
          color: #0C263F;
          border-color: rgba(255, 255, 255, 0.4);
        }

        .tv-name {
          font-weight: 800;
          color: currentColor;
          font-size: 15px;
        }

        .tv-controls {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 6px;
        }

        .tv-btn {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: #FFFFFF;
          color: #102B47;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .tv-btnPrimary {
          background: linear-gradient(
            135deg,
            #C4A45F 0%,
            #A88A4C 55%,
            #C4A45F 100%
          );
          color: #0C263F;
          border: 1px solid transparent;
        }

        .tv-btn:hover {
          transform: translateY(-1px);
          border-color: rgba(0,0,0, 0.5);
        }

        @keyframes starPop {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          70% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 900px) {
          .tv-testimonials {
            padding: 120px 20px 110px;
          }

          .tv-subtitle {
            font-size: 16px;
          }

          .tv-card {
            flex-basis: 340px;
          }
        }

        @media (max-width: 600px) {
          .tv-testimonials {
            padding: 100px 16px 96px;
          }

          .tv-row {
            padding: 0 6px;
          }

          .tv-card {
            flex-basis: 320px;
            padding: 28px 22px 30px;
          }
        }
      `}</style>
    </section>
  );
}
