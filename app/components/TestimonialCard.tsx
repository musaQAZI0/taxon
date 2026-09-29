export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="text-sm leading-6 text-foreground">{quote}</div>
      <div className="mt-4 text-sm font-semibold">{name}</div>
      <div className="text-xs text-muted">{role}</div>
    </div>
  );
}

