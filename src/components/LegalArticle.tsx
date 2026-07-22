import type { ReactNode } from "react";

export function LegalMeta({ children }: { children: ReactNode }) {
  return (
    <div className="text-sm text-muted leading-relaxed rounded-2xl border border-border bg-white/70 backdrop-blur-sm px-6 py-5 mb-12">
      {children}
    </div>
  );
}

export function LegalArticle({ num, title, children }: { num: string; title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-white/80 backdrop-blur-sm px-7 py-6 mb-6">
      <h2 className="flex items-center gap-2.5 text-base font-bold text-navy mb-3.5 pb-3 border-b border-border">
        <span className="text-[11px] font-bold uppercase tracking-wide text-blue bg-blue/10 border border-blue/20 rounded-full px-2.5 py-0.5">
          {num}
        </span>
        {title}
      </h2>
      <div className="space-y-2.5 text-sm text-muted leading-relaxed">{children}</div>
    </div>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-1.5 my-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-muted leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-blue">
          {item}
        </li>
      ))}
    </ul>
  );
}
