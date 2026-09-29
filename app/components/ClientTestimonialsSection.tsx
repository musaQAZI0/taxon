"use client";

import { Container } from "./Container";

type Testimonial = {
  name: string;
  meta: string;
  when: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Hammad Ahmad",
    meta: "4 reviews • 6 photos",
    when: "a month ago",
    rating: 5,
    text: "I registered my company through Taxon and the overall experience was excellent. The team was responsive on WhatsApp, guided me clearly, and delivered documents on time.",
  },
  {
    name: "Sajjad Sajid",
    meta: "2 reviews",
    when: "2 weeks ago",
    rating: 5,
    text: "Wonderful experience. The team is professional and knowledgeable. My work was handled quickly and I’ll definitely use their services again.",
  },
  {
    name: "Akhtar Ali",
    meta: "1 review",
    when: "3 months ago",
    rating: 5,
    text: "Great experience. They were detail-oriented throughout the process, answered my questions patiently, and kept everything efficient and accurate.",
  },
  {
    name: "Muhammad Umer",
    meta: "1 review",
    when: "2 months ago",
    rating: 5,
    text: "Super fast and hassle‑free. The service was professional and I’d recommend them to anyone looking for quick and reliable registration support.",
  },
  {
    name: "Uzair Sarfaraz",
    meta: "Local Guide • 13 reviews • 8 photos",
    when: "2 months ago",
    rating: 5,
    text: "I took assistance for incorporation and everything was handled with care. Communication was great and they guided me step‑by‑step until completion.",
  },
  {
    name: "Aamir Nouman Khan",
    meta: "1 review",
    when: "2 months ago",
    rating: 5,
    text: "From registration to filing, the team was responsive and explained each step in simple terms. The whole process stayed smooth and stress‑free.",
  },
  {
    name: "World Links",
    meta: "1 review",
    when: "3 months ago",
    rating: 5,
    text: "Very professional and smooth process. Excellent client hospitality. Highly recommended.",
  },
  {
    name: "Raja Waqar",
    meta: "2 reviews",
    when: "a month ago",
    rating: 5,
    text: "Great support and quick turnaround. The consultant was professional and resourceful. Wishing the team the best.",
  },
  {
    name: "Ghulam Muhammad",
    meta: "1 review",
    when: "2 months ago",
    rating: 5,
    text: "Thank you for your services. Great work and good coordination. We’ll consider Taxon again to maintain our tax record.",
  },
];

function StarRow({ rating }: { rating: Testimonial["rating"] }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rating;
        return (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 17.3L5.8 20.8l1.2-7L1.8 8.9l7.1-1L12 1.5l3.1 6.4 7.1 1-5.2 4.9 1.2 7z"
              fill={filled ? "#C4A45F" : "rgba(0,0,0,0.12)"}
            />
          </svg>
        );
      })}
    </div>
  );
}

function GoogleMark() {
  return (
    <div className="select-none text-lg font-semibold leading-none">
      <span className="text-[#A88A4C]">G</span>
      <span className="text-[#C4A45F]">o</span>
      <span className="text-[#C4A45F]">o</span>
      <span className="text-[#A88A4C]">g</span>
      <span className="text-[#66717D]">l</span>
      <span className="text-[#C4A45F]">e</span>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-semibold text-foreground">{t.name}</div>
          <div className="mt-1 text-xs text-muted">{t.meta}</div>
        </div>
        <GoogleMark />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <StarRow rating={t.rating} />
        <div className="text-xs text-muted">{t.when}</div>
      </div>

      <p className="mt-4 text-sm leading-6 text-foreground/90">{t.text}</p>
    </div>
  );
}

export function ClientTestimonialsSection() {
  return (
    <section className="bg-[#071C30] py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Client<br className="sm:hidden" />{" "}
            <span className="text-[#D6B96F]">
              Testimonials
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85">
            Read what our valued clients have to say about their experience with
            Taxon.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={`${t.name}-${t.when}`} t={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
