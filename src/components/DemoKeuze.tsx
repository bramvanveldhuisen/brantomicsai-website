import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const DEMOS = [
  { to: "/demo-prijsindicatie", label: "Prijsindicatie-systeem" },
  { to: "/demo-responder", label: "E-mails beantwoorden" },
];

/** Korte kop boven een demo, met de knoppen om te wisselen. Zo staat de demo meteen in beeld. */
export function DemoKop({ titel }: { titel: ReactNode }) {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
      <h1 className="text-[clamp(2.25rem,2vw+1.5rem,3.25rem)]">{titel}</h1>
      <nav aria-label="Kies een demo" className="flex flex-wrap gap-2">
        {DEMOS.map((d) => (
          <NavLink
            key={d.to}
            to={d.to}
            className="inline-flex min-h-11 items-center rounded-full border border-rand px-5 font-semibold text-zwart transition-colors duration-200 hover:border-zwart aria-[current=page]:border-zwart aria-[current=page]:bg-zwart aria-[current=page]:text-bot"
          >
            {d.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
