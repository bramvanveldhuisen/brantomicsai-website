import type { ReactNode } from "react";

export function LegalMeta({ children }: { children: ReactNode }) {
  return <div className="mb-8 rounded-2xl border border-lijn bg-steen px-6 py-5 text-zwart leading-relaxed">{children}</div>;
}

/** Eén artikel: het nummer en de titel als kop, de tekst eronder, gescheiden door een haarlijn. */
export function LegalArticle({ num, title, children }: { num: string; title: string; children: ReactNode }) {
  return (
    <section className="border-t border-lijn pt-6 pb-7">
      <h2 className="text-title mb-4 font-sans font-semibold tracking-normal leading-tight">
        <span className="text-groen-mid">{num}</span> {title}
      </h2>
      <div className="space-y-3 text-zwart leading-relaxed max-w-[68ch]">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2 my-3">
      {items.map((item, i) => (
        <li key={i} className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-vermiljoen">
          {item}
        </li>
      ))}
    </ul>
  );
}
