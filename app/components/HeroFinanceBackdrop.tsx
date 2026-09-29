function FinanceIcon({ type }: { type: "calculator" | "document" | "chart" | "coins" | "shield" }) {
  if (type === "calculator") {
    return (
      <svg viewBox="0 0 48 48" fill="none"><rect x="10" y="5" width="28" height="38" rx="4"/><path d="M16 11h16v8H16zM16 26h3m6 0h3m6 0h-1M16 33h3m6 0h3m6 0h-1"/></svg>
    );
  }
  if (type === "document") {
    return (
      <svg viewBox="0 0 48 48" fill="none"><path d="M12 5h17l7 7v31H12z"/><path d="M29 5v8h7M18 22h12M18 29h12M18 36h8"/></svg>
    );
  }
  if (type === "chart") {
    return (
      <svg viewBox="0 0 48 48" fill="none"><path d="M8 40h34M11 35l9-10 7 5 12-17"/><path d="M31 13h8v8"/></svg>
    );
  }
  if (type === "coins") {
    return (
      <svg viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="13" rx="13" ry="6"/><path d="M11 13v9c0 3 6 6 13 6s13-3 13-6v-9M11 22v9c0 3 6 6 13 6s13-3 13-6v-9"/></svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" fill="none"><path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11z"/><path d="m17 24 5 5 10-11"/></svg>
  );
}

export function HeroFinanceBackdrop() {
  const icons = ["calculator", "document", "chart", "coins", "shield"] as const;

  return (
    <div className="hero-finance-backdrop" aria-hidden="true">
      {icons.map((type, index) => (
        <span className={`hero-finance-icon hero-finance-icon-${index + 1}`} key={type}>
          <FinanceIcon type={type} />
        </span>
      ))}
    </div>
  );
}