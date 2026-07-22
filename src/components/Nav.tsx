import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/demo-responder", label: "Demo" },
  { to: "/prijzen", label: "Prijzen" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-paper/85 border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" aria-label="Brantomics AI home" onClick={() => setOpen(false)}>
          <Logo size="nav" />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-blue transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-navy text-white text-sm font-semibold px-5 py-2.5 hover:bg-blue transition-colors"
          >
            Gratis starten
          </Link>
        </div>
        <button
          type="button"
          aria-label="Menu openen"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="block w-6 h-0.5 bg-navy" />
          <span className="block w-6 h-0.5 bg-navy" />
          <span className="block w-6 h-0.5 bg-navy" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-paper px-6 py-4 flex flex-col gap-3">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm font-medium text-ink/80">
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-navy text-white text-sm font-semibold px-5 py-2.5"
          >
            Gratis starten
          </Link>
        </div>
      )}
    </header>
  );
}
