"use client";

import { useMemo, useState } from "react";

const TO_EMAIL = "getinfotaxvision.pk@gmail.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Tax Return Filing");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = `New inquiry — ${service}`;
    const body = [
      `Name: ${name || "-"}`,
      `Phone/WhatsApp: ${phone || "-"}`,
      `Service: ${service || "-"}`,
      "",
      message || "",
    ].join("\n");
    return `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [message, name, phone, service]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
      className="grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-semibold">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-2xl border border-border bg-background px-4 text-sm outline-none"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-semibold">Phone / WhatsApp</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-11 rounded-2xl border border-border bg-background px-4 text-sm outline-none"
            placeholder="+92 3xx xxxxxxx"
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm">
        <span className="font-semibold">Service</span>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="h-11 rounded-2xl border border-border bg-background px-4 text-sm outline-none"
        >
          {[
            "Tax Return Filing",
            "NTN / STRN Registration",
            "Sales Tax Compliance",
            "Bookkeeping & Payroll",
            "Company Registration",
            "Notices & Advisory",
          ].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm">
        <span className="font-semibold">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[120px] rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none"
          placeholder="Tell us what you need help with…"
        />
      </label>

      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-full bg-[#C4A45F] px-6 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        Send Message
      </button>

      <div className="text-xs text-muted">
        Clicking “Send Message” opens your email app with the message prefilled.
      </div>
    </form>
  );
}
