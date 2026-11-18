import { NavLink } from "react-router-dom";

const DEMOS = [
  { to: "/demo-prijsindicatie", label: "Prijsindicatie met foto's" },
  { to: "/demo-responder", label: "E-mails beantwoorden" },
];

/** Wisselt tussen de twee demo's. */
export function DemoKeuze() {
  return (
    <nav aria-label="Kies een demo" className="mb-10 flex flex-wrap gap-2">
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
  );
}
