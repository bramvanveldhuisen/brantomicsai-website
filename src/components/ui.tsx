import type { ReactNode } from "react";

export function SectionEyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <span className={`block text-xs font-bold uppercase tracking-widest text-blue mb-3 ${center ? "text-center" : ""}`}>
      {children}
    </span>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-ink/85">
      <CheckIcon className="shrink-0 mt-0.5 text-success" />
      <span>{children}</span>
    </li>
  );
}

export function PrimaryButton({
  href,
  children,
  tone = "navy",
  external = false,
}: {
  href: string;
  children: ReactNode;
  tone?: "navy" | "success";
  external?: boolean;
}) {
  const bg = tone === "success" ? "bg-success hover:bg-success/90" : "bg-navy hover:bg-blue";
  const props = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a
      href={href}
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full ${bg} text-white font-semibold px-6 py-3 transition-colors`}
    >
      {children}
    </a>
  );
}

export function OutlineButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/70 text-ink font-semibold px-6 py-3 hover:border-blue/40 transition-colors"
    >
      {children}
    </a>
  );
}

export function PricingCard({
  plan,
  name,
  price,
  period,
  note,
  features,
  cta,
  ctaHref,
  featured = false,
  badge,
  tone = "navy",
}: {
  plan: string;
  name: string;
  price: string;
  period: string;
  note?: ReactNode;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
  tone?: "navy" | "success";
}) {
  const accent = tone === "success" ? "text-success" : "text-blue";
  return (
    <div
      className={`relative rounded-3xl border p-8 bg-white/80 backdrop-blur-sm ${
        featured ? "border-blue/40 shadow-xl shadow-blue/10 md:-translate-y-2" : "border-border"
      }`}
    >
      {badge && (
        <div
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold text-white whitespace-nowrap ${
            tone === "success" ? "bg-success" : "bg-blue"
          }`}
        >
          {badge}
        </div>
      )}
      <div className={`text-xs font-bold uppercase tracking-wide ${accent}`}>{plan}</div>
      <div className="mt-1 text-base font-semibold text-navy">{name}</div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-navy">{price}</span>
        <span className="text-sm text-muted">{period}</span>
      </div>
      {note && <div className="mt-1 text-xs text-muted">{note}</div>}
      <div className="my-6 h-px bg-border" />
      <ul className="space-y-3 mb-8">
        {features.map((f) => (
          <CheckItem key={f}>{f}</CheckItem>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={`w-full inline-flex items-center justify-center rounded-full font-semibold px-5 py-3 transition-colors ${
          featured
            ? tone === "success"
              ? "bg-success text-white hover:bg-success/90"
              : "bg-navy text-white hover:bg-blue"
            : "border border-border text-ink hover:border-blue/40"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}
