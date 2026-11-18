import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { knopPrimair } from "./ui";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/producten", label: "Producten" },
  { to: "/prijsindicatie", label: "Prijsindicatie" },
  { to: "/demo-prijsindicatie", label: "Demo" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/contact", label: "Contact" },
];

const linkStijl =
  "px-3 py-2 whitespace-nowrap text-[0.9375rem] text-grijs transition-colors duration-200 hover:text-zwart " +
  "border-b border-transparent aria-[current=page]:text-zwart aria-[current=page]:border-vermiljoen";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Menu dicht bij elke paginawissel en met Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 bg-bot/80 backdrop-blur-lg text-zwart border-b border-lijn/70">
      <a href="#inhoud" className="absolute left-4 -top-16 z-40 rounded-full bg-zwart px-4 py-2 font-semibold text-bot focus:top-3">
        Naar de inhoud
      </a>
      <nav className="wrap flex h-[4.5rem] items-center justify-between gap-6" aria-label="Hoofdmenu">
        <Link to="/" aria-label="brantomicsAI, naar de homepagina" onClick={() => setOpen(false)} className="shrink-0">
          <Logo size="nav" />
        </Link>
        <div className="hidden lg:flex items-center gap-2">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkStijl}>
              {l.label}
            </NavLink>
          ))}
        </div>
        <Link to="/contact" className={`${knopPrimair} max-lg:hidden`}>
          Plan een gesprek
        </Link>
        <button
          type="button"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex size-12 flex-col items-center justify-center gap-1.5 rounded-full hover:bg-zwart/10 active:bg-zwart/15"
        >
          <span className={`block h-px w-6 bg-zwart transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-zwart transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-zwart transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>
      {open && (
        <div id="mobiel-menu" className="lg:hidden border-t border-lijn bg-bot">
          <div className="wrap flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)} className={`${linkStijl} text-lg py-3 self-start`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className={`${knopPrimair} mt-3`}>
              Plan een gesprek
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
